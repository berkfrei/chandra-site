import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import Marquee from "@/components/ui/marquee";
import WordReveal from "@/components/ui/word-reveal";
import Parallax from "@/components/ui/parallax";

const offerings = [
  {
    number: "i",
    title: "Soul Chats",
    subtitle: "One-to-one channeling sessions",
    body: "I become a vessel. Your soul speaks. And the rest unfolds from there.",
    href: "/offerings",
    status: null as string | null,
    statusTone: null as "terracotta" | "sage" | null,
  },
  {
    number: "ii",
    title: "Doula Support",
    subtitle: "Sacred companionship through birth",
    body: "Pregnancy, birth, and the tender passage into motherhood — grounded in presence, ritual, and deep listening.",
    href: "/doula",
    status: "Accepting inquiries",
    statusTone: "terracotta" as const,
  },
  {
    number: "iii",
    title: "Channeled Meditations",
    subtitle: "Doorways to the unseen",
    body: "Doorways to your soul, your body, the Earth Mother, and the realms she holds.",
    href: null as string | null,
    status: "Coming soon",
    statusTone: "sage" as const,
  },
];

const shifts = [
  {
    label: "Reconnection",
    desc: "A felt sense of coming home to your own body, intuition, and knowing.",
  },
  {
    label: "Clarity",
    desc: "The fog lifts. You begin to trust — yourself, the path, and the unseen hands guiding you.",
  },
  {
    label: "Trust",
    desc: "A deepening relationship with the voice of your soul, the voice of the Mother, and all your spiritual support.",
  },
  {
    label: "Alignment",
    desc: "As you begin to hold a higher frequency, your reality rearranges to match it.",
  },
  {
    label: "Sovereignty",
    desc: "You stop outsourcing your knowing. You remember. You reclaim your sovereignty and start to live a soul-led, heart-centered life.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO — asymmetric editorial composition
          ============================================ */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 lg:px-10 lg:pt-36 lg:pb-20">
        {/* Vertical running-head down the left edge (desktop) */}
        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <p className="u-vertical-rl u-running-head whitespace-nowrap text-brown-mid/70">
            Est. 2026 &nbsp;·&nbsp; Draper, Utah &nbsp;·&nbsp; One to one
          </p>
        </div>

        {/* Masthead */}
        <div className="relative mx-auto max-w-7xl">
          <Reveal variant="soft">
            <p className="u-running-head text-brown-mid">
              The soul &middot; The channel &middot; The bridge
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-7xl grid-cols-12 items-center gap-y-12 md:mt-12 md:gap-x-8 lg:mt-14">
          {/* Headline — spans 7 cols, overlaps the image column by 1 */}
          <div className="relative z-10 col-span-12 md:col-span-8 lg:col-span-7">
            <h1 className="text-display text-[13vw] leading-[0.95] text-brown-deep sm:text-[10.5vw] md:text-[8.8vw] lg:text-[7.2vw] xl:text-[6.6rem]">
              <WordReveal text="Your soul" delay={120} stagger={110} />
              <br />
              <WordReveal text="knows the way." delay={360} stagger={110} />
              <br />
              <span
                className="animate-word-rise inline-block font-serif italic text-terracotta-deep"
                style={{ animationDelay: "780ms" }}
              >
                Let her lead.
              </span>
            </h1>

            <div className="mt-10 max-w-lg md:mt-12">
              <p
                className="animate-fade-up text-base leading-relaxed text-brown-warm md:text-[1.05rem]"
                style={{ animationDelay: "1200ms" }}
              >
                Channeling, sacred support, and soul-deep guidance for those
                ready to come home to themselves.
              </p>
              <div
                className="animate-fade-up mt-9 flex flex-wrap items-center gap-5"
                style={{ animationDelay: "1400ms" }}
              >
                <Button href="/book" variant="filled">
                  Book a Session
                </Button>
                <Button href="/offerings" variant="ghost">
                  Explore Offerings
                </Button>
              </div>
            </div>
          </div>

          {/* Portrait — col-span-5, clean margin from headline on desktop */}
          <div className="relative col-span-12 md:col-span-4 md:col-start-9 lg:col-span-5 lg:col-start-8">
            <Reveal variant="soft" delay={250}>
              <div className="relative">
                {/* Slow-rotating sun sigil behind the image as a halo */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 hidden text-gold/35 lg:block"
                  aria-hidden="true"
                >
                  <div className="animate-slow-rotate">
                    <Sigil size={140} variant="sun" />
                  </div>
                </div>

                <Parallax speed={0.06}>
                  <div
                    className="img-ember-bleed img-vignette relative overflow-hidden bg-cream-dark"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <Image
                      src="/images/chandra-golden-hour-self-portrait.jpg"
                      alt="Chandra in golden-hour light — a soft self-portrait through sunlit glass"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 35vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>

                {/* Photo caption, editorial style */}
                <p className="mt-4 pl-2 font-serif text-sm italic text-brown-mid">
                  Golden hour, held in her own light.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Drift phrase — full-bleed marquee anchoring the hero */}
      <div className="border-y border-cream-dark/60 py-6">
        <Marquee>
          <span className="mx-10 inline-flex items-center gap-10 font-serif text-2xl italic text-brown-mid md:text-3xl">
            the soul
            <span className="text-terracotta/70">
              <Sigil size={14} />
            </span>
            the channel
            <span className="text-terracotta/70">
              <Sigil size={14} />
            </span>
            the bridge
            <span className="text-terracotta/70">
              <Sigil size={14} />
            </span>
          </span>
        </Marquee>
      </div>

      {/* ============================================
          OFFERINGS — editorial numbered entries
          ============================================ */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 flex items-center justify-center gap-4 text-terracotta/70">
              <span className="h-px w-10 bg-current opacity-60" />
              <Sigil size={18} />
              <span className="h-px w-10 bg-current opacity-60" />
            </div>
            <p className="u-running-head text-center text-brown-mid">
              How we can work together
            </p>
            <h2 className="text-display mt-4 text-center text-5xl text-brown-deep md:text-6xl lg:text-7xl">
              <em className="font-serif">Offerings</em>
            </h2>
          </Reveal>

          <div className="mt-24 space-y-20 md:space-y-28">
            {offerings.map((item, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={item.title}>
                  <Reveal variant="rise">
                    <article
                      className={`grid grid-cols-12 items-baseline gap-y-6 md:gap-x-10 ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {/* Numeral */}
                      <div
                        className={`col-span-12 md:col-span-2 ${
                          isEven ? "md:order-2" : ""
                        }`}
                      >
                        <span className="block font-serif text-7xl italic font-light text-gold md:text-8xl lg:text-[7rem]">
                          {item.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div
                        className={`col-span-12 md:col-span-10 ${
                          isEven ? "md:order-1" : ""
                        }`}
                      >
                        <h3 className="font-serif text-4xl font-light leading-[1.1] text-brown-deep md:text-5xl">
                          {item.title}
                        </h3>
                        <p
                          className={`mt-3 font-serif text-lg italic text-terracotta-deep md:text-xl ${
                            isEven ? "md:text-right" : ""
                          }`}
                        >
                          {item.subtitle}
                        </p>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-brown-warm md:text-[1.05rem]">
                          {item.body}
                        </p>

                        <div
                          className={`mt-7 flex flex-wrap items-center gap-5 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          {item.href ? (
                            <Button href={item.href} variant="ghost">
                              Learn more
                            </Button>
                          ) : null}
                          {item.status ? (
                            <span
                              className={`inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] ${
                                item.statusTone === "sage"
                                  ? "text-sage"
                                  : "text-terracotta"
                              }`}
                            >
                              <span className="block h-1 w-1 rounded-full bg-current" />
                              {item.status}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Reveal>

                  {/* Sigil divider — not after the last entry */}
                  {i < offerings.length - 1 ? (
                    <Reveal variant="soft">
                      <div className="mt-20 flex justify-center text-gold/70 md:mt-28">
                        <Sigil size={22} />
                      </div>
                    </Reveal>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          TRANSFORMATION — "A return to yourself"
          ============================================ */}
      <section className="relative overflow-hidden bg-parchment px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-y-14 md:gap-x-10">
          {/* Image column — full height, with parallax */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <Reveal variant="soft">
              <div className="sticky top-32">
                <Parallax speed={0.12}>
                  <div
                    className="img-ember-bleed relative overflow-hidden"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <Image
                      src="/images/red-rocks-golden-hour.jpg"
                      alt="Red rock landscape bathed in golden-hour light"
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
                <p className="mt-4 pl-1 font-serif text-sm italic text-brown-mid">
                  Utah, at the edge of light.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Text column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="u-running-head text-brown-mid">What shifts</p>
              <h2 className="text-display mt-4 text-5xl text-brown-deep md:text-6xl lg:text-7xl">
                A return to
                <br />
                <em className="text-terracotta-deep">yourself.</em>
              </h2>
            </Reveal>

            <div className="mt-14 divide-y divide-cream-dark/70">
              {shifts.map((item, i) => (
                <Reveal key={item.label} variant="soft" delay={i * 80}>
                  <div className="group/row grid grid-cols-12 items-baseline gap-x-6 py-6 transition-colors duration-500 hover:bg-cream/40">
                    <span className="col-span-12 font-serif text-xl italic text-gold md:col-span-2 md:text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-12 md:col-span-10">
                      <p className="u-running-head text-brown-deep">
                        {item.label}
                      </p>
                      <p className="mt-2 font-serif text-lg italic leading-snug text-brown-deep md:text-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW — chapter tease, asymmetric
          ============================================ */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-y-10 md:gap-x-12">
          <div className="order-2 col-span-12 md:order-1 md:col-span-7">
            <Reveal>
              <p className="u-running-head text-brown-mid">The channel</p>
              <h2 className="text-display mt-4 text-5xl text-brown-deep md:text-6xl lg:text-7xl">
                Hi, I&rsquo;m
                <br />
                <em className="text-terracotta-deep">Chandra.</em>
              </h2>
              <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-brown-warm md:text-2xl">
                A channel, a bridge, a vessel — held in the frequencies of the
                Mother, walking beside those ready to come home to themselves.
              </p>
              <div className="mt-10">
                <Button href="/about" variant="ghost">
                  Read her story
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="order-1 col-span-12 md:order-2 md:col-span-5">
            <Reveal variant="soft" delay={150}>
              <div
                className="img-vignette relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/images/chandra-portrait-smiling.jpg"
                  alt="Chandra smiling — a warm portrait"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS — dark band, alternating placement
          ============================================ */}
      <section className="dark-section px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-4 text-gold/70">
              <span className="h-px w-10 bg-current opacity-60" />
              <Sigil size={18} />
              <span className="h-px w-10 bg-current opacity-60" />
            </div>
            <p className="u-running-head text-center text-gold-light/70">
              Words from those who&rsquo;ve walked this path
            </p>
          </Reveal>

          <div className="mt-20 space-y-20 md:space-y-24">
            {[
              {
                quote:
                  "Chandra held space for me in a way no one ever had. I left our session feeling like I'd been handed back a piece of myself I didn't know I'd lost.",
                name: "Mara T.",
                align: "left" as const,
              },
              {
                quote:
                  "I came in with so much noise in my head. By the end, there was just… stillness. And clarity I hadn't felt in years.",
                name: "Devi L.",
                align: "right" as const,
              },
            ].map((t, i) => (
              <Reveal key={i} variant="rise" delay={i * 120}>
                <blockquote
                  className={`mx-auto max-w-2xl ${
                    t.align === "right" ? "md:ml-auto md:text-right" : ""
                  }`}
                >
                  <p
                    aria-hidden="true"
                    className={`font-serif text-6xl leading-none text-terracotta/40 ${
                      t.align === "right" ? "md:text-right" : ""
                    }`}
                  >
                    &ldquo;
                  </p>
                  <p className="mt-2 font-serif text-2xl italic leading-relaxed text-cream/90 md:text-3xl">
                    {t.quote}
                  </p>
                  <footer className="mt-8 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-gold-light/80">
                    {t.align === "right" ? (
                      <span className="ml-auto flex items-center gap-3">
                        {t.name}
                        <span className="block h-px w-8 bg-current opacity-60" />
                      </span>
                    ) : (
                      <>
                        <span className="block h-px w-8 bg-current opacity-60" />
                        {t.name}
                      </>
                    )}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING CTA — quiet, anchored by sigil
          ============================================ */}
      <section className="px-6 py-28 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mb-8 flex justify-center text-gold animate-soft-pulse">
              <Sigil size={32} />
            </div>
            <h2 className="text-display text-4xl text-brown-deep md:text-5xl lg:text-6xl">
              You don&rsquo;t need to have
              <br />
              <em className="text-terracotta-deep">it all figured out.</em>
            </h2>
            <p className="mt-6 font-serif text-xl italic text-brown-warm md:text-2xl">
              Just a willingness to listen — to yourself, again.
            </p>
            <Divider sigil center tone="text-gold" className="mt-12" />
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/book" variant="filled">
                Book a Session
              </Button>
              <Button href="/contact" variant="ghost">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
