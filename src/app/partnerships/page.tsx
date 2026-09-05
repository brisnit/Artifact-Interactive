import type { Metadata } from "next";
import Link from "next/link";
import { Button, TextLink } from "@/components/ui/Button";
import { FadeUp, RevealText, StaggerGroup } from "@/components/motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/Editorial";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { SignalExcavation } from "@/components/viz/SignalExcavation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & Partnerships",
  description:
    "Artifact Intelligence is researching how technology and AI can help institutions see what was previously invisible. We are looking for partners who want to explore, not just buy.",
  alternates: { canonical: "/partnerships" },
};

const EXPLORING = [
  {
    index: "01",
    title: "Learning Intelligence",
    body: "How can we better understand whether learning is actually happening — not months later, but while there is still time to respond?",
  },
  {
    index: "02",
    title: "Experience Intelligence",
    body: "What can people's interactions reveal about friction, engagement, motivation and unmet needs?",
  },
  {
    index: "03",
    title: "Organizational Intelligence",
    body: "How can organizations surface patterns hidden across systems, processes and human behavior?",
  },
  {
    index: "04",
    title: "Applied AI",
    body: "How can AI move beyond automation and become an intelligent layer that helps people understand, decide and act?",
  },
];

const PARTNERS = [
  "Universities + Colleges",
  "K–12 Education",
  "Businesses + Enterprise",
  "Learning Organizations",
  "Research Institutions",
  "Technology Partners",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="#partner" size="lg" variant="inverse" withArrow>
              Partner With Us
            </Button>
            <Button href="/research" size="lg" variant="inverse-outline">
              Explore Our Research
            </Button>
          </div>
        }
        deck="Artifact Intelligence is actively researching how technology and AI can help institutions see what was previously invisible — surfacing the signals behind their greatest challenges while creating better experiences for the people at the center of them."
        title="Help us discover what comes next."
      />

      {/* ---- The opportunity ---- */}
      <Section aria-labelledby="opportunity" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              id="opportunity"
              maxWidth="max-w-none"
              title="The answers may already be there."
            />
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Every classroom, workplace and digital experience generates
                  signals. How people engage. Where they struggle. What captures
                  their attention. Where processes break down. What creates
                  momentum. What causes people to disengage.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  Most organizations collect enormous amounts of information
                  without gaining meaningful visibility into what it actually
                  reveals. Artifact Intelligence exists to change that.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <QuoteBlock>
                  Excavate the signals. Surface the intelligence.
                </QuoteBlock>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 size-[46rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[160px]"
        />
        <div className="container-wide relative">
          <SignalExcavation />
        </div>
      </Section>

      {/* ---- What we're exploring ---- */}
      <Section aria-labelledby="exploring" tone="light">
        <div className="container-artifact">
          <SectionHeading
            deck="Four open questions. We do not have settled answers to any of them — which is precisely why we want to work through them with institutions rather than at them."
            id="exploring"
            title="What we're exploring."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {EXPLORING.map((item, i) => (
              <FadeUp delay={(i % 2) * 0.1} key={item.index}>
                <FeatureCard className="h-full" index={item.index} title={item.title}>
                  {item.body}
                </FeatureCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Who we want to work with ---- */}
      <Section aria-labelledby="partners" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-wide relative">
          <div className="max-w-[46rem]">
            <h2 className="text-display text-white" id="partners">
              <RevealText trigger="scroll">
                We want partners willing to explore.
              </RevealText>
            </h2>
            <FadeUp delay={0.18}>
              <p className="text-lead mt-8 text-slate-ai-300">
                We&apos;re looking for forward-thinking organizations interested
                in challenging assumptions, testing ideas and helping create
                better ways of learning and working.
              </p>
            </FadeUp>
          </div>

          <StaggerGroup
            as="ul"
            className="mt-16 border-t border-white/10 lg:mt-20"
            selector=":scope > li"
            stagger={0.08}
          >
            {PARTNERS.map((partner, i) => (
              <li className="border-b border-white/10" key={partner}>
                <div className="row-hover flex items-center gap-6 py-7 lg:gap-10 lg:py-9">
                  <span className="index-numeral font-mono text-[0.6875rem] text-signal-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.625rem] font-bold leading-none tracking-[-0.035em] text-white lg:text-[2.5rem]">
                    {partner}
                  </span>
                </div>
              </li>
            ))}
          </StaggerGroup>

          <FadeUp delay={0.12}>
            <p className="mt-14 max-w-[44rem] font-editorial text-[1.5rem] leading-[1.4] text-slate-ai-200 lg:text-[1.875rem]">
              You don&apos;t need to have the solution. That&apos;s what
              we&apos;re here to discover together.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ---- Human outcome ---- */}
      <Section aria-labelledby="human" tone="paper">
        <div className="container-wide">
          <div className="max-w-[52rem]">
            <h2 className="text-heading text-ink-900" id="human">
              <RevealText trigger="scroll">
                Technology should give people greater agency — not simply
                generate more data.
              </RevealText>
            </h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <FadeUp>
              <p className="text-lead text-slate-ai-700">
                The goal isn&apos;t surveillance. And it isn&apos;t AI for
                AI&apos;s sake.
              </p>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                It&apos;s creating environments where students can receive help
                before they fall behind. Professors can understand what&apos;s
                resonating. Faculty can improve learning without losing what
                makes their teaching uniquely human.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-0 text-[1.0625rem] leading-relaxed text-slate-ai-700 lg:mt-[4.5rem]">
                Employees can navigate complexity more effectively. Leaders can
                see problems earlier. And organizations can make decisions
                grounded in what people are actually experiencing.
              </p>
              <p className="mt-8 text-[1.125rem] font-semibold leading-snug tracking-tight text-ink-900">
                Better intelligence should create better experiences for
                everyone involved.
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ---- Join the research ---- */}
      <Section aria-labelledby="partner-heading" id="partner" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute -left-[10%] top-1/4 size-[44rem] rounded-full bg-signal-500/12 blur-[160px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-[10%] bottom-0 size-[34rem] rounded-full bg-artifact-purple/25 blur-[150px]"
        />

        <div className="container-wide relative">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="index-numeral font-mono text-[0.6875rem] uppercase text-signal-300">
                  Join the research
                </p>
              </FadeUp>
              <h2 className="text-display mt-8 text-white" id="partner-heading">
                <RevealText trigger="scroll">
                  What could we discover together?
                </RevealText>
              </h2>
              <FadeUp delay={0.2}>
                <p className="text-lead mt-8 max-w-[38rem] text-slate-ai-300">
                  If your school, university, organization or business is
                  exploring how AI and modern technology could fundamentally
                  improve the way people learn, work or engage, we&apos;d love to
                  hear from you.
                </p>
              </FadeUp>
              <FadeUp delay={0.28}>
                <p className="mt-8 font-editorial text-[1.375rem] leading-snug text-signal-200 lg:text-[1.625rem]">
                  Let&apos;s use your greatest challenge as the starting point.
                </p>
              </FadeUp>
              <FadeUp delay={0.36}>
                <div className="mt-12 border-t border-white/10 pt-8">
                  <p className="text-[0.9375rem] text-slate-ai-400">
                    Prefer email? Write to{" "}
                    <a
                      className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors duration-300 hover:decoration-signal-400"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </p>
                  <p className="mt-6 text-[0.9375rem] text-slate-ai-400">
                    Interested in the company behind the research?{" "}
                    <Link
                      className="font-semibold text-signal-300 underline decoration-signal-300/30 underline-offset-4 transition-colors duration-300 hover:decoration-signal-300"
                      href="/investors"
                    >
                      Explore Artifact Intelligence → Investors
                    </Link>
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.14}>
              <Surface className="p-7 lg:p-10" tone="outline-dark">
                <InquiryForm
                  fields={[
                    { name: "name", label: "Name", required: true, autoComplete: "name" },
                    { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                    { name: "role", label: "Role", autoComplete: "organization-title", placeholder: "Provost, Principal, Director of L&D…" },
                    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                    {
                      name: "organizationType",
                      label: "Organization type",
                      choices: [
                        "University",
                        "K–12",
                        "Business",
                        "Learning organization",
                        "Research institution",
                        "Technology partner",
                      ],
                    },
                    {
                      name: "challenge",
                      label: "What challenge are you interested in exploring?",
                      multiline: true,
                      placeholder: "The thing you most wish you could see earlier.",
                    },
                  ]}
                  subjectPrefix="Research partnership"
                  tone="dark"
                />
              </Surface>
            </FadeUp>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="container-artifact">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-subheading max-w-[30ch] text-ink-900">
              Read what we are studying, and how we hold ourselves to it.
            </p>
            <TextLink href="/research">Our research discipline</TextLink>
          </div>
        </div>
      </Section>
    </>
  );
}
