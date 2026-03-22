import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import ImagePlaceholder from "@/components/ui/image-placeholder";

export default function OfferingsPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-44 lg:pb-20">
        <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
          What I Offer
        </p>
        <h1 className="animate-fade-up mt-4 font-serif text-5xl font-light text-brown-deep md:text-6xl lg:text-7xl [animation-delay:150ms]">
          Offerings
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-brown-warm [animation-delay:300ms]">
          All of my offerings share one intention: to help you reconnect with
          the wisdom you already carry, and to walk beside you as you find your
          way back to yourself.
        </p>
      </section>

      <Divider center className="mx-auto" />

      {/* ===== OFFERING 01 — CHANNELING ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <ImagePlaceholder
              aspectRatio="3/4"
              description="Sacred space prepared for a channeling session"
            />
          </Reveal>

          <Reveal delay={150}>
            <div>
              <span className="font-serif text-6xl font-light text-sand">
                01
              </span>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-terracotta">
                Primary Offering
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                Channeling Sessions
              </h2>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                In a channeling session, I open a direct line of communication
                between you and the energies that hold your highest
                truth&nbsp;&mdash; your higher self, spirit guides, ancestors,
                and the unified field. Each session is completely unique,
                shaped by what your soul most needs in the moment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                This is not fortune-telling. It is a sacred conversation with
                the deepest part of you&nbsp;&mdash; the part that already knows
                the answers.
              </p>

              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.14em] text-brown-mid">
                What you may receive
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brown-warm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Clarity on life decisions, relationships, or transitions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Messages from guides, loved ones, or your own higher self
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Energetic clearing and realignment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Insight into patterns, blocks, and soul-level purpose
                </li>
              </ul>

              <p className="mt-6 text-sm italic text-brown-mid">
                60 minutes, virtual or in-person. Recorded for your reference.
              </p>

              <div className="mt-8">
                <Button href="/book" variant="filled">
                  Book a Session
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== OFFERING 02 — DOULA ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={150}>
            <div className="md:order-1">
              <span className="font-serif text-6xl font-light text-sand">
                02
              </span>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-terracotta">
                Emerging Offering
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                Doula Support
              </h2>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                Life&rsquo;s thresholds&nbsp;&mdash; birth, death, loss,
                becoming&nbsp;&mdash; are not meant to be crossed alone. As a
                doula, I offer sacred companionship through the passages that
                change us most. My approach weaves together energetic support,
                ritual, deep listening, and embodied presence.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                Whether you are preparing to bring new life into the world,
                navigating grief, or moving through a profound personal
                transformation, I walk beside you&nbsp;&mdash; not to lead, but
                to witness. To remind you of your own strength when you forget.
              </p>

              <span className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.14em] text-terracotta">
                Accepting inquiries
              </span>

              <div className="mt-6">
                <Button href="/contact" variant="default">
                  Inquire
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="md:order-2">
              <ImagePlaceholder
                aspectRatio="3/4"
                description="Hands resting gently in a gesture of support"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== OFFERING 03 — MEDITATIONS ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <ImagePlaceholder
              aspectRatio="3/4"
              description="Soft morning light through a meditation space"
            />
          </Reveal>

          <Reveal delay={150}>
            <div>
              <span className="font-serif text-6xl font-light text-sand">
                03
              </span>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-sage">
                Coming Soon
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                Meditation Bundles
              </h2>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                Guided audio meditations designed to reconnect you with your
                inner stillness, ancestral wisdom, and the rhythms of your own
                sacred body. Each bundle is channeled around a specific theme
                and recorded with intention.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                These meditations are for the mornings when you need grounding,
                the evenings when you need release, and all the moments in
                between when you simply need to come home to yourself.
              </p>

              <span className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.14em] text-sage">
                Coming soon&nbsp;&mdash; join the list to be notified
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light text-brown-deep md:text-5xl">
              Not sure where to begin?
            </h2>
            <p className="mt-4 font-serif text-lg italic text-brown-warm">
              That&rsquo;s okay. You don&rsquo;t need to know the
              destination&nbsp;&mdash; just that you&rsquo;re ready to start
              walking.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book" variant="filled">
                Book a Session
              </Button>
              <Button href="/contact" variant="default">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
