import { FadeUp, StaggerGroup } from "@/components/motion";
import { cn } from "@/lib/cn";

/**
 * The adoption path: Connect → Understand → Unify → Transform → Become.
 *
 * One path with a stopping point the institution chooses, not two separate
 * products. The first two stages are the low-friction start (no migration);
 * the last three are where an institution may choose to go further. "Become"
 * is the architecture, not a replacement event — what happens to each legacy
 * system afterwards is decided system by system.
 */

const STAGES = [
  {
    name: "Connect",
    body: "Existing systems keep operating. Artifact connects to them — no migration required.",
  },
  {
    name: "Understand",
    body: "Intelligence forms across systems that have never shared a view of the same student.",
  },
  {
    name: "Unify",
    body: "Students, faculty, advisors and administrators begin working from one shared experience.",
  },
  {
    name: "Transform",
    body: "Workflows scattered across separate platforms can move into Artifact, one at a time.",
  },
  {
    name: "Become",
    body: "Artifact becomes the institution's Learning Intelligence Operating System.",
  },
];

const OUTCOMES = [
  { title: "Remains connected", body: "Systems that still serve the institution stay part of the architecture." },
  { title: "Moves into Artifact", body: "Capabilities that work better inside one environment can be absorbed over time." },
  {
    title: "Becomes unnecessary",
    body: "Where it serves the institution, a system can be retired — and that can include the LMS.",
  },
];

export function AdoptionPath({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  const groupLabel = (text: string, emphasis: boolean) => (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.8125rem] font-semibold tracking-tight",
        emphasis
          ? dark
            ? "text-signal-300"
            : "text-signal-600"
          : dark
            ? "text-slate-ai-400"
            : "text-slate-ai-500",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px flex-1",
          emphasis
            ? dark
              ? "bg-signal-400/50"
              : "bg-signal-500/50"
            : dark
              ? "bg-white/15"
              : "bg-ink-900/15",
        )}
      />
      <span className="shrink-0">{text}</span>
      <span
        aria-hidden="true"
        className={cn(
          "h-px flex-1",
          emphasis
            ? dark
              ? "bg-signal-400/50"
              : "bg-signal-500/50"
            : dark
              ? "bg-white/15"
              : "bg-ink-900/15",
        )}
      />
    </p>
  );

  return (
    <div>
      {/* Desktop: the two groupings as brackets over the stages. */}
      <div className="mb-6 hidden gap-6 lg:grid lg:grid-cols-5">
        <div className="col-span-2">{groupLabel("Begin here — nothing has to move", true)}</div>
        <div className="col-span-3">{groupLabel("Where an institution chooses to go further", false)}</div>
      </div>

      <StaggerGroup
        as="ol"
        className="grid gap-x-6 gap-y-6 lg:grid-cols-5"
        selector=":scope > li"
        stagger={0.09}
      >
        {STAGES.map((stage, i) => {
          const become = i === STAGES.length - 1;
          return (
            <li className="relative flex flex-col" key={stage.name}>
              {/* Mobile and tablet: the grouping sits above the first stage of each group. */}
              {(i === 0 || i === 2) && (
                <div className="mb-5 mt-2 lg:hidden">
                  {groupLabel(
                    i === 0 ? "Begin here — nothing has to move" : "Where an institution chooses to go further",
                    i === 0,
                  )}
                </div>
              )}
              <div
                className={cn(
                  "flex h-full flex-col rounded-lg border p-6",
                  become
                    ? "border-signal-600 bg-signal-600 text-white"
                    : dark
                      ? "border-white/12 bg-white/[0.03]"
                      : "border-ink-900/10 bg-white",
                )}
              >
                <span
                  className={cn(
                    "index-numeral font-mono text-[0.6875rem]",
                    become ? "text-white" : dark ? "text-signal-300" : "text-signal-600",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "mt-4 text-[1.375rem] font-bold tracking-[-0.03em]",
                    become ? "text-white" : dark ? "text-white" : "text-ink-900",
                  )}
                >
                  {stage.name}
                </span>
                <span
                  className={cn(
                    "mt-3 text-[0.875rem] leading-relaxed",
                    become ? "text-white/90" : dark ? "text-slate-ai-300" : "text-slate-ai-700",
                  )}
                >
                  {stage.body}
                </span>
              </div>
            </li>
          );
        })}
      </StaggerGroup>

      {/* What "Become" means for each legacy system. */}
      <FadeUp delay={0.1}>
        <div
          className={cn(
            "mt-10 grid gap-8 border-t pt-8 lg:grid-cols-[1fr_3fr] lg:gap-12",
            dark ? "border-white/12" : "border-ink-900/10",
          )}
        >
          <p
            className={cn(
              "text-[0.9375rem] font-semibold leading-snug tracking-tight",
              dark ? "text-white" : "text-ink-900",
            )}
          >
            At Become, each legacy system is evaluated on its own merits.
          </p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {OUTCOMES.map((o) => (
              <li key={o.title}>
                <span
                  className={cn(
                    "block text-[0.9375rem] font-bold tracking-tight",
                    dark ? "text-white" : "text-ink-900",
                  )}
                >
                  {o.title}
                </span>
                <span
                  className={cn(
                    "mt-2 block text-[0.875rem] leading-relaxed",
                    dark ? "text-slate-ai-300" : "text-slate-ai-700",
                  )}
                >
                  {o.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>

      <FadeUp delay={0.16}>
        <p
          className={cn(
            "mt-8 font-editorial text-[1.1875rem] italic leading-snug",
            dark ? "text-slate-ai-300" : "text-slate-ai-600",
          )}
        >
          Every stage is useful on its own. No institution has to go further than
          the stage that serves it.
        </p>
      </FadeUp>
    </div>
  );
}
