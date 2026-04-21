import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";


export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="px-6 pt-32 pb-24 lg:px-10 lg:pt-44 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div>
            <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              The soul &middot; The channel &middot; The bridge
            </p>
            <h1 className="animate-fade-up mt-6 font-serif text-5xl font-light leading-[1.15] text-brown-deep md:text-6xl lg:text-7xl [animation-delay:150ms]">
              Your soul knows the way.
              <br />
              <em className="text-terracotta">Let her lead.</em>
            </h1>
            <p className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-brown-warm [animation-delay:300ms]">
              Channeling, sacred support, and soul-deep guidance for those
              ready to come home to themselves.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:450ms]">
              <Button href="/book" variant="filled">
                Book a Session
              </Button>
              <Button href="/offerings" variant="default">
                Explore Offerings
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in [animation-delay:300ms]">
            <div
              className="relative overflow-hidden bg-cream-dark"
              style={{ aspectRatio: "2/3" }}
            >
              <Image
                src="/images/chandra-golden-hour-self-portrait.jpg"
                alt="Chandra in golden-hour light — a soft self-portrait through sunlit glass"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFERINGS PREVIEW ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              How we can work together
            </p>
            <h2 className="mt-4 text-center font-serif text-4xl font-light text-brown-deep md:text-5xl">
              Offerings
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <Reveal delay={0}>
              <div className="border border-cream-dark p-8 md:p-10">
                <span className="font-serif text-5xl font-light text-sand">
                  01
                </span>
                <h3 className="mt-4 font-serif text-2xl font-light text-brown-deep">
                  Soul Chats
                </h3>
                <p className="mt-2 text-sm font-medium tracking-wide text-terracotta">
                  One-to-one channeling sessions
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  I become a vessel. Your soul speaks. And the rest unfolds
                  from there.
                </p>
                <div className="mt-6">
                  <Button href="/offerings" variant="ghost">
                    Learn More
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={150}>
              <div className="border border-cream-dark p-8 md:p-10">
                <span className="font-serif text-5xl font-light text-sand">
                  02
                </span>
                <h3 className="mt-4 font-serif text-2xl font-light text-brown-deep">
                  Doula Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  Sacred companionship through life&rsquo;s most profound
                  threshold&nbsp;&mdash; pregnancy, birth, and the tender
                  passage into motherhood. Grounded in presence, ritual, and
                  deep listening.
                </p>
                <span className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.14em] text-terracotta">
                  Accepting inquiries
                </span>
                <div className="mt-4">
                  <Button href="/doula" variant="ghost">
                    Learn More
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={300}>
              <div className="border border-cream-dark p-8 md:p-10">
                <span className="font-serif text-5xl font-light text-sand">
                  03
                </span>
                <h3 className="mt-4 font-serif text-2xl font-light text-brown-deep">
                  Channeled Meditations
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-warm">
                  Channeled meditations&nbsp;&mdash; doorways to your soul,
                  your body, the Earth Mother, and the realms she holds.
                </p>
                <span className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.14em] text-sage">
                  Coming soon
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/red-rocks-golden-hour.jpg"
                alt="Red rock landscape bathed in golden-hour light — Utah mountains at sunset"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
                What shifts
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light text-brown-deep md:text-5xl">
                A return to yourself
              </h2>

              <div className="mt-10 space-y-0">
                {[
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
                    desc: "A deepening relationship with the voice of your soul, the voice of the Mother (the Earth and her Higher Self), and all your spiritual support.",
                  },
                  {
                    label: "Alignment",
                    desc: "As you begin to hold a higher frequency, your reality rearranges to match it.",
                  },
                  {
                    label: "Sovereignty",
                    desc: "You stop outsourcing your knowing. You remember. You reclaim your sovereignty and start to live a soul-led, heart-centered life.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`py-5 ${
                      i !== 0 ? "border-t border-cream-dark" : ""
                    }`}
                  >
                    <p className="text-[0.7rem] uppercase tracking-[0.14em] text-brown-mid">
                      {item.label}
                    </p>
                    <p className="mt-1 font-serif text-lg italic text-brown-deep">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full">
              <Image
                src="/images/chandra-portrait-smiling.jpg"
                alt="Chandra smiling — warm portrait"
                width={224}
                height={224}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-8 font-serif text-4xl font-light text-brown-deep">
              Hi, I&rsquo;m Chandra
            </h2>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                Read my story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-brown-deep px-6 py-24 text-cream lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-sand">
              Words from those who&rsquo;ve walked this path
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal delay={0}>
              <blockquote className="border-l border-terracotta/40 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-cream/90">
                  &ldquo;Chandra held space for me in a way no one ever had. I
                  left our session feeling like I&rsquo;d been handed back a
                  piece of myself I didn&rsquo;t know I&rsquo;d lost.&rdquo;
                </p>
                <footer className="mt-4 text-[0.75rem] uppercase tracking-[0.12em] text-sand">
                  &mdash; Mara T.
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={150}>
              <blockquote className="border-l border-terracotta/40 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-cream/90">
                  &ldquo;I came in with so much noise in my head. By the end,
                  there was just&hellip; stillness. And clarity I hadn&rsquo;t
                  felt in years.&rdquo;
                </p>
                <footer className="mt-4 text-[0.75rem] uppercase tracking-[0.12em] text-sand">
                  &mdash; Devi L.
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light text-brown-deep md:text-5xl">
              You don&rsquo;t need to have it all figured out
            </h2>
            <p className="mt-4 font-serif text-lg italic text-brown-warm">
              Just a willingness to listen&nbsp;&mdash; to yourself, again.
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
