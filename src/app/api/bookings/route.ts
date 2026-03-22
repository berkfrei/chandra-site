import { type NextRequest } from 'next/server';
import type { Booking } from '@/types';
import { defaultContent, sessionTypes } from '@/lib/config';

// ---------------------------------------------------------------------------
// In-memory store for development. Replace with Supabase when connected.
// ---------------------------------------------------------------------------
const bookings: Booking[] = [];

// ---------------------------------------------------------------------------
// GET  /api/bookings — list all bookings
// ---------------------------------------------------------------------------
export async function GET() {
  // TODO: Replace with Supabase query
  // const { data, error } = await supabaseAdmin
  //   .from('bookings')
  //   .select('*')
  //   .order('date', { ascending: true });

  return Response.json({ bookings });
}

// ---------------------------------------------------------------------------
// POST /api/bookings — create a new booking
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // --- Validate required fields -------------------------------------------
    const { clientName, clientEmail, date, time, timezone, sessionType, intakeMessage } = body;

    if (!clientName || !clientEmail || !date || !time || !timezone || !sessionType) {
      return Response.json(
        { error: 'Missing required fields: clientName, clientEmail, date, time, timezone, sessionType' },
        { status: 400 },
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Validate session type
    const validTypes = sessionTypes.map((s) => s.id);
    if (!validTypes.includes(sessionType)) {
      return Response.json(
        { error: `Invalid session type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 },
      );
    }

    // --- Build booking record -----------------------------------------------
    const booking: Booking = {
      id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      clientName,
      clientEmail,
      date,
      time,
      timezone,
      sessionType,
      status: 'pending',
      depositPaid: false,
      intakeMessage: intakeMessage || undefined,
      createdAt: new Date().toISOString(),
    };

    // --- Google Calendar + Meet link (graceful fallback) --------------------
    let meetLink: string | undefined;
    let calendarEventId: string | undefined;

    const googleConfigured =
      process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.GOOGLE_REFRESH_TOKEN;

    if (googleConfigured) {
      try {
        const { createBookingEvent } = await import('@/lib/google');
        const sessionDef = sessionTypes.find((s) => s.id === sessionType);
        const result = await createBookingEvent(process.env.GOOGLE_REFRESH_TOKEN!, {
          clientName,
          clientEmail,
          date,
          time,
          duration: sessionDef?.duration ?? defaultContent.sessionDuration,
          timezone,
        });
        meetLink = result.meetLink ?? undefined;
        calendarEventId = result.eventId ?? undefined;
      } catch (err) {
        console.error('[bookings] Google Calendar error (continuing without):', err);
      }
    } else {
      console.log('[bookings] Google Calendar not configured — skipping event creation');
    }

    booking.meetLink = meetLink;
    booking.calendarEventId = calendarEventId;

    // --- Stripe checkout session (graceful fallback) ------------------------
    let checkoutUrl: string | undefined;

    const stripeConfigured = !!process.env.STRIPE_SECRET_KEY;

    if (stripeConfigured) {
      try {
        const { createDepositCheckout } = await import('@/lib/stripe');
        const origin = request.nextUrl.origin;
        const session = await createDepositCheckout({
          clientName,
          clientEmail,
          bookingId: booking.id,
          amount: defaultContent.depositAmount * 100, // cents
          successUrl: `${origin}/book/confirmation?bookingId=${booking.id}`,
          cancelUrl: `${origin}/book?cancelled=true`,
        });
        checkoutUrl = session.url ?? undefined;
        booking.stripePaymentId = session.payment_intent as string | undefined;
      } catch (err) {
        console.error('[bookings] Stripe error (continuing without):', err);
      }
    } else {
      console.log('[bookings] Stripe not configured — skipping checkout creation');
    }

    // --- Persist booking ----------------------------------------------------
    // TODO: Replace with Supabase insert
    // const { data, error } = await supabaseAdmin
    //   .from('bookings')
    //   .insert(booking)
    //   .select()
    //   .single();

    bookings.push(booking);

    // --- Send notification email (fire-and-forget) --------------------------
    const emailConfigured = !!process.env.RESEND_API_KEY;
    if (emailConfigured) {
      try {
        const { sendBookingNotification } = await import('@/lib/email');
        await sendBookingNotification({ clientName, clientEmail, date, time, timezone });
      } catch (err) {
        console.error('[bookings] Email notification error:', err);
      }
    }

    return Response.json({ booking, checkoutUrl }, { status: 201 });
  } catch (err) {
    console.error('[bookings] Unexpected error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
