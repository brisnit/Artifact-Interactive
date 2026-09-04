import { Button } from "@/components/ui/Button";
import { FadeUp, RevealText } from "@/components/motion";
import { SignalWave } from "@/components/ui/SignalWave";
import { site } from "@/lib/site";

/**
 * Site-wide closing call to action. Repeated deliberately: every page should
 * end with the same invitation.
 */
export function CtaBand({
  title = "What could your institution learn about itself?",
  body = "Artifact Interactive works with institutions exploring new ways to understand learning, behavior, knowledge, and outcomes.",
  primary = { label: "Talk With Artifact", href: site.cta.secondary.href },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-900 text-white">
      <div aria-hidden="true" className="absolute inset-0 grid-texture" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 text-signal-500/12"
      >
        <SignalWave animated className="h-full w-full" periods={36} strokeWidth={2.5} />
      </div>

      <div className="container-artifact relative py-24 lg:py-32">
        <div className="mx-auto max-w-[54rem] text-center">
          <h2 className="text-display-sm text-white">
            <RevealText delay={0.08} trigger="scroll">
              {title}
            </RevealText>
          </h2>
          <FadeUp delay={0.22}>
            <p className="text-lead mx-auto mt-8 max-w-[42rem] text-slate-ai-300">
              {body}
            </p>
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" variant="inverse" withArrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} size="lg" variant="inverse-outline">
                  {secondary.label}
                </Button>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
