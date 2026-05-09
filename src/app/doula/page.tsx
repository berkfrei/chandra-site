import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Sigil from "@/components/ui/sigil";
import Parallax from "@/components/ui/parallax";
import Image from "next/image";


const supportWays = [
  {
    title: "Energetic Support",
    body: "I tune into your energy field and your baby's, holding space for whatever needs to move, clear, or open during this sacred time.",
  },
  {
    title: "Education & Advocacy",
    body: "I help you understand your options and feel confident in your choices — and I stand beside you as a steady voice in the rooms where your own can feel small.",
  },
  {
    title: "Ritual & Presence",
    body: "Birth is a threshold. I bring ritual, prayer, and embodied presence to honor the sacredness of what your body is doing.",
  },
  {
    title: "Prenatal Support",
    body: "We begin working together well before birth — building trust, preparing your body and energy, and creating a birth vision that feels aligned.",
  },
  {
    title: "Birth Presence",
    body: "I'm with you through labor and delivery — grounding, advocating, and holding the energy of the space so you can surrender into the experience.",
  },
  {
    title: "Postpartum Care",
    body: "The passage doesn't end at birth. I support you in the tender early days of motherhood — helping you land, integrate, and trust this new version of yourself.",
  },
];

const seedItems = [
  "2 prenatal visits (in-person or virtual)",
  "1 channeling session during pregnancy",
  "Birth preferences planning together",
  "On-call support from 38 weeks",
  "Continuous labor & delivery support",
  "Energetic support & ritual during birth",
  "1 postpartum visit within the first two weeks",
  "Phone & text support throughout our time together",
];

