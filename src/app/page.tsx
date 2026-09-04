import Image from "next/image";
import type { Metadata } from "next";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  ArticleCard,
  FeatureCard,
  Surface,
} from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/Editorial";
import { VizFrame } from "@/components/ui/Placeholder";
import { SignalWave } from "@/components/ui/SignalWave";
import { SignalFlow } from "@/components/viz/SignalFlow";
import { PatternNetwork } from "@/components/viz/PatternNetwork";
import { PredictivePaths } from "@/components/viz/PredictivePaths";
import {
  MicroInteraction,
  LongitudinalBand,
} from "@/components/viz/MicroInteraction";
import { CtaBand } from "@/components/layout/CtaBand";
import { Hero } from "@/components/home/Hero";
import { CategoryBand } from "@/components/home/CategoryBand";
import { PersonaSequence } from "@/components/home/PersonaSequence";
import { BespokeEnvironments } from "@/components/home/BespokeEnvironments";
import { FadeUp, ImageReveal, RevealText } from "@/components/motion";
import { featuredArticles, formatDate } from "@/content/insights";

export const metadata: Metadata = {
  title: "Artifact Interactive — Learning Intelligence Platform",
  description:
    "Learning leaves signals. Artifact Interactive creates Learning Intelligence Platforms that turn everyday learning activity into intelligence institutions can use.",
};

