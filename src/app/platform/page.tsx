import Image from "next/image";
import type { Metadata } from "next";
import { TextLink } from "@/components/ui/Button";
import { ImageReveal } from "@/components/motion";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { QuoteBlock, SignalChain } from "@/components/ui/Editorial";
import { VizFrame } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { ArchitectureStack } from "@/components/viz/ArchitectureStack";
import { AdoptionPath } from "@/components/viz/AdoptionPath";
import { OwnershipPrinciple } from "@/components/ui/OwnershipPrinciple";
import { SignalFlow } from "@/components/viz/SignalFlow";
import { PredictivePaths } from "@/components/viz/PredictivePaths";
import { LongitudinalBand } from "@/components/viz/MicroInteraction";
import { brandLines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Learning Intelligence Platform: an intelligence layer across the systems an institution runs today, designed to grow into that institution's Learning Intelligence Operating System.",
  alternates: { canonical: "/platform" }
};

const SIGNAL_SOURCES = [
  {
    index: "01",
    title: "Lightweight interactions",
    body: "Seconds-long prompts placed at moments when the answer is knowable — comprehension, confidence, confusion, relevance, momentum — anchored to a concept and a moment.",
  },
  {
    index: "02",
    title: "Existing activity",
    body: "Attendance, submissions, revisions, participation, and resource use already produced by the systems an institution runs today.",
  },
  {
    index: "03",
    title: "Instructional signal",
    body: "Curriculum sequencing, pacing decisions, modality changes, and instructor adjustments — the teaching side of the environment, treated as data.",
  },
  {
    index: "04",
    title: "Institutional context",
    body: "Program structure, cohort characteristics, advising history, and outcome records, joined as context rather than collected as surveillance.",
  },
];

