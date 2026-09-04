"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { FadeUp, ImageReveal, RevealText, StaggerGroup } from "@/components/motion";
import { cn } from "@/lib/cn";
import {
  articles,
  categories,
  formatDate,
  type Article,
  type Category,
} from "@/content/insights";

/**
 * Insights as an editorial index rather than a card grid.
 *
 * A single featured story runs as a spread; the next two are set as
 * two-column entries with reserved image space; everything after that becomes
 * a typographic index. Filtering is client-side over markup that is already
 * complete on the server, so the page works without JavaScript.
 */
export function InsightsIndex() {
  const [active, setActive] = useState<Category | "All">("All");

  const [lead, ...rest] = articles;

  const filtered = useMemo(
    () => (active === "All" ? rest : rest.filter((a) => a.category === active)),
    [active, rest],
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    articles.forEach((a) => map.set(a.category, (map.get(a.category) ?? 0) + 1));
    return map;
  }, []);

  const leadVisible = active === "All" || lead.category === active;
  const spotlight = filtered.slice(0, 2);
  const index = filtered.slice(2);
  const total = leadVisible ? filtered.length + 1 : filtered.length;

  return (
    <>
      {/* ---------------- Featured ---------------- */}
      {leadVisible && (
        <article className="group border-b border-ink-900/[0.09] pb-16 lg:pb-24">
          <Link className="block" href={`/insights/${lead.slug}`}>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
              <div>
                <FadeUp>
                  <Meta article={lead} featured />
                </FadeUp>
                <h2 className="text-display-sm mt-8 max-w-[18ch] text-ink-900 transition-colors duration-500 group-hover:text-signal-600">
                  <RevealText delay={0.08} trigger="scroll">
                    {lead.title}
                  </RevealText>
                </h2>
                <FadeUp delay={0.2}>
                  <p className="mt-8 max-w-[46ch] font-editorial text-[1.375rem] leading-[1.45] text-slate-ai-700 lg:text-[1.625rem]">
                    {lead.deck}
                  </p>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <span className="mt-10 inline-flex items-center gap-3 text-[0.875rem] font-semibold text-signal-600">
                    Read the article
                    <span
                      aria-hidden="true"
                      className="inline-flex size-9 items-center justify-center rounded-full border border-signal-500/30 transition-all duration-500 group-hover:border-signal-500 group-hover:bg-signal-500 group-hover:text-white"
                    >
                      <Arrow />
                    </span>
                  </span>
                </FadeUp>
              </div>

              <ImageReveal className="rounded-lg">
                <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-ink-950">
                  <div aria-hidden="true" className="absolute inset-0 grid-texture" />
                  <FeaturedGlyph />
                </div>
              </ImageReveal>
            </div>
          </Link>
        </article>
      )}

      {/* ---------------- Filters ---------------- */}
      <div className="mt-12 flex flex-col gap-5 border-b border-ink-900/[0.09] pb-6 lg:mt-16 lg:flex-row lg:items-baseline lg:justify-between">
        <div
          aria-label="Filter insights by category"
          className="flex flex-wrap items-baseline gap-x-7 gap-y-3"
          role="group"
        >
          {(["All", ...categories] as const).map((category) => {
            const isOn = active === category;
            return (
              <button
                aria-pressed={isOn}
                className={cn(
                  "group/f relative pb-1 text-[0.9375rem] font-semibold tracking-tight transition-colors duration-400",
                  isOn ? "text-ink-900" : "text-slate-ai-500 hover:text-ink-900",
                )}
                key={category}
                onClick={() => setActive(category)}
                type="button"
              >
                {category}
                <sup className="ml-1.5 font-mono text-[0.625rem] font-normal text-slate-ai-500">
                  {category === "All"
                    ? articles.length
                    : (counts.get(category) ?? 0)}
                </sup>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-signal-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOn ? "scale-x-100" : "scale-x-0 group-hover/f:scale-x-100",
                  )}
                />
              </button>
            );
          })}
        </div>
        <p
          aria-live="polite"
          className="index-numeral font-mono text-[0.6875rem] uppercase text-slate-ai-500"
        >
          {total} {total === 1 ? "article" : "articles"}
        </p>
      </div>

      {/* ---------------- Spotlight pair ---------------- */}
      {spotlight.length > 0 && (
        <StaggerGroup
          className="mt-14 grid gap-12 md:grid-cols-2 lg:mt-20 lg:gap-16"
          key={`spot-${active}`}
        >
          {spotlight.map((article) => (
            <article className="group" key={article.slug}>
              <Link className="flex h-full flex-col" href={`/insights/${article.slug}`}>
                <ImageReveal className="rounded-lg">
                  <ImagePlaceholder
                    className="[&_figure]:m-0"
                    label={`${article.category} — figure`}
                    ratio="16/10"
                  />
                </ImageReveal>
                <div className="mt-7 flex flex-1 flex-col">
                  <Meta article={article} />
                  <h3 className="mt-5 text-[1.5rem] font-bold leading-[1.14] tracking-[-0.03em] text-ink-900 transition-colors duration-400 group-hover:text-signal-600 lg:text-[1.875rem]">
                    {article.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[1rem] leading-relaxed text-slate-ai-700">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </StaggerGroup>
      )}

      {/* ---------------- Typographic index ---------------- */}
      {index.length > 0 && (
        <StaggerGroup
          as="ul"
          className="mt-16 border-t border-ink-900/[0.09] lg:mt-24"
          key={`idx-${active}`}
          selector=":scope > li"
          stagger={0.06}
        >
          {index.map((article, i) => (
            <li className="border-b border-ink-900/[0.09]" key={article.slug}>
              <Link
                className="row-hover group flex flex-col gap-3 py-7 hover:bg-slate-ai-50 hover:pl-4 sm:flex-row sm:items-baseline sm:gap-10 lg:py-8 lg:hover:pl-6"
                href={`/insights/${article.slug}`}
              >
                <span className="index-numeral font-mono text-[0.6875rem] text-slate-ai-500">
                  {String(i + spotlight.length + 2).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-[1.25rem] font-bold leading-tight tracking-[-0.025em] text-ink-900 transition-colors duration-400 group-hover:text-signal-600 lg:text-[1.5rem]">
                    {article.title}
                  </span>
                  <span className="mt-2.5 block max-w-[62ch] text-[0.9375rem] leading-relaxed text-slate-ai-600">
                    {article.excerpt}
                  </span>
                </span>
                <span className="shrink-0 text-left text-[0.75rem] uppercase tracking-[0.14em] text-slate-ai-500 sm:w-44 sm:text-right">
                  <span className="block text-signal-600">{article.category}</span>
                  <span className="mt-1.5 block normal-case tracking-normal">
                    {formatDate(article.date)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </StaggerGroup>
      )}

      {total === 0 && (
        <p className="mt-20 text-center text-[0.9375rem] text-slate-ai-500">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}

function Meta({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
      {featured && (
        <span className="rounded-sm bg-ink-900 px-2 py-1 text-white">Latest</span>
      )}
      <span className="text-signal-600">{article.category}</span>
      <span aria-hidden="true" className="h-px w-5 bg-slate-ai-300" />
      <span className="normal-case tracking-normal text-slate-ai-600">
        {article.author}
      </span>
      <span aria-hidden="true" className="text-slate-ai-300">
        ·
      </span>
      <span className="normal-case tracking-normal text-slate-ai-500">
        {formatDate(article.date)}
      </span>
      <span aria-hidden="true" className="text-slate-ai-300">
        ·
      </span>
      <span className="normal-case tracking-normal text-slate-ai-500">
        {article.readingTime} min read
      </span>
    </p>
  );
}

function Arrow() {
  return (
    <svg fill="none" height="10" viewBox="0 0 12 10" width="12">
      <path
        d="M1 5h9m0 0L6.5 1.5M10 5l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Abstract signal field for the featured article panel. */
function FeaturedGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 480 360"
    >
      <defs>
        <radialGradient cx="52%" cy="48%" id="feat-core" r="55%">
          <stop offset="0%" stopColor="#456df4" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#456df4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="250" cy="176" fill="url(#feat-core)" rx="220" ry="170" />
      <g fill="none" stroke="#9db3ff" strokeOpacity="0.24" strokeWidth="0.9">
        {[
          [40, 60, 190, 150], [190, 150, 330, 92], [330, 92, 440, 168],
          [40, 60, 150, 250], [150, 250, 190, 150], [150, 250, 300, 296],
          [300, 296, 440, 168], [190, 150, 440, 168], [300, 296, 330, 92],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} x2={x2} y1={y1} y2={y2} />
        ))}
      </g>
      {[
        [40, 60, 3.4], [190, 150, 6], [330, 92, 4], [150, 250, 4],
        [300, 296, 3.4], [440, 168, 5],
      ].map(([cx, cy, r], i) => (
        <circle cx={cx} cy={cy} fill="#c3d1ff" key={i} r={r} />
      ))}
      <circle cx="190" cy="150" fill="#456df4" r="10" />
      <circle cx="190" cy="150" fill="#ffffff" r="3.5" />
    </svg>
  );
}
