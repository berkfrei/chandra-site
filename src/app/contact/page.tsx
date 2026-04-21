import Reveal from "@/components/ui/reveal";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import ContactForm from "@/components/booking/contact-form";

export const metadata = {
  title: "Contact — Chandra",
  description: "Get in touch with Chandra.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="px-6 pt-36 pb-16 text-center lg:pt-48">
        <Reveal variant="soft">
          <p className="u-running-head text-brown-mid">Contact</p>
          <div className="mt-8 flex justify-center text-gold animate-soft-pulse">
            <Sigil size={26} />
          </div>
        </Reveal>
        <Reveal variant="soft" delay={150}>
          <h1 className="text-display mt-8 text-5xl text-brown-deep md:text-7xl lg:text-[6rem]">
            Let&rsquo;s
            <br />
            <em className="text-terracotta-deep">connect.</em>
          </h1>
        </Reveal>
      </section>

      <div className="mx-auto flex max-w-md justify-center py-4 text-gold/70">
        <Divider sigil center tone="text-gold/70" />
      </div>

      {/* ============================================
          TWO COLUMN — INFO + FORM
          ============================================ */}
      <section className="mx-auto max-w-5xl px-6 py-20 pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Contact Info */}
          <Reveal>
            <div>
              <p className="u-running-head text-brown-mid">Reach out</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-brown-deep md:text-4xl">
                I&rsquo;d love to
                <br />
                <em className="text-terracotta-deep">hear from you.</em>
              </h2>

              <Divider className="mt-8" />

              <p className="mt-8 text-[0.95rem] leading-[1.8] text-brown-mid">
                Whether you have a question about sessions, are curious about
                birth doula support, or simply feel called to reach out —
                I&apos;m here. There&apos;s no wrong reason to write.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:chandrafrei@gmail.com"
                  className="group/item flex items-baseline gap-6 border-b border-cream-dark/70 pb-5"
                >
                  <span className="w-20 shrink-0 text-[0.68rem] uppercase tracking-[0.22em] text-brown-mid">
                    Email
                  </span>
                  <span className="u-draw-link font-serif text-lg text-brown-deep transition-colors duration-500 group-hover/item:text-terracotta-deep md:text-xl">
                    chandrafrei@gmail.com
                  </span>
                </a>

                <a
                  href="https://instagram.com/chandrafrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-baseline gap-6 border-b border-cream-dark/70 pb-5"
                >
                  <span className="w-20 shrink-0 text-[0.68rem] uppercase tracking-[0.22em] text-brown-mid">
                    Instagram
                  </span>
                  <span className="inline-flex items-baseline gap-2 font-serif text-lg text-brown-deep transition-colors duration-500 group-hover/item:text-terracotta-deep md:text-xl">
                    <span className="u-draw-link">@chandrafrei</span>
                    <span className="text-[0.7rem] transition-transform duration-500 group-hover/item:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                </a>

                <a
                  href="https://chandraspirit.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-baseline gap-6 border-b border-cream-dark/70 pb-5"
                >
                  <span className="w-20 shrink-0 text-[0.68rem] uppercase tracking-[0.22em] text-brown-mid">
                    Substack
                  </span>
                  <span className="inline-flex items-baseline gap-2 font-serif text-lg text-brown-deep transition-colors duration-500 group-hover/item:text-terracotta-deep md:text-xl">
                    <span className="u-draw-link">Newsletter</span>
                    <span className="text-[0.7rem] transition-transform duration-500 group-hover/item:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal delay={200}>
            <div className="relative bg-parchment p-6 md:p-10">
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cream px-3">
                <div className="text-gold/80">
                  <Sigil size={18} />
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
