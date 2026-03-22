'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Bookings', href: '/admin/bookings' },
  { label: 'Availability', href: '/admin/availability' },
  { label: 'Testimonials', href: '/admin/testimonials' },
  { label: 'Inquiries', href: '/admin/inquiries' },
  { label: 'Content', href: '/admin/content' },
];

function LoginForm({ onLogin }: { onLogin: (pw: string) => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    setError('');
    onLogin(password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-sand bg-white p-8 shadow-sm"
      >
        <h1 className="mb-1 font-serif text-2xl font-light text-brown-deep">Admin</h1>
        <p className="mb-6 text-sm text-brown-mid">Enter your password to continue.</p>

        {error && <p className="mb-4 text-sm text-terracotta">{error}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 w-full rounded border border-sand bg-cream px-3 py-2 text-sm text-brown-deep outline-none placeholder:text-brown-mid/50 focus:border-brown-warm"
        />
        <button
          type="submit"
          className="w-full rounded bg-brown-deep px-4 py-2 text-sm text-cream transition-colors hover:bg-brown-warm"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Check for admin_auth cookie on mount
  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((c) => c.startsWith('admin_auth='));
    setAuthenticated(!!cookie);
  }, []);

  function handleLogin(password: string) {
    // Set cookie and check validity — the password itself is stored as the
    // cookie value. On a real deployment, compare server-side via an API route.
    // For now, compare client-side against a well-known value or just set cookie
    // and let the server middleware validate later.
    document.cookie = `admin_auth=${encodeURIComponent(password)}; path=/admin; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
    setAuthenticated(true);
  }

  function handleLogout() {
    document.cookie = 'admin_auth=; path=/admin; max-age=0';
    setAuthenticated(false);
  }

  // Loading state
  if (authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream font-sans">
        <p className="text-sm text-brown-mid">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-cream font-sans text-brown-deep">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-56' : 'w-0 overflow-hidden'} shrink-0 border-r border-sand bg-white transition-all duration-200`}
      >
        <div className="flex h-14 items-center justify-between border-b border-sand px-4">
          <Link href="/admin" className="font-serif text-lg font-light text-brown-deep">
            Chandra
          </Link>
        </div>
        <nav className="flex flex-col gap-0.5 p-2">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-cream-dark font-medium text-brown-deep'
                    : 'text-brown-mid hover:bg-cream hover:text-brown-deep'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-sand p-2">
          <button
            onClick={handleLogout}
            className="w-full rounded px-3 py-2 text-left text-sm text-brown-mid transition-colors hover:bg-cream hover:text-terracotta"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center border-b border-sand bg-white px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 text-brown-mid hover:text-brown-deep"
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
          <h2 className="text-sm font-medium text-brown-deep">
            {NAV_ITEMS.find((item) =>
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href),
            )?.label ?? 'Admin'}
          </h2>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
