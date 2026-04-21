import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function OfferingsPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-44 lg:pb-20">
        <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
          Soul Work
        </p>
        <h1 className="animate-fade-up mt-4 font-serif text-5xl font-light text-brown-deep md:text-6xl lg:text-7xl [animation-delay:150ms]">
          Channeled Offerings
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-brown-warm [animation-delay:300ms]">
          All of my offerings share one intention: to help you reconnect to
          the voice of your soul and the wisdom you already
          carry&nbsp;&mdash; and to walk beside you as you find your way back
          to yourself.
        </p>
      </section>

      <Divider center className="mx-auto" />

      {/* ===== OFFERING 01 — CHANNELING ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/earth-lichen-texture.jpg"
                alt="Earthy lichen texture on rock — amber, rust, and gold tones"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
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
                Soul Chats
              </h2>
              <p className="mt-2 text-sm font-medium tracking-wide text-terracotta">
                One-to-one channeling sessions
              </p>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                These Soul Chats are deeply personal and intuitive. In these
                sessions, I tune into the frequency of the Mother&nbsp;&mdash;
                the Earth, and her Higher Self. Through this frequency, I
                connect directly with your Higher Self, becoming a bridge and
                a vessel for the Soul to speak.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                Each session is guided entirely by your Higher Self and
                the consciousness of the Earth Mother. Together, they guide
                me into the electromagnetic field of your heart, clearing and
                transmuting any blocks or stuck energies. This creates a
                clear pathway for your soul to come through and communicate.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                I will be reading your entire energy field, receiving messages
                and guidance that serves your highest, most abundant timeline.
                Each session is unscripted and unrepeatable, shaped entirely
                by what wants to come through&hellip;
              </p>

              <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-brown-deep">
                What you may receive during our session
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brown-warm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Clarity on life decisions, relationships, or transitions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Messages from your Higher Self, the Earth Mother, spirit guides, angels, and ancestors
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Energetic clearing, realignment, and activations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Insight into patterns, blocks, and soul-level purpose
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  Insights into your soul gifts and how to work with them
                </li>
              </ul>

              <p className="mt-6 text-base leading-relaxed text-brown-warm">
                My intention is to help you find the answers you already have
                within and the wisdom you already know&nbsp;&mdash; to support
                you in your own remembering and becoming. My goal after each
                session is to give you the tools and the support you need to
                continue to cultivate a deep trust and communication with
                your soul and our Earth Mother&nbsp;&mdash; guidance that
                lives on beyond our session.
              </p>
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


      {/* ===== OFFERING 02 — MEDITATIONS ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/golden-sunset-clouds.jpg"
                alt="Golden sunset light over layered clouds — ethereal sky"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <span className="font-serif text-6xl font-light text-sand">
                02
              </span>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-sage">
                Coming Soon
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
                Channeled Meditations
              </h2>
              <Divider className="mt-6" />
              <p className="mt-8 text-base leading-relaxed text-brown-warm">
                Channeled meditations&nbsp;&mdash; doorways to your soul, your
                body, the Earth Mother, and the realms she holds. Each one is
                recorded with intention, shaped by what wants to come through
                in the moment of channeling.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                These meditations will help you hear the voice of your soul.
                Ground you into the Earth. Soften you into your body. Open the
                door to your guides, your angels, and the unseen realms.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                For the mornings when you need grounding. The evenings when
                you need release. And all the moments in between when you
                simply need to remember the magic that you are held in.
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