export default function DoulaPage() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative px-6 pt-36 pb-20 text-center lg:px-10 lg:pt-48 lg:pb-24">
        <Reveal variant="soft">
          <p className="u-running-head text-brown-mid">Birth Doula</p>
          <div className="mt-8 flex justify-center text-gold animate-soft-pulse">
            <Sigil size={28} />
          </div>
        </Reveal>
        <Reveal variant="soft" delay={150}>
          <h1 className="text-display animate-fade-up mt-8 text-5xl text-brown-deep md:text-7xl lg:text-[7.5rem]">
            Doula
            <br />
            <em className="text-terracotta-deep">Support.</em>
          </h1>
        </Reveal>
        <Reveal variant="soft" delay={300}>
          <p className="mx-auto mt-10 max-w-xl font-serif text-xl italic leading-relaxed text-brown-warm md:text-2xl">
            Bringing new life into the world is one of the most sacred
            thresholds a body and soul can cross. You were never meant to walk
            it alone.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto flex max-w-md justify-center text-gold/70">
        <Divider sigil center tone="text-gold/70" />
      </div>

      {/* ============================================
          INTRO — portrait + approach
          ============================================ */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-y-14 md:gap-x-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal variant="soft">
              <div className="md:sticky md:top-32">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 bg-brown-deep/15"
                  />
                  <Parallax speed={0.06}>
                    <div
                      className="img-vignette img-ember-bleed relative overflow-hidden ring-1 ring-gold/30"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src="/images/chandra-holding-newborn.jpg"
                        alt="Chandra holding a newborn baby in soft light"
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

          <div className="col-span-12 md:col-span-7">
            <Reveal delay={150}>
              <p className="u-running-head text-brown-mid">My approach</p>
              <h2 className="text-display mt-5 text-4xl text-brown-deep md:text-5xl lg:text-6xl">
                Sacred companionship
                <br />
                <em className="text-terracotta-deep">through birth.</em>
              </h2>
              <Divider className="mt-8" />

              <p className="drop-cap mt-10 font-serif text-lg leading-[1.7] text-brown-deep md:text-xl">
                As a birth doula, I weave together energetic support, ritual,
                deep listening, and embodied presence. Your body knows. Your
                baby knows. I&rsquo;m here to remind you of that.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                I&rsquo;m also here to educate and advocate — to help you
                understand your options, trust your choices, and feel supported
                in every room you walk into.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
                I&rsquo;m not here to lead. I&rsquo;m here to witness, to hold,
                and to remind you of your own strength when you forget.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW I SUPPORT YOU — editorial 2-col register
          ============================================ */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center text-gold">
              <Sigil size={26} className="mx-auto" />
            </div>
            <p className="mt-6 text-center u-running-head text-brown-mid">
              What I bring
            </p>
            <h2 className="text-display mt-6 text-center text-5xl text-brown-deep md:text-6xl lg:text-7xl">
              How I
              <em className="text-terracotta-deep"> support you.</em>
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-14">
            {supportWays.map((item, i) => {
              const isBottomRow = i >= supportWays.length - 2;
              const isRightCol = i % 2 === 1;
              return (
                <Reveal key={item.title} variant="soft" delay={(i % 2) * 80}>
                  <article
                    className={`flex items-baseline gap-6 py-10 ${
                      !isBottomRow ? "border-b border-cream-dark/70" : ""
                    } ${isRightCol ? "md:pl-10" : "md:pr-10"}`}
                  >
                    <span className="shrink-0 block h-2 w-2 rounded-full bg-gold mt-3" />
                    <div>
                      <h3 className="font-serif text-2xl font-light leading-tight text-brown-deep md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-[1.7] text-brown-warm">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          MY JOURNEY
          ============================================ */}
      <section className="relative overflow-hidden bg-parchment px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex text-gold/70">
              <Sigil size={20} />
            </div>
            <p className="u-running-head mt-6 text-brown-mid">My journey</p>
            <h2 className="text-display mt-4 text-4xl text-brown-deep md:text-5xl lg:text-6xl">
              How I
              <em className="text-terracotta-deep"> got here.</em>
            </h2>
            <Divider className="mt-8" />
            <p className="mt-10 font-serif text-lg leading-[1.7] text-brown-deep md:text-xl">
              I&rsquo;ve spent the last eight months training and recently
              became a certified birth doula. But this path didn&rsquo;t start
              with a certification — it started with my own experience of
              motherhood, my own unraveling, and the deep knowing that these
              thresholds deserve sacred companionship.
            </p>
            <p className="mt-5 text-base leading-[1.75] text-brown-warm md:text-[1.05rem]">
              As a mother myself, I understand what it means to cross this
              threshold — the beauty, the rawness, the transformation. I bring
              that lived experience alongside my training and my energetic
              gifts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================
          THE SEED — package as offering leaf
          ============================================ */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center u-running-head text-brown-mid">
              Offerings
            </p>
            <h2 className="text-display mt-5 text-center text-4xl text-brown-deep md:text-5xl lg:text-6xl">
              Packages &amp;
              <em className="text-terracotta-deep"> pricing.</em>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative mt-16 bg-parchment px-8 py-16 md:px-16 md:py-20">
              {/* Top sigil */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cream px-4">
                <div className="text-gold animate-soft-pulse">
                  <Sigil size={24} variant="sun" />
                </div>
              </div>

              <p className="text-center u-running-head text-terracotta">
                Birth Doula Package
              </p>
              <h3 className="text-display mt-4 text-center text-5xl text-brown-deep md:text-6xl lg:text-7xl">
                <em>The Seed</em>
              </h3>
              <p className="mt-5 text-center font-serif text-3xl font-light text-brown-deep md:text-4xl">
                $1,200
              </p>
              <Divider center className="mt-10" />

              <p className="mx-auto mt-10 max-w-lg text-center font-serif text-lg italic leading-relaxed text-brown-warm md:text-xl">
                Everything you need to feel held, informed, and supported as
                you bring new life into the world — with the energetic depth of
                channeling woven into every step.
              </p>

              <ol className="mx-auto mt-12 max-w-xl space-y-4">
                {seedItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-5 border-b border-cream-dark/80 pb-4 last:border-0"
                  >
                    <span className="shrink-0 font-serif text-lg italic text-gold md:text-xl">
                      {i + 1}.
                    </span>
                    <span className="font-serif text-[1.05rem] leading-snug text-brown-deep md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mx-auto mt-12 max-w-lg text-center font-serif text-sm italic leading-relaxed text-brown-mid md:text-base">
                A $500 deposit is due at booking, with the remainder due by
                38&nbsp;weeks. Payment plans are available — let&rsquo;s find
                what works for you.
              </p>

              {/* Bottom sigil */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-cream px-4">
                <div className="text-gold/70">
                  <Sigil size={18} />
                </div>
              </div>
            </article>
          </Reveal>
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
              Ready to
              <em className="text-terracotta-deep"> talk?</em>
            </h2>
            <p className="mt-6 font-serif text-xl italic text-brown-warm md:text-2xl">
              Whether you&rsquo;re just beginning to think about support or you
              already know you want a doula by your side — I&rsquo;d love to
              hear from you.
            </p>
            <Divider sigil center tone="text-gold" className="mt-12" />
            <div className="mt-12">
              <Button href="/contact" variant="filled">
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
