import Reveal from "@/components/ui/reveal";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import BookingCalendar from "@/components/booking/calendar";

export const metadata = {
  title: "Book a Session — Chandra",
  description: "Schedule a 1:1 channeling session with Chandra.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="px-6 pt-36 pb-16 text-center lg:pt-48">
        <Reveal variant="soft">
          <p className="u-running-head text-brown-mid">Book</p>
          <div className="mt-8 flex justify-center text-gold animate-soft-pulse">
            <Sigil size={26} />
          </div>
        </Reveal>
        <Reveal variant="soft" delay={150}>
          <h1 className="text-display mt-8 text-5xl text-brown-deep md:text-7xl lg:text-[6rem]">
            Schedule a
            <br />
            <em className="text-terracotta-deep">session.</em>
          </h1>
        </Reveal>
        <Reveal variant="soft" delay={300}>
          <p className="mx-auto mt-8 max-w-lg font-serif text-xl italic leading-relaxed text-brown-warm md:text-2xl">
            No preparation is needed. Just bring yourself — wherever you are,
            however you are.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto flex max-w-md justify-center py-4 text-gold/70">
        <Divider sigil center tone="text-gold/70" />
      </div>

      {/* ============================================
          SESSION INFO + CALENDAR
          ============================================ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Session Info */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="u-running-head text-brown-mid">The offering</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-brown-deep md:text-4xl">
                1:1 Channeling
                <br />
                <em className="text-terracotta-deep">session.</em>
              </h2>

              <Divider className="mt-8" />

              <p className="mt-8 text-[0.95rem] leading-[1.8] text-brown-mid">
                A channeling session is a sacred space where I connect with
                higher-dimensional guidance on your behalf. Together, we
                explore whatever is most alive for you — whether that&apos;s a
                specific question, a life transition, or simply a desire for
                deeper clarity. Each session is unique, unscripted, and led
                entirely by what wants to come through.
              </p>

              {/* Session Details Table */}
              <div className="mt-12 space-y-0 border-t border-cream-dark/70">
                {[
                  { label: "Duration", value: "60 minutes" },
                  { label: "Format", value: "Zoom" },
                  { label: "Investment", value: "$222" },
                  { label: "Deposit", value: "$100" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-cream-dark/70 py-4"
                  >
                    <span className="text-[0.7rem] tracking-[0.2em] uppercase text-brown-mid">
                      {label}
                    </span>
                    <span className="font-serif text-base italic text-brown-deep md:text-lg">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-[0.85rem] leading-relaxed text-brown-mid/80">
                For in-person sessions, please reach out directly so we can
                arrange the details:{" "}
                <a
                  href="mailto:chandrafrei@gmail.com"
                  className="u-draw-link text-brown-deep hover:text-terracotta-deep"
                >
                  chandrafrei@gmail.com
                </a>{" "}
                or{" "}
                <a
                  href="tel:+18016477707"
                  className="u-draw-link text-brown-deep hover:text-terracotta-deep"
                >
                  (801) 647-7707
                </a>
                .
              </p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-brown-mid/80">
                After booking, you&apos;ll receive a confirmation email with
                your session link and a brief welcome note. No intake forms, no
                homework — just show up as you are.
              </p>
            </div>
          </Reveal>

          {/* Right: Booking Calendar */}
          <Reveal delay={200}>
            <div className="relative bg-parchment p-6 md:p-10">
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cream px-3">
                <div className="text-gold/80">
                  <Sigil size={18} />
                </div>
              </div>
              <BookingCalendar />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          POLICIES
          ============================================ */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-xl px-6 py-28 text-center">
          <Reveal>
            <div className="flex justify-center text-gold/70">
              <Sigil size={20} />
            </div>
            <p className="mt-6 u-running-head text-brown-mid">Policies</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              A few things to
              <em className="text-terracotta-deep"> know.</em>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Divider center className="mt-8" />
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 space-y-10 text-left">
              <div>
                <h3 className="font-serif text-xl text-brown-deep md:text-2xl">
                  Rescheduling
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.8] text-brown-mid">
                  Life happens. If you need to reschedule, please do so at
                  least 24 hours before your session. You can reschedule once
                  at no additional cost.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-brown-deep md:text-2xl">
                  Cancellation
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.8] text-brown-mid">
                  Cancellations made more than 24 hours in advance will receive
                  a full refund of the deposit. Cancellations within 24 hours
                  are non-refundable, as that time has been held specifically
                  for you.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-brown-deep md:text-2xl">
                  Recording
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.8] text-brown-mid">
                  Every session is recorded and shared with you afterward. The
                  recording is an important part of the experience — so much
                  comes through in a session, and being able to revisit it
                  allows the messages to land even deeper over time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
