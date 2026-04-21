import Sigil from "./sigil";

interface DividerProps {
  center?: boolean;
  wide?: boolean;
  /** Swap the plain rule for a pair of hairlines flanking the Chandra sigil. */
  sigil?: boolean;
  /** Sigil variant when sigil=true. */
  sigilVariant?: "seed" | "sun";
  /** Color class for the rule + sigil (use Tailwind text-* tokens). */
  tone?: string;
  className?: string;
}

export default function Divider({
  center,
  wide,
  sigil,
  sigilVariant = "seed",
  tone = "text-sand",
  className = "",
}: DividerProps) {
  if (sigil) {
    return (
      <div
        className={`flex items-center ${center ? "justify-center" : ""} ${tone} ${className}`.trim()}
      >
        <span className="block h-px w-12 bg-current opacity-60" />
        <span className="mx-4 opacity-80">
          <Sigil size={22} variant={sigilVariant} />
        </span>
        <span className="block h-px w-12 bg-current opacity-60" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 ${
        wide ? "w-full bg-cream-dark" : "w-[60px] bg-sand"
      } h-px ${center ? "mx-auto" : ""} ${className}`.trim()}
    />
  );
}
