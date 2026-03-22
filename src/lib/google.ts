import { google } from 'googleapis';

const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
];

function getAuth() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
}

export function getAuthUrl() {
  const auth = getAuth();
  return auth.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
}

export async function getCalendarClient(refreshToken: string) {
  const auth = getAuth();
  auth.setCredentials({ refresh_token: refreshToken });
  return google.calendar({ version: 'v3', auth });
}

// Create a calendar event with Google Meet link
export async function createBookingEvent(
  refreshToken: string,
  booking: {
    clientName: string;
    clientEmail: string;
    date: string;
    time: string;
    duration: number;
    timezone: string;
  }
) {
  const calendar = await getCalendarClient(refreshToken);

  const startDateTime = `${booking.date}T${booking.time}:00`;
  const endDate = new Date(`${startDateTime}`);
  endDate.setMinutes(endDate.getMinutes() + booking.duration);
  const endDateTime = endDate.toISOString().replace('Z', '');

  const event = await calendar.events.insert({
    calendarId: 'primary',
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Channeling Session — ${booking.clientName}`,
      description: `1:1 Channeling Session with ${booking.clientName}\n\nBooked via chandra.com`,
      start: {
        dateTime: startDateTime,
        timeZone: booking.timezone,
      },
      end: {
        dateTime: endDateTime,
        timeZone: booking.timezone,
      },
      attendees: [{ email: booking.clientEmail }],
      conferenceData: {
        createRequest: {
          requestId: `chandra-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 15 },
        ],
      },
    },
  });

  return {
    eventId: event.data.id,
    meetLink: event.data.conferenceData?.entryPoints?.[0]?.uri || null,
    htmlLink: event.data.htmlLink,
  };
}

// Check busy times for a given date range
export async function getBusyTimes(
  refreshToken: string,
  dateMin: string,
  dateMax: string,
  timezone: string
) {
  const calendar = await getCalendarClient(refreshToken);

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: dateMin,
      timeMax: dateMax,
      timeZone: timezone,
      items: [{ id: 'primary' }],
    },
  });

  return response.data.calendars?.primary?.busy || [];
}

// Cancel a calendar event
export async function cancelBookingEvent(
  refreshToken: string,
  eventId: string
) {
  const calendar = await getCalendarClient(refreshToken);
  await calendar.events.delete({
    calendarId: 'primary',
    eventId,
  });
}
