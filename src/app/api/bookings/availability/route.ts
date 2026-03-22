import { type NextRequest } from 'next/server';
import type { TimeSlot } from '@/types';
import { defaultAvailability, defaultContent } from '@/lib/config';

// ---------------------------------------------------------------------------
// GET /api/bookings/availability?date=YYYY-MM-DD&timezone=America/New_York
// Returns available time slots for the requested date.
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get('date');
  const timezone = searchParams.get('timezone') || 'America/New_York';

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json(
      { error: 'Missing or invalid date param. Expected format: YYYY-MM-DD' },
      { status: 400 },
    );
  }

  // --- Determine day of week ------------------------------------------------
  const dateObj = new Date(`${date}T12:00:00`); // noon to avoid TZ issues
  const dayOfWeek = dateObj.getUTCDay(); // 0=Sunday

  // --- Find matching availability rule --------------------------------------
  // TODO: Replace with Supabase query for custom availability rules
  // const { data: rules } = await supabaseAdmin
  //   .from('availability_rules')
  //   .select('*')
  //   .eq('day_of_week', dayOfWeek)
  //   .eq('enabled', true);

  const rule = defaultAvailability.find(
    (r) => r.dayOfWeek === dayOfWeek && r.enabled,
  );

  if (!rule) {
    return Response.json({ slots: [], message: 'No availability on this day' });
  }

  // --- Check for blocked dates ----------------------------------------------
  // TODO: Replace with Supabase query
  // const { data: blocked } = await supabaseAdmin
  //   .from('blocked_dates')
  //   .select('*')
  //   .eq('date', date);
  // if (blocked && blocked.length > 0) {
  //   return Response.json({ slots: [], message: 'This date is blocked' });
  // }

  // --- Generate time slots from rule ----------------------------------------
  const duration = defaultContent.sessionDuration; // minutes
  const buffer = defaultContent.bufferTime; // minutes
  const slotStep = duration + buffer;

  const [startH, startM] = rule.startTime.split(':').map(Number);
  const [endH, endM] = rule.endTime.split(':').map(Number);
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  const slots: TimeSlot[] = [];

  for (let m = startMinutes; m + duration <= endMinutes; m += slotStep) {
    const hours = Math.floor(m / 60);
    const mins = m % 60;
    const time = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    slots.push({ time, available: true });
  }

  // --- Cross-check with Google Calendar busy times (graceful fallback) ------
  const googleConfigured =
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN;

  if (googleConfigured) {
    try {
      const { getBusyTimes } = await import('@/lib/google');
      const dayStart = `${date}T00:00:00`;
      const dayEnd = `${date}T23:59:59`;
      const busyPeriods = await getBusyTimes(
        process.env.GOOGLE_REFRESH_TOKEN!,
        dayStart,
        dayEnd,
        timezone,
      );

      // Mark slots that overlap with busy periods as unavailable
      for (const slot of slots) {
        const [sh, sm] = slot.time.split(':').map(Number);
        const slotStart = sh * 60 + sm;
        const slotEnd = slotStart + duration;

        for (const busy of busyPeriods) {
          if (!busy.start || !busy.end) continue;
          const busyStart = new Date(busy.start);
          const busyEnd = new Date(busy.end);
          const busyStartMin = busyStart.getHours() * 60 + busyStart.getMinutes();
          const busyEndMin = busyEnd.getHours() * 60 + busyEnd.getMinutes();

          // Overlap check
          if (slotStart < busyEndMin && slotEnd > busyStartMin) {
            slot.available = false;
            break;
          }
        }
      }
    } catch (err) {
      console.error('[availability] Google Calendar error (returning rule-based slots):', err);
      // Slots remain all-available — graceful fallback
    }
  } else {
    console.log('[availability] Google Calendar not configured — returning rule-based slots');
  }

  // --- Cross-check with existing bookings -----------------------------------
  // TODO: Replace with Supabase query for existing bookings on this date
  // const { data: existingBookings } = await supabaseAdmin
  //   .from('bookings')
  //   .select('time')
  //   .eq('date', date)
  //   .in('status', ['pending', 'confirmed']);
  // for (const slot of slots) {
  //   if (existingBookings?.some((b) => b.time === slot.time)) {
  //     slot.available = false;
  //   }
  // }

  return Response.json({ date, timezone, slots });
}
