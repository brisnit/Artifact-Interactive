import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Surface } from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/Editorial";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Bespoke Learning Intelligence operating systems for higher education, high schools, and business and workforce environments.",
  alternates: { canonical: "/solutions" }
};

const DIFFERENCES = [
  "Cultures",
  "Pedagogies",
  "Communities",
  "Objectives",
  "Data ecosystems",
  "Student populations",
  "Business models",
  "Teaching philosophies",
];

const PROCESS = [
  {
    index: "01",
    title: "Research",
    body: "We begin by studying the environment: how teaching actually happens, what data already exists, which decisions matter, and where understanding currently breaks down.",
  },
  {
    index: "02",
    title: "Design",
    body: "The interaction design comes before the data model. If participation is burdensome or badly timed, nothing downstream can be trusted.",
  },
  {
    index: "03",
    title: "Build",
    body: "The intelligence layer is built around the institution's own structure — its programs, its systems, its governance, and its vocabulary.",
  },
  {
    index: "04",
    title: "Evolve",
    body: "Outcomes return to the system as evidence. The layer becomes more specific to the institution over time rather than more generic.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        deck="Artifact does not believe every institution should receive the same platform. We research, design, and build bespoke Learning Intelligence operating systems around the unique environment of an institution."
        meta={[
          { label: "Universities", value: "Students, faculty, programs, outcomes" },
          { label: "High schools", value: "Earlier visibility and pathways" },
          { label: "Business", value: "Capability and knowledge transfer" },
          { label: "Method", value: "Research, design, build, evolve" },
        ]}
        title={[
          "Your institution is not generic.",
          "Its intelligence layer shouldn\u2019t be either.",
        ]}
      />

      {/* ---- Three environments ---- */}
      <Section aria-labelledby="environments" tone="light">
        <div className="container-artifact">
          <SectionHeading
            deck="Three environments, each with a different set of questions worth answering. The underlying discipline is the same; the operating system built on it is not."
            id="environments"
            title="Where Artifact is exploring and building."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <Reveal delay={i * 120} key={solution.slug}>
                <Surface
                  as="article"
                  className="group flex h-full flex-col overflow-hidden"
                  interactive
                >
                  <Link
                    className="flex h-full flex-col"
                    href={`/solutions/${solution.slug}`}
                  >
                    <div className="border-b border-ink-900/[0.07] bg-slate-ai-50 p-7 lg:p-8">
                      <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-signal-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-5 text-[1.5rem] font-bold leading-tight tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-signal-600">
                        {solution.name}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-7 lg:p-8">
                      <p className="text-[0.9375rem] leading-relaxed text-slate-ai-700">
                        {solution.deck}
                      </p>
                      <ul className="mt-7 flex flex-wrap gap-1.5">
                        {solution.audiences.slice(0, 4).map((audience) => (
                          <li
                            className="rounded-sm border border-ink-900/[0.09] px-2 py-1 text-[0.6875rem] font-medium text-slate-ai-600"
                            key={audience.label}
                          >
                            {audience.label}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto flex items-center gap-2 pt-8 text-[0.875rem] font-semibold text-signal-600">
                        Explore {solution.shortName}
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
                    </div>
                  </Link>
                </Surface>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Why bespoke ---- */}
      <Section aria-labelledby="bespoke" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                deck="A templated intelligence layer describes an average institution. No one runs an average institution."
                id="bespoke"
                maxWidth="max-w-none"
                title="The intelligence layer should reflect the differences."
                tone="light-text"
              />
              <Reveal className="mt-10" delay={260}>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {DIFFERENCES.map((difference) => (
                    <li
                      className="flex items-center gap-3 border-b border-white/10 pb-3 text-[0.875rem] text-slate-ai-300"
                      key={difference}
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rounded-full bg-signal-400"
                      />
                      {difference}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="mt-10" delay={340}>
                <QuoteBlock tone="dark">
                  Your institution is constantly creating data. Artifact helps it
                  learn from itself.
                </QuoteBlock>
              </Reveal>
            </div>

            <div>
              <Reveal delay={140}>
                <h3 className="text-[1.25rem] font-bold tracking-tight text-white">
                  How we work
                </h3>
              </Reveal>
              <ol className="mt-8 space-y-px">
                {PROCESS.map((step, i) => (
                  <li key={step.index}>
                    <Reveal delay={200 + i * 100}>
                      <div className="border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-signal-400/40 hover:bg-white/[0.05] lg:p-7">
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-signal-300">
                            {step.index}
                          </span>
                          <h3 className="text-[1.125rem] font-bold tracking-tight text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-slate-ai-300">
                          {step.body}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Imagery band ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <SectionHeading
            align="center"
            deck="Different environments, one discipline. What changes is which questions matter, who is asking them, and what the institution is prepared to do with the answer."
            title="The same discipline, in three different worlds."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "University campus",
                caption: "Higher education — programs, faculty, and student success.",
              },
              {
                label: "Secondary classroom",
                caption: "High schools — earlier visibility and student pathways.",
              },
              {
                label: "Workplace learning",
                caption: "Business — capability, knowledge, and skills development.",
              },
            ].map((image, i) => (
              <Reveal delay={i * 110} key={image.label}>
                <ImagePlaceholder
                  caption={image.caption}
                  label={image.label}
                  ratio="4/5"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        body="Every engagement begins the same way: understanding what an institution actually wants to know about itself, and whether an intelligence layer is the right way to find out."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "Explore the Platform", href: "/platform" }}
        title="Which questions are worth answering at your institution?"
      />
    </>
  );
}
