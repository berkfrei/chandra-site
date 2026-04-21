"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Soul Work", href: "/offerings" },
  { label: "Doula", href: "/doula" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-md shadow-[0_1px_0_0_var(--color-cream-dark)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="group/logo flex items-baseline gap-2 font-serif text-2xl tracking-wide text-brown-deep"
          >
            <span className="relative">
              Chandra
              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-terracotta-deep transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/logo:origin-left group-hover/logo:scale-x-100" />
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`u-draw-link uppercase text-[0.7rem] tracking-[0.18em] font-sans transition-colors duration-500 ${
                      active
                        ? "text-terracotta-deep"
                        : "text-brown-warm hover:text-terracotta-deep"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/book" variant="default">
              Book a Session
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-brown-deep transition-all duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-brown-deep transition-all duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors duration-500 ${
                    active ? "text-terracotta-deep italic" : "text-brown-deep hover:text-terracotta-deep"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <Button
            href="/book"
            variant="default"
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </>
  );
}
