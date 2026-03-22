import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-02-25.clover',
});

// Create a checkout session for a deposit
export async function createDepositCheckout(params: {
  clientName: string;
  clientEmail: string;
  bookingId: string;
  amount: number; // in cents
  successUrl: string;
  cancelUrl: string;
}) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: params.clientEmail,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: '1:1 Channeling Session — Deposit',
            description: `Session deposit for ${params.clientName}`,
          },
          unit_amount: params.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: {
      bookingId: params.bookingId,
      type: 'deposit',
    },
  });

  return session;
}

// Create a payment link for remaining balance
export async function createBalancePayment(params: {
  clientEmail: string;
  bookingId: string;
  amount: number;
  successUrl: string;
  cancelUrl: string;
}) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: params.clientEmail,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: '1:1 Channeling Session — Remaining Balance',
          },
          unit_amount: params.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: {
      bookingId: params.bookingId,
      type: 'balance',
    },
  });

  return session;
}

// Process a refund
export async function refundPayment(paymentIntentId: string) {
  return stripe.refunds.create({
    payment_intent: paymentIntentId,
  });
}
