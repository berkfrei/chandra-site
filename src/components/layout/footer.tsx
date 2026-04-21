import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Soul Work", href: "/offerings" },
  { label: "Doula", href: "/doula" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/chandrafrei" },
  { label: "Substack", href: "https://substack.com" },
  { label: "Email", href: "mailto:chandrafrei@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-cream px-6 pt-20 pb-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* Left — Brand */}
        <div></div>

        {/* Center — Nav */}
        <div className="flex flex-col gap-3">
          <span className="mb-2 text-[0.65rem] uppercase tracking-[0.14em] text-brown-mid">
            Navigate
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brown-warm transition-colors duration-300 hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Social */}
        <div className="flex flex-col gap-3">
          <span className="mb-2 text-[0.65rem] uppercase tracking-[0.14em] text-brown-mid">
            Connect
          </span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brown-warm transition-colors duration-300 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-cream-dark pt-6">
        <p className="text-[0.7rem] text-brown-mid/60 tracking-wide">
          &copy; {new Date().getFullYear()} Chandra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
