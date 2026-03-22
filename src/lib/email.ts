import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'Chandra <hello@chandra.com>';

export async function sendBookingConfirmation(params: {
  clientName: string;
  clientEmail: string;
  date: string;
  time: string;
  timezone: string;
  meetLink: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: params.clientEmail,
    subject: 'Your session is confirmed',
    html: `
      <div style="font-family: Georgia, serif; color: #3A2C27; max-width: 520px; margin: 0 auto; padding: 40px 20px;">
        <p style="font-size: 14px; color: #C08468; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Confirmed</p>
        <h1 style="font-size: 28px; font-weight: 300; margin-bottom: 24px;">Hi ${params.clientName},</h1>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E;">
          Your channeling session has been confirmed. Here are your details:
        </p>
        <div style="background: #FAF7F3; padding: 24px; margin: 24px 0; border-left: 2px solid #C08468;">
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>Date:</strong> ${params.date}</p>
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>Time:</strong> ${params.time} (${params.timezone})</p>
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>Duration:</strong> 60 minutes</p>
          <p style="margin: 0; font-size: 14px;"><strong>Google Meet:</strong> <a href="${params.meetLink}" style="color: #C08468;">${params.meetLink}</a></p>
        </div>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E;">
          No preparation is needed. Just bring yourself — wherever you are, however you are.
        </p>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E; margin-top: 24px;">
          If you need to reschedule, please do so at least 24 hours in advance.
        </p>
        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #EDE6DC;">
          <p style="font-size: 14px; color: #8B7355; font-style: italic;">With warmth,<br>Chandra</p>
        </div>
      </div>
    `,
  });
}

export async function sendBookingNotification(params: {
  clientName: string;
  clientEmail: string;
  date: string;
  time: string;
  timezone: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || 'hello@chandra.com';
  await resend.emails.send({
    from: FROM_EMAIL,
    to: adminEmail,
    subject: `New booking: ${params.clientName}`,
    html: `
      <div style="font-family: sans-serif; color: #3A2C27; padding: 24px;">
        <h2>New Session Booked</h2>
        <p><strong>Client:</strong> ${params.clientName}</p>
        <p><strong>Email:</strong> ${params.clientEmail}</p>
        <p><strong>Date:</strong> ${params.date}</p>
        <p><strong>Time:</strong> ${params.time} (${params.timezone})</p>
      </div>
    `,
  });
}

export async function sendSessionReminder(params: {
  clientName: string;
  clientEmail: string;
  meetLink: string;
  date: string;
  time: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: params.clientEmail,
    subject: 'Your session is tomorrow',
    html: `
      <div style="font-family: Georgia, serif; color: #3A2C27; max-width: 520px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 28px; font-weight: 300; margin-bottom: 24px;">A gentle reminder</h1>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E;">
          Hi ${params.clientName}, your channeling session is tomorrow.
        </p>
        <div style="background: #FAF7F3; padding: 24px; margin: 24px 0; border-left: 2px solid #C08468;">
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>Date:</strong> ${params.date}</p>
          <p style="margin: 0 0 8px; font-size: 14px;"><strong>Time:</strong> ${params.time}</p>
          <p style="margin: 0; font-size: 14px;"><strong>Join:</strong> <a href="${params.meetLink}" style="color: #C08468;">${params.meetLink}</a></p>
        </div>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E;">
          Looking forward to sitting with you.
        </p>
        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #EDE6DC;">
          <p style="font-size: 14px; color: #8B7355; font-style: italic;">Chandra</p>
        </div>
      </div>
    `,
  });
}

export async function sendInquiryConfirmation(params: {
  name: string;
  email: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: params.email,
    subject: 'Thank you for reaching out',
    html: `
      <div style="font-family: Georgia, serif; color: #3A2C27; max-width: 520px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 28px; font-weight: 300; margin-bottom: 24px;">Hi ${params.name},</h1>
        <p style="font-size: 16px; line-height: 1.8; color: #5C4A3E;">
          Thank you for reaching out. I've received your message and will get back to you soon.
        </p>
        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #EDE6DC;">
          <p style="font-size: 14px; color: #8B7355; font-style: italic;">With warmth,<br>Chandra</p>
        </div>
      </div>
    `,
  });
}
