import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import Parallax from "@/components/ui/parallax";
import Image from "next/image";

const philosophy = [
  {
    text: "You are not broken. Your wholeness has been waiting, the whole time, underneath every layer.",
    align: "left" as const,
  },
  {
    text: "Your soul is a gentle voice. When you learn to hear her, she guides you through every threshold.",
    align: "right" as const,
  },
  {
    text: "The body carries what the mind cannot. Healing moves through the nervous system, not around it.",
    align: "left" as const,
  },
  {
    text: "We are held in the frequencies of Earth Mother and the Cosmic Mother. Their love is not a metaphor.",
    align: "right" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================================
          HERO — atmospheric, type-led
          ============================================ */}
      <section className="relative px-6 pt-36 pb-20 text-center lg:px-10 lg:pt-48 lg:pb-28">
        <Reveal variant="soft">
          <p className="u-running-head text-brown-mid">About</p>
          <div className="mt-8 flex justify-center text-gold animate-soft-pulse">
            <Sigil size={28} />
          </div>
        </Reveal>
        <Reveal variant="soft" delay={150}>
          <h1 className="text-display animate-fade-up mt-8 text-7xl text-brown-deep md:text-8xl lg:text-[10rem]">
            <em>Chandra</em>
          </h1>
        </Reveal>
        <Reveal variant="soft" delay={300}>
          <p className="mx-auto mt-8 max-w-md font-serif text-xl italic text-brown-warm md:text-2xl">
            channel &middot; bridge &middot; vessel
          </p>
        </Reveal>
      </section>

      {/* ============================================
          PORTRAIT + INTRO — asymmetric, framed portrait of Chandra
          ============================================ */}
      <section className="relative overflow-hidden px-6 pb-32 lg:px-10 lg:pb-40">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal variant="soft">
              <div className="group/portrait relative">
                {/* Offset shadow-card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-brown-deep/15 transition-transform duration-700 ease-out group-hover/portrait:translate-x-2 group-hover/portrait:translate-y-2"
                />
                <Parallax speed={0.05}>
                  <div
                    className="img-vignette relative overflow-hidden bg-cream-dark ring-1 ring-gold/30"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <Image
                      src="/images/chandra-portrait-smiling.jpg"
                      alt="Chandra smiling — warm portrait in a pink dress"
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover/portrait:scale-[1.02]"
                      style={{ objectPosition: "50% 30%" }}
                    />
                  </div>
                </Parallax>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-6 lg:pl-10">
            <Reveal delay={150}>
              <p className="font-serif text-3xl font-light leading-[1.25] text-brown-deep md:text-4xl lg:text-[2.6rem]">
                I&rsquo;m a <em className="text-terracotta-deep">channel</em>, a{" "}
                <em className="text-terracotta-deep">healer</em>, and a{" "}
                <em className="text-terracotta-deep">bridge</em> — a vessel
                through which your higher self, your spirit guides, your angels,
                and your ancestors can speak, held in the frequencies of the
                Mother.
              </p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-brown-warm md:text-[1.05rem]">
                I help people hear the voice of their own soul — the one
                that&rsquo;s been waiting beneath the noise, the conditioning,
                and the stories we carry. My work is helping you find your
                way back to that voice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER I — The Opening (cream, warm, intimate)
          ============================================ */}
      <section className="relative bg-cream px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center text-gold">
              <Sigil size={24} className="mx-auto" />
            </div>
            <p className="mt-6 text-center font-serif text-sm italic tracking-[0.3em] uppercase text-brown-mid">
              Chapter I &nbsp;·&nbsp; The Opening
            </p>
            <h2 className="text-display mt-6 text-center text-4xl text-brown-deep md:text-5xl lg:text-6xl">
              When my soul
              <br />
              <em className="text-terracotta-deep">first spoke.</em>
            </h2>
            <Divider center className="mt-10" />
            <p className="drop-cap mt-12 font-serif text-lg leading-[1.65] text-brown-deep md:text-xl">
              Four years ago, during a plant medicine ceremony, I heard the
              voice of my soul for the first time. She cracked me open. In an
              instant, she cleared some of my deepest fears — fears that had
              quite literally dictated my life.
            </p>
            <p className="mt-6 font-serif text-lg leading-[1.65] text-brown-warm md:text-xl">
              That experience fundamentally changed my perception of reality
              and set me on a path of deep, deep healing I didn&rsquo;t know was
              possible. From that point on, I knew there was no going back —
              only through.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          CHAPTER II — The Transmission (parchment, amber rising)
          ============================================ */}
      <section className="relative overflow-hidden bg-parchment px-6 py-28 lg:px-10 lg:py-36">
        {/* Soft amber radial glow background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(184, 151, 106, 0.18) 0%, transparent 55%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Wide mood image leading into the chapter */}
          <Reveal variant="soft">
            <div className="relative mx-auto" style={{ maxWidth: "60rem" }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 bg-brown-deep/12"
              />
              <Parallax speed={0.12}>
                <div
                  className="img-vignette relative overflow-hidden ring-1 ring-gold/25"
                  style={{ aspectRatio: "21/9" }}
                >
                  <Image
                    src="/images/golden-sunset-clouds.jpg"
                    alt="Golden sunset light over layered clouds — ethereal sky"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </div>
          </Reveal>

          <div className="mx-auto mt-20 max-w-2xl">
            <Reveal>
              <div className="text-center text-gold">
                <Sigil size={24} variant="sun" className="mx-auto" />
              </div>
              <p className="mt-6 text-center font-serif text-sm italic tracking-[0.3em] uppercase text-brown-mid">
                Chapter II &nbsp;·&nbsp; The Transmission
              </p>
              <h2 className="text-display mt-6 text-center text-4xl text-brown-deep md:text-5xl lg:text-6xl">
                The biggest
                <br />
                <em className="text-terracotta-deep">transmission.</em>
              </h2>
              <Divider center className="mt-10" />
              <p className="mt-12 font-serif text-lg leading-[1.65] text-brown-deep md:text-xl">
                Layer by layer I unraveled, and my soul never left my side — a
                gentle voice I came to know, guiding me through every
                threshold. Then, in September 2024, I received my biggest
                transmission, where she showed me everything: my power, my
                divinity, my gifts, my purpose.
              </p>
              <p className="mt-6 font-serif text-lg leading-[1.65] text-brown-warm md:text-xl">
                Through her, I met the Mother (the Earth Consciousness and her
                Higher Self). Their love combined devoured me. Together they
                have shown me the cosmic truth of who I am and where I came from
                — a truth that required me to let go of everything I thought I
                knew about this human experience.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER III — The Underworld (DARK)
          ============================================ */}
      <section className="dark-section px-6 py-32 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-7xl">
          {/* Duotoned image floats off-center */}
          <Reveal variant="soft">
            <div className="grid grid-cols-12 gap-y-10">
              <div className="col-span-12 md:col-span-5">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 bg-ember/25"
                  />
                  <Parallax speed={0.08}>
                    <div
                      className="relative overflow-hidden ring-1 ring-ember/30"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src="/images/red-rocks-golden-hour.jpg"
                        alt="Red rock at the edge of dusk"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                        style={{
                          filter:
                            "sepia(0.55) saturate(1.05) hue-rotate(-12deg) brightness(0.55) contrast(1.18)",
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(35,24,16,0.2) 0%, rgba(35,24,16,0.6) 100%)",
                        }}
                      />
                    </div>
                  </Parallax>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 md:pl-10 lg:pl-16">
                <div className="text-terracotta-light animate-ember-glow">
                  <Sigil size={26} variant="sun" />
                </div>
                <p className="mt-6 font-serif text-sm italic tracking-[0.3em] uppercase text-gold-light">
                  Chapter III &nbsp;·&nbsp; The Underworld
                </p>
                <h2 className="text-display mt-6 text-5xl text-cream md:text-6xl lg:text-7xl">
                  Into the
                  <br />
                  <em className="text-terracotta-light">shadow.</em>
                </h2>

                <div className="mt-10 flex items-center gap-4 text-gold-light/70">
                  <span className="block h-px w-16 bg-current opacity-70" />
                  <Sigil size={14} />
                  <span className="block h-px w-16 bg-current opacity-70" />
                </div>

                <p className="mt-10 font-serif text-lg leading-[1.7] text-cream md:text-xl">
                  What followed was my real initiation — a full reclamation of
                  my soul and sovereignty. My ego shattered. My nervous system
                  recalibrated. I had to anchor a profound, unshakable trust
                  into every moment, because I was terrified of letting go,
                  and every belief rooted in fear had to go.
                </p>
                <p className="mt-6 font-serif text-lg leading-[1.7] text-cream/95 md:text-xl">
                  Slowly I loosened my grip. And through that letting go, I
                  reclaimed every part of myself that had been hidden — the
                  parts deemed unworthy, unlovable, shameful. Because
                  underneath all the density, all the stories, all the shame
                  and pain and grief, was my soul. My true essence. My
                  wholeness.
                </p>
                <p className="mt-6 font-serif text-lg leading-[1.7] text-cream/95 md:text-xl">
                  I spent the last year and a half deep in this underworld,
                  gathering every part of my fragmented heart, moving through
                  mountains of grief. Every ego death opened a deeper trust. My soul never left my side. Her voice guided me through every threshold.
                </p>
                <p className="mt-10 font-serif text-2xl italic leading-snug text-terracotta-light md:text-3xl">
                  It was the hardest year and a half of my life — and the most
                  extraordinary, mystical, magical.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          CHAPTER IV — The Blooming (returns to gold)
          ============================================ */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
        {/* Warm bloom gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212, 188, 150, 0.4) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal variant="soft">
            <div className="group/bloom relative mx-auto" style={{ maxWidth: "30rem" }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 bg-brown-deep/15"
              />
              <Parallax speed={0.06}>
                <div
                  className="img-ember-bleed img-vignette relative overflow-hidden ring-1 ring-gold/30"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/images/chandra-red-rocks-sunset.jpg"
                    alt="Chandra's daughter walking into the red rocks at sunset"
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </div>
          </Reveal>

          <div className="mx-auto mt-20 max-w-2xl">
            <Reveal>
              <div className="text-center text-gold animate-soft-pulse">
                <Sigil size={28} className="mx-auto" />
              </div>
              <p className="mt-6 text-center font-serif text-sm italic tracking-[0.3em] uppercase text-brown-mid">
                Chapter IV &nbsp;·&nbsp; The Blooming
              </p>
              <h2 className="text-display mt-6 text-center text-4xl text-brown-deep md:text-5xl lg:text-6xl">
                Seeds ready to
                <br />
                <em className="text-terracotta-deep">bloom.</em>
              </h2>
              <Divider center className="mt-10" />
              <p className="mt-12 font-serif text-lg leading-[1.65] text-brown-deep md:text-xl">
                All the while, I was mothering my inner child right alongside
                my own daughters — giving that little one, and myself,
                permission to create, to sing, to play, to dance. I came to
                know my spirit guides and the Earth Mother intimately, spending
                hours channeling and praying with them. My gifts began to
                activate. My throat chakra opened. I started channeling songs
                and poetry, and watched my daughters do the same.
              </p>
              <p className="mt-6 font-serif text-lg leading-[1.65] text-brown-warm md:text-xl">
                Over the past year, I&rsquo;ve been quietly channeling for
                others — practicing, expanding on my gifts, and deepening my
                trust in this work. Alongside that, I&rsquo;ve spent the last
                eight months training and recently became a certified birth
                doula. This is my first time truly putting my gifts out there
                as an online offering, and it feels like exactly the right
                time.
              </p>
              <p className="mt-10 text-center font-serif text-2xl italic leading-snug text-terracotta-deep md:text-3xl">
                Seeds I&rsquo;ve been quietly tending for years
                <br />
                are finally ready to bloom.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY — scattered manifesto
          ============================================ */}
      <section className="relative overflow-hidden bg-parchment px-6 py-32 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center text-gold">
              <Sigil size={26} className="mx-auto" />
            </div>
            <p className="mt-6 text-center u-running-head text-brown-mid">
              Philosophy
            </p>
            <h2 className="text-display mt-6 text-center text-5xl text-brown-deep md:text-6xl lg:text-7xl">
              What I
              <em className="text-terracotta-deep"> believe.</em>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-10 md:space-y-12">
            {philosophy.map((p, i) => (
              <Reveal key={i} variant="rise" delay={i * 80}>
                <p
                  className="mx-auto max-w-2xl font-serif text-lg italic leading-[1.5] text-brown-deep md:text-xl lg:text-2xl"
                >
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING CTA
          ============================================ */}
      <section className="px-6 py-28 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mb-8 flex justify-center text-gold animate-soft-pulse">
              <Sigil size={32} />
            </div>
            <h2 className="text-display text-4xl text-brown-deep md:text-5xl lg:text-6xl">
              I&rsquo;d love to
              <br />
              <em className="text-terracotta-deep">hear from you.</em>
            </h2>
            <p className="mt-6 font-serif text-xl italic text-brown-warm md:text-2xl">
              If you&rsquo;re in your own underworld, or standing at the edge of
              one — you are not alone here.
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
