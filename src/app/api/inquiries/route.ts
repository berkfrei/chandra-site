import { type NextRequest } from 'next/server';
import type { Inquiry } from '@/types';

// ---------------------------------------------------------------------------
// In-memory store for development. Replace with Supabase when connected.
// ---------------------------------------------------------------------------
const inquiries: Inquiry[] = [];

const VALID_SUBJECTS = ['session', 'doula', 'collaboration', 'general'] as const;

// ---------------------------------------------------------------------------
// GET /api/inquiries — list all inquiries
// ---------------------------------------------------------------------------
export async function GET() {
  // TODO: Replace with Supabase query
  // const { data, error } = await supabaseAdmin
  //   .from('inquiries')
  //   .select('*')
  //   .order('created_at', { ascending: false });

  return Response.json({ inquiries });
}

// ---------------------------------------------------------------------------
// POST /api/inquiries — create a new inquiry from the contact form
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // --- Validate required fields -------------------------------------------
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields: name, email, subject, message' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!VALID_SUBJECTS.includes(subject)) {
      return Response.json(
        { error: `Invalid subject. Must be one of: ${VALID_SUBJECTS.join(', ')}` },
        { status: 400 },
      );
    }

    // Basic length check
    if (message.length > 5000) {
      return Response.json({ error: 'Message too long (max 5000 characters)' }, { status: 400 });
    }

    // --- Build inquiry record -----------------------------------------------
    const inquiry: Inquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name,
      email,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // --- Persist inquiry ----------------------------------------------------
    // TODO: Replace with Supabase insert
    // const { data, error } = await supabaseAdmin
    //   .from('inquiries')
    //   .insert(inquiry)
    //   .select()
    //   .single();

    inquiries.push(inquiry);

    // --- Send confirmation email (fire-and-forget) --------------------------
    const emailConfigured = !!process.env.RESEND_API_KEY;
    if (emailConfigured) {
      try {
        const { sendInquiryConfirmation } = await import('@/lib/email');
        await sendInquiryConfirmation({ name, email });
      } catch (err) {
        console.error('[inquiries] Email confirmation error:', err);
      }
    } else {
      console.log('[inquiries] Email not configured — skipping confirmation');
    }

    return Response.json({ inquiry }, { status: 201 });
  } catch (err) {
    console.error('[inquiries] Unexpected error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
