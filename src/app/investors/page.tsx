import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeUp, RevealText, StaggerGroup } from "@/components/motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/Editorial";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import {
  ArtifactChain,
  LearningEcosystem,
  PlatformExpansion,
} from "@/components/viz/InvestorViz";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Artifact Intelligence is building an intelligence layer between experience and action, starting with learning. The thesis, the entry point, and where the work stands today.",
  alternates: { canonical: "/investors" },
};

const THESIS_MOMENTS = [
  "A student pauses during a lecture.",
  "An employee repeatedly encounters the same friction.",
  "A learner engages deeply with one concept and disconnects from another.",
  "A professor changes how something is explained.",
  "A team develops patterns that traditional reporting never captures.",
];

const CAPABILITIES = [
  {
    index: "01",
    title: "Predict",
    body: "Surface patterns early enough to matter — while a decision can still change the outcome rather than explain it.",
  },
  {
    index: "02",
    title: "Personalize",
    body: "Adapt experiences around individual needs and context, rather than around an average that describes nobody.",
  },
  {
    index: "03",
    title: "Preserve",
    body: "Capture institutional and human knowledge that would otherwise disappear when people move on.",
  },
  {
    index: "04",
    title: "Prove",
    body: "Create clearer evidence of outcomes, progress and impact — including where an intervention did not work.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        aside={
          <Button href="#investor-contact" size="lg" variant="inverse" withArrow>
            Investor Inquiries
          </Button>
        }
        deck={
          <>
            Organizations have spent decades digitizing experiences and
            collecting data. The next opportunity isn&apos;t collecting more.
            It&apos;s understanding what those signals mean.
          </>
        }
        title="We're building intelligence for what happens next."
      />

      {/* ---- Thesis ---- */}
      <Section aria-labelledby="thesis" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="index-numeral font-mono text-[0.6875rem] uppercase text-signal-600">
                  Our thesis
                </p>
              </FadeUp>
              <h2 className="text-heading mt-6 text-ink-900" id="thesis">
                <RevealText trigger="scroll">
                  Every interaction leaves an artifact.
                </RevealText>
              </h2>
            </div>

            <div>
              <StaggerGroup as="ul" className="space-y-0" selector=":scope > li">
                {THESIS_MOMENTS.map((moment) => (
                  <li
                    className="border-b border-ink-900/[0.09] py-5 text-[1.125rem] leading-snug text-ink-800 first:border-t"
                    key={moment}
                  >
                    {moment}
                  </li>
                ))}
              </StaggerGroup>

              <FadeUp delay={0.12}>
                <div className="mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  <p>
                    These moments create digital artifacts. Individually, they
                    may appear insignificant. Together, they become signals.
                  </p>
                  <p>
                    And when those signals can be interpreted intelligently, they
                    can reveal something much more valuable: what is happening,
                    why it may be happening, and what should happen next.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[160px]"
        />
        <div className="container-wide relative">
          <ArtifactChain />
        </div>
      </Section>

      {/* ---- The problem ---- */}
      <Section aria-labelledby="problem" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <SectionHeading
              id="problem"
              maxWidth="max-w-none"
              title="Organizations can measure activity. Understanding is harder."
            />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Today&apos;s systems are extraordinarily good at recording what
                  happened. Attendance. Completion. Clicks. Assessments.
                  Performance. Engagement. Productivity.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  But retrospective reporting often arrives after the moment when
                  intervention would have mattered most.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <QuoteBlock>
                  Artifact Intelligence is exploring a different model:
                  intelligence that emerges alongside the experience itself.
                </QuoteBlock>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Entry point ---- */}
      <Section aria-labelledby="entry" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-wide relative">
          <div className="max-w-[52rem]">
            <FadeUp>
              <p className="index-numeral font-mono text-[0.6875rem] uppercase text-signal-300">
                Our entry point
              </p>
            </FadeUp>
            <h2 className="text-heading mt-6 text-white" id="entry">
              <RevealText trigger="scroll">
                Learning is one of the richest signal environments in the world.
              </RevealText>
            </h2>
            <FadeUp delay={0.18}>
              <p className="text-lead mt-8 text-slate-ai-300">
                Artifact Intelligence is initially focused on education, where
                understanding engagement, comprehension and learning progression
                can profoundly affect outcomes. We&apos;re developing a
                predictive learning platform designed to create feedback loops
                between students, educators and institutions.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16 lg:mt-20">
            <LearningEcosystem />
          </div>
        </div>
      </Section>

      {/* ---- Platform vision ---- */}
      <Section aria-labelledby="platform" tone="light">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                deck="The underlying idea extends beyond the classroom. Wherever people interact with systems, content, processes and one another, artifacts are created."
                id="platform"
                maxWidth="max-w-none"
                title="Education is the beginning. Intelligence is the platform."
              />
              <FadeUp delay={0.26}>
                <p className="mt-8 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Artifact Intelligence is being designed around the possibility
                  that those artifacts can become an intelligence layer capable
                  of helping organizations understand experiences as they unfold.
                </p>
                <p className="mt-8 text-[1.25rem] font-semibold leading-snug tracking-tight text-ink-900">
                  One underlying intelligence thesis. Multiple environments where
                  it can create value.
                </p>
              </FadeUp>
            </div>
            <div className="rounded-xl border border-ink-900/10 bg-ink-950 p-8 lg:p-10">
              <PlatformExpansion />
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Why now ---- */}
      <Section aria-labelledby="why-now" tone="paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading id="why-now" maxWidth="max-w-none" title="AI changed what's possible." />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  For years, organizations have accumulated enormous volumes of
                  structured and unstructured information. Modern AI creates the
                  possibility of interpreting those signals at a scale, speed and
                  level of contextual understanding that wasn&apos;t previously
                  practical.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  We believe the next generation of transformative software
                  won&apos;t simply help organizations store information or
                  automate tasks. It will help them understand.
                </p>
              </FadeUp>
            </div>
          </div>

          <FadeUp className="mt-16" delay={0.12}>
            <p className="text-statement max-w-[56rem] text-ink-900">
              The transition is from software that records the past to
              intelligence that helps shape what happens next.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ---- What we're building ---- */}
      <Section aria-labelledby="building" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-artifact relative">
          <SectionHeading
            deck="Four capabilities of one platform, not four products. Each depends on the same connected substrate of signals."
            id="building"
            title="What we're building."
            tone="light-text"
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <FadeUp delay={(i % 2) * 0.1} key={c.index}>
                <FeatureCard
                  className="h-full"
                  index={c.index}
                  title={c.title}
                  tone="outline-dark"
                >
                  {c.body}
                </FeatureCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Where we are ---- */}
      <Section aria-labelledby="where" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="index-numeral font-mono text-[0.6875rem] uppercase text-signal-600">
                  Building + validating
                </p>
              </FadeUp>
              <h2 className="text-heading mt-6 text-ink-900" id="where">
                <RevealText trigger="scroll">We&apos;re doing the work now.</RevealText>
              </h2>
            </div>
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Artifact Intelligence is actively developing its technology,
                  conducting research and engaging educational institutions
                  around the future of predictive learning and experience
                  intelligence.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  We&apos;re using these collaborations to challenge our
                  assumptions, validate the problems worth solving and shape a
                  platform grounded in real institutional and human needs.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="border-l-2 border-signal-500 pl-6 text-[0.9375rem] leading-relaxed text-slate-ai-600">
                  We are early, and we would rather describe that accurately than
                  inflate it. There are no customer logos, contracts, revenue
                  figures or traction metrics on this page because there are none
                  yet to report. The evidence of forward movement is the
                  research, the product development and the institutional
                  conversations.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Investment opportunity ---- */}
      <Section aria-labelledby="opportunity" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 size-[52rem] -translate-x-1/2 rounded-full bg-signal-500/12 blur-[170px]"
        />
        <div className="container-wide relative">
          <div className="mx-auto max-w-[54rem] text-center">
            <FadeUp>
              <p className="index-numeral font-mono text-[0.6875rem] uppercase text-signal-300">
                The opportunity
              </p>
            </FadeUp>
            <h2 className="text-display mt-8 text-white" id="opportunity">
              <RevealText trigger="scroll">
                Help build the intelligence layer between experience and action.
              </RevealText>
            </h2>
            <FadeUp delay={0.24}>
              <p className="text-lead mx-auto mt-9 max-w-[44rem] text-slate-ai-300">
                We&apos;re interested in conversations with investors and
                strategic partners who understand the scale of the
                transformation taking place across education, work and AI.
              </p>
            </FadeUp>
            <FadeUp delay={0.32}>
              <p className="mx-auto mt-7 max-w-[44rem] text-[1.0625rem] leading-relaxed text-slate-ai-400">
                We&apos;re especially interested in partners who bring more than
                capital — people with experience in education, enterprise
                technology, AI, institutional transformation and scaling
                platforms. If our thesis resonates with you, we&apos;d like to
                talk.
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ---- Investor contact ---- */}
      <Section aria-labelledby="investor-contact-heading" id="investor-contact" tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="investor-contact-heading">
                <RevealText trigger="scroll">
                  Let&apos;s explore what&apos;s possible.
                </RevealText>
              </h2>
              <FadeUp delay={0.18}>
                <p className="mt-8 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Interested in investment, strategic partnership or learning
                  more about Artifact Intelligence? Reach out directly.
                </p>
              </FadeUp>
              <FadeUp delay={0.26}>
                <div className="mt-10 border-t border-ink-900/[0.07] pt-8">
                  <a
                    className="text-[1.125rem] font-semibold tracking-tight text-ink-900 transition-colors duration-300 hover:text-signal-600"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  <p className="mt-8 text-[0.9375rem] text-slate-ai-600">
                    Interested in participating in our research?{" "}
                    <Link
                      className="font-semibold text-signal-600 underline decoration-signal-500/30 underline-offset-4 transition-colors duration-300 hover:decoration-signal-500"
                      href="/partnerships"
                    >
                      Explore Research Partnerships →
                    </Link>
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.14}>
              <Surface className="p-7 lg:p-10" tone="paper">
                <InquiryForm
                  fields={[
                    { name: "name", label: "Name", required: true, autoComplete: "name" },
                    { name: "firm", label: "Firm / Organization", required: true, autoComplete: "organization" },
                    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                    { name: "role", label: "Role", autoComplete: "organization-title", placeholder: "Partner, Principal, Angel…" },
                    {
                      name: "investmentFocus",
                      label: "Investment focus",
                      choices: [
                        "Pre-seed / Seed",
                        "Series A",
                        "Strategic",
                        "Angel",
                        "Other",
                      ],
                    },
                    {
                      name: "message",
                      label: "Message",
                      multiline: true,
                      placeholder: "What resonates, and what you would want to dig into.",
                    },
                  ]}
                  privacyNote="This goes directly to the founders. We use what you send only to respond."
                  subjectPrefix="Investor inquiry"
                />
              </Surface>
            </FadeUp>
          </div>
        </div>
      </Section>
    </>
  );
}
