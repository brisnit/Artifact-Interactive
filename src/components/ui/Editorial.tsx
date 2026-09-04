import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { WaveMark } from "./SignalWave";

/** Large editorial pull-quote / brand statement. */
export function QuoteBlock({
  children,
  attribution,
  tone = "light",
  className,
}: {
  children: ReactNode;
  attribution?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <blockquote
      className={cn(
        "relative border-l-2 pl-7 lg:pl-9",
        dark ? "border-signal-400" : "border-signal-500",
        className,
      )}
    >
      <p
        className={cn(
          "font-editorial text-[1.375rem] leading-[1.35] tracking-[-0.015em] lg:text-[1.75rem]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {children}
      </p>
      {attribution && (
        <footer
          className={cn(
            "mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.16em]",
            dark ? "text-slate-ai-400" : "text-slate-ai-500",
          )}
        >
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}

/** Numeric / short-fact stat. Never fabricated metrics — framing facts only. */
export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "border-t pt-5",
        dark ? "border-white/15" : "border-ink-900/12",
      )}
    >
      <p
        className={cn(
          "text-[2rem] font-bold leading-none tracking-[-0.035em] lg:text-[2.5rem]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-3 text-[0.875rem] leading-snug",
          dark ? "text-slate-ai-400" : "text-slate-ai-600",
        )}
      >
        {label}
      </p>
    </div>
  );
}

/** The brand's four-line spine, set as a rhythmic stack. */
export function SignalChain({
  lines,
  tone = "light",
  className,
}: {
  lines: readonly string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <ul className={cn("space-y-1", className)}>
      {lines.map((line, i) => (
        <li
          className={cn(
            "flex items-center gap-4 text-[1.125rem] font-semibold tracking-tight lg:text-[1.375rem]",
            dark
              ? i === lines.length - 1
                ? "text-white"
                : "text-slate-ai-300"
              : i === lines.length - 1
                ? "text-ink-900"
                : "text-slate-ai-600",
          )}
          key={line}
        >
          <WaveMark
            className={cn(
              "shrink-0 transition-opacity",
              dark ? "text-signal-400" : "text-signal-500",
            )}
          />
          {line}
        </li>
      ))}
    </ul>
  );
}

/** Article body prose styles. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-7 text-[1.0625rem] leading-[1.72] text-ink-700 lg:text-[1.125rem]">
      {children}
    </div>
  );
}
