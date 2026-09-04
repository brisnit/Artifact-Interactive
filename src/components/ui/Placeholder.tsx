import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Intentional space reserved for real photography, product screenshots, and
 * campus imagery. Deliberately restrained: a labelled frame, not fake artwork.
 */
export function ImagePlaceholder({
  label,
  caption,
  ratio = "4/3",
  tone = "light",
  className,
  children,
}: {
  label: string;
  caption?: string;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <figure className={cn("group/ph", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border",
          dark
            ? "border-white/20 bg-white/[0.035]"
            : "border-ink-900/[0.12] bg-slate-ai-50",
        )}
        style={{ aspectRatio: ratio }}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            dark ? "grid-texture" : "grid-texture-light",
          )}
        />
        <CornerMarks tone={tone} />

        {/* Art-direction slug, set at the top-left like a plate spec rather
            than floated in the middle of an empty box. */}
        <div className="absolute left-5 top-5 flex items-center gap-2.5 lg:left-6 lg:top-6">
          <svg
            aria-hidden="true"
            className={cn(dark ? "text-white/55" : "text-slate-ai-400")}
            fill="none"
            height="15"
            viewBox="0 0 24 24"
            width="15"
          >
            <rect
              height="15"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.6"
              width="20"
              x="2"
              y="4.5"
            />
            <path
              d="M2 15.5l5.2-4.6a1.5 1.5 0 012 0L14 15m-1.6-1.4l2.3-2a1.5 1.5 0 012 0L22 15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.6"
            />
            <circle cx="8.5" cy="9" fill="currentColor" r="1.3" />
          </svg>
          <span
            className={cn(
              "index-numeral font-mono text-[0.625rem] uppercase",
              dark ? "text-white/65" : "text-slate-ai-500",
            )}
          >
            {label}
          </span>
        </div>

        {/* Frame spec, bottom-right. */}
        <span
          className={cn(
            "absolute bottom-5 right-5 font-mono text-[0.625rem] tracking-[0.14em] lg:bottom-6 lg:right-6",
            dark ? "text-white/45" : "text-slate-ai-400",
          )}
        >
          {ratio.replace("/", ":")}
        </span>

        {/* Centre rule — gives the plate an axis without filling it. */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 -translate-y-1/2 rule-fade",
            dark ? "text-white" : "text-ink-900",
          )}
        />

        {children && (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            {children}
          </div>
        )}
      </div>

      {caption && (
        <figcaption
          className={cn(
            "mt-3.5 text-[0.8125rem] leading-relaxed",
            dark ? "text-slate-ai-400" : "text-slate-ai-500",
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function CornerMarks({ tone }: { tone: "light" | "dark" }) {
  const color = tone === "dark" ? "border-white/30" : "border-ink-900/14";
  return (
    <span aria-hidden="true">
      {[
        "left-3 top-3 border-l border-t",
        "right-3 top-3 border-r border-t",
        "left-3 bottom-3 border-b border-l",
        "right-3 bottom-3 border-b border-r",
      ].map((pos) => (
        <span className={cn("absolute size-5 lg:size-6", pos, color)} key={pos} />
      ))}
    </span>
  );
}

/**
 * Frame for the site's own diagrams. Gives every visualization the same
 * chrome: a label, an optional footnote, and a consistent inner canvas.
 */
export function VizFrame({
  label,
  footnote,
  tone = "light",
  className,
  bodyClassName,
  children,
}: {
  label?: string;
  footnote?: string;
  tone?: "light" | "paper" | "dark";
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border",
        dark
          ? "border-white/10 bg-ink-950/60"
          : tone === "paper"
            ? "border-ink-900/[0.08] bg-slate-ai-50"
            : "border-ink-900/10 bg-white",
        className,
      )}
    >
      {label && (
        <div
          className={cn(
            "flex items-center gap-2.5 border-b px-5 py-3",
            dark ? "border-white/10" : "border-ink-900/[0.07]",
          )}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-signal-500"
          />
          <span
            className={cn(
              "font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
              dark ? "text-slate-ai-400" : "text-slate-ai-500",
            )}
          >
            {label}
          </span>
        </div>
      )}
      <div className={cn("relative", bodyClassName ?? "p-6 lg:p-8")}>{children}</div>
      {footnote && (
        <figcaption
          className={cn(
            "border-t px-5 py-3 text-[0.75rem] leading-relaxed",
            dark
              ? "border-white/10 text-slate-ai-400"
              : "border-ink-900/[0.07] text-slate-ai-500",
          )}
        >
          {footnote}
        </figcaption>
      )}
    </figure>
  );
}
