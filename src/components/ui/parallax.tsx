"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /**
   * Parallax intensity. 0 = no movement, 0.3 = element drifts upward at 30%
   * the rate the viewport scrolls. Negative values drift down.
   */
  speed?: number;
  className?: string;
}

/**
 * Subtle scroll-linked translate. Applied to hero portraits and mood images
 * so they feel anchored to something deeper than the page scroll.
 *
 * Uses requestAnimationFrame + a single GetBoundingClientRect per tick, no
 * listener on every scroll event. Respects prefers-reduced-motion by doing
 * nothing when the media query matches.
 */
export default function Parallax({
  children,
  speed = 0.18,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      const offset = -distanceFromCenter * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`.trim()}>
      {children}
    </div>
  );
}
