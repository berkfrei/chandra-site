import Link from "next/link";
import Sigil from "@/components/ui/sigil";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Soul Work", href: "/offerings" },
  { label: "Doula", href: "/doula" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/chandrafrei" },
  { label: "Substack", href: "https://chandraspirit.substack.com" },
  { label: "Email", href: "mailto:chandrafrei@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream-dark bg-cream px-6 pt-24 pb-12 lg:px-10">
      {/* Sigil seal at the top of the footer, overlapping the border */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cream px-4">
        <div className="text-gold/80 animate-soft-pulse">
          <Sigil size={22} />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-3 md:gap-10">
        {/* Left — Sign-off */}
        <div>
          <p className="u-running-head text-brown-mid">A closing note</p>
          <p className="mt-6 font-serif text-2xl italic leading-[1.4] text-brown-deep md:text-[1.65rem]">
            Return to yourself —<br />
            that is the work.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-brown-warm">
            With love,
            <br />
            <span className="font-serif text-lg italic text-terracotta-deep">
              Chandra
            </span>
          </p>
        </div>

        {/* Center — Nav */}
        <div className="flex flex-col gap-3">
          <p className="u-running-head mb-3 text-brown-mid">Navigate</p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="u-draw-link self-start text-sm text-brown-warm transition-colors duration-500 hover:text-terracotta-deep"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Social */}
        <div className="flex flex-col gap-3">
          <p className="u-running-head mb-3 text-brown-mid">Connect</p>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="u-draw-link group/link inline-flex items-baseline gap-2 self-start text-sm text-brown-warm transition-colors duration-500 hover:text-terracotta-deep"
            >
              {link.label}
              <span className="inline-block text-[0.65rem] transition-transform duration-500 group-hover/link:translate-x-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom hairline + copyright */}
      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-cream-dark pt-8">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-brown-mid/70">
          &copy; {new Date().getFullYear()} Chandra
        </p>
        <div className="text-gold/60">
          <Sigil size={14} />
        </div>
      </div>
    </footer>
  );
}
