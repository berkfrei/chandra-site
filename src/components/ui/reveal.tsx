"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Variant = "default" | "soft" | "rise";

interface RevealProps {
  children: ReactNode;
  /** Delay before the element becomes visible, in ms. */
  delay?: number;
  /** Reveal intensity — soft is gentler, rise travels further. */
  variant?: Variant;
  /** IntersectionObserver threshold. */
  threshold?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  variant = "default",
  threshold = 0.15,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("in-view");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const variantClass =
    variant === "soft"
      ? "reveal reveal--soft"
      : variant === "rise"
      ? "reveal reveal--rise"
      : "reveal";

  return (
    <div ref={ref} className={`${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
