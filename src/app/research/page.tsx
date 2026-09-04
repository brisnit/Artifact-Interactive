import type { Metadata } from "next";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ResearchCard, Surface, ArticleCard } from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/Editorial";
import { Figure } from "@/components/ui/Figure";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { PatternNetwork } from "@/components/viz/PatternNetwork";
import { articles, formatDate } from "@/content/insights";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Building the discipline of Learning Intelligence — predictive learning, human signals, learning behavior, institutional intelligence, decision modeling, data ethics, and human-centered AI.",
  alternates: { canonical: "/research" }
};

const TOPICS = [
  {
    index: "R—01",
    title: "Predictive Learning",
    question: "What can be responsibly anticipated about learning, and what cannot?",
    status: "Active",
    body: "Modeling possible trajectories from connected signal, with explicit attention to where prediction is credible, where it is speculative, and where it becomes self-fulfilling.",
  },
  {
    index: "R—02",
    title: "Human Signals",
    question: "Which naturally occurring signals actually carry meaning?",
    status: "Active",
    body: "Studying which lightweight interactions produce interpretable signal without burdening the experience — and which produce data that looks useful but is not.",
  },
  {
    index: "R—03",
    title: "Learning Behavior",
    question: "How does understanding actually form inside a real environment?",
    status: "Active",
    body: "Examining how comprehension develops, stalls, and recovers across sessions, concepts, and cohorts, and what conditions consistently precede each pattern.",
  },
  {
    index: "R—04",
    title: "Institutional Intelligence",
    question: "What does it mean for an institution to understand itself?",
    status: "Active",
    body: "How signal aggregates from concept level to institutional level without losing meaning, and what an institution can legitimately claim to know about its own behavior.",
  },
  {
    index: "R—05",
    title: "Decision Modeling",
    question: "Which decisions in a learning system carry the most leverage?",
    status: "Exploratory",
    body: "Applying concepts from game theory and decision modeling to sequences of interdependent choices — while resisting the reduction of learners to rational agents.",
  },
  {
    index: "R—06",
    title: "Data Ethics",
    question: "How should learning signal be governed, and by whom?",
    status: "Active",
    body: "Consent, purpose limitation, access, and the architectural separation between signals collected to support learning and processes that could penalise it.",
  },
  {
    index: "R—07",
    title: "Human-Centered AI",
    question: "Where should authority sit between a system and a person?",
    status: "Active",
    body: "Designing intelligence that informs rather than decides, explains itself in the vocabulary of teaching, and gives learners access to their own picture first.",
  },
];

const PRINCIPLES = [
  {
    title: "State the limits",
    body: "Every claim we publish carries what it does not support. A research programme that only reports what worked is a marketing programme.",
  },
  {
    title: "Explainability first",
    body: "A model that cannot explain itself to a professor has not earned a place in their classroom, regardless of its measured performance.",
  },
  {
    title: "Test for disparate impact",
    body: "Models trained on historical outcomes learn historical inequity. This is examined continuously, not assumed away at design time.",
  },
  {
    title: "Measure intervention, not accuracy",
    body: "The value of a modeled risk pathway is whether it changed. Predictive accuracy alone is the wrong success criterion in education.",
  },
];

export default function ResearchPage() {
  const recent = articles.slice(0, 3);

  return (
    <>
      <PageHero
        deck="Learning Intelligence is not yet a settled field. Artifact Intelligence is researching what it should mean, what it can credibly support, and where its limits are — and publishing that work as we go."
        meta={[
          { label: "Focus", value: "Signals, behavior, and institutional intelligence" },
          { label: "Method", value: "Applied research with institutional partners" },
          { label: "Posture", value: "Publish limits alongside findings" },
          { label: "Stage", value: "Early and ongoing" },
        ]}
        title="Building the discipline of Learning Intelligence."
      />

      {/* ---- Position ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              maxWidth="max-w-none"
              title="A discipline being built, not a category being sold."
            />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <Reveal>
                <p>
                  Learning analytics established that learning environments
                  produce measurable phenomena. It did not establish what those
                  phenomena mean, how they relate, or what an institution can
                  legitimately conclude from them. Those questions are open.
                </p>
              </Reveal>
              <Reveal delay={90}>
                <p>
                  We treat them as research questions rather than product
                  questions. That means stating what we do not know, publishing
                  the limits of a finding alongside the finding, and being
                  specific about the difference between what a system observed
                  and what it inferred.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <QuoteBlock>
                  Signals become patterns. Patterns become intelligence.
                  Intelligence reveals paths.
                </QuoteBlock>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Topics ---- */}
      <Section aria-labelledby="topics" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            deck="Seven areas of active and exploratory work. Each will hold white papers, experiments, methodology notes, and research partnerships as that work matures."
            id="topics"
            title="What we are studying."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic, i) => (
              <Reveal delay={(i % 3) * 100} key={topic.index}>
                <ResearchCard
                  index={topic.index}
                  question={topic.question}
                  status={topic.status}
                  title={topic.title}
                >
                  {topic.body}
                </ResearchCard>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="relative flex h-full flex-col justify-center pt-7 lg:pt-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-ink-900/12"
                />
                <h3 className="text-[1.375rem] font-bold leading-tight tracking-[-0.03em] text-ink-900">
                  Research partnerships
                </h3>
                <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-slate-ai-700">
                  We are interested in working with institutions, faculty, and
                  researchers examining the same questions from different
                  directions.
                </p>
                <div className="mt-6">
                  <TextLink href="/contact">Propose a collaboration</TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---- Method ---- */}
      <Section aria-labelledby="method" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                deck="Four commitments that govern how we conduct and report this work. They are constraints, and they occasionally make the results less impressive than they could be made to look."
                id="method"
                maxWidth="max-w-none"
                title="How we hold ourselves to it."
                tone="light-text"
              />
              <Reveal className="mt-10" delay={280}>
                <ol className="divide-y divide-white/10 border-y border-white/10">
                  {PRINCIPLES.map((principle, i) => (
                    <li className="py-6" key={principle.title}>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-signal-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[1.0625rem] font-bold tracking-tight text-white">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="mt-3 pl-9 text-[0.9375rem] leading-relaxed text-slate-ai-300">
                        {principle.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal delay={140}>
                <Surface className="overflow-hidden p-0" tone="outline-dark">
                  <div className="border-b border-white/10 px-5 py-3">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-slate-ai-400">
                      Signal aggregation · conceptual
                    </span>
                  </div>
                  <div className="p-6">
                    <PatternNetwork tone="dark" />
                  </div>
                </Surface>
              </Reveal>
              <Figure
                alt="A research desk from above: overlapping sheets of hand-drawn network diagrams, flowcharts and scatter plots around an open notebook, with a pen, ruler and glasses."
                height={993}
                src="/imagery/research-artefacts.jpg"
                tone="dark"
                width={1584}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Recent writing ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <SectionHeading
            action={<TextLink href="/insights">View all insights</TextLink>}
            deck="Shorter-form writing on the same questions, published as the research develops."
            title="Recent from the research team."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((article, i) => (
              <Reveal delay={i * 110} key={article.slug}>
                <ArticleCard
                  category={article.category}
                  date={formatDate(article.date)}
                  excerpt={article.excerpt}
                  href={`/insights/${article.slug}`}
                  readingTime={article.readingTime}
                  title={article.title}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        body="We are looking for institutions and researchers willing to examine these questions seriously, including the parts where the honest answer is that we do not yet know."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "Read the Insights", href: "/insights" }}
        title="Work on these questions with us."
      />
    </>
  );
}
