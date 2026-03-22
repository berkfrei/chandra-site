'use client';

import { useState } from 'react';
import type { Testimonial } from '@/types';

// ---------------------------------------------------------------------------
// Mock testimonials for development
// ---------------------------------------------------------------------------
const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Elena M.',
    quote:
      'The session helped me reconnect with a part of myself I thought I had lost. Chandra held space with such tenderness.',
    sessionType: 'channeling',
    approved: true,
    featured: true,
    createdAt: '2026-03-01T10:00:00Z',
  },
  {
    id: 't2',
    clientName: 'Rina K.',
    quote:
      'I came in skeptical and left in tears — the good kind. Something shifted in me that day.',
    sessionType: 'channeling',
    approved: true,
    featured: false,
    createdAt: '2026-03-10T14:00:00Z',
  },
  {
    id: 't3',
    clientName: 'Maya J.',
    quote:
      'Chandra guided me through the birth with an intuitive calmness I have never experienced before.',
    sessionType: 'doula',
    approved: false,
    featured: false,
    createdAt: '2026-03-18T09:00:00Z',
  },
];

// TODO: Replace with real data fetching
// useEffect(() => {
//   fetch('/api/testimonials').then(r => r.json()).then(d => setTestimonials(d.testimonials));
// }, []);

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(MOCK_TESTIMONIALS);

  function toggleApproved(id: string) {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, approved: !t.approved } : t)),
    );
    // TODO: Update in Supabase
    // await supabaseAdmin.from('testimonials').update({ approved: !current }).eq('id', id);
  }

  function toggleFeatured(id: string) {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, featured: !t.featured } : t)),
    );
    // TODO: Update in Supabase
  }

  function deleteTestimonial(id: string) {
    if (!confirm('Remove this testimonial?')) return;
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    // TODO: Delete from Supabase
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-light text-brown-deep">Testimonials</h1>

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-lg border border-sand bg-white p-4">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="mb-1 text-sm leading-relaxed text-brown-deep">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs text-brown-mid">
                  {t.clientName} &middot;{' '}
                  <span className="capitalize">{t.sessionType}</span> &middot;{' '}
                  {new Date(t.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Status badges */}
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    t.approved ? 'bg-sage/20 text-brown-deep' : 'bg-gold-light text-brown-deep'
                  }`}
                >
                  {t.approved ? 'Approved' : 'Pending'}
                </span>
                {t.featured && (
                  <span className="rounded-full bg-terracotta-light/30 px-2 py-0.5 text-xs font-medium text-terracotta">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 border-t border-sand/60 pt-3">
              <button
                onClick={() => toggleApproved(t.id)}
                className={`rounded px-3 py-1 text-xs transition-colors ${
                  t.approved
                    ? 'border border-sand text-brown-mid hover:bg-cream'
                    : 'bg-sage/80 text-white hover:bg-sage'
                }`}
              >
                {t.approved ? 'Revoke Approval' : 'Approve'}
              </button>
              <button
                onClick={() => toggleFeatured(t.id)}
                className={`rounded px-3 py-1 text-xs transition-colors ${
                  t.featured
                    ? 'border border-terracotta/30 text-terracotta hover:bg-terracotta-light/10'
                    : 'border border-sand text-brown-mid hover:bg-cream'
                }`}
              >
                {t.featured ? 'Unfeature' : 'Feature on Site'}
              </button>
              <button
                onClick={() => deleteTestimonial(t.id)}
                className="ml-auto text-xs text-brown-mid/50 transition-colors hover:text-terracotta"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <p className="py-8 text-center text-sm text-brown-mid/60">No testimonials yet.</p>
        )}
      </div>
    </div>
  );
}
