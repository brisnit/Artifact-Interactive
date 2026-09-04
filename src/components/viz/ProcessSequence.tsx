import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { DrawSvg } from "@/components/motion";

export type Step = {
  index: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  visual: ReactNode;
};

/**
 * The How It Works narrative: six numbered steps, alternating so the page has
 * a reading rhythm rather than a stack of identical rows. A continuous spine
 * runs down the left edge on desktop, drawing the sequence together.
 */
export function ProcessSequence({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[1.6875rem] top-4 bottom-4 hidden w-px bg-linear-to-b from-transparent via-ink-900/12 to-transparent lg:block"
      />
      {steps.map((step, i) => (
        <li
          className={cn(
            "relative border-t border-ink-900/[0.07] py-14 first:border-t-0 lg:py-20 lg:pl-24",
          )}
          key={step.index}
        >
          <span
            aria-hidden="true"
            className="absolute left-4 top-[3.6rem] hidden size-7 items-center justify-center rounded-full border border-ink-900/12 bg-white lg:flex"
          >
            <span className="size-2 rounded-full bg-signal-500" />
          </span>

          <div
            className={cn(
              "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <div>
              <Reveal>
                <span className="font-mono text-[0.75rem] tracking-[0.24em] text-signal-600">
                  {step.index}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading mt-4 text-ink-900">{step.title}</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lead mt-5 text-slate-ai-700">{step.summary}</p>
              </Reveal>
              <Reveal delay={230}>
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-slate-ai-600">
                  {step.detail}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <ul className="mt-7 space-y-2.5 border-t border-ink-900/[0.07] pt-6">
                  {step.points.map((point) => (
                    <li
                      className="flex gap-3.5 text-[0.875rem] leading-relaxed text-ink-700"
                      key={point}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-4 shrink-0 bg-signal-500"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={180}>{step.visual}</Reveal>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------------------------------------------------------------------
   Per-step diagrams. Each one shows the actual mechanism of that step.
   --------------------------------------------------------------------------- */

const frame =
  "rounded-xl border border-ink-900/10 bg-white p-6 lg:p-8";

export function CaptureViz() {
  return (
    <DrawSvg className={frame}>
      <svg
        aria-label="A session timeline with three lightweight prompts placed at moments where an answer is knowable"
        className="w-full"
        role="img"
        viewBox="0 0 480 200"
      >
        <line
          stroke="#d7dde9"
          strokeWidth="1.5"
          x1="20"
          x2="460"
          y1="150"
          y2="150"
        />
        {[
          { x: 120, label: "00:12" },
          { x: 260, label: "00:34" },
          { x: 390, label: "00:47" },
        ].map((p, i) => (
          <g
            data-node
            key={p.x}
          >
            <line
              stroke="#456df4"
              strokeDasharray="2 4"
              strokeWidth="1"
              x1={p.x}
              x2={p.x}
              y1="76"
              y2="146"
            />
            <rect
              fill="#ffffff"
              height="34"
              rx="4"
              stroke="#456df4"
              strokeOpacity="0.4"
              width="72"
              x={p.x - 36}
              y="42"
            />
            <circle cx={p.x - 22} cy="59" fill="#456df4" r="3" />
            <rect fill="#c3d1ff" height="4" rx="2" width="30" x={p.x - 12} y="53" />
            <rect fill="#e8ecf4" height="4" rx="2" width="20" x={p.x - 12} y="62" />
            <circle cx={p.x} cy="150" fill="#456df4" r="4.5" />
            <text
              className="font-mono"
              fill="#5b6580"
              fontSize="9.5"
              letterSpacing="0.1em"
              textAnchor="middle"
              x={p.x}
              y="172"
            >
              {p.label}
            </text>
          </g>
        ))}
        <text
          className="font-mono"
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.14em"
          x="20"
          y="192"
        >
          ONE SESSION · UNINTERRUPTED
        </text>
      </svg>
    </DrawSvg>
  );
}

export function ConnectViz() {
  const sources = ["SIGNALS", "LMS", "SIS", "ADVISING", "OUTCOMES"];
  return (
    <DrawSvg className={frame}>
      <svg
        aria-label="Five separate data sources joining into a single connected record"
        className="w-full"
        role="img"
        viewBox="0 0 480 220"
      >
        {sources.map((label, i) => {
          const y = 24 + i * 43;
          return (
            <g key={label}>
              <rect
                data-node
                fill="#f4f6fb"
                height="26"
                rx="3"
                stroke="#d7dde9"
                width="108"
                x="14"
                y={y - 13}
              />
              <text
                className="font-mono"
                data-label
                fill="#626e8a"
                fontSize="9.5"
                letterSpacing="0.12em"
                x="26"
                y={y + 3.5}
              >
                {label}
              </text>
              <path
                data-draw
                d={`M124 ${y} C 200 ${y}, 240 110, 330 110`}
                fill="none"
                stroke="#456df4"
                strokeOpacity="0.42"
                strokeWidth="1.3"
              />
            </g>
          );
        })}
        <g
          data-node
        >
          <circle cx="336" cy="110" fill="#456df4" opacity="0.1" r="34" />
          <rect
            fill="#0a0e1c"
            height="52"
            rx="5"
            width="118"
            x="336"
            y="84"
          />
          <text
            className="font-mono"
            fill="#ffffff"
            fontSize="9.5"
            letterSpacing="0.12em"
            x="352"
            y="106"
          >
            CONNECTED
          </text>
          <text
            className="font-mono"
            fill="#7590fb"
            fontSize="9.5"
            letterSpacing="0.12em"
            x="352"
            y="122"
          >
            RECORD
          </text>
        </g>
      </svg>
    </DrawSvg>
  );
}

export function UnderstandViz() {
  return (
    <DrawSvg className={frame}>
      <svg
        aria-label="A matrix of behaviours against outcomes with three strong relationships highlighted"
        className="w-full"
        role="img"
        viewBox="0 0 480 220"
      >
        {Array.from({ length: 8 }, (_, col) =>
          Array.from({ length: 5 }, (_, row) => {
            const strong =
              (col === 2 && row === 1) ||
              (col === 5 && row === 3) ||
              (col === 6 && row === 0);
            const mid = (col + row) % 3 === 0;
            return (
              <rect
                data-node
                fill={strong ? "#456df4" : mid ? "#c3d1ff" : "#eef2ff"}
                height="26"
                key={`${col}-${row}`}
                opacity={strong ? 1 : mid ? 0.8 : 1}
                rx="2.5"
                width="48"
                x={20 + col * 56}
                y={30 + row * 34}
              />
            );
          }),
        )}
        <text
          className="font-mono"
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.14em"
          x="20"
          y="18"
        >
          BEHAVIOUR × CONTEXT
        </text>
        <text
          className="font-mono"
          fill="#456df4"
          fontSize="9.5"
          letterSpacing="0.14em"
          x="20"
          y="212"
        >
          ■ STRONG RELATIONSHIP TO OUTCOME
        </text>
      </svg>
    </DrawSvg>
  );
}

export function ModelViz() {
  return (
    <DrawSvg className={frame}>
      <svg
        aria-label="A branching model of possible trajectories from a current state"
        className="w-full"
        role="img"
        viewBox="0 0 480 220"
      >
        <g fill="none" stroke="#456df4" strokeLinecap="round">
          <path d="M40 110 C 140 110, 180 34, 300 34" strokeOpacity="0.3" strokeWidth="1.4" />
          <path d="M40 110 C 140 110, 180 82, 300 82" strokeOpacity="0.55" strokeWidth="2" />
          <path d="M40 110 C 140 110, 180 138, 300 138" strokeOpacity="0.95" strokeWidth="3" />
          <path d="M40 110 C 140 110, 180 186, 300 186" strokeOpacity="0.3" strokeWidth="1.4" />
          <path d="M300 34 C 360 34, 380 20, 440 20" strokeOpacity="0.2" strokeWidth="1.1" />
          <path d="M300 82 C 360 82, 380 62, 440 62" strokeOpacity="0.35" strokeWidth="1.4" />
          <path d="M300 138 C 360 138, 380 116, 440 116" strokeOpacity="0.6" strokeWidth="1.8" />
          <path d="M300 138 C 360 138, 380 164, 440 164" strokeOpacity="0.45" strokeWidth="1.6" />
        </g>
        <circle cx="40" cy="110" fill="#0a0e1c" r="6" />
        {[34, 82, 138, 186].map((cy, i) => (
          <circle
            data-node
            cx="300"
            cy={cy}
            fill="#456df4"
            key={cy}
            opacity={cy === 138 ? 1 : 0.45}
            r={cy === 138 ? 5.5 : 3.5}
          />
        ))}
        <text
          className="font-mono"
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.14em"
          x="18"
          y="136"
        >
          NOW
        </text>
        <text
          className="font-mono"
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.14em"
          textAnchor="end"
          x="462"
          y="206"
        >
          MODELED HORIZON
        </text>
      </svg>
    </DrawSvg>
  );
}

export function ActViz() {
  const rows = [
    { role: "STUDENT", note: "A concept worth revisiting this week" },
    { role: "PROFESSOR", note: "Where the cohort lost the thread" },
    { role: "ADVISOR", note: "A conversation worth having early" },
  ];
  return (
    <DrawSvg className={frame}>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            className="flex items-center gap-4 rounded-md border border-ink-900/[0.09] bg-slate-ai-50 px-4 py-3.5" data-node
            key={row.role}
          >
            <span className="font-mono text-[0.625rem] tracking-[0.14em] text-signal-600">
              {row.role}
            </span>
            <span className="h-px flex-1 bg-ink-900/10" />
            <span className="text-[0.8125rem] text-ink-700">{row.note}</span>
          </div>
        ))}
        <p className="pt-3 text-[0.8125rem] leading-relaxed text-slate-ai-500">
          The same underlying intelligence, expressed three different ways —
          because three different decisions are being made.
        </p>
      </div>
    </DrawSvg>
  );
}

export function LearnViz() {
  return (
    <DrawSvg className={frame}>
      <svg
        aria-label="Model confidence improving across successive cycles as outcomes return to the system"
        className="w-full"
        role="img"
        viewBox="0 0 480 200"
      >
        <line stroke="#e8ecf4" strokeWidth="1" x1="30" x2="460" y1="160" y2="160" />
        {[0, 1, 2, 3, 4].map((i) => {
          const h = [40, 58, 78, 96, 112][i];
          return (
            <g key={i}>
              <rect
                data-node
                fill="#456df4"
                height={h}
                opacity={0.28 + i * 0.18}
                rx="3"
                width="52"
                x={40 + i * 84}
                y={160 - h}
              />
              <text
                className="font-mono"
                fill="#5b6580"
                fontSize="9"
                letterSpacing="0.1em"
                textAnchor="middle"
                x={66 + i * 84}
                y="178"
              >
                {`CYCLE ${i + 1}`}
              </text>
            </g>
          );
        })}
        <text
          className="font-mono"
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.14em"
          x="30"
          y="22"
        >
          MODEL CONFIDENCE · ILLUSTRATIVE
        </text>
      </svg>
    </DrawSvg>
  );
}
