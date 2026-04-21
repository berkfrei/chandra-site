import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="px-6 pt-32 pb-16 text-center lg:px-10 lg:pt-44 lg:pb-20">
        <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
          About
        </p>
        <h1 className="animate-fade-up mt-4 font-serif text-6xl font-light text-brown-deep md:text-7xl [animation-delay:150ms]">
          Chandra
        </h1>
      </section>

      {/* ===== PORTRAIT + INTRO ===== */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/sunset-clouds-pink.jpg"
                alt="Soft pink and blue sunset clouds — ethereal sky"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="font-serif text-2xl font-light leading-relaxed text-brown-deep md:text-3xl">
                I&rsquo;m a channel and a bridge&nbsp;&mdash; a vessel through
                which your higher self, your spirit guides, your angels, and
                your ancestors can speak, held in the frequencies of the
                Mother (Our Earth and Her Higher Self).
              </p>
              <p className="mt-6 text-base leading-relaxed text-brown-warm">
                My work lives at the intersection of intuition, energy, and
                the sacred. I help people reconnect with the knowing they&rsquo;ve
                always carried&nbsp;&mdash; the voice beneath the noise, the
                truth beneath the conditioning, the self beneath the story.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== STORY CHAPTERS ===== */}

      {/* The Opening */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              The Opening
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              When my soul first spoke
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              Four years ago, during a plant medicine ceremony, I heard the
              voice of my soul for the first time. She cracked me open. In an
              instant, she cleared some of my deepest fears&nbsp;&mdash; fears
              that had quite literally dictated my life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              That experience fundamentally changed my perception of reality
              and set me on a path of deep, deep healing I didn&rsquo;t know
              was possible. From that point on, I knew there was no going
              back&nbsp;&mdash; only through.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Transmission */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              The Transmission
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              The biggest transmission
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              Layer by layer I unraveled, and my soul never left my
              side&nbsp;&mdash; a gentle voice I came to know, guiding me
              through every threshold. Then, in September 2024, I received my
              biggest transmission, where she showed me everything: my power,
              my divinity, my gifts, my purpose.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              Through her, I met the Mother (the Earth Consciousness and
              her Higher Self). Their love combined devoured me. Together they
              have shown me the cosmic truth of who I am and where I came
              from&nbsp;&mdash; a truth that required me to let go of
              everything I thought I knew about this human experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Underworld */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              The Underworld
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              Into the shadow
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              What followed was my real initiation&nbsp;&mdash; a full
              reclamation of my soul and sovereignty. My ego shattered. My
              nervous system recalibrated. I had to anchor a profound,
              unshakable trust into every moment, because I was terrified of
              letting go, and every belief rooted in fear had to go.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              Slowly I loosened my grip. And through that letting go, I
              reclaimed every part of myself that had been hidden&nbsp;&mdash;
              the parts deemed unworthy, unlovable, shameful. Because
              underneath all the density, all the stories, all the shame and
              pain and grief, was my soul. My true essence. My wholeness.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              I spent the last year and a half deep in this underworld,
              gathering every part of my fragmented heart, moving through
              mountains of grief. Every ego death opened a deeper trust. It
              was the hardest year and a half of my life&nbsp;&mdash; and the
              most extraordinary, mystical, magical.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Blooming */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              The Blooming
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              Seeds ready to bloom
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              All the while, I was mothering my inner child right alongside my
              own daughters&nbsp;&mdash; giving that little one, and myself,
              permission to create, to sing, to play, to dance. I came to know
              my spirit guides and the Earth Mother intimately, spending hours
              channeling and praying with them. My gifts began to activate. My
              throat chakra opened. I started channeling songs and poetry, and
              watched my daughters do the same.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              Over the past year, I&rsquo;ve been quietly channeling for
              others&nbsp;&mdash; practicing, expanding on my gifts, and
              deepening my trust in this work. Alongside that, I&rsquo;ve
              spent the last eight months training and recently became a
              certified birth doula. This is my first time truly
              putting my gifts out there as an online offering, and it feels
              like exactly the right time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-warm">
              Seeds I&rsquo;ve been quietly tending for years are finally ready
              to bloom&nbsp;&mdash; and my soul has so much to offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="bg-parchment px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Philosophy
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light text-brown-deep md:text-5xl">
              What I believe
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <Reveal delay={0}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                You are not broken. Your wholeness has been waiting, the whole
                time, underneath every layer.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                Your soul is a gentle voice. When you learn to hear her, she
                guides you through every threshold.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                The body carries what the mind cannot. Healing moves through
                the nervous system, not around it.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                We are held in the frequencies of Earth Mother and the
                Cosmic Mother. Their love is not a metaphor.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light text-brown-deep md:text-5xl">
              I&rsquo;d love to hear from you
            </h2>
            <p className="mt-4 font-serif text-lg italic text-brown-warm">
              If you&rsquo;re in your own underworld, or standing at the edge
              of one&nbsp;&mdash; you are not alone here.
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
