import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "default" | "filled" | "ghost";

interface ButtonBaseProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center uppercase text-[0.72rem] tracking-[0.16em] font-sans font-normal transition-all duration-500 cursor-pointer";

const variants: Record<Variant, string> = {
  default:
    "relative overflow-hidden border border-brown-deep text-brown-deep px-7 py-3.5 hover:text-cream group/btn",
  filled:
    "relative overflow-hidden bg-brown-deep text-cream px-7 py-3.5 hover:text-cream group/btn",
  ghost:
    "relative text-brown-deep hover:text-terracotta-deep group/ghost pb-1",
};

export default function Button({
  variant = "default",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps & { className?: string }) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  // Sliding fill for default/filled: a background panel slides up from the
  // bottom on hover, giving buttons a sense of lift rather than an instant
  // color swap.
  const slidingPanel =
    variant === "default" ? (
      <span className="absolute inset-0 origin-bottom translate-y-full bg-brown-deep transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:translate-y-0" />
    ) : variant === "filled" ? (
      <span className="absolute inset-0 origin-bottom translate-y-full bg-terracotta-deep transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:translate-y-0" />
    ) : null;

  const content =
    variant === "ghost" ? (
      <>
        <span className="relative">
          {children}
          <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/ghost:origin-left group-hover/ghost:scale-x-100" />
        </span>
        <span className="relative ml-2.5 inline-block transition-transform duration-500 group-hover/ghost:translate-x-1">
          &rarr;
        </span>
      </>
    ) : (
      <span className="relative">{children}</span>
    );

  const inner = (
    <>
      {slidingPanel}
      {content}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
