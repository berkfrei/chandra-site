import { Fragment, type ReactNode } from "react";

interface WordRevealProps {
  /** The text to animate, word by word. Whitespace is preserved. */
  text: string;
  /** Initial delay before the first word appears, in ms. */
  delay?: number;
  /** Additional per-word stagger in ms. Defaults to 80ms. */
  stagger?: number;
  /** Optional classes applied to the outer block. */
  className?: string;
  /** Optional classes applied to each word span. */
  wordClassName?: string;
  /** Element to render for segments that should not animate (e.g. italic pulls). */
  children?: ReactNode;
}

/**
 * Word-by-word headline reveal. Splits the text on whitespace and applies
 * the `animate-word-rise` keyframe to each word with increasing delay.
 *
 * Used for the hero headline so the line feels spoken, not rendered —
 * appropriate for a channeling practice.
 */
export default function WordReveal({
  text,
  delay = 0,
  stagger = 80,
  className = "",
  wordClassName = "",
}: WordRevealProps) {
  const words = text.split(/(\s+)/); // keep whitespace tokens

  return (
    <span className={className}>
      {words.map((segment, i) => {
        if (/^\s+$/.test(segment)) {
          return <Fragment key={i}>{segment}</Fragment>;
        }
        const wordIndex = words.slice(0, i).filter((s) => !/^\s+$/.test(s)).length;
        const totalDelay = delay + wordIndex * stagger;
        return (
          <span
            key={i}
            className={`animate-word-rise ${wordClassName}`.trim()}
            style={{ animationDelay: `${totalDelay}ms` }}
          >
            {segment}
          </span>
        );
      })}
    </span>
  );
}
