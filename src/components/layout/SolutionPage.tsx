import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SignalFlow } from "@/components/viz/SignalFlow";
import { solutions, type Solution } from "@/content/solutions";

/**
 * Shared template for the three solution detail pages. The structure is
 * deliberately identical across environments so the differences in content
 * read as differences in the environment, not in the design.
 */
export function SolutionPage({ solution }: { solution: Solution }) {
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero
        deck={solution.deck}
        meta={solution.meta}
        title={solution.title}
      />

      {/* ---- Intro + audiences ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="space-y-7">
              {solution.intro.map((paragraph, i) => (
                <Reveal delay={i * 100} key={paragraph.slice(0, 24)}>
                  <p className="text-[1.125rem] leading-[1.65] text-ink-700">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <div className="border-t border-ink-900/[0.07] pt-8">
                  <h2 className="text-[1.0625rem] font-bold tracking-tight text-ink-900">
                    Signals in this environment
                  </h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {solution.signals.map((signal) => (
                      <li
                        className="rounded-sm border border-ink-900/10 bg-slate-ai-50 px-3 py-1.5 text-[0.8125rem] font-medium text-ink-700"
                        key={signal}
                      >
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <Surface className="p-7 lg:p-8" tone="paper">
                <h2 className="text-[1.0625rem] font-bold tracking-tight text-ink-900">
                  Who this is for
                </h2>
                <ul className="mt-6 divide-y divide-ink-900/[0.07]">
                  {solution.audiences.map((audience) => (
                    <li
                      className="flex items-baseline justify-between gap-6 py-3.5"
                      key={audience.label}
                    >
                      <span className="text-[0.9375rem] font-semibold tracking-tight text-ink-900">
                        {audience.label}
                      </span>
                      <span className="text-right text-[0.8125rem] leading-snug text-slate-ai-600">
                        {audience.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </Surface>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---- Problems ---- */}
      <Section aria-labelledby="problems" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            deck="These are the questions institutions in this environment bring to us most often. Artifact does not claim to answer any of them completely — it makes the conditions surrounding them visible earlier."
            id="problems"
            title="The questions worth answering here."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {solution.problems.map((problem, i) => (
              <Reveal delay={(i % 3) * 100} key={problem.title}>
                <FeatureCard className="h-full" title={problem.title}>
                  {problem.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Focus areas ---- */}
      <Section aria-labelledby="focus" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                deck="What a bespoke operating system for this environment tends to focus on first."
                id="focus"
                maxWidth="max-w-none"
                title="Where the intelligence layer starts."
                tone="light-text"
              />
              <Reveal className="mt-12" delay={280}>
                <ImagePlaceholder
                  caption={solution.imagery[0].caption}
                  label={solution.imagery[0].label}
                  ratio={solution.imagery[0].ratio}
                  tone="dark"
                />
              </Reveal>
            </div>
            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {solution.focus.map((item, i) => (
                <Reveal delay={i * 100} key={item.index}>
                  <FeatureCard
                    className="h-full"
                    index={item.index}
                    title={item.title}
                    tone="outline-dark"
                  >
                    {item.body}
                  </FeatureCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---- The chain, restated in context ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <SectionHeading
            align="center"
            deck="The same movement, applied to this environment's own signals, systems, and decisions."
            title="Experience to outcome, in this environment."
          />
          <Reveal className="mt-14" delay={120}>
            <SignalFlow />
          </Reveal>
        </div>
      </Section>

      {/* ---- Caution ---- */}
      <Section tone="paper">
        <div className="container-artifact">
          <div className="max-w-[64rem]">
            <div className="space-y-8">
              <Reveal delay={100}>
                <p className="font-editorial text-[1.375rem] leading-[1.45] text-ink-900 lg:text-[1.625rem]">
                  {solution.caution}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="grid gap-6 border-t border-ink-900/[0.07] pt-8 sm:grid-cols-2">
                  <ImagePlaceholder
                    caption={solution.imagery[1].caption}
                    label={solution.imagery[1].label}
                    ratio="16/10"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-[0.9375rem] leading-relaxed text-slate-ai-700">
                      Every engagement is scoped around what an institution
                      actually wants to understand — and around what it is
                      prepared to do with the answer. Where an intelligence layer
                      is not the right instrument, we say so.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Other environments ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <SectionHeading title="Explore the rest." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal delay={i * 110} key={other.slug}>
                <Surface as="article" className="group h-full" interactive>
                  <Link
                    className="flex h-full flex-col p-7 lg:p-9"
                    href={`/solutions/${other.slug}`}
                  >
                    <h3 className="text-subheading text-ink-900 transition-colors duration-300 group-hover:text-signal-600">
                      {other.name}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-slate-ai-700">
                      {other.deck}
                    </p>
                    <span className="mt-7 flex items-center gap-2 text-[0.875rem] font-semibold text-signal-600">
                      Explore
                      <svg
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        height="10"
                        viewBox="0 0 14 12"
                        width="12"
                      >
                        <path
                          d="M1 6h11m0 0L7.5 1.5M12 6l-4.5 4.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                  </Link>
                </Surface>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        body={`Artifact Interactive works with ${solution.name.toLowerCase()} environments exploring new ways to understand learning, behavior, knowledge, and outcomes.`}
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "See How It Works", href: "/how-it-works" }}
        title="What could your institution learn about itself?"
      />
    </>
  );
}
