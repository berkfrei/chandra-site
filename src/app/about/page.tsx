import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import ImagePlaceholder from "@/components/ui/image-placeholder";

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
            <ImagePlaceholder
              aspectRatio="3/4"
              description="Chandra portrait"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="font-serif text-2xl font-light leading-relaxed text-brown-deep md:text-3xl">
                I&rsquo;m a channel, a guide, and a companion for the
                soul&rsquo;s journey home.
              </p>
              <p className="mt-6 text-base leading-relaxed text-brown-warm">
                My work lives at the intersection of intuition, energy, and
                the sacred. I help women reconnect with the knowing they&rsquo;ve
                always carried&nbsp;&mdash; the voice beneath the noise, the
                truth beneath the conditioning, the self beneath the story.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brown-warm">
                This isn&rsquo;t about fixing what&rsquo;s broken. It&rsquo;s
                about remembering what was never lost.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== STORY CHAPTERS ===== */}

      {/* Before */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Before
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              The life that looked right
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              For a long time, I lived inside a version of myself that other
              people understood. I was successful in ways that were easy to
              measure&nbsp;&mdash; degrees, titles, the kind of stability that
              looked like safety. But underneath it all, something was quietly
              unraveling. I couldn&rsquo;t name it then. I just knew that the
              life I was building didn&rsquo;t feel like mine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Awakening */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Awakening
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              When everything changed
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              The shift didn&rsquo;t come gently. It came through rupture&nbsp;&mdash;
              loss, illness, and the kind of stillness that follows when
              everything you thought you were falls away. In that silence, I
              began to hear something I&rsquo;d been drowning out for years: my
              own inner voice. And alongside it, other voices&nbsp;&mdash; guides,
              ancestors, a presence I can only call the sacred.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Healing */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Healing
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              The long way back
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              What followed were years of deep work&nbsp;&mdash; shadow work,
              somatic healing, plant medicine ceremony, silent retreat, and hours
              upon hours of sitting with what wanted to move through me. I
              studied with teachers and elders. I sat in circle. I let myself be
              broken open, again and again, until I stopped fearing the opening.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Now */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid">
              Now
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-brown-deep md:text-4xl">
              What I offer from here
            </h2>
            <Divider className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-brown-warm">
              Everything I do now grows from that journey. I don&rsquo;t offer
              theory&nbsp;&mdash; I offer what I&rsquo;ve lived. My channeling
              work, my doula practice, my meditations&nbsp;&mdash; they all come
              from the same place: a deep trust in the wisdom that each of us
              carries, and a devotion to helping others find their way back to
              it.
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
                You are not broken. You are in the process of remembering who
                you have always been.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                Healing is not linear. It spirals, deepens, and returns you to
                yourself in ways you cannot predict.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                The body holds wisdom the mind has forgotten. We must listen
                with more than our thoughts.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-serif text-xl italic leading-relaxed text-brown-deep">
                The sacred is not separate from the everyday. It is woven into
                every breath, every choice, every return.
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
              If something here resonates
            </h2>
            <p className="mt-4 font-serif text-lg italic text-brown-warm">
              Trust that. It&rsquo;s the part of you that already knows.
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