const CAPABILITIES = [
  {
    index: "01",
    title: "Signal Collection",
    body: "Capture meaning, not just activity. Every signal carries what it is about, when it occurred, and the context it belongs to — which is what makes it connectable later.",
  },
  {
    index: "02",
    title: "Data Connections",
    body: "Join signals to the systems an institution already runs — SIS, LMS, CRM, advising and assessment — without asking any of them to move. Over time, capabilities can consolidate into Artifact itself, at whatever pace the institution chooses.",
  },
  {
    index: "03",
    title: "Pattern Recognition",
    body: "Identify recurring relationships between behavior, condition, and outcome — at concept, course, cohort, program, and institutional scale.",
  },
  {
    index: "04",
    title: "Predictive Pathways",
    body: "Model possible trajectories with associated likelihoods and contributing conditions, surfaced while there is still time to act on them.",
  },
  {
    index: "05",
    title: "Decision Support",
    body: "Deliver intelligence to the person who can use it, in the vocabulary of teaching and advising, with the reasoning visible and the decision left with them.",
  },
  {
    index: "06",
    title: "Institutional Intelligence",
    body: "Aggregate the same substrate upward into a picture of how the institution learns — where understanding forms, where knowledge concentrates, where it leaks.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        aside={
          <Surface className="p-7 lg:p-8" tone="outline-dark">
            <SignalChain lines={brandLines.signalChain} tone="dark" />
          </Surface>
        }
        deck="A Learning Intelligence Platform helps an institution understand how people are actually learning, engaging, progressing, struggling, adapting, and succeeding — and what that suggests about what happens next. It begins alongside the systems you already run, and can grow into the environment they converge into."
        meta={[
          { label: "Begins as", value: "An intelligence layer — no migration" },
          { label: "Input", value: "Naturally occurring signals" },
          { label: "Output", value: "Pathways, not verdicts" },
          { label: "Authority", value: "People decide; the system informs" },
        ]}
        title="The Learning Intelligence Platform"
      />

      {/* ---- What is a LIP ---- */}
      <Section aria-labelledby="definition" tone="light">
        <div className="container-artifact">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              id="definition"
              maxWidth="max-w-none"
              title="What is a Learning Intelligence Platform?"
            />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <Reveal>
                <p>
                  Most educational technology organizes activity: a place to
                  deliver content, collect submissions, record grades, or
                  administer a program. A Learning Intelligence Platform is built
                  around a different question — not what happened, but what it
                  means, and what should happen next.
                </p>
              </Reveal>
              <Reveal delay={90}>
                <p>
                  It is not a reporting tool, because a report describes an
                  endpoint. It is not a data warehouse, because storage is not
                  interpretation. It can begin beside the systems an institution
                  already depends on — the layer those systems have never had,
                  holding the relationships between them. And where an
                  institution chooses, it can grow into the environment those
                  systems were only ever parts of.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <QuoteBlock>
                  From learning activity to learning intelligence.
                </QuoteBlock>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-16 lg:mt-24" delay={140}>
            <SignalFlow />
          </Reveal>
        </div>
      </Section>

      {/* ---- Architecture ---- */}
      <Section aria-labelledby="architecture" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 size-[46rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[150px]"
        />
        <div className="container-artifact relative">
          <SectionHeading
            align="center"
            deck="Five layers, each with a distinct job. Signal moves downward through the stack; intelligence moves back out to the people who can use it."
            id="architecture"
            title="The intelligence layer, in full."
            tone="light-text"
          />
          <div className="mt-16 lg:mt-20">
            <ArchitectureStack />
          </div>
        </div>
      </Section>

      {/* ---- Adoption: from intelligence layer to operating system ---- */}
      <Section aria-labelledby="adoption-heading" id="adoption" tone="paper">
        <div className="container-wide">
          <SectionHeading
            deck="Artifact is a Learning Intelligence Platform. Built out across an institution, it can become that institution's Learning Intelligence Operating System — at whatever pace, and to whatever extent, the institution chooses."
            id="adoption-heading"
            maxWidth="max-w-[54rem]"
            title="Start as an intelligence layer. Grow into an operating system."
          />
          <div className="mt-14 lg:mt-20">
            <AdoptionPath />
          </div>
          <div className="mt-20 border-t border-ink-900/10 pt-16 lg:mt-28 lg:pt-20">
            <OwnershipPrinciple />
          </div>
        </div>
      </Section>

      {/* ---- Signal collection ---- */}
      <Section aria-labelledby="signal-collection" tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                deck="Signal collection is a design problem before it is a data problem. If participation costs more than a few seconds, or arrives at a moment when the answer isn't knowable, the signal will be both burdensome and wrong."
                id="signal-collection"
                maxWidth="max-w-none"
                title="Capture meaning, not just activity."
              />
              <Reveal delay={260}>
                <div className="mt-10">
                  <VizFrame
                    footnote="A single course, one term. The system's interest is not in any one point — it is in the shape, the dip, and the conditions that surrounded the recovery."
                    label="Comprehension signal · one course, one term"
                    tone="paper"
                  >
                    <LongitudinalBand />
                  </VizFrame>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {SIGNAL_SOURCES.map((source, i) => (
                <Reveal delay={i * 100} key={source.index}>
                  <FeatureCard
                    className="h-full"
                    index={source.index}
                    title={source.title}
                    tone="paper"
                  >
                    {source.body}
                  </FeatureCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Capabilities ---- */}
      <Section aria-labelledby="capabilities" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            deck="Six capabilities compose the platform. They are described separately here, but in practice they are one continuous movement from signal to decision."
            id="capabilities"
            title="What the platform does."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability, i) => (
              <Reveal delay={(i % 3) * 100} key={capability.index}>
                <FeatureCard
                  className="h-full"
                  index={capability.index}
                  title={capability.title}
                >
                  {capability.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Predictive layer ---- */}
      <Section aria-labelledby="predictive-heading" id="predictive" tone="light">
        <div className="container-artifact">
          <SectionHeading
            deck="The predictive layer models what may happen next as a set of pathways rather than a single forecast — each with the conditions that contribute to it and the decisions that would change it."
            id="predictive-heading"
            title="Possible pathways, with their conditions attached."
          />
          <div className="mt-16">
            <PredictivePaths />
          </div>
        </div>
      </Section>

      {/* ---- Decision support & institutional intelligence ---- */}
      <Section aria-labelledby="decision" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                deck="Intelligence that requires someone to go find it will not be used. The platform's job is to place what it knows where a decision is already being made — a syllabus revision, an advising conversation, a program review."
                id="decision"
                maxWidth="max-w-none"
                title="Intelligence arrives where decisions happen."
                tone="light-text"
              />
              <Reveal className="mt-10" delay={280}>
                <ul className="space-y-4">
                  {[
                    "Every output is interrogable: a person can ask why and get an answer.",
                    "Explanations use the vocabulary of teaching, not the vocabulary of modeling.",
                    "No consequential action is taken by the system alone.",
                    "Signals collected to support learning are architecturally separated from punitive processes.",
                  ].map((line) => (
                    <li
                      className="flex gap-4 border-b border-white/10 pb-4 text-[0.9375rem] leading-relaxed text-slate-ai-300"
                      key={line}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-signal-400"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="mt-9" delay={360}>
                <TextLink href="/research" tone="light">
                  Read our research on data ethics
                </TextLink>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8">
              <figure>
                <ImageReveal className="rounded-lg border border-white/12">
                  <Image
                    alt="An interface concept for the intelligence layer: a comprehension curve dipping and recovering across a term, with supporting summary figures. Labels are shown abstracted."
                    className="w-full"
                    height={941}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    src="/imagery/interface-concept.png"
                    width={1672}
                  />
                </ImageReveal>
                <figcaption className="mt-3.5 text-[0.8125rem] leading-relaxed text-slate-ai-400">
                  Interface concept. Artifact is in active development — this
                  shows the shape of the intelligence, not a shipped product.
                </figcaption>
              </figure>
              <Reveal delay={220}>
                <Surface className="p-7 lg:p-8" tone="outline-dark">
                  <h3 className="text-[1.125rem] font-bold tracking-tight text-white">
                    Institutional intelligence
                  </h3>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-ai-300">
                    The same substrate aggregates upward. What a professor sees as
                    a concept-level pattern in one course becomes, at
                    institutional scale, a picture of how curriculum sequences
                    perform, where programs diverge, and how knowledge moves.
                  </p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-ai-300">
                    Because it is built from the same signals, the institutional
                    view and the classroom view never disagree about what
                    happened — they differ only in altitude.
                  </p>
                </Surface>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        body="How It Works walks through the full sequence — capture, connect, understand, model, act, and learn — as one continuous loop."
        primary={{ label: "See How It Works", href: "/how-it-works" }}
        secondary={{ label: "Talk With Artifact", href: "/contact" }}
        title="See the platform in motion."
      />
    </>
  );
}
