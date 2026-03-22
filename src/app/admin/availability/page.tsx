'use client';

import { useState } from 'react';
import type { AvailabilityRule, BlockedDate } from '@/types';
import { defaultAvailability } from '@/lib/config';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function buildFullWeek(defaults: AvailabilityRule[]): AvailabilityRule[] {
  return Array.from({ length: 7 }, (_, i) => {
    const existing = defaults.find((r) => r.dayOfWeek === i);
    return (
      existing ?? {
        id: String(i),
        dayOfWeek: i,
        startTime: '10:00',
        endTime: '16:00',
        enabled: false,
      }
    );
  });
}

export default function AdminAvailability() {
  const [rules, setRules] = useState<AvailabilityRule[]>(buildFullWeek(defaultAvailability));
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [newBlockedDate, setNewBlockedDate] = useState('');
  const [newBlockedReason, setNewBlockedReason] = useState('');
  const [saving, setSaving] = useState(false);

  function toggleDay(dayOfWeek: number) {
    setRules((prev) =>
      prev.map((r) => (r.dayOfWeek === dayOfWeek ? { ...r, enabled: !r.enabled } : r)),
    );
  }

  function updateTime(dayOfWeek: number, field: 'startTime' | 'endTime', value: string) {
    setRules((prev) =>
      prev.map((r) => (r.dayOfWeek === dayOfWeek ? { ...r, [field]: value } : r)),
    );
  }

  function addBlockedDate() {
    if (!newBlockedDate) return;
    const bd: BlockedDate = {
      id: `bd_${Date.now()}`,
      date: newBlockedDate,
      reason: newBlockedReason || undefined,
    };
    setBlockedDates((prev) => [...prev, bd]);
    setNewBlockedDate('');
    setNewBlockedReason('');
  }

  function removeBlockedDate(id: string) {
    setBlockedDates((prev) => prev.filter((bd) => bd.id !== id));
  }

  async function handleSave() {
    setSaving(true);
    // TODO: POST to API / Supabase
    // await fetch('/api/admin/availability', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ rules, blockedDates }),
    // });
    console.log('Saving availability:', { rules: rules.filter((r) => r.enabled), blockedDates });
    setTimeout(() => setSaving(false), 600);
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-light text-brown-deep">Availability</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded bg-brown-deep px-4 py-2 text-sm text-cream transition-colors hover:bg-brown-warm disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Weekly schedule */}
      <div className="mb-8 rounded-lg border border-sand bg-white">
        <div className="border-b border-sand px-4 py-3">
          <h2 className="text-sm font-medium text-brown-deep">Weekly Schedule</h2>
        </div>
        <div className="divide-y divide-sand/60">
          {rules.map((rule) => (
            <div key={rule.dayOfWeek} className="flex items-center gap-4 px-4 py-3">
              {/* Toggle */}
              <button
                onClick={() => toggleDay(rule.dayOfWeek)}
                className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                  rule.enabled ? 'bg-sage' : 'bg-sand'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    rule.enabled ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>

              {/* Day name */}
              <span
                className={`w-24 text-sm ${
                  rule.enabled ? 'font-medium text-brown-deep' : 'text-brown-mid/60'
                }`}
              >
                {DAY_NAMES[rule.dayOfWeek]}
              </span>

              {/* Time inputs */}
              {rule.enabled ? (
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    value={rule.startTime}
                    onChange={(e) => updateTime(rule.dayOfWeek, 'startTime', e.target.value)}
                    className="rounded border border-sand bg-cream px-2 py-1 text-sm text-brown-deep outline-none focus:border-brown-warm"
                  />
                  <span className="text-xs text-brown-mid">to</span>
                  <input
                    type="time"
                    value={rule.endTime}
                    onChange={(e) => updateTime(rule.dayOfWeek, 'endTime', e.target.value)}
                    className="rounded border border-sand bg-cream px-2 py-1 text-sm text-brown-deep outline-none focus:border-brown-warm"
                  />
                </div>
              ) : (
                <span className="text-xs text-brown-mid/50">Not available</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Blocked dates */}
      <div className="rounded-lg border border-sand bg-white">
        <div className="border-b border-sand px-4 py-3">
          <h2 className="text-sm font-medium text-brown-deep">Blocked Dates</h2>
          <p className="mt-0.5 text-xs text-brown-mid">
            Add specific dates when you are unavailable.
          </p>
        </div>
        <div className="p-4">
          {/* Add new blocked date */}
          <div className="mb-4 flex flex-wrap items-end gap-3">
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Date</label>
              <input
                type="date"
                value={newBlockedDate}
                onChange={(e) => setNewBlockedDate(e.target.value)}
                className="rounded border border-sand bg-cream px-2 py-1.5 text-sm text-brown-deep outline-none focus:border-brown-warm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-brown-mid">Reason (optional)</label>
              <input
                type="text"
                value={newBlockedReason}
                onChange={(e) => setNewBlockedReason(e.target.value)}
                placeholder="e.g. Vacation"
                className="rounded border border-sand bg-cream px-2 py-1.5 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
              />
            </div>
            <button
              onClick={addBlockedDate}
              className="rounded border border-brown-deep px-3 py-1.5 text-sm text-brown-deep transition-colors hover:bg-brown-deep hover:text-cream"
            >
              Add
            </button>
          </div>

          {/* List */}
          {blockedDates.length === 0 ? (
            <p className="text-xs text-brown-mid/60">No blocked dates added yet.</p>
          ) : (
            <div className="space-y-2">
              {blockedDates.map((bd) => (
                <div
                  key={bd.id}
                  className="flex items-center justify-between rounded border border-sand/60 bg-cream px-3 py-2"
                >
                  <div>
                    <span className="text-sm text-brown-deep">
                      {new Date(bd.date + 'T12:00:00').toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    {bd.reason && (
                      <span className="ml-2 text-xs text-brown-mid">({bd.reason})</span>
                    )}
                  </div>
                  <button
                    onClick={() => removeBlockedDate(bd.id)}
                    className="text-xs text-terracotta hover:text-terracotta/80"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
