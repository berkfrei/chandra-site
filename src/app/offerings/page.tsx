import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import Parallax from "@/components/ui/parallax";
import Image from "next/image";

const soulChatReceives = [
  "Clarity on life decisions, relationships, or transitions",
  "Messages from your Higher Self, the Earth Mother, spirit guides, angels, and ancestors",
  "Energetic clearing, realignment, and activations",
  "Insight into patterns, blocks, and soul-level purpose",
  "Insights into your soul gifts and how to work with them",
];


export default function OfferingsPage() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative px-6 pt-36 pb-20 text-center lg:px-10 lg:pt-48 lg:pb-24">
        <Reveal variant="soft">
          <p className="u-running-head text-brown-mid">Soul Work</p>
          <div className="mt-8 flex justify-center text-gold animate-soft-pulse">
            <Sigil size={28} />
          </div>
        </Reveal>
        <Reveal variant="soft" delay={150}>
          <h1 className="text-display animate-fade-up mt-8 text-5xl text-brown-deep md:text-7xl lg:text-[7.5rem]">
            Channeled
            <br />
            <em className="text-terracotta-deep">Offerings.</em>
          </h1>
        </Reveal>
        <Reveal variant="soft" delay={300}>
          <p className="mx-auto mt-10 max-w-xl font-serif text-xl italic leading-relaxed text-brown-warm md:text-2xl">
            All of my offerings share one intention: to help you reconnect to
            the voice of your soul and the wisdom you already carry — and to
            walk beside you as you find your way back to yourself.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto flex max-w-md justify-center text-gold/70">
        <Divider sigil center tone="text-gold/70" />
      </div>

      {/* ============================================
          OFFERING 01 — CHANNELING (Soul Chats)
          ============================================ */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-y-14 md:gap-x-12">
          {/* Image column — sticky mood piece */}
          <div className="col-span-12 md:col-span-5">
            <Reveal variant="soft">
              <div className="md:sticky md:top-32">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 bg-terracotta-deep/18"
                  />
                  <Parallax speed={0.08}>
                    <div
                      className="img-vignette img-ember-bleed relative overflow-hidden ring-1 ring-gold/25"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src="/images/sunset-clouds-vertical.jpg"
                        alt="Blue sky with a single soft cloud stretching across it"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Parallax>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content column */}
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={150}>
              <h2 className="text-display text-5xl text-brown-deep md:text-6xl lg:text-7xl">
                Soul Chats
              </h2>
              <p className="mt-3 font-serif text-xl italic text-terracotta-deep md:text-2xl">
                One-to-one channeling sessions
              </p>
              <Divider className="mt-8" />

              <p className="drop-cap mt-10 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                These Soul Chats are deeply personal and intuitive. In these
                sessions, I tune into the frequency of the Mother — the Earth,
                and her Higher Self. Through this frequency, I connect directly
                with your Higher Self, becoming a bridge and a vessel for the
                Soul to speak.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                Each session is guided entirely by your Higher Self and the
                consciousness of the Earth Mother. Together, they guide me into
                the electromagnetic field of your heart, clearing and
                transmuting any blocks or stuck energies. This creates a clear
                pathway for your soul to come through and communicate.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                I will be reading your entire energy field, receiving messages
                and guidance that serves your highest, most abundant timeline.
                Each session is unscripted and unrepeatable, shaped entirely by
                what wants to come through…
              </p>

              {/* Editorial receives list */}
              <div className="mt-14">
                <div className="flex items-center gap-4 text-gold/60">
                  <Sigil size={16} />
                  <p className="u-running-head text-brown-deep">
                    What you may receive during our session
                  </p>
                </div>
                <ol className="mt-8 space-y-5">
                  {soulChatReceives.map((text, i) => (
                    <li
                      key={i}
                      className="group/item flex items-baseline gap-6 border-b border-cream-dark/70 pb-5 last:border-0"
                    >
                      <span className="shrink-0 block h-1.5 w-1.5 rounded-full bg-gold mt-2" />
                      <span className="font-serif text-lg leading-snug text-brown-deep md:text-xl">
                        {text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mt-12 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                My intention is to help you find the answers you already have
                within and the wisdom you already know — to support you in your
                own remembering and becoming. My goal after each session is to
                give you the tools and the support you need to continue to
                cultivate a deep trust and communication with your soul and our
                Earth Mother — guidance that lives on beyond our session.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button href="/book" variant="filled">
                  Book a Session
                </Button>
                <p className="font-serif text-sm italic text-brown-mid">
                  60 minutes · virtual or in-person · recorded for your
                  reference
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sigil breather */}
      <div className="mx-auto flex max-w-md justify-center py-10 text-gold/70">
        <Sigil size={22} />
      </div>

      {/* ============================================
          OFFERING 02 — CHANNELED MEDITATIONS
          ============================================ */}
      <section className="relative overflow-hidden bg-parchment px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-y-14 md:gap-x-12">
          {/* Content column first (reversed) */}
          <div className="order-2 col-span-12 md:order-1 md:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-sage">
                <span className="block h-1 w-1 rounded-full bg-current" />
                Coming Soon
              </p>
              <h2 className="text-display mt-4 text-5xl text-brown-deep md:text-6xl lg:text-7xl">
                Channeled
                <br />
                <em className="text-terracotta-deep">Meditations.</em>
              </h2>
              <Divider className="mt-8" />

              <p className="mt-10 font-serif text-lg leading-[1.7] text-brown-deep md:text-xl">
                Channeled meditations — doorways to your soul, your body, the
                Earth Mother, and the realms she holds. Each one is recorded
                with intention, shaped by what wants to come through in the
                moment of channeling.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                These meditations will help you hear the voice of your soul.
                Ground you into the Earth. Soften you into your body. Open the
                door to your guides, your angels, and the unseen realms.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                For the mornings when you need grounding. The evenings when you
                need release. And all the moments in between when you simply
                need to remember the magic that you are held in.
              </p>

              <p className="mt-10 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-sage">
                <span className="block h-1 w-1 rounded-full bg-current" />
                Join the list to be notified
              </p>
            </Reveal>
          </div>

          {/* Image column */}
          <div className="order-1 col-span-12 md:order-2 md:col-span-5">
            <Reveal variant="soft" delay={150}>
              <div className="md:sticky md:top-32">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-px translate-x-3 translate-y-3 bg-gold/25"
                  />
                  <Parallax speed={0.08}>
                    <div
                      className="img-vignette img-ember-bleed relative overflow-hidden ring-1 ring-gold/25"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src="/images/golden-sunset-clouds.jpg"
                        alt="Golden sunset light over layered clouds — ethereal sky"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Parallax>
                </div>
              </div>
            </Reveal>
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
              Not sure where
              <br />
              <em className="text-terracotta-deep">to begin?</em>
            </h2>
            <p className="mt-6 font-serif text-xl italic text-brown-warm md:text-2xl">
              That&rsquo;s okay. You don&rsquo;t need to know the destination —
              just that you&rsquo;re ready to start walking.
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
