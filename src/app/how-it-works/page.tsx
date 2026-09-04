import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuoteBlock } from "@/components/ui/Editorial";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { LearningLoop } from "@/components/viz/LearningLoop";
import {
  ProcessSequence,
  CaptureViz,
  ConnectViz,
  UnderstandViz,
  ModelViz,
  ActViz,
  LearnViz,
  type Step,
} from "@/components/viz/ProcessSequence";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Capture, connect, understand, model, act, learn — how Artifact turns everyday learning activity into intelligence, as a continuous loop.",
};

const STEPS: Step[] = [
  {
    index: "01",
    title: "Capture",
    summary:
      "Simple interactions gather meaningful signals without disrupting learning.",
    detail:
      "Prompts are placed where an answer is actually knowable — at the moment a concept lands, or fails to. Participation costs a few seconds and produces something structurally useful: a state, a concept, a timestamp, a context.",
    points: [
      "No surveys, no separate workflow, no added administrative burden",
      "Every signal is anchored to a concept, a moment, and an environment",
      "Participation is visible to the participant and never silent",
    ],
    visual: <CaptureViz />,
  },
  {
    index: "02",
    title: "Connect",
    summary:
      "Signals connect with context, activity, historical behavior, and institutional data.",
    detail:
      "Alone, a comprehension signal is an opinion. Joined to attendance, submissions, curriculum sequence, advising history, and prior outcomes, it becomes evidence. Artifact reads from the systems an institution already runs rather than asking it to migrate.",
    points: [
      "Reads from the SIS, LMS, and data warehouse; replaces neither",
      "Identity and access governed by institutional policy",
      "Purpose limitation enforced in the schema, not only in policy",
    ],
    visual: <ConnectViz />,
  },
  {
    index: "03",
    title: "Understand",
    summary:
      "Patterns begin revealing how learning and behavior relate to outcomes.",
    detail:
      "With enough connected signal, relationships surface: which conditions precede recovery, which precede disengagement, where understanding reliably forms, and where a curriculum sequence consistently produces friction.",
    points: [
      "Relationships examined at concept, course, cohort, and program scale",
      "Findings are explainable — a person can ask why and get an answer",
      "Disparate impact tested continuously rather than assumed away",
    ],
    visual: <UnderstandViz />,
  },
  {
    index: "04",
    title: "Model",
    summary: "The platform models possible future trajectories and pathways.",
    detail:
      "From a current state, several trajectories are plausible. Each carries an estimated likelihood, the conditions contributing to it, and the decisions that would measurably shift it. Concepts from decision modeling help identify which of those decisions carry the most leverage.",
    points: [
      "Pathways, not verdicts — a set of possibilities with their conditions",
      "Surfaced early enough that an intervention can still change the outcome",
      "Evaluated on whether flagged trajectories improved, not on accuracy alone",
    ],
    visual: <ModelViz />,
  },
  {
    index: "05",
    title: "Act",
    summary:
      "People receive intelligence they can use to make better decisions.",
    detail:
      "The same intelligence is expressed differently for each person who can act on it — because a student, a professor, and an advisor are each making a different decision. The system informs. The person decides.",
    points: [
      "Delivered where the decision is already being made",
      "Expressed in the vocabulary of teaching and advising",
      "No consequential action is ever taken by the system alone",
    ],
    visual: <ActViz />,
  },
  {
    index: "06",
    title: "Learn",
    summary:
      "The system continuously learns from outcomes, creating an evolving intelligence loop.",
    detail:
      "What actually happened returns to the system as evidence. Over successive cycles, the intelligence layer becomes more specific to the institution that produced it — which is the point. A model of learning at one university should not be a model of learning everywhere.",
    points: [
      "Outcomes feed back as evidence, not just as records",
      "The intelligence layer becomes more institution-specific over time",
      "Assumptions are re-examined as the environment changes",
    ],
    visual: <LearnViz />,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        deck="Six movements, from a moment inside a classroom to a decision made somewhere else in the institution — and back again. None of them require anyone to change how they teach or learn."
        meta={[
          { label: "01 — 02", value: "Capture and connect the signal" },
          { label: "03 — 04", value: "Understand and model the pattern" },
          { label: "05", value: "Act, with the decision left to people" },
          { label: "06", value: "Learn, and return to the beginning" },
        ]}
        title="From a moment in a classroom to a decision that changes it."
      />

      <Section tone="light">
        <div className="container-artifact">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              id="sequence"
              maxWidth="max-w-none"
              title="Six steps, one continuous movement."
            />
            <div className="flex flex-col justify-center gap-7">
              <Reveal>
                <p className="text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Described separately, these read like stages in a pipeline. In
                  practice they overlap continuously: signals are being captured
                  while earlier signals are being modeled, and outcomes from last
                  term are already reshaping what the system understands about
                  this one.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <QuoteBlock>
                  The best intelligence doesn&apos;t interrupt the experience.
                </QuoteBlock>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <ProcessSequence steps={STEPS} />
          </div>
        </div>
      </Section>

      {/* ---- The loop ---- */}
      <Section aria-labelledby="loop" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[150px]"
        />
        <div className="container-artifact relative">
          <SectionHeading
            align="center"
            deck="The sequence is not a line. Every outcome becomes the next cycle's evidence, which is what makes the intelligence layer specific to the institution that produced it."
            id="loop"
            title="Experience, signal, intelligence, prediction, action, outcome."
            tone="light-text"
          />
          <div className="mt-16 lg:mt-20">
            <LearningLoop />
          </div>
        </div>
      </Section>

      {/* ---- What it asks of an institution ---- */}
      <Section tone="paper">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                deck="The most common question institutions ask is what this will cost their people. The honest answer is that the design constraint runs the other way: if it costs faculty and students meaningful time, the signal will be both burdensome and unreliable."
                maxWidth="max-w-none"
                title="What this requires of an institution."
              />
              <Reveal className="mt-10" delay={260}>
                <dl className="divide-y divide-ink-900/[0.07] border-y border-ink-900/[0.07]">
                  {[
                    {
                      term: "Of students",
                      def: "A few seconds, a few times a week, inside an environment they are already in.",
                    },
                    {
                      term: "Of faculty",
                      def: "No change to how they teach. Prompts are placed with them, not for them.",
                    },
                    {
                      term: "Of IT",
                      def: "Read access to existing systems, governed by institutional policy and reviewed on the institution's terms.",
                    },
                    {
                      term: "Of leadership",
                      def: "A decision about what the institution actually wants to understand — which is the part that takes the most work.",
                    },
                  ].map((row) => (
                    <div className="py-6" key={row.term}>
                      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-signal-600">
                        {row.term}
                      </dt>
                      <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate-ai-700">
                        {row.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal delay={140}>
                <ImagePlaceholder
                  caption="Reserved for classroom and seminar photography — the environments the signals come from."
                  label="Classroom photography"
                  ratio="4/3"
                />
              </Reveal>
              <Reveal delay={220}>
                <ImagePlaceholder
                  caption="Reserved for a workshop diagram from an institutional design engagement."
                  label="Design workshop"
                  ratio="16/9"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        body="Every institution's version of this sequence looks slightly different. The first conversation is usually about which questions are worth answering."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "Explore Solutions", href: "/solutions" }}
        title="What would this look like in your environment?"
      />
    </>
  );
}
