import Link from "next/link";
import { FadeUp, RevealText, StaggerGroup } from "@/components/motion";

/**
 * The category strip.
 *
 * Sits directly under the hero because "Learning Intelligence Platform" is a
 * new category: a visitor who scrolls once should already know what it is,
 * what it is not, and who it is built for. Deliberately compact — it earns its
 * place by answering three questions, not by adding another full section.
 */

const CONTRASTS = [
  {
    not: "Not a learning platform.",
    body: "Artifact does not deliver content or replace an LMS. It reads what those environments already produce.",
  },
  {
    not: "Not a dashboard.",
    body: "Reporting describes endpoints. An intelligence layer explains the conditions that produced them, early enough to matter.",
  },
  {
    not: "Not a survey tool.",
    body: "Signals are captured inside the experience, in seconds, anchored to a concept and a moment — not collected afterwards.",
  },
];

const ENVIRONMENTS = [
  { label: "Universities", href: "/solutions/higher-education" },
  { label: "High schools", href: "/solutions/high-schools" },
  { label: "Business & workforce", href: "/solutions/business" },
];

export function CategoryBand() {
  return (
    <section
      aria-labelledby="category"
      className="relative overflow-clip border-b border-ink-900/[0.07] bg-white py-20 lg:py-24"
    >
      <div className="container-wide">
        <div className="max-w-[70rem]">
          <div>
            {/* Split deliberately: the definition carries the display weight,
                the mechanism follows at reading size. One block of 30 words at
                display size is a wall — two of 14 scans in a glance. */}
            <h2 className="text-statement max-w-[40rem] text-ink-900" id="category">
              <RevealText trigger="scroll">
                A Learning Intelligence Platform is an intelligence layer between
                experience and outcome.
              </RevealText>
            </h2>
            <FadeUp delay={0.12}>
              <p className="text-lead mt-6 max-w-[44rem] text-slate-ai-700">
                It reads the signals a learning environment already produces —
                and explains what they mean.
              </p>
            </FadeUp>

            <StaggerGroup
              as="ul"
              className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3"
              selector=":scope > li"
            >
              {CONTRASTS.map((item) => (
                <li className="relative pt-6" key={item.not}>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-ink-900/12"
                  />
                  <p className="text-[1.0625rem] font-bold tracking-[-0.025em] text-ink-900">
                    {item.not}
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-ai-700">
                    {item.body}
                  </p>
                </li>
              ))}
            </StaggerGroup>

            <FadeUp delay={0.1}>
              <p className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.875rem] text-slate-ai-600">
                <span className="text-slate-ai-600">Built bespoke for</span>
                {ENVIRONMENTS.map((env, i) => (
                  <span className="flex items-center gap-3" key={env.href}>
                    {i > 0 && (
                      <span aria-hidden="true" className="text-slate-ai-300">
                        ·
                      </span>
                    )}
                    <Link
                      className="font-semibold text-ink-900 underline decoration-ink-900/20 underline-offset-4 transition-colors duration-300 hover:text-signal-600 hover:decoration-signal-500"
                      href={env.href}
                    >
                      {env.label}
                    </Link>
                  </span>
                ))}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
