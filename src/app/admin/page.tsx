'use client';

// ---------------------------------------------------------------------------
// Admin Dashboard — overview with stat cards
// ---------------------------------------------------------------------------

const stats = [
  {
    label: 'Upcoming Sessions',
    value: '3',
    detail: 'Next: Tomorrow, 10:00 AM',
    accent: 'border-sage',
  },
  {
    label: 'New Inquiries',
    value: '5',
    detail: '2 unread this week',
    accent: 'border-gold',
  },
  {
    label: 'Revenue This Month',
    value: '$450',
    detail: '3 deposits collected',
    accent: 'border-terracotta',
  },
  {
    label: 'Completed Sessions',
    value: '12',
    detail: 'This month',
    accent: 'border-brown-warm',
  },
];

// TODO: Replace mock data with real queries
// async function getStats() {
//   const now = new Date().toISOString();
//   const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();
//
//   const { count: upcomingSessions } = await supabaseAdmin
//     .from('bookings')
//     .select('*', { count: 'exact', head: true })
//     .gte('date', now)
//     .in('status', ['confirmed', 'pending']);
//
//   const { count: newInquiries } = await supabaseAdmin
//     .from('inquiries')
//     .select('*', { count: 'exact', head: true })
//     .eq('status', 'new');
//
//   const { data: payments } = await supabaseAdmin
//     .from('bookings')
//     .select('deposit_paid')
//     .gte('created_at', monthStart)
//     .eq('deposit_paid', true);
//
//   return { upcomingSessions, newInquiries, revenue: (payments?.length ?? 0) * depositAmount };
// }

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-light text-brown-deep">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg border-l-4 ${stat.accent} border border-sand bg-white p-5`}
          >
            <p className="mb-1 text-xs uppercase tracking-wide text-brown-mid">{stat.label}</p>
            <p className="mb-1 font-serif text-3xl font-light text-brown-deep">{stat.value}</p>
            <p className="text-xs text-brown-mid">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-8">
        <h2 className="mb-3 text-sm font-medium text-brown-deep">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/admin/bookings"
            className="rounded border border-sand bg-white px-4 py-2 text-sm text-brown-deep transition-colors hover:bg-cream-dark"
          >
            View Bookings
          </a>
          <a
            href="/admin/inquiries"
            className="rounded border border-sand bg-white px-4 py-2 text-sm text-brown-deep transition-colors hover:bg-cream-dark"
          >
            Check Inquiries
          </a>
          <a
            href="/admin/availability"
            className="rounded border border-sand bg-white px-4 py-2 text-sm text-brown-deep transition-colors hover:bg-cream-dark"
          >
            Update Availability
          </a>
        </div>
      </div>
    </div>
  );
}
