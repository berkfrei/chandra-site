import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /**
   * Number of times to repeat the children inside one track. 4 gives enough
   * content to feel continuous on most screens without the CSS drift looking
   * like it snaps back.
   */
  repeat?: number;
}

/**
 * Slow horizontal drift — used for running-head phrases like
 * "the soul · the channel · the bridge".
 *
 * Animation is defined in globals.css (.animate-drift) and translates
 * by -50%, so the children must be rendered twice side-by-side for the
 * loop to feel seamless.
 */
export default function Marquee({
  children,
  className = "",
  repeat = 4,
}: MarqueeProps) {
  const copies = Array.from({ length: 2 }, (_, copyIndex) => (
    <div
      key={copyIndex}
      aria-hidden={copyIndex === 1 ? "true" : undefined}
      className="flex shrink-0 items-center"
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className="shrink-0">
          {children}
        </div>
      ))}
    </div>
  ));

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`.trim()}
      role="presentation"
    >
      <div className="flex w-max animate-drift will-change-transform">
        {copies}
      </div>
    </div>
  );
}
