import { Button } from "@/components/ui/Button";
import { SignalWave } from "@/components/ui/SignalWave";

export default function NotFound() {
  return (
    <section className="on-dark relative flex min-h-dvh items-center overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 grid-texture" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[140px]"
      />
      <div className="container-artifact relative py-32 text-center">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-signal-300">
          404 — Signal lost
        </p>
        <h1 className="text-display-sm mt-8 text-white">
          This path doesn&apos;t lead anywhere.
        </h1>
        <p className="text-lead mx-auto mt-7 max-w-[38rem] text-slate-ai-300">
          The page you were looking for isn&apos;t here. Every other pathway on
          the site is still open.
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mt-12 h-5 w-[min(24rem,80%)] text-signal-500/40"
        >
          <SignalWave animated className="h-full w-full" periods={12} strokeWidth={2.4} />
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" variant="inverse" withArrow>
            Back to Home
          </Button>
          <Button href="/platform" size="lg" variant="inverse-outline">
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
}
