'use client';

import { useState } from 'react';
import type { Booking } from '@/types';

// ---------------------------------------------------------------------------
// Mock bookings for development
// ---------------------------------------------------------------------------
const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk_1',
    clientName: 'Amara Reyes',
    clientEmail: 'amara@example.com',
    date: '2026-03-25',
    time: '10:00',
    timezone: 'America/New_York',
    sessionType: 'channeling',
    status: 'confirmed',
    depositPaid: true,
    meetLink: 'https://meet.google.com/abc-defg-hij',
    createdAt: '2026-03-20T14:00:00Z',
  },
  {
    id: 'bk_2',
    clientName: 'Lila Chen',
    clientEmail: 'lila@example.com',
    date: '2026-03-27',
    time: '14:00',
    timezone: 'America/Los_Angeles',
    sessionType: 'channeling',
    status: 'pending',
    depositPaid: false,
    createdAt: '2026-03-21T09:30:00Z',
  },
  {
    id: 'bk_3',
    clientName: 'Sage Williams',
    clientEmail: 'sage@example.com',
    date: '2026-03-18',
    time: '11:30',
    timezone: 'America/New_York',
    sessionType: 'channeling',
    status: 'completed',
    depositPaid: true,
    createdAt: '2026-03-10T16:00:00Z',
  },
  {
    id: 'bk_4',
    clientName: 'Jun Tanaka',
    clientEmail: 'jun@example.com',
    date: '2026-03-15',
    time: '10:00',
    timezone: 'America/Chicago',
    sessionType: 'channeling',
    status: 'cancelled',
    depositPaid: false,
    createdAt: '2026-03-08T11:00:00Z',
  },
];

// TODO: Replace with real data fetching
// useEffect(() => {
//   fetch('/api/bookings').then(r => r.json()).then(d => setBookings(d.bookings));
// }, []);

const STATUS_STYLES: Record<Booking['status'], string> = {
  pending: 'bg-gold-light text-brown-deep',
  confirmed: 'bg-sage/20 text-brown-deep',
  cancelled: 'bg-terracotta-light/30 text-terracotta',
  completed: 'bg-sand text-brown-warm',
};

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatTime(time: string) {
  const [h, m] = time.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`;
}

export default function AdminBookings() {
  const [bookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [notesOpen, setNotesOpen] = useState<string | null>(null);
  const [notesText, setNotesText] = useState<Record<string, string>>({});

  function handleSaveNotes(bookingId: string) {
    // TODO: POST notes to API / Supabase
    // await supabaseAdmin
    //   .from('bookings')
    //   .update({ notes: notesText[bookingId] })
    //   .eq('id', bookingId);
    console.log(`Saving notes for ${bookingId}:`, notesText[bookingId]);
    setNotesOpen(null);
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-light text-brown-deep">Bookings</h1>

      <div className="overflow-x-auto rounded-lg border border-sand bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-sand bg-cream text-left">
              <th className="px-4 py-3 font-medium text-brown-mid">Date</th>
              <th className="px-4 py-3 font-medium text-brown-mid">Time</th>
              <th className="px-4 py-3 font-medium text-brown-mid">Client</th>
              <th className="px-4 py-3 font-medium text-brown-mid">Status</th>
              <th className="px-4 py-3 font-medium text-brown-mid">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <>
                <tr key={booking.id} className="border-b border-sand/60 last:border-b-0">
                  <td className="px-4 py-3 text-brown-deep">{formatDate(booking.date)}</td>
                  <td className="px-4 py-3 text-brown-deep">{formatTime(booking.time)}</td>
                  <td className="px-4 py-3">
                    <div className="text-brown-deep">{booking.clientName}</div>
                    <div className="text-xs text-brown-mid">{booking.clientEmail}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[booking.status]}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        setNotesOpen(notesOpen === booking.id ? null : booking.id)
                      }
                      className="text-xs text-brown-mid underline decoration-sand underline-offset-2 transition-colors hover:text-brown-deep"
                    >
                      {notesOpen === booking.id ? 'Close' : 'Add Notes'}
                    </button>
                    {booking.meetLink && (
                      <a
                        href={booking.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-xs text-sage-muted underline decoration-sage/30 underline-offset-2 hover:text-brown-deep"
                      >
                        Meet link
                      </a>
                    )}
                  </td>
                </tr>
                {notesOpen === booking.id && (
                  <tr key={`${booking.id}-notes`} className="border-b border-sand/60">
                    <td colSpan={5} className="bg-cream/50 px-4 py-3">
                      <textarea
                        value={notesText[booking.id] ?? booking.notes ?? ''}
                        onChange={(e) =>
                          setNotesText({ ...notesText, [booking.id]: e.target.value })
                        }
                        placeholder="Session notes..."
                        rows={3}
                        className="mb-2 w-full rounded border border-sand bg-white px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
                      />
                      <button
                        onClick={() => handleSaveNotes(booking.id)}
                        className="rounded bg-brown-deep px-3 py-1.5 text-xs text-cream transition-colors hover:bg-brown-warm"
                      >
                        Save Notes
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
