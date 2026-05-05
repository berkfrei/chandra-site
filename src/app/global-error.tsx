"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-brown-deep">
            Something went wrong
          </h2>
          <button
            onClick={() => reset()}
            className="mt-6 text-sm uppercase tracking-widest text-terracotta-deep hover:underline"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
