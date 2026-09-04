import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The Artifact wordmark, from the supplied brand assets. The lockup pairs it
 * with the product category, which is how the company presents itself.
 */
export function Wordmark({
  tone = "dark",
  withCategory = false,
  className,
  href = "/",
  priority = false,
}: {
  tone?: "dark" | "light";
  withCategory?: boolean;
  className?: string;
  href?: string | null;
  priority?: boolean;
}) {
  const mark = (
    <span className={cn("flex items-center gap-3.5", className)}>
      {/*
        The source asset is 1836px wide but the mark renders at ~92 CSS px.
        `sizes` tells Next which variant to generate, so the browser fetches a
        ~200px image rather than the full-resolution original.
      */}
      <Image
        alt="Artifact Interactive"
        className="h-[1.375rem] w-auto lg:h-6"
        height={49}
        priority={priority}
        quality={90}
        sizes="184px"
        src={
          tone === "light"
            ? "/brand/artifact-logo-color-dark.png"
            : "/brand/artifact-logo-color-light.png"
        }
        width={184}
      />
      {withCategory && (
        <>
          {/*
            The category sits beside the mark whenever there is room for it:
            below xl the nav has collapsed to the menu button, and at 2xl the
            full bar is wide enough again. Between the two it would crowd the
            navigation, so it steps out.
          */}
          <span
            aria-hidden="true"
            className={cn(
              "hidden h-5 w-px sm:block xl:hidden 2xl:block",
              tone === "light" ? "bg-white/20" : "bg-ink-900/15",
            )}
          />
          <span
            className={cn(
              "hidden whitespace-nowrap text-[0.6875rem] font-semibold uppercase tracking-[0.18em] sm:block xl:hidden 2xl:block",
              tone === "light" ? "text-slate-ai-400" : "text-slate-ai-500",
            )}
          >
            Learning Intelligence
          </span>
        </>
      )}
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      aria-label="Artifact Interactive — home"
      className="inline-flex rounded-sm transition-opacity duration-300 hover:opacity-70"
      href={href}
    >
      {mark}
    </Link>
  );
}
