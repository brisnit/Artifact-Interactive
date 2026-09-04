import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-signal-600 shadow-[0_1px_2px_rgba(10,14,28,0.16)] hover:shadow-[0_10px_28px_-10px_rgba(69,109,244,0.7)]",
  secondary:
    "bg-white text-ink-900 border border-ink-900/15 hover:border-ink-900/40 hover:shadow-[0_10px_28px_-16px_rgba(10,14,28,0.5)]",
  ghost:
    "text-ink-900 hover:text-signal-600 px-0",
  inverse:
    "bg-white text-ink-900 hover:bg-signal-500 hover:text-white shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
  "inverse-outline":
    "text-white border border-white/25 hover:border-white/70 hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-[0.875rem]",
  lg: "h-[3.25rem] px-8 text-[0.9375rem]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
} & Omit<ComponentProps<"button">, "children" | "className">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  withArrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant === "ghost" ? "" : sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a className={classes} href={href} rel="noreferrer noopener" target="_blank">
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
      fill="none"
      height="12"
      viewBox="0 0 14 12"
      width="14"
    >
      <path
        d="M1 6h11m0 0L7.5 1.5M12 6l-4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** Inline text link with the Artifact chevron. */
export function TextLink({
  href,
  children,
  className,
  tone = "signal",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "signal" | "light";
}) {
  return (
    <Link
      className={cn(
        "group/link inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold tracking-tight",
        tone === "signal"
          ? "text-signal-600 hover:text-ink-900"
          : "text-signal-300 hover:text-white",
        "transition-colors duration-300",
        className,
      )}
      href={href}
    >
      <span className="border-b border-current/25 pb-px transition-colors duration-300 group-hover/link:border-current">
        {children}
      </span>
      <svg
        aria-hidden="true"
        className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
        fill="none"
        height="11"
        viewBox="0 0 7 11"
        width="7"
      >
        <path
          d="M1.5 1L6 5.5L1.5 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </Link>
  );
}
