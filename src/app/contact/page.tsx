import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Surface } from "@/components/ui/Card";
import { SignalChain } from "@/components/ui/Editorial";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { brandLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Artifact Interactive about what your institution could learn about itself.",
};

const REASONS = [
  {
    title: "Institutional exploration",
    body: "You are considering what an intelligence layer would mean for a university, school system, or organization.",
  },
  {
    title: "Research collaboration",
    body: "You are studying learning behavior, predictive systems, or data ethics and see overlap with this work.",
  },
  {
    title: "A specific question",
    body: "There is something your institution wants to understand and no current way to find out.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        deck="Tell us what you are trying to understand. The first conversation is usually less about the platform than about which questions are worth answering."
        title="Let\u2019s explore what your institution could learn."
      />

      <Section tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={160}>
                <Surface className="p-7 lg:p-8" tone="paper">
                  <a
                    className="block text-[1.125rem] font-semibold tracking-tight text-ink-900 transition-colors duration-300 hover:text-signal-600"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  <p className="mt-5 text-[0.875rem] leading-relaxed text-slate-ai-600">
                    Artifact Interactive
                    <br />
                    Learning Intelligence Platform
                  </p>
                  <p className="mt-6 border-t border-ink-900/[0.07] pt-5 text-[0.8125rem] leading-relaxed text-slate-ai-500">
                    Additional office and contact details will be published here.
                  </p>
                </Surface>
              </Reveal>

              <Reveal delay={220}>
                <Surface className="p-7 lg:p-8" tone="paper">
                  <h2 className="text-[1.125rem] font-bold tracking-tight text-ink-900">
                    People we hear from
                  </h2>
                  <ul className="mt-6 divide-y divide-ink-900/[0.07]">
                    {REASONS.map((reason) => (
                      <li className="py-4 first:pt-0 last:pb-0" key={reason.title}>
                        <p className="text-[0.9375rem] font-semibold tracking-tight text-ink-900">
                          {reason.title}
                        </p>
                        <p className="mt-2 text-[0.8125rem] leading-relaxed text-slate-ai-600">
                          {reason.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Surface>
              </Reveal>

              <Reveal delay={280}>
                <div className="rounded-xl border border-ink-900/10 bg-ink-950 p-7 lg:p-8">
                  <SignalChain lines={brandLines.signalChain} tone="dark" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
