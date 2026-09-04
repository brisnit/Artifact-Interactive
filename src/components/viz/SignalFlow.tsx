import { StaggerGroup } from "@/components/motion";
import { cn } from "@/lib/cn";

const STAGES = [
  {
    key: "experience",
    label: "Experience",
    detail: "A lecture, a lab, a seminar, a shift, a study session.",
  },
  {
    key: "signals",
    label: "Signals",
    detail: "Comprehension, confidence, confusion, participation, momentum.",
  },
  {
    key: "intelligence",
    label: "Intelligence",
    detail: "Relationships between behaviour, context, and outcome.",
  },
  {
    key: "pathways",
    label: "Pathways",
    detail: "Modeled trajectories with associated likelihoods.",
  },
  {
    key: "outcomes",
    label: "Outcomes",
    detail: "Understanding, persistence, capability, institutional result.",
  },
];

/**
 * Experience → Signals → Intelligence → Pathways → Outcomes.
 * The site's canonical chain. Horizontal on desktop, vertical on mobile.
 */
export function SignalFlow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <StaggerGroup
      as="ol"
      className="grid gap-px overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-5"
      selector=":scope > li"
      stagger={0.09}
    >
        {STAGES.map((stage, i) => (
          <li
            className={cn(
              "relative flex flex-col p-6 lg:p-7",
              dark
                ? "bg-white/[0.04] outline outline-white/10"
                : "bg-white outline outline-ink-900/[0.09]",
            )}
            key={stage.key}
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full font-mono text-[0.625rem]",
                    i === STAGES.length - 1
                      ? "bg-signal-600 text-white"
                      : dark
                        ? "border border-white/20 text-slate-ai-300"
                        : "border border-ink-900/15 text-slate-ai-500",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < STAGES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px flex-1",
                      dark ? "bg-white/15" : "bg-ink-900/12",
                    )}
                  />
                )}
              </div>
              <h3
                className={cn(
                  "mt-6 text-[1.0625rem] font-bold tracking-tight",
                  dark ? "text-white" : "text-ink-900",
                )}
              >
                {stage.label}
              </h3>
              <p
                className={cn(
                  "mt-2.5 text-[0.8125rem] leading-relaxed",
                  dark ? "text-slate-ai-400" : "text-slate-ai-600",
                )}
              >
                {stage.detail}
              </p>
            </div>
          </li>
        ))}
    </StaggerGroup>
  );
}
