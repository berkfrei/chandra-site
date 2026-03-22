import Reveal from "@/components/ui/reveal";
import Divider from "@/components/ui/divider";
import ContactForm from "@/components/booking/contact-form";

export const metadata = {
  title: "Contact — Chandra",
  description: "Get in touch with Chandra.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-brown-mid font-sans mb-5">
            Contact
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brown-deep font-light leading-[1.15]">
            Let&apos;s connect
          </h1>
        </Reveal>
      </section>

      {/* ── Two-column: Info + Form ── */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brown-deep font-light mb-5">
                I&apos;d love to hear from you
              </h2>

              <Divider />

              <p className="text-brown-mid text-[0.95rem] leading-[1.8] mt-6 mb-10">
                Whether you have a question about sessions, are curious about
                birth doula support, or simply feel called to reach out —
                I&apos;m here. There&apos;s no wrong reason to write.
              </p>

              {/* Links */}
              <div className="space-y-5">
                <a
                  href="mailto:hello@chandraspirit.com"
                  className="flex items-baseline gap-3 group"
                >
                  <span className="text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans w-20 shrink-0">
                    Email
                  </span>
                  <span className="text-brown-deep text-[0.95rem] group-hover:text-terracotta transition-colors duration-300">
                    hello@chandraspirit.com
                  </span>
                </a>

                <a
                  href="https://instagram.com/chandraspirit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-3 group"
                >
                  <span className="text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans w-20 shrink-0">
                    Instagram
                  </span>
                  <span className="text-brown-deep text-[0.95rem] group-hover:text-terracotta transition-colors duration-300">
                    @chandraspirit{" "}
                    <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </a>

                <a
                  href="https://chandraspirit.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-3 group"
                >
                  <span className="text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans w-20 shrink-0">
                    Substack
                  </span>
                  <span className="text-brown-deep text-[0.95rem] group-hover:text-terracotta transition-colors duration-300">
                    Newsletter{" "}
                    <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal delay={200}>
            <div className="bg-parchment p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
