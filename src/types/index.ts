export interface Booking {
  id: string;
  clientName: string;
  clientEmail: string;
  date: string; // ISO date
  time: string; // HH:mm
  timezone: string;
  sessionType: 'channeling' | 'doula-consult';
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  depositPaid: boolean;
  stripePaymentId?: string;
  meetLink?: string;
  calendarEventId?: string;
  notes?: string;
  intakeMessage?: string;
  createdAt: string;
}

export interface TimeSlot {
  time: string; // HH:mm
  available: boolean;
}

export interface AvailabilityRule {
  id: string;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  enabled: boolean;
}

export interface BlockedDate {
  id: string;
  date: string; // ISO date
  reason?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  sessionType: 'channeling' | 'doula';
  approved: boolean;
  featured: boolean;
  createdAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: 'session' | 'doula' | 'collaboration' | 'general';
  message: string;
  status: 'new' | 'replied' | 'closed';
  createdAt: string;
}

export interface SiteContent {
  heroHeadline: string;
  heroSubhead: string;
  introText: string;
  sessionPrice: number;
  depositAmount: number;
  sessionDuration: number; // minutes
  bufferTime: number; // minutes between sessions
  contactEmail: string;
  instagramUrl: string;
  substackUrl: string;
}
