import type { SiteContent, AvailabilityRule } from '@/types';

// Default site content — will be overridable from admin
export const defaultContent: SiteContent = {
  heroHeadline: 'Return to what you already know',
  heroSubhead: 'Channeling sessions, doula support, and guided meditations — rooted in the quiet wisdom that lives within you.',
  introText: 'There is a place in you that has never been lost — only quiet. A place that remembers your wholeness, holds your truth, and knows the way home.',
  sessionPrice: 150,
  depositAmount: 50,
  sessionDuration: 60,
  bufferTime: 30,
  contactEmail: 'hello@chandra.com',
  instagramUrl: '#',
  substackUrl: '#',
};

// Default weekly availability
export const defaultAvailability: AvailabilityRule[] = [
  { id: '1', dayOfWeek: 2, startTime: '10:00', endTime: '16:00', enabled: true }, // Tuesday
  { id: '2', dayOfWeek: 4, startTime: '10:00', endTime: '16:00', enabled: true }, // Thursday
];

// Session types available for booking
export const sessionTypes = [
  {
    id: 'channeling',
    name: '1:1 Channeling Session',
    duration: 60,
    description: 'A sacred, one-on-one session to reconnect with your soul\'s guidance.',
  },
] as const;
