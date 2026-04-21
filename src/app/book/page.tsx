import Reveal from "@/components/ui/reveal";
import Divider from "@/components/ui/divider";
import BookingCalendar from "@/components/booking/calendar";

export const metadata = {
  title: "Book a Session — Chandra",
  description: "Schedule a 1:1 channeling session with Chandra.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-brown-mid font-sans mb-5">
            Book
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brown-deep font-light leading-[1.15] mb-6">
            Schedule a Session
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-serif italic text-lg md:text-xl text-brown-mid/80 max-w-lg mx-auto leading-relaxed">
            No preparation is needed. Just bring yourself — wherever you are,
            however you are.
          </p>
        </Reveal>
      </section>

      {/* ── Session Info + Calendar ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Session Info */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl md:text-3xl text-brown-deep font-light mb-5">
                1:1 Channeling Session
              </h2>

              <Divider />

              <p className="text-brown-mid text-[0.95rem] leading-[1.8] mt-6 mb-10">
                A channeling session is a sacred space where I connect with
                higher-dimensional guidance on your behalf. Together, we
                explore whatever is most alive for you — whether that&apos;s a
                specific question, a life transition, or simply a desire for
                deeper clarity. Each session is unique, unscripted, and led
                entirely by what wants to come through.
              </p>

              {/* Session Details Table */}
              <div className="space-y-4 mb-10">
                {[
                  { label: "Duration", value: "60 minutes" },
                  { label: "Format", value: "Zoom" },
                  { label: "Investment", value: "$222" },
                  { label: "Deposit", value: "$100" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-cream-dark pb-3"
                  >
                    <span className="text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans">
                      {label}
                    </span>
                    <span className="text-[0.9rem] text-brown-deep font-sans">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-brown-mid/70 text-[0.82rem] leading-relaxed">
                For in-person sessions, please reach out directly so we can
                arrange the details:{" "}
                <a href="mailto:chandrafrei@gmail.com" className="underline hover:text-terracotta transition-colors">
                  chandrafrei@gmail.com
                </a>{" "}
                or{" "}
                <a href="tel:+18016477707" className="underline hover:text-terracotta transition-colors">
                  (801) 647-7707
                </a>.
              </p>
              <p className="mt-4 text-brown-mid/70 text-[0.82rem] leading-relaxed">
                After booking, you&apos;ll receive a confirmation email with
                your session link and a brief welcome note. No intake forms,
                no homework — just show up as you are.
              </p>
            </div>
          </Reveal>

          {/* Right: Booking Calendar */}
          <Reveal delay={200}>
            <div className="bg-parchment p-6 md:p-10">
              <BookingCalendar />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Policies ── */}
      <section className="bg-parchment">
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-brown-mid font-sans mb-5">
              Policies
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-brown-deep font-light mb-6">
              A few things to know
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Divider center />
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 space-y-8 text-left">
              <div>
                <h3 className="font-serif text-lg text-brown-deep mb-2">
                  Rescheduling
                </h3>
                <p className="text-brown-mid text-[0.9rem] leading-[1.8]">
                  Life happens. If you need to reschedule, please do so at
                  least 24 hours before your session. You can reschedule once
                  at no additional cost.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-brown-deep mb-2">
                  Cancellation
                </h3>
                <p className="text-brown-mid text-[0.9rem] leading-[1.8]">
                  Cancellations made more than 24 hours in advance will
                  receive a full refund of the deposit. Cancellations within
                  24 hours are non-refundable, as that time has been held
                  specifically for you.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-brown-deep mb-2">
                  Recording
                </h3>
                <p className="text-brown-mid text-[0.9rem] leading-[1.8]">
                  Every session is recorded and shared with you afterward.
                  The recording is an important part of the experience&nbsp;&mdash;
                  so much comes through in a session, and being able to
                  revisit it allows the messages to land even deeper over
                  time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
