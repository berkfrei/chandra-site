import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function DoulaPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-44 lg:pb-20">
        <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
          Birth Doula
        </p>
        <h1 className="animate-fade-up mt-4 font-serif text-5xl font-light text-brown-deep md:text-6xl lg:text-7xl [animation-delay:150ms]">
          Doula Support
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-brown-warm [animation-delay:300ms]">
          Bringing new life into the world is one of the most sacred thresholds
          a body and soul can cross. You were never meant to walk it alone.
        </p>
      </section>

      <Divider center className="mx-auto" />

      {/* ===== INTRO ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/chandra-holding-newborn.jpg"
                alt="Chandra holding a newborn baby in soft light"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-brown-mid">
                My Approach
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                Sacred companionship through birth
              </h2>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                As a birth doula, I weave together energetic support, ritual,
                deep listening, and embodied presence. Your body knows. Your
                baby knows. I&rsquo;m here to remind you of that.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                I&rsquo;m also here to educate and advocate&nbsp;&mdash; to
                help you understand your options, trust your choices, and feel
                supported in every room you walk into.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                I&rsquo;m not here to lead. I&rsquo;m here to witness, to
                hold, and to remind you of your own strength when you forget.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="bg-parchment px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-serif text-2xl italic leading-relaxed text-brown-deep md:text-3xl">
              Your body knows. Your baby knows.
              <br />
              And you were never meant to walk it alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== HOW I SUPPORT YOU ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              What I Bring
            </p>
            <h2 className="mt-4 text-center font-serif text-4xl font-light text-brown-deep md:text-5xl">
              How I support you
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Energetic Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  I tune into your energy field and your baby&rsquo;s, holding
                  space for whatever needs to move, clear, or open during this
                  sacred time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Education &amp; Advocacy
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  I help you understand your options and feel confident in your
                  choices&nbsp;&mdash; and I stand beside you as a steady voice
                  in the rooms where your own can feel small.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Ritual &amp; Presence
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  Birth is a threshold. I bring ritual, prayer, and embodied
                  presence to honor the sacredness of what your body is doing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Prenatal Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  We begin working together well before birth&nbsp;&mdash;
                  building trust, preparing your body and energy, and creating
                  a birth vision that feels aligned.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Birth Presence
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  I&rsquo;m with you through labor and delivery&nbsp;&mdash;
                  grounding, advocating, and holding the energy of the space so
                  you can surrender into the experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="border border-cream-dark p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light text-brown-deep">
                  Postpartum Care
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  The passage doesn&rsquo;t end at birth. I support you in the
                  tender early days of motherhood&nbsp;&mdash; helping you
                  land, integrate, and trust this new version of yourself.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MY JOURNEY ===== */}
      <section className="bg-parchment px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-brown-mid">
              My Journey
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              How I got here
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              I&rsquo;ve spent the last eight months training and recently
              became a certified birth doula. But this path didn&rsquo;t start
              with a certification&nbsp;&mdash; it started with my own
              experience of motherhood, my own unraveling, and the deep knowing
              that these thresholds deserve sacred companionship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              As a mother myself, I understand what it means to cross this
              threshold&nbsp;&mdash; the beauty, the rawness, the
              transformation. I bring that lived experience alongside my
              training and my energetic gifts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== PACKAGE — THE SEED ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Offerings
            </p>
            <h2 className="mt-4 text-center font-serif text-3xl font-light text-brown-deep md:text-4xl">
              Packages &amp; Pricing
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 border border-cream-dark p-8 md:p-12">
              <p className="text-[0.65rem] uppercase tracking-[0.14em] text-terracotta">
                Birth Doula Package
              </p>
              <h3 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                The Seed
              </h3>
              <p className="mt-2 font-serif text-2xl text-brown-deep">
                $1,500
              </p>

              <Divider className="mt-6" />

              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                Everything you need to feel held, informed, and supported as
                you bring new life into the world&nbsp;&mdash; with the
                energetic depth of channeling woven into every step.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "2 prenatal visits (in-person or virtual)",
                  "1 channeling session during pregnancy",
                  "Birth preferences planning together",
                  "On-call support from 38 weeks",
                  "Continuous labor &amp; delivery support",
                  "Energetic support &amp; ritual during birth",
                  "1 postpartum visit within the first two weeks",
                  "Phone &amp; text support throughout our time together",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-b border-cream-dark pb-3 last:border-0"
                  >
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                    <span
                      className="text-[0.9rem] text-brown-warm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm italic leading-relaxed text-brown-mid">
                A $500 deposit is due at booking, with the remainder due by
                36&nbsp;weeks. Payment plans are available&nbsp;&mdash;
                let&rsquo;s find what works for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light text-brown-deep md:text-5xl">
              Ready to talk?
            </h2>
            <p className="mt-4 font-serif text-lg italic text-brown-warm">
              Whether you&rsquo;re just beginning to think about support or you
              already know you want a doula by your side&nbsp;&mdash; I&rsquo;d
              love to hear from you.
            </p>
            <div className="mt-10">
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
