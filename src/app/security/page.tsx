import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeUp, RevealText, StaggerGroup } from "@/components/motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard, Surface } from "@/components/ui/Card";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "Artifact Intelligence designs private AI environments around an organization's security requirements — hosting, data boundaries, retrieval permissions, licensing, and the work underway toward independent assurance.",
  alternates: { canonical: "/security" },
};

/** The controls a retrieval system is built around. */
const RAG_CONTROLS = [
  {
    index: "01",
    title: "Approved sources",
    body: "Explicit decisions about which documents and systems the assistant can search.",
  },
  {
    index: "02",
    title: "User permissions",
    body: "Access checks before information is retrieved or passed to the model.",
  },
  {
    index: "03",
    title: "Source references",
    body: "Answers linked to supporting material so people can review the evidence.",
  },
  {
    index: "04",
    title: "Knowledge maintenance",
    body: "Processes for updating content, removing documents, and reflecting permission changes.",
  },
];

/** Every component that handles information inside the agreed boundary. */
const BOUNDARY_COMPONENTS = [
  "Document processing",
  "Embeddings",
  "Search indexes",
  "Prompts",
  "Responses",
  "Logs",
  "Backups",
];

/** What the boundary design has to answer, before implementation. */
const BOUNDARY_QUESTIONS = [
  "Where each component runs and which providers are involved.",
  "What information each component receives.",
  "Who can administer the system and access its data.",
  "How long information is retained and how it is removed.",
  "Whether any information may be used for training or fine-tuning.",
  "Which external connections are permitted.",
];

