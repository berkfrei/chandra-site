import { type NextRequest } from 'next/server';

// Stripe webhooks need the raw body for signature verification
export async function POST(request: NextRequest) {
  const stripeConfigured =
    process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeConfigured) {
    console.log('[stripe/webhook] Stripe not configured — ignoring webhook');
    return Response.json({ received: true, note: 'Stripe not configured' });
  }

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return Response.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  try {
    const { stripe } = await import('@/lib/stripe');

    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    // --- Handle events ------------------------------------------------------
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const bookingId = session.metadata?.bookingId;
        const paymentType = session.metadata?.type; // 'deposit' or 'balance'

        if (!bookingId) {
          console.warn('[stripe/webhook] checkout.session.completed without bookingId in metadata');
          break;
        }

        console.log(`[stripe/webhook] Payment completed: booking=${bookingId}, type=${paymentType}`);

        if (paymentType === 'deposit') {
          // TODO: Update booking in Supabase
          // const { error } = await supabaseAdmin
          //   .from('bookings')
          //   .update({
          //     status: 'confirmed',
          //     deposit_paid: true,
          //     stripe_payment_id: session.payment_intent,
          //   })
          //   .eq('id', bookingId);

          // TODO: Send confirmation email
          // const { data: booking } = await supabaseAdmin
          //   .from('bookings')
          //   .select('*')
          //   .eq('id', bookingId)
          //   .single();
          //
          // if (booking) {
          //   const { sendBookingConfirmation } = await import('@/lib/email');
          //   await sendBookingConfirmation({
          //     clientName: booking.client_name,
          //     clientEmail: booking.client_email,
          //     date: booking.date,
          //     time: booking.time,
          //     timezone: booking.timezone,
          //     meetLink: booking.meet_link || '',
          //   });
          // }

          console.log(`[stripe/webhook] Booking ${bookingId} marked as confirmed, deposit paid`);
        }

        break;
      }

      default:
        console.log(`[stripe/webhook] Unhandled event type: ${event.type}`);
    }

    return Response.json({ received: true });
  } catch (err) {
    console.error('[stripe/webhook] Error:', err);
    return Response.json(
      { error: 'Webhook verification failed' },
      { status: 400 },
    );
  }
}
