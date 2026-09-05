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
  ControlledBoundary,
  PortableEnvironment,
} from "@/components/viz/PrivateAiViz";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private AI",
  description:
    "Instead of sending sensitive knowledge to AI, bring AI to the knowledge. Artifact Intelligence designs private AI environments that run on infrastructure an organization controls.",
  alternates: { canonical: "/private-ai" },
};

const SENSITIVE = [
  "Proprietary research",
  "Intellectual property",
  "Student and institutional data",
  "Internal strategy",
  "Unreleased products",
  "Operational procedures",
  "Financial information",
  "Accumulated organizational knowledge",
];

const COMPONENTS = [
  {
    index: "01",
    title: "Local language model",
    body: "An appropriately selected open-weight LLM runs on approved organizational hardware rather than relying exclusively on a public cloud AI endpoint.",
  },
  {
    index: "02",
    title: "Private knowledge layer",
    body: "Documents, research, policies, intellectual property and other organizational knowledge can be indexed locally for retrieval by the AI system.",
  },
  {
    index: "03",
    title: "Artifact intelligence layer",
    body: "We build the experience around the model — search, analysis, workflows, visualization, agents and interfaces designed around the questions your organization actually needs to answer.",
  },
  {
    index: "04",
    title: "Controlled access",
    body: "Authentication, permissions, encryption and role-based access can help determine who can reach particular systems and knowledge.",
  },
  {
    index: "05",
    title: "Auditability",
    body: "Where appropriate, interactions can be logged within the organization's controlled environment to support governance, security review and responsible AI practices.",
  },
];

const SECURITY = [
  "Encryption at rest and in transit",
  "Identity and access management",
  "Role-based permissions",
  "Network isolation where appropriate",
  "Secure model and software updates",
  "Data retention policies",
  "Logging and auditing",
  "Physical security",
  "Prompt-injection defenses",
  "Retrieval permissions",
  "Backup and recovery",
  "Human governance",
];

