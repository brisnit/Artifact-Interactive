import { FadeUp, StaggerGroup } from "@/components/motion";

/**
 * "An LMS asks / Artifact is built to ask."
 *
 * Deliberately lopsided: three questions against nine. The imbalance is the
 * argument — a system organized around courses has a short list of things it
 * can know; one organized around learning has a long one.
 */

const LMS_ASKS = [
  "What course is this student enrolled in?",
  "Was the assignment submitted?",
  "What grade was recorded?",
];

const ARTIFACT_ASKS = [
  "What is this student trying to accomplish?",
  "What do they understand?",
  "Where are they struggling?",
  "What experiences are influencing the outcome?",
  "What should happen next?",
  "What does the professor need to know?",
  "What does an advisor need to know?",
  "What institutional conditions are contributing to this pattern?",
  "What intervention or pathway could improve the outcome?",
];

export function QuestionContrast() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <FadeUp>
          <h3 className="text-[1.0625rem] font-bold tracking-tight text-slate-ai-500">
            An LMS asks
          </h3>
        </FadeUp>
        <StaggerGroup
          as="ul"
          className="mt-6 border-t border-ink-900/10"
          selector=":scope > li"
          stagger={0.06}
        >
          {LMS_ASKS.map((q) => (
            <li
              className="border-b border-ink-900/10 py-4 text-[1.0625rem] leading-snug text-slate-ai-500"
              key={q}
            >
              {q}
            </li>
          ))}
        </StaggerGroup>
      </div>

      <div>
        <FadeUp>
          <h3 className="text-[1.0625rem] font-bold tracking-tight text-signal-600">
            Artifact is built to ask
          </h3>
        </FadeUp>
        <StaggerGroup
          as="ul"
          className="mt-6 border-t border-signal-500/40"
          selector=":scope > li"
          stagger={0.05}
        >
          {ARTIFACT_ASKS.map((q) => (
            <li
              className="border-b border-ink-900/10 py-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink-900"
              key={q}
            >
              {q}
            </li>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
