'use client';

import { useState } from 'react';
import type { Inquiry } from '@/types';

// ---------------------------------------------------------------------------
// Mock inquiries for development
// ---------------------------------------------------------------------------
const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: 'inq_1',
    name: 'Sasha Patel',
    email: 'sasha@example.com',
    subject: 'session',
    message:
      'Hi Chandra, I have been feeling called to explore channeling for a while now. I am going through a major life transition and would love to connect. Is there anything I should know before booking?',
    status: 'new',
    createdAt: '2026-03-21T08:30:00Z',
  },
  {
    id: 'inq_2',
    name: 'Deva Robinson',
    email: 'deva@example.com',
    subject: 'doula',
    message:
      'I am expecting my first child in July and would love to learn more about your doula support offerings. Do you offer packages or ongoing support?',
    status: 'new',
    createdAt: '2026-03-20T15:00:00Z',
  },
  {
    id: 'inq_3',
    name: 'Marisol Diaz',
    email: 'marisol@example.com',
    subject: 'collaboration',
    message:
      'I run a small wellness retreat space in Ojai and would love to explore hosting a day retreat together. Would you be open to chatting?',
    status: 'replied',
    createdAt: '2026-03-15T12:00:00Z',
  },
  {
    id: 'inq_4',
    name: 'Thomas Reed',
    email: 'thomas@example.com',
    subject: 'general',
    message: 'Love your Substack writing. Just wanted to say thank you.',
    status: 'closed',
    createdAt: '2026-03-10T09:00:00Z',
  },
];

// TODO: Replace with real data fetching
// useEffect(() => {
//   fetch('/api/inquiries').then(r => r.json()).then(d => setInquiries(d.inquiries));
// }, []);

const STATUS_STYLES: Record<Inquiry['status'], string> = {
  new: 'bg-gold-light text-brown-deep',
  replied: 'bg-sage/20 text-brown-deep',
  closed: 'bg-sand text-brown-mid',
};

const SUBJECT_LABELS: Record<Inquiry['subject'], string> = {
  session: 'Session Inquiry',
  doula: 'Doula Support',
  collaboration: 'Collaboration',
  general: 'General',
};

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(MOCK_INQUIRIES);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function updateStatus(id: string, status: Inquiry['status']) {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)),
    );
    // TODO: Update in Supabase
    // await supabaseAdmin.from('inquiries').update({ status }).eq('id', id);
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-light text-brown-deep">Inquiries</h1>

      <div className="rounded-lg border border-sand bg-white">
        <div className="divide-y divide-sand/60">
          {inquiries.map((inq) => {
            const isExpanded = expandedId === inq.id;
            return (
              <div key={inq.id}>
                {/* Summary row */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : inq.id)}
                  className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-cream/50"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-brown-deep">{inq.name}</span>
                      <span className="text-xs text-brown-mid">
                        {SUBJECT_LABELS[inq.subject]}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-xs text-brown-mid">{inq.message}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-xs text-brown-mid/60">
                      {new Date(inq.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[inq.status]}`}
                    >
                      {inq.status}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`text-brown-mid transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </div>
                </button>

                {/* Expanded detail */}
                {isExpanded && (
                  <div className="border-t border-sand/40 bg-cream/30 px-4 py-4">
                    <div className="mb-3 flex items-center gap-4 text-xs text-brown-mid">
                      <span>{inq.email}</span>
                      <span>{SUBJECT_LABELS[inq.subject]}</span>
                      <span>
                        {new Date(inq.createdAt).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-brown-deep whitespace-pre-wrap">
                      {inq.message}
                    </p>

                    {/* Status controls */}
                    <div className="flex items-center gap-2">
                      <span className="mr-1 text-xs text-brown-mid">Set status:</span>
                      {(['new', 'replied', 'closed'] as Inquiry['status'][]).map((status) => (
                        <button
                          key={status}
                          onClick={() => updateStatus(inq.id, status)}
                          className={`rounded px-2.5 py-1 text-xs transition-colors ${
                            inq.status === status
                              ? 'bg-brown-deep text-cream'
                              : 'border border-sand text-brown-mid hover:bg-cream-dark'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                      <a
                        href={`mailto:${inq.email}`}
                        className="ml-auto text-xs text-sage-muted underline decoration-sage/30 underline-offset-2 hover:text-brown-deep"
                      >
                        Reply via email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {inquiries.length === 0 && (
            <p className="py-8 text-center text-sm text-brown-mid/60">No inquiries yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
