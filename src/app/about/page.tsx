import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { QuoteBlock, SignalChain } from "@/components/ui/Editorial";
import { Figure } from "@/components/ui/Figure";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { brandLines } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Artifact Interactive began exploring interaction and feedback loops in 2019. Today we research and build systems that connect human experience, behavioral signals, institutional data, and predictive intelligence.",
};

const DISCIPLINES = [
  {
    index: "01",
    title: "Designers",
    body: "The interaction design decides whether the data is worth having. If participation is burdensome or badly timed, nothing downstream can be trusted — so design comes first, not last.",
  },
  {
    index: "02",
    title: "Technologists",
    body: "Connecting signals across systems that were never built to speak to each other is an engineering problem before it is an analytical one. The substrate has to be right.",
  },
  {
    index: "03",
    title: "Strategists",
    body: "Institutions are not homogeneous. Understanding what a specific university, school, or organization actually needs to know is the work that determines whether any of it matters.",
  },
  {
    index: "04",
    title: "Researchers",
    body: "Learning Intelligence is a discipline being built. That requires stating what is unknown, testing assumptions, and publishing limits alongside findings.",
  },
];

const TIMELINE = [
  {
    year: "2019",
    title: "Interaction and feedback loops",
    body: "Artifact Interactive began exploring how individuals could interact with live or recorded messages, and how those interactions could create feedback loops.",
  },
  {
    year: "The question",
    title: "What are these loops actually revealing?",
    body: "The original work investigated whether those interactions could reveal how ideas were being understood and experienced — not whether they were being consumed, but whether they were landing.",
  },
  {
    year: "The turn",
    title: "What if learning environments could understand themselves?",
    body: "The same question, asked of a classroom rather than a message, turned out to be considerably larger — and considerably more useful.",
  },
  {
    year: "Now",
    title: "Learning Intelligence Platforms",
    body: "Artifact Interactive researches and builds systems that connect human experience, behavioral signals, institutional data, and predictive intelligence.",
  },
];

const BELIEFS = [
  "Intelligence should emerge from simple interactions that fit naturally into the day.",
  "The best data does not interrupt the experience that produced it.",
  "No institution should receive a generic intelligence layer.",
  "A system that cannot explain itself has not earned the decision it is informing.",
  "The learner is a participant in their own intelligence, not the subject of it.",
  "Where an intelligence layer is the wrong instrument, we should say so.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        aside={
          <Surface className="p-7 lg:p-8" tone="outline-dark">
            <SignalChain lines={brandLines.signalChain} tone="dark" />
          </Surface>
        }
        deck="Artifact Interactive is a design, technology, and research company building Learning Intelligence Platforms — and researching what that discipline should mean."
        title="We started with a question about feedback loops."
      />

      {/* ---- Origin ---- */}
      <Section aria-labelledby="origin" tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              id="origin"
              maxWidth="max-w-none"
              title="The work began in 2019."
            />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <Reveal>
                <p>
                  Artifact Interactive began exploring interaction and feedback
                  loops in 2019. The original work investigated how individuals
                  could interact with live or recorded messages, and how those
                  interactions could create feedback loops capable of revealing
                  how ideas were being understood and experienced.
                </p>
              </Reveal>
              <Reveal delay={90}>
                <p>
                  What made it interesting was not the interaction itself. It was
                  that a small, well-placed interaction could reveal something
                  that would otherwise have been invisible — whether an idea had
                  landed, and for whom, and when it stopped landing.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <QuoteBlock>
                  What if learning environments could understand themselves?
                </QuoteBlock>
              </Reveal>
              <Reveal delay={260}>
                <p>
                  That question turned out to be much larger than the work that
                  produced it. A classroom, a program, a campus, or an
                  organization generates an enormous amount of information about
                  how understanding is forming — almost none of which is captured
                  as intelligence. Artifact Interactive is now researching and
                  building systems that connect human experience, behavioral
                  signals, institutional data, and predictive intelligence.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 lg:mt-28">
            <ol className="grid gap-px overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((entry, i) => (
                <li
                  className="bg-white p-7 outline outline-ink-900/[0.09] lg:p-8"
                  key={entry.year}
                >
                  <Reveal delay={i * 110}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-signal-600">
                        {entry.year}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-ink-900/10"
                      />
                    </div>
                    <h3 className="mt-6 text-[1.0625rem] font-bold leading-snug tracking-tight text-ink-900">
                      {entry.title}
                    </h3>
                    <p className="mt-3.5 text-[0.875rem] leading-relaxed text-slate-ai-600">
                      {entry.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ---- Disciplines ---- */}
      <Section aria-labelledby="disciplines" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <SectionHeading
            deck="Learning Intelligence sits at an intersection, so the practice has to as well. The work is equal parts interaction design, systems engineering, institutional strategy, and applied research — and it fails if any one of them is missing."
            id="disciplines"
            title="Designers, technologists, strategists, researchers."
            tone="light-text"
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {DISCIPLINES.map((discipline, i) => (
              <Reveal delay={i * 100} key={discipline.index}>
                <FeatureCard
                  className="h-full"
                  index={discipline.index}
                  title={discipline.title}
                  tone="outline-dark"
                >
                  {discipline.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>

          <Figure
            alt="A studio working session: five people standing around a large table covered with printed diagrams and sticky notes, daylight from a window wall, a pinboard of sheets behind them."
            className="mt-16"
            height={992}
            sizes="(min-width: 1024px) 90vw, 100vw"
            src="/imagery/studio-session.jpg"
            tone="dark"
            width={1586}
          />
        </div>
      </Section>

      {/* ---- Beliefs ---- */}
      <Section aria-labelledby="beliefs" tone="paper">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                deck="These are constraints rather than aspirations. Each of them makes some version of this work harder, which is generally how you can tell whether a principle is real."
                id="beliefs"
                maxWidth="max-w-none"
                title="What we believe about this work."
              />
              <Figure
                alt="Three people in conversation around a small round table in a plain meeting room, seen from behind, with printed charts and notes spread between them."
                className="mt-12"
                height={993}
                src="/imagery/partnership-meeting.jpg"
                width={1584}
              />
            </div>
            <Reveal delay={140}>
              <ol className="divide-y divide-ink-900/[0.07] border-y border-ink-900/[0.07]">
                {BELIEFS.map((belief, i) => (
                  <li className="flex gap-6 py-6" key={belief}>
                    <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-slate-ai-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1.0625rem] leading-relaxed text-ink-800">
                      {belief}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---- Where we are ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <div className="mx-auto max-w-[46rem] text-center">
            <Reveal>
              <p className="font-editorial text-[1.5rem] leading-[1.45] text-ink-900 lg:text-[1.875rem]">
                Artifact Interactive is an emerging technology and research
                company. We are early, we are building with institutional
                partners, and we would rather describe that accurately than
                inflate it.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                If you are working on the same questions — inside a university, a
                school system, a company, or a research group — we would like to
                talk.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        body="Artifact Interactive works with institutions exploring new ways to understand learning, behavior, knowledge, and outcomes."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "See our Research", href: "/research" }}
      />
    </>
  );
}