export default function PrivateAiPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="#private-contact" size="lg" variant="inverse" withArrow>
              Explore Private AI
            </Button>
            <Button href="/partnerships" size="lg" variant="inverse-outline">
              Research Partnerships
            </Button>
          </div>
        }
        deck="AI without giving away what makes your organization valuable. The most valuable knowledge inside an organization is often the knowledge it can least afford to expose."
        title={[
          "Your knowledge doesn’t",
          "have to leave the building.",
        ]}
      />

      {/* ---- The question ---- */}
      <Section aria-labelledby="question" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="text-lead text-slate-ai-700">
                  Organizations want the power of AI to understand and activate
                  the information they hold. But there is an important question.
                </p>
              </FadeUp>
              <h2 className="text-heading mt-9 text-ink-900" id="question">
                <RevealText trigger="scroll">
                  Where does your knowledge go when you ask AI to understand it?
                </RevealText>
              </h2>
              <FadeUp delay={0.22}>
                <QuoteBlock className="mt-10">
                  Instead of sending sensitive knowledge to AI, we can bring AI
                  to the knowledge.
                </QuoteBlock>
              </FadeUp>
            </div>

            <div>
              <FadeUp>
                <p className="index-numeral font-mono text-[0.6875rem] uppercase text-slate-ai-500">
                  What organizations can least afford to expose
                </p>
              </FadeUp>
              <StaggerGroup
                as="ul"
                className="mt-7 border-t border-ink-900/[0.09]"
                selector=":scope > li"
                stagger={0.05}
              >
                {SENSITIVE.map((item) => (
                  <li
                    className="border-b border-ink-900/[0.09] py-4 text-[1.0625rem] text-ink-800"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Private AI, run locally ---- */}
      <Section aria-labelledby="local" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 size-[46rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[160px]"
        />
        <div className="container-wide relative">
          <div className="max-w-[52rem]">
            <h2 className="text-display text-white" id="local">
              <RevealText trigger="scroll">Private AI, run locally.</RevealText>
            </h2>
            <FadeUp delay={0.2}>
              <p className="text-lead mt-8 text-slate-ai-300">
                Modern open-weight language models can operate on hardware
                controlled by your organization — dedicated workstations,
                private servers, secure on-premise infrastructure and, for
                certain applications, encrypted portable storage.
              </p>
            </FadeUp>
            <FadeUp delay={0.28}>
              <p className="mt-7 text-[1.0625rem] leading-relaxed text-slate-ai-400">
                Artifact Intelligence can design private AI environments where
                the model, organizational knowledge base and intelligence layer
                operate within a controlled computing environment. Your
                proprietary information can remain within boundaries you define.
              </p>
            </FadeUp>
            <FadeUp delay={0.36}>
              <p className="mt-9 font-editorial text-[1.5rem] leading-snug text-signal-200 lg:text-[1.875rem]">
                The cloud doesn&apos;t have to be the default.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16 lg:mt-20">
            <ControlledBoundary />
          </div>
        </div>
      </Section>

      {/* ---- What a deployment combines ---- */}
      <Section aria-labelledby="components" tone="light">
        <div className="container-artifact">
          <SectionHeading
            deck="A private deployment is an assembly, not a product. These are the parts we design around the sensitivity of the knowledge itself."
            id="components"
            title="An AI environment you control."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {COMPONENTS.map((c, i) => (
              <FadeUp delay={(i % 2) * 0.1} key={c.index}>
                <FeatureCard className="h-full" index={c.index} title={c.title}>
                  {c.body}
                </FeatureCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Portable ---- */}
      <Section aria-labelledby="portable" tone="dark">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div className="container-wide relative">
          <div className="max-w-[54rem]">
            <h2 className="text-heading text-white" id="portable">
              <RevealText trigger="scroll">
                From an encrypted drive to a private AI appliance.
              </RevealText>
            </h2>
            <FadeUp delay={0.2}>
              <p className="text-lead mt-8 text-slate-ai-300">
                For specialized use cases, the entire intelligence environment
                can be designed to be portable. An encrypted external SSD can
                contain the model, knowledge base, retrieval system and Artifact
                software required to operate the environment.
              </p>
            </FadeUp>
          </div>

          <div className="mt-14 lg:mt-16">
            <PortableEnvironment />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <FadeUp>
              <p className="font-editorial text-[1.5rem] leading-snug text-white lg:text-[1.875rem]">
                The intelligence goes with you. Your proprietary knowledge
                doesn&apos;t have to go anywhere else.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[1.0625rem] leading-relaxed text-slate-ai-300">
                For organizations requiring greater scale, the same philosophy
                can extend to dedicated AI workstations, on-premise GPU servers,
                private-cloud infrastructure and hybrid environments. The
                hardware changes.
              </p>
              <p className="mt-6 text-[1.125rem] font-semibold leading-snug text-white">
                The principle remains the same: maintain control over where
                sensitive knowledge is processed.
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ---- Security is more than where the model runs ---- */}
      <Section aria-labelledby="security" tone="paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="security">
                <RevealText trigger="scroll">
                  Security is more than where the model runs.
                </RevealText>
              </h2>
              <FadeUp delay={0.2}>
                <p className="text-lead mt-8 text-slate-ai-700">
                  Running an LLM locally can reduce certain forms of third-party
                  data exposure, but local deployment alone does not make an AI
                  system secure.
                </p>
              </FadeUp>
              <FadeUp delay={0.28}>
                <p className="mt-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Artifact Intelligence approaches private AI as a complete
                  system.
                </p>
                <p className="mt-9 text-[1.25rem] font-semibold leading-snug tracking-tight text-ink-900">
                  Private AI should be designed as security architecture — not
                  simply installed software.
                </p>
              </FadeUp>
            </div>

            <StaggerGroup
              as="ul"
              className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2"
              selector=":scope > li"
              stagger={0.04}
            >
              {SECURITY.map((item) => (
                <li
                  className="flex gap-3.5 border-b border-ink-900/[0.09] py-3.5 text-[0.9375rem] leading-snug text-ink-700"
                  key={item}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-px w-3 shrink-0 bg-signal-500"
                  />
                  {item}
                </li>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      {/* ---- Your organization already has an intelligence model ---- */}
      <Section aria-labelledby="already" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="already">
                <RevealText trigger="scroll">
                  Your organization already has an intelligence model.
                </RevealText>
              </h2>
            </div>
            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  It exists across thousands of documents, conversations,
                  decisions, processes, research projects and years of
                  institutional knowledge. The challenge is accessing it.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  Artifact Intelligence helps organizations excavate those
                  digital artifacts and transform them into usable intelligence
                  — while designing the system around the sensitivity of the
                  knowledge itself.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <QuoteBlock>
                  Excavating digital artifacts to surface intelligence.
                </QuoteBlock>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Contact ---- */}
      <Section
        aria-labelledby="private-contact-heading"
        id="private-contact"
        tone="deep"
      >
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute -left-[8%] top-1/4 size-[42rem] rounded-full bg-signal-500/12 blur-[160px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-[8%] bottom-0 size-[34rem] rounded-full bg-artifact-purple/25 blur-[150px]"
        />
        <div className="container-wide relative">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <h2
                className="text-display-sm text-white"
                id="private-contact-heading"
              >
                <RevealText trigger="scroll">
                  What could your organization understand if its most sensitive
                  knowledge could safely talk?
                </RevealText>
              </h2>
              <FadeUp delay={0.24}>
                <p className="text-lead mt-9 max-w-[38rem] text-slate-ai-300">
                  We are actively researching new approaches to private, local
                  and edge AI systems for organizations with valuable
                  proprietary knowledge.
                </p>
              </FadeUp>
              <FadeUp delay={0.32}>
                <p className="mt-7 max-w-[38rem] text-[1.0625rem] leading-relaxed text-slate-ai-400">
                  We&apos;re interested in partnering with schools, research
                  institutions and businesses that want to explore what becomes
                  possible when powerful AI and responsible information security
                  are designed together.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
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
                    Exploring this alongside our wider research?{" "}
                    <Link
                      className="font-semibold text-signal-300 underline decoration-signal-300/30 underline-offset-4 transition-colors duration-300 hover:decoration-signal-300"
                      href="/partnerships"
                    >
                      Research Partnerships →
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
                    { name: "role", label: "Role", autoComplete: "organization-title", placeholder: "CIO, CISO, Head of Research…" },
                    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                    {
                      name: "environment",
                      label: "Environment of interest",
                      choices: [
                        "Portable",
                        "Workstation",
                        "On-premise",
                        "Private cloud",
                        "Not sure yet",
                      ],
                    },
                    {
                      name: "message",
                      label: "What knowledge would you want to activate?",
                      multiline: true,
                      placeholder:
                        "Tell us about the knowledge you hold, why it is sensitive, and what you would want to ask of it.",
                    },
                  ]}
                  submitLabel="Start a Conversation"
                  subjectPrefix="Private AI"
                  tone="dark"
                />
              </Surface>
            </FadeUp>
          </div>
        </div>
      </Section>
    </>
  );
}
