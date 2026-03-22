'use client';

import { useState } from 'react';
import type { SiteContent } from '@/types';
import { defaultContent } from '@/lib/config';

export default function AdminContent() {
  const [content, setContent] = useState<SiteContent>({ ...defaultContent });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function update<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setContent((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  async function handleSave() {
    setSaving(true);
    // TODO: POST to API / Supabase
    // await fetch('/api/admin/content', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(content),
    // });
    console.log('Saving content:', content);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
    }, 600);
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-light text-brown-deep">Site Content</h1>
        <div className="flex items-center gap-3">
          {saved && <span className="text-xs text-sage-muted">Saved</span>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded bg-brown-deep px-4 py-2 text-sm text-cream transition-colors hover:bg-brown-warm disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Hero section */}
        <section className="rounded-lg border border-sand bg-white p-5">
          <h2 className="mb-4 text-sm font-medium text-brown-deep">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Headline</label>
              <input
                type="text"
                value={content.heroHeadline}
                onChange={(e) => update('heroHeadline', e.target.value)}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Subheadline</label>
              <textarea
                value={content.heroSubhead}
                onChange={(e) => update('heroSubhead', e.target.value)}
                rows={2}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
          </div>
        </section>

        {/* Intro text */}
        <section className="rounded-lg border border-sand bg-white p-5">
          <h2 className="mb-4 text-sm font-medium text-brown-deep">Intro Text</h2>
          <textarea
            value={content.introText}
            onChange={(e) => update('introText', e.target.value)}
            rows={4}
            className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm leading-relaxed text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
          />
        </section>

        {/* Session settings */}
        <section className="rounded-lg border border-sand bg-white p-5">
          <h2 className="mb-4 text-sm font-medium text-brown-deep">Session Settings</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Session Price ($)</label>
              <input
                type="number"
                value={content.sessionPrice}
                onChange={(e) => update('sessionPrice', Number(e.target.value))}
                min={0}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Deposit Amount ($)</label>
              <input
                type="number"
                value={content.depositAmount}
                onChange={(e) => update('depositAmount', Number(e.target.value))}
                min={0}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Duration (min)</label>
              <input
                type="number"
                value={content.sessionDuration}
                onChange={(e) => update('sessionDuration', Number(e.target.value))}
                min={15}
                step={15}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Buffer Time (min)</label>
              <input
                type="number"
                value={content.bufferTime}
                onChange={(e) => update('bufferTime', Number(e.target.value))}
                min={0}
                step={5}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none focus:border-brown-warm"
              />
            </div>
          </div>
        </section>

        {/* Contact / Social */}
        <section className="rounded-lg border border-sand bg-white p-5">
          <h2 className="mb-4 text-sm font-medium text-brown-deep">Contact &amp; Social</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Contact Email</label>
              <input
                type="email"
                value={content.contactEmail}
                onChange={(e) => update('contactEmail', e.target.value)}
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Instagram URL</label>
              <input
                type="url"
                value={content.instagramUrl}
                onChange={(e) => update('instagramUrl', e.target.value)}
                placeholder="https://instagram.com/..."
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Substack URL</label>
              <input
                type="url"
                value={content.substackUrl}
                onChange={(e) => update('substackUrl', e.target.value)}
                placeholder="https://substack.com/..."
                className="w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