export default function HomePage() {
  const featured = featuredArticles();

  return (
    <>
      <Hero />

      <CategoryBand />

      {/* ================= 2 · WHAT IS LEARNING INTELLIGENCE ================= */}
      <Section aria-labelledby="what-is" tone="light">
        <div className="container-artifact">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <SectionHeading
              deck={
                <>
                  Students attend, interact, ask, take notes, submit,
                  participate, disengage, return, collaborate, struggle, and
                  succeed. Faculty teach, adapt, respond, and make hundreds of
                  decisions a term. Administrators watch enrollment, retention,
                  outcomes, and program performance.
                </>
              }
              id="what-is"
              maxWidth="max-w-none"
              title={
                <>
                  Learning environments generate intelligence every day.{" "}
                  <span className="text-slate-ai-400">
                    Almost none of it is read.
                  </span>
                </>
              }
            />

            <div className="flex flex-col justify-center gap-8">
              <Reveal delay={120}>
                <p className="text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Together, these activities produce an enormous stream of
                  behavioral, academic, contextual, and engagement signals. Most
                  of it disappears within minutes, or remains trapped inside
                  systems that were never designed to speak to each other.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Artifact Interactive is researching how those naturally
                  occurring signals can become useful intelligence — an
                  interpretive layer that sits between experience and outcome
                  and explains the relationship between them.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <QuoteBlock>
                  An intelligence layer is what lets an institution learn from
                  itself.
                </QuoteBlock>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-16 lg:mt-24" delay={120}>
            <SignalFlow />
          </Reveal>
        </div>
      </Section>

      {/* ================= 3 · SIMPLE ON THE SURFACE ================= */}
      <Section aria-labelledby="simple" tone="paper">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                deck="We do not want to interrupt teaching. We do not want to interrupt learning. We do not want endless surveys or another administrative burden."
                id="simple"
                maxWidth="max-w-none"
                title="The best data doesn't interrupt the experience."
              />
              <Reveal delay={260}>
                <p className="mt-8 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Instead, participants engage with lightweight interactions that
                  fit inside the normal shape of a day. A few seconds, at a
                  moment when the answer is actually knowable, anchored to the
                  concept and context that make it meaningful.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Comprehension",
                    "Confidence",
                    "Confusion",
                    "Interest",
                    "Relevance",
                    "Engagement",
                    "Momentum",
                    "Sentiment",
                    "Participation",
                    "Reflection",
                    "Progress",
                  ].map((signal) => (
                    <li
                      className="rounded-sm border border-ink-900/10 bg-white px-3 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition-colors duration-300 hover:border-signal-500/40 hover:text-signal-600"
                      key={signal}
                    >
                      {signal}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={140}>
                <MicroInteraction />
              </Reveal>
              <Reveal delay={240}>
                <VizFrame
                  footnote="One response is noise. A term of responses, anchored in context, is a trajectory — and trajectories are what intelligence is built from."
                  label="Longitudinal view · single course"
                >
                  <LongitudinalBand />
                </VizFrame>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= 4 · INTELLIGENCE BEHIND THE SCENES ================= */}
      <Section aria-labelledby="behind" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <SectionHeading
            align="center"
            deck="Behind those simple interactions is the Artifact learning intelligence layer. It connects activity, context, engagement, feedback, history, and outcomes to identify relationships that are invisible inside any single system."
            id="behind"
            title="Small signals become larger patterns."
            tone="light-text"
          />

          <Reveal className="mt-16 lg:mt-20" delay={120}>
            <VizFrame
              footnote="Illustrative. Patterns are institution-specific — the shape of the intelligence depends on the environment that produced it."
              label="Signal aggregation · conceptual"
              tone="dark"
            >
              <PatternNetwork tone="dark" />
            </VizFrame>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {[
              {
                index: "01",
                title: "Connection",
                body: "Signals join with context, activity, historical behavior, and institutional data that already exists across the environment.",
              },
              {
                index: "02",
                title: "Relationship",
                body: "The system identifies where behaviors and conditions relate to outcomes — including relationships no single source could reveal.",
              },
              {
                index: "03",
                title: "Trajectory",
                body: "Those relationships resolve into visible learning pathways: how understanding tends to form, stall, and recover here.",
              },
            ].map((item, i) => (
              <Reveal delay={i * 110} key={item.index}>
                <FeatureCard index={item.index} title={item.title} tone="outline-dark">
                  {item.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= 5 · PREDICTIVE PATHWAYS ================= */}
      <Section aria-labelledby="predictive" tone="light">
        <div className="container-artifact">
          <SectionHeading
            action={<TextLink href="/platform#predictive">See the predictive layer</TextLink>}
            deck="Rather than only describing what already happened, Artifact is exploring how intelligence can identify what is likely to happen next — and, more importantly, what could be done differently."
            id="predictive"
            title="From reporting what happened to understanding what might happen next."
          />

          <div className="mt-16 lg:mt-20">
            <PredictivePaths />
          </div>

          <Reveal className="mt-16" delay={160}>
            <Surface className="p-8 lg:p-10" tone="paper">
              <div className="max-w-[62rem]">
                <div className="space-y-5 text-[1rem] leading-relaxed text-slate-ai-700">
                  <p>
                    Artifact does not claim that intelligence can predict human
                    behavior. People are contingent, contextual, and responsive
                    to support — which is precisely the point.
                  </p>
                  <p>
                    What a system can do is identify signals, surface patterns,
                    model possible pathways, detect emerging risk, reveal
                    opportunities, support decision making, and improve the
                    probability of successful outcomes. Pathways are evaluated
                    using concepts drawn from decision modeling and game theory
                    to find the decisions that carry the most leverage.
                  </p>
                  <p className="font-semibold text-ink-900">
                    The purpose of a modeled pathway is to give someone the
                    chance to make it wrong.
                  </p>
                </div>
              </div>
            </Surface>
          </Reveal>
        </div>
      </Section>

      {/* ================= 6 · DIFFERENT PEOPLE, DIFFERENT INTELLIGENCE ================= */}
      <Section aria-labelledby="personas" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            deck="The same intelligence layer produces different intelligence depending on who is asking. What a student needs to see is not what a dean needs to see."
            id="personas"
            maxWidth="max-w-[42rem]"
            title={
              <>
                Different people.
                <br />
                <span className="text-signal-600">Different intelligence.</span>
              </>
            }
          />

          <div className="mt-16 lg:mt-24">
            <PersonaSequence />
          </div>
        </div>
      </Section>

      {/* ================= 7 · BESPOKE OPERATING SYSTEMS ================= */}
      <Section aria-labelledby="bespoke" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/4 size-[46rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[160px]"
        />
        <div className="container-wide relative">
          <div className="max-w-[52rem]">
            <h2 className="text-display text-white" id="bespoke">
              <RevealText delay={0.05} trigger="scroll">
                Your institution is not generic.
              </RevealText>
              <RevealText className="text-signal-400" delay={0.18} trigger="scroll">
                Its intelligence layer shouldn&apos;t be either.
              </RevealText>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <p className="text-lead text-slate-ai-300">
                Institutions differ in culture, pedagogy, community, objectives,
                data ecosystem, student population, business model, and teaching
                philosophy. An intelligence layer that ignores those differences
                will describe an institution that does not exist.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[1.0625rem] leading-relaxed text-slate-ai-400">
                We research, design, and build bespoke Learning Intelligence
                operating systems around the specific environment of an
                institution — its people, its data, and the decisions it actually
                needs to make.
              </p>
              <div className="mt-8">
                <Button href="/solutions" variant="inverse" withArrow>
                  Explore Solutions
                </Button>
              </div>
            </FadeUp>
          </div>

          <div className="mt-20 lg:mt-28">
            <BespokeEnvironments />
          </div>

          {/* The brand chain already anchors the Platform, About and Contact
              pages; repeating it here made the section's tail read as filler.
              The reserved plate stays, now as a full-width band. */}
          <ImageReveal className="mt-20 rounded-lg border border-white/12 lg:mt-24">
            <Image
              alt="A university learning commons seen across its full width: concrete, glass and pale oak in cool daylight, with students and faculty at a distance."
              className="w-full"
              height={821}
              sizes="(min-width: 1024px) 92vw, 100vw"
              src="/imagery/learning-commons.jpg"
              width={1916}
            />
          </ImageReveal>
        </div>
      </Section>

      {/* ================= 8 · RESEARCH / THOUGHT LEADERSHIP ================= */}
      <Section aria-labelledby="research" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            action={<TextLink href="/insights">View Research &amp; Insights</TextLink>}
            deck="Learning Intelligence is a discipline being built, not a product category being sold. We publish what we are learning as we learn it."
            id="research"
            title="We're studying the future of learning intelligence."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((article, i) => (
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

      {/* ================= 9 · FINAL CTA ================= */}
      <CtaBand secondary={{ label: "Explore the Platform", href: "/platform" }} />
    </>
  );
}
