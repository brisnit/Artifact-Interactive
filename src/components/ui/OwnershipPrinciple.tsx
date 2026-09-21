import { FadeUp, RevealText, StaggerGroup } from "@/components/motion";
import { cn } from "@/lib/cn";

/**
 * Institutional ownership and reversibility.
 *
 * The counterweight to the Operating System ambition: a system at the center
 * of an institution must never become a trap. Stated as design principles,
 * not guarantees — the contractual terms of any deployment live in each
 * institution's written agreement, and the footnote says so.
 */

const PRINCIPLES = [
  {
    title: "Owned",
    body: "The data an institution brings, the knowledge it builds, and the intelligence derived from both belong to the institution — not to Artifact.",
  },
  {
    title: "Portable",
    body: "Designed to be exportable. An institution's data leaves with it.",
  },
  {
    title: "Reversible",
    body: "Every stage of adoption should be one an institution can step back from.",
  },
];

export function OwnershipPrinciple({
  tone = "light",
  id = "ownership",
}: {
  tone?: "light" | "dark";
  id?: string;
}) {
  const dark = tone === "dark";

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <h3
          className={cn("text-heading", dark ? "text-white" : "text-ink-900")}
          id={id}
        >
          <RevealText trigger="scroll">Your institution owns its intelligence.</RevealText>
        </h3>
        <FadeUp delay={0.18}>
          <p
            className={cn(
              "text-lead mt-7",
              dark ? "text-slate-ai-300" : "text-slate-ai-700",
            )}
          >
            A system at the center of an institution must never become another
            technological trap. Artifact is designed around institutional
            ownership — whatever an institution decides next.
          </p>
        </FadeUp>
      </div>

      <div>
        <StaggerGroup
          as="ul"
          className={cn("border-t", dark ? "border-white/12" : "border-ink-900/10")}
          selector=":scope > li"
          stagger={0.08}
        >
          {PRINCIPLES.map((p) => (
            <li
              className={cn(
                "grid gap-2 border-b py-6 sm:grid-cols-[9rem_1fr] sm:gap-8",
                dark ? "border-white/12" : "border-ink-900/10",
              )}
              key={p.title}
            >
              <span
                className={cn(
                  "text-[1.125rem] font-bold tracking-tight",
                  dark ? "text-white" : "text-ink-900",
                )}
              >
                {p.title}
              </span>
              <span
                className={cn(
                  "text-[0.9375rem] leading-relaxed",
                  dark ? "text-slate-ai-300" : "text-slate-ai-700",
                )}
              >
                {p.body}
              </span>
            </li>
          ))}
        </StaggerGroup>
        <FadeUp delay={0.1}>
          <p
            className={cn(
              "mt-6 text-[0.8125rem] leading-relaxed",
              dark ? "text-slate-ai-400" : "text-slate-ai-500",
            )}
          >
            These are design principles. The specific terms of any deployment —
            including data ownership, export and retention — are set in each
            institution&apos;s written agreement.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
