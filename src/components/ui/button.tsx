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
  "inline-flex items-center uppercase text-[0.75rem] tracking-[0.14em] font-sans font-normal transition-all duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  default:
    "border border-brown-deep text-brown-deep px-7 py-3 hover:bg-brown-deep hover:text-cream",
  filled:
    "bg-brown-deep text-cream px-7 py-3 hover:bg-brown-warm",
  ghost:
    "text-brown-deep hover:text-terracotta group",
};

export default function Button({
  variant = "default",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps & { className?: string }) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  const inner =
    variant === "ghost" ? (
      <>
        {children}
        <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </>
    ) : (
      children
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
