interface SigilProps {
  size?: number;
  className?: string;
  variant?: "seed" | "sun";
}

/**
 * A small hand-drawn mark used as section punctuation.
 *
 * seed — vesica / almond with a center dot. Reads as seed, eye, portal, flame.
 *        The primary mark.
 * sun  — halo circle with 8 irregular rays. An alternate for hero / cover moments.
 *
 * Colored via currentColor, so wrap in a span with a text color.
 */
export default function Sigil({
  size = 28,
  className = "",
  variant = "seed",
}: SigilProps) {
  if (variant === "sun") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
          <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="20" cy="20" r="7.4" />
          {/* 8 rays with subtly varying lengths */}
          <line x1="20" y1="3.2" x2="20" y2="8.4" />
          <line x1="31.7" y1="8.4" x2="28.0" y2="12.0" />
          <line x1="37.2" y1="20" x2="31.2" y2="20" />
          <line x1="31.5" y1="31.3" x2="27.9" y2="27.7" />
          <line x1="20" y1="37.0" x2="20" y2="31.9" />
          <line x1="8.3" y1="31.5" x2="12.0" y2="27.9" />
          <line x1="3.0" y1="20" x2="8.8" y2="20" />
          <line x1="8.4" y1="8.5" x2="12.1" y2="12.1" />
        </g>
      </svg>
    );
  }

  // seed (default) — a vesica / almond with a center dot.
  // The path is drawn with slight asymmetry to feel hand-touched rather than
  // geometrically perfect.
  return (
    <svg
      width={(size * 24) / 40}
      height={size}
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 12 3.6 C 3.4 12.8, 3.2 27.2, 12 36.6 C 20.8 27.4, 20.6 13, 12 3.6 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}
