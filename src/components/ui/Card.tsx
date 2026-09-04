import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Base surface used by every card on the site. Hover lifts the card a hair and
 * warms the border toward signal blue — the only hover language we use.
 */
export function Surface({
  children,
  className,
  tone = "light",
  interactive = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "paper" | "dark" | "outline-dark";
  interactive?: boolean;
  as?: "div" | "article" | "li";
}) {
  const tones = {
    light: "bg-white border-ink-900/10",
    paper: "bg-slate-ai-50 border-ink-900/[0.07]",
    dark: "bg-ink-800 border-white/10",
    "outline-dark": "bg-white/[0.03] border-white/12",
  } as const;

  return (
    <Tag
      className={cn(
        "relative rounded-xl border",
        tones[tone],
        interactive &&
          "transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1",
        interactive && tone === "light" && "hover:border-signal-500/40 hover:shadow-[0_24px_48px_-32px_rgba(10,14,28,0.45)]",
        interactive && tone === "paper" && "hover:border-signal-500/40 hover:bg-white hover:shadow-[0_24px_48px_-32px_rgba(10,14,28,0.35)]",
        interactive && (tone === "dark" || tone === "outline-dark") &&
          "hover:border-signal-400/50 hover:bg-white/[0.06]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Feature entry.
 *
 * Deliberately not a box. Each entry is introduced by a hairline that warms
 * and extends on hover, which keeps grids of these reading as an editorial
 * index rather than a wall of SaaS cards. The only container on the site that
 * still draws a border is `Surface`, used where a panel genuinely is an object.
 */
export function FeatureCard({
  index,
  title,
  children,
  tone = "light",
  className,
  visual,
}: {
  index?: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "paper" | "dark" | "outline-dark";
  className?: string;
  visual?: ReactNode;
}) {
  const dark = tone === "dark" || tone === "outline-dark";

  return (
    <div
      className={cn(
        "group relative flex flex-col pt-7 lg:pt-8",
        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1",
        className,
      )}
    >
      {/* The rule is the card. */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          dark ? "bg-white/15" : "bg-ink-900/12",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
          dark ? "bg-signal-400" : "bg-signal-500",
        )}
      />

      {index && (
        <span
          className={cn(
            "index-numeral font-mono text-[0.6875rem]",
            dark ? "text-signal-300" : "text-signal-600",
          )}
        >
          {index}
        </span>
      )}

      {visual && <div className="mb-6">{visual}</div>}

      <h3
        className={cn(
          "text-[1.1875rem] font-bold leading-tight tracking-[-0.028em] transition-colors duration-400 lg:text-[1.375rem]",
          index ? "mt-5" : "mt-0",
          dark
            ? "text-white group-hover:text-signal-300"
            : "text-ink-900 group-hover:text-signal-600",
        )}
      >
        {title}
      </h3>

      <div
        className={cn(
          "mt-4 text-[0.9375rem] leading-relaxed",
          dark ? "text-slate-ai-300" : "text-slate-ai-700",
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Research topic card — sparse, academic, with a status line. */
export function ResearchCard({
  title,
  question,
  children,
  status,
  index,
}: {
  title: string;
  question: string;
  children: ReactNode;
  status: string;
  index: string;
}) {
  return (
    <article className="group relative flex h-full flex-col pt-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 lg:pt-8">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-ink-900/12" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-signal-500 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-slate-ai-500">
          {index}
        </span>
        <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-ai-500">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-signal-500"
          />
          {status}
        </span>
      </div>
      <h3 className="mt-6 text-[1.375rem] font-bold leading-tight tracking-[-0.03em] text-ink-900 transition-colors duration-400 group-hover:text-signal-600 lg:text-[1.5rem]">
        {title}
      </h3>
      <p className="mt-4 font-editorial text-[1.0625rem] italic leading-snug text-signal-700">
        {question}
      </p>
      <div className="mt-5 text-[0.9375rem] leading-relaxed text-slate-ai-700">
        {children}
      </div>
    </article>
  );
}

/** Persona card — Students / Professors / Administrators / Families. */
export function PersonaCard({
  persona,
  headline,
  children,
  points,
  visual,
}: {
  persona: string;
  headline: string;
  children: ReactNode;
  points: string[];
  visual?: ReactNode;
}) {
  return (
    <Surface
      as="article"
      className="group flex h-full flex-col overflow-hidden p-0"
      interactive
      tone="light"
    >
      <div className="relative overflow-hidden border-b border-ink-900/[0.07] bg-slate-ai-50 px-7 pt-7 pb-0 lg:px-9 lg:pt-9">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-signal-600">
          {persona}
        </p>
        <h3 className="mt-4 max-w-[22ch] text-[1.5rem] font-bold leading-[1.15] tracking-tight text-ink-900 lg:text-[1.75rem]">
          {headline}
        </h3>
        <div className="mt-7 -mb-px">{visual}</div>
      </div>
      <div className="flex flex-1 flex-col p-7 lg:p-9">
        <div className="text-[0.9375rem] leading-relaxed text-slate-ai-700">
          {children}
        </div>
        <ul className="mt-6 space-y-2.5 border-t border-ink-900/[0.07] pt-6">
          {points.map((point) => (
            <li className="flex gap-3 text-[0.875rem] text-ink-700" key={point}>
              <span
                aria-hidden="true"
                className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-signal-500"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}

/** Blog / insight card. */
export function ArticleCard({
  href,
  title,
  excerpt,
  category,
  date,
  readingTime,
  size = "default",
}: {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  size?: "default" | "large";
}) {
  return (
    <Surface
      as="article"
      className="group flex h-full flex-col overflow-hidden"
      interactive
      tone="light"
    >
      <Link className="flex h-full flex-col p-7 lg:p-8" href={href}>
        <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
          <span className="text-signal-600">{category}</span>
          <span aria-hidden="true" className="h-px w-4 bg-slate-ai-300" />
          <span className="text-slate-ai-500">{readingTime} min read</span>
        </div>
        <h3
          className={cn(
            "mt-5 font-bold leading-[1.18] tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-signal-600",
            size === "large" ? "text-[1.75rem] lg:text-[2rem]" : "text-[1.25rem]",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-4 flex-1 leading-relaxed text-slate-ai-700",
            size === "large" ? "text-[1.0625rem]" : "text-[0.9375rem]",
          )}
        >
          {excerpt}
        </p>
        <div className="mt-7 flex items-center justify-between border-t border-ink-900/[0.07] pt-5">
          <span className="text-[0.8125rem] text-slate-ai-500">{date}</span>
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-full border border-ink-900/12 text-ink-900 transition-all duration-300 group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-white"
          >
            <svg fill="none" height="10" viewBox="0 0 12 10" width="12">
              <path
                d="M1 5h9m0 0L6.5 1.5M10 5l-3.5 3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>
      </Link>
    </Surface>
  );
}
