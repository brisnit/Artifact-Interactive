import type { ReactNode } from "react";
import { FadeUp, RevealText } from "@/components/motion";
import { cn } from "@/lib/cn";

/**
 * Shared interior-page hero.
 *
 * Every page opens the same way as the homepage does: a deep navy field, an
 * oversized architectural headline built from masked word reveals, and an
 * asymmetric supporting column. Pass `title` as a string to get the word
 * reveal, an array for staggered lines, or a node for mixed colour.
 */
export function PageHero({
  title,
  deck,
  aside,
  meta,
  className,
}: {
  /** A string gets the word reveal; an array becomes staggered reveal lines. */
  title: string | string[] | ReactNode;
  deck?: ReactNode;
  aside?: ReactNode;
  meta?: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "on-dark relative overflow-hidden bg-ink-950 text-white",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 grid-texture" />
      <div
        aria-hidden="true"
        className="absolute -right-[15%] -top-1/3 size-[52rem] rounded-full bg-signal-500/12 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[10%] bottom-[-30%] size-[36rem] rounded-full bg-artifact-purple/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px rule-fade text-signal-400"
      />

      <div className="container-wide relative pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div
          className={cn(
            "grid gap-12",
            aside ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20" : "",
          )}
        >
          <div className={cn(!aside && "max-w-[64rem]")}>
            <h1 className="text-display text-white">
              {typeof title === "string" ? (
                <RevealText delay={0.12}>{title}</RevealText>
              ) : Array.isArray(title) ? (
                title.map((line, i) => (
                  <RevealText delay={0.12 + i * 0.13} key={line}>
                    {line}
                  </RevealText>
                ))
              ) : (
                <FadeUp delay={0.12} trigger="load" y={20}>
                  {title}
                </FadeUp>
              )}
            </h1>

            {deck && (
              <FadeUp delay={0.26} trigger="load">
                <div className="text-lead mt-9 max-w-[46rem] text-slate-ai-300">
                  {deck}
                </div>
              </FadeUp>
            )}
          </div>

          {aside && (
            <FadeUp className="lg:pb-2" delay={0.38} trigger="load">
              {aside}
            </FadeUp>
          )}
        </div>

        {meta && (
          <dl className="mt-20 grid gap-x-10 gap-y-9 border-t border-white/10 pt-9 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((item, i) => (
              <FadeUp delay={0.42 + i * 0.07} key={item.label} trigger="load">
                <dt className="index-numeral font-mono text-[0.625rem] uppercase text-signal-300">
                  {item.label}
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-snug text-slate-ai-300">
                  {item.value}
                </dd>
              </FadeUp>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