/** Current development priorities, stated as work in progress. */
const MATURITY = [
  "Documented access policies",
  "Provider reviews",
  "Vulnerability management",
  "Incident response procedures",
  "Recovery planning",
  "Security testing",
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="#security-contact" size="lg" variant="inverse" withArrow>
              Discuss your requirements
            </Button>
            <Button href="/private-ai" size="lg" variant="inverse-outline">
              Explore Private AI
            </Button>
          </div>
        }
        deck="Your institution's knowledge is valuable. The people represented in its data deserve care."
        meta={[
          { label: "Hosting", value: "Customer-controlled, dedicated cloud, or on-premises" },
          { label: "Boundary", value: "Defined per deployment, before implementation" },
          { label: "Retrieval", value: "Permission-checked, with source references" },
          { label: "Assurance", value: "In progress — no completed audit" },
        ]}
        title={["Private intelligence.", "Clear boundaries."]}
      />

      {/* ---- What we build ---- */}
      <Section aria-labelledby="environment" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="environment">
                <RevealText trigger="scroll">
                  Bring AI into your environment.
                </RevealText>
              </h2>
              <FadeUp delay={0.18}>
                <p className="text-lead mt-7 text-slate-ai-700">
                  Useful AI should fit the boundaries your organization needs.
                </p>
              </FadeUp>
            </div>

            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Artifact Intelligence can build internal AI systems, privately
                  hosted language models, and retrieval-augmented generation
                  systems around your organization&apos;s security requirements.
                  We design these environments to give you greater control over
                  where information is processed, who can access it, and how it
                  is used.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p>
                  We can design and deploy private AI environments within
                  customer-controlled infrastructure, dedicated cloud
                  environments, or on-premises systems, depending on operational
                  requirements. That can include an internally hosted large
                  language model, a private knowledge assistant, or an
                  intelligence layer connected to selected institutional systems.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p>
                  For deployments that require it, the architecture can be
                  designed to keep model inference and knowledge retrieval within
                  an agreed environment, without sending prompts or retrieved
                  content to external model APIs. Supporting services,
                  integrations, and network connections are reviewed as part of
                  that boundary.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Retrieval ---- */}
      <Section aria-labelledby="retrieval" tone="paper">
        <div className="container-artifact">
          <SectionHeading
            deck="Retrieval-augmented generation, or RAG, allows an AI system to find relevant information in approved sources and use it to inform an answer. It can help people navigate policies, research, training materials, operational documents, and institutional knowledge without requiring that knowledge to be used to train a model."
            id="retrieval"
            maxWidth="max-w-[54rem]"
            title="Make internal knowledge useful, with controlled access."
          />

          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {RAG_CONTROLS.map((control, i) => (
              <FadeUp delay={(i % 2) * 0.1} key={control.index}>
                <FeatureCard
                  className="h-full"
                  index={control.index}
                  title={control.title}
                >
                  {control.body}
                </FeatureCard>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-14 max-w-[46rem] font-editorial text-[1.375rem] leading-snug text-ink-900 lg:text-[1.625rem]">
              RAG is an approach to using knowledge. Its security depends on the
              controls around ingestion, storage, retrieval, and generation.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ---- The data boundary ---- */}
      <Section aria-labelledby="boundary" tone="deep">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 size-[44rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[160px]"
        />
        <div className="container-wide relative">
          <div className="max-w-[52rem]">
            <h2 className="text-heading text-white" id="boundary">
              <RevealText trigger="scroll">
                Define the full data boundary.
              </RevealText>
            </h2>
            <FadeUp delay={0.18}>
              <p className="text-lead mt-7 text-slate-ai-300">
                A private model is one part of a private system.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-slate-ai-400">
                Before implementation, we work with your team to establish how
                information moves through the complete environment.
              </p>
            </FadeUp>
          </div>

          {/* Every component that touches information, named inside one frame. */}
          <FadeUp delay={0.1}>
            <div className="mt-14 rounded-lg border border-signal-400/40 p-7 lg:mt-16 lg:p-9">
              <p className="index-numeral font-mono text-[0.625rem] uppercase text-signal-300">
                Inside the agreed environment
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {BOUNDARY_COMPONENTS.map((component) => (
                  <li
                    className="rounded-md border border-white/15 bg-white/[0.04] px-3.5 py-2 text-[0.875rem] text-slate-ai-200"
                    key={component}
                  >
                    {component}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeUp>
              <p className="text-[1.125rem] font-semibold leading-snug tracking-tight text-white">
                The design addresses:
              </p>
            </FadeUp>
            <StaggerGroup
              as="ul"
              className="border-t border-white/12"
              selector=":scope > li"
              stagger={0.06}
            >
              {BOUNDARY_QUESTIONS.map((question, i) => (
                <li
                  className="flex items-baseline gap-6 border-b border-white/12 py-4"
                  key={question}
                >
                  <span className="index-numeral font-mono text-[0.6875rem] text-signal-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1rem] leading-relaxed text-slate-ai-200">
                    {question}
                  </span>
                </li>
              ))}
            </StaggerGroup>
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-10 text-[0.9375rem] leading-relaxed text-slate-ai-400">
              Deployment-specific safeguards and responsibilities are agreed as
              part of the engagement.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ---- People ---- */}
      <Section aria-labelledby="people" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="people">
                <RevealText trigger="scroll">
                  Protect the people behind the information.
                </RevealText>
              </h2>
              <FadeUp delay={0.18}>
                <p className="text-lead mt-7 text-slate-ai-700">
                  Learning and workforce intelligence can involve sensitive
                  information about students, faculty, employees, and
                  organizational activity.
                </p>
              </FadeUp>
            </div>

            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Our approach starts with a defined purpose: what the system
                  needs to understand, what information it requires, and who
                  should be able to see the result.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p>
                  We design for limited collection, appropriate visibility, and
                  human review of consequential outputs. Where individual records
                  are unnecessary, aggregated or de-identified information may
                  better serve the question.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="text-[1.125rem] font-semibold leading-snug tracking-tight text-ink-900">
                  AI-generated answers and modeled pathways require evaluation.
                  People remain responsible for decisions that affect learning,
                  support, opportunity, and employment.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Security maturity ---- */}
      <Section aria-labelledby="maturity" tone="paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="maturity">
                <RevealText trigger="scroll">
                  Advancing our security maturity.
                </RevealText>
              </h2>
              <FadeUp delay={0.18}>
                <p className="text-lead mt-7 text-slate-ai-700">
                  We are moving toward a more formal, evidence-based security
                  program alongside our technical capabilities.
                </p>
              </FadeUp>
            </div>

            <div>
              <FadeUp>
                <p className="text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  Our development priorities include:
                </p>
              </FadeUp>
              <StaggerGroup
                as="ul"
                className="mt-7 grid gap-x-10 sm:grid-cols-2"
                selector=":scope > li"
                stagger={0.05}
              >
                {MATURITY.map((item) => (
                  <li
                    className="flex gap-3.5 border-b border-ink-900/10 py-3.5 text-[0.9375rem] leading-snug text-ink-700"
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

              <FadeUp delay={0.1}>
                <p className="mt-8 text-[1.0625rem] leading-relaxed text-slate-ai-700">
                  We are also evaluating the requirements and readiness work
                  needed for independent assurance, including SOC 2.
                </p>
              </FadeUp>

              {/*
                The guardrail on this page. Stated plainly and given its own
                surface so it cannot be skimmed past as marketing hedging.
              */}
              <FadeUp delay={0.16}>
                <Surface className="mt-8 p-6 lg:p-7" tone="paper">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-800">
                    This direction is a commitment to improving our practices. It
                    is not a claim of a completed audit, certification, or
                    available assurance report. Any achieved milestone will be
                    identified with its scope and supporting evidence.
                  </p>
                </Surface>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Licensing ---- */}
      <Section aria-labelledby="licensing" tone="light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="text-heading text-ink-900" id="licensing">
                <RevealText trigger="scroll">
                  Licensing considered from the start.
                </RevealText>
              </h2>
              <FadeUp delay={0.18}>
                <p className="text-lead mt-7 text-slate-ai-700">
                  Private deployment still requires careful attention to the
                  terms governing the technology.
                </p>
              </FadeUp>
            </div>

            <div className="space-y-7 text-[1.0625rem] leading-relaxed text-slate-ai-700">
              <FadeUp>
                <p>
                  Model weights, software libraries, datasets, and commercial
                  services can carry different requirements for use,
                  modification, hosting, and redistribution.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p>
                  As part of solution planning, we review the applicable licenses
                  and provider terms for the intended use, identify restrictions,
                  and clarify any ongoing subscriptions or licensing costs.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p>
                  Ownership and usage rights for custom work are defined in the
                  engagement agreement.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Contact ---- */}
      <Section
        aria-labelledby="security-contact-heading"
        id="security-contact"
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
                id="security-contact-heading"
              >
                <RevealText trigger="scroll">
                  Start with your requirements.
                </RevealText>
              </h2>
              <FadeUp delay={0.24}>
                <p className="text-lead mt-9 max-w-[38rem] text-slate-ai-300">
                  Your IT, security, and procurement teams should have a clear
                  picture of the proposed system before implementation.
                </p>
              </FadeUp>
              <FadeUp delay={0.32}>
                <p className="mt-7 max-w-[38rem] text-[1.0625rem] leading-relaxed text-slate-ai-400">
                  Bring us your requirements for hosting, data access, retention,
                  licensing, vendor review, or security assurance. We will
                  explain what we can support today, what needs further work, and
                  how those requirements shape the architecture.
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
                    Looking at the architecture itself?{" "}
                    <Link
                      className="font-semibold text-signal-300 underline decoration-signal-300/30 underline-offset-4 transition-colors duration-300 hover:decoration-signal-300"
                      href="/private-ai"
                    >
                      Explore Private AI →
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
                    {
                      name: "organization",
                      label: "Organization",
                      required: true,
                      autoComplete: "organization",
                    },
                    {
                      name: "role",
                      label: "Role",
                      autoComplete: "organization-title",
                      placeholder: "CISO, CIO, IT security, procurement…",
                    },
                    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                    {
                      name: "hosting",
                      label: "Hosting requirement",
                      choices: [
                        "On-premises",
                        "Customer-controlled cloud",
                        "Dedicated cloud",
                        "Not yet determined",
                      ],
                    },
                    {
                      name: "message",
                      label: "What requirements should we work to?",
                      multiline: true,
                      placeholder:
                        "Hosting, data access, retention, licensing, vendor review, or the assurance evidence your process requires.",
                    },
                  ]}
                  privacyNote="This reaches us directly. We use what you send only to respond."
                  submitLabel="Talk With Artifact"
                  subjectPrefix="Security requirements"
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
