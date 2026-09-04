"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { DrawSvg } from "@/components/motion";

const STAGES = [
  {
    id: "experience",
    label: "Experience",
    detail: "Teaching and learning happen exactly as they already do.",
  },
  {
    id: "signal",
    label: "Signal",
    detail: "The experience emits structured, contextualised signals.",
  },
  {
    id: "intelligence",
    label: "Intelligence",
    detail: "Signals connect into relationships, patterns, and trajectories.",
  },
  {
    id: "prediction",
    label: "Prediction",
    detail: "Possible pathways surface with their contributing conditions.",
  },
  {
    id: "action",
    label: "Action",
    detail: "A person decides what to do — earlier, and better informed.",
  },
  {
    id: "outcome",
    label: "Outcome",
    detail: "What actually happened returns to the system as evidence.",
  },
];

const R = 148;
const CX = 200;
const CY = 200;

/**
 * The closing loop: Experience → Signal → Intelligence → Prediction → Action →
 * Outcome → Experience. The loop is the argument, so it is drawn as a genuine
 * circuit rather than a row of arrows.
 */
export function LearningLoop({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";

  const positions = STAGES.map((_, i) => {
    const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: CX + Math.cos(angle) * R,
      y: CY + Math.sin(angle) * R,
      angle,
    };
  });

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
      <DrawSvg className="mx-auto w-full max-w-[30rem]" duration={1.3}>
        <svg
          aria-label="A continuous loop from experience through signal, intelligence, prediction, action, and outcome, returning to experience"
          className="w-full overflow-visible"
          role="img"
          viewBox="0 0 400 400"
        >
          <defs>
            <linearGradient id="ll-ring" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#456df4" />
              <stop offset="100%" stopColor="#9db3ff" />
            </linearGradient>
          </defs>

          {/* Ring */}
          <circle
            cx={CX}
            cy={CY}
            fill="none"
            r={R}
            stroke={dark ? "#ffffff" : "#0a0e1c"}
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle
            className="flow-dash"
            cx={CX}
            cy={CY}
            fill="none"
            r={R}
            stroke="url(#ll-ring)"
            strokeDasharray="6 10"
            strokeLinecap="round"
            strokeWidth="1.6"
          />

          {/* Inner label */}
          <text
            className="font-mono"
            fill={dark ? "#7590fb" : "#456df4"}
            fontSize="10"
            letterSpacing="0.2em"
            textAnchor="middle"
            x={CX}
            y={CY - 12}
          >
            CONTINUOUS
          </text>
          <text
            className="font-mono"
            fill={dark ? "#7590fb" : "#456df4"}
            fontSize="10"
            letterSpacing="0.2em"
            textAnchor="middle"
            x={CX}
            y={CY + 6}
          >
            INTELLIGENCE
          </text>
          <text
            className="font-mono"
            fill={dark ? "#7590fb" : "#456df4"}
            fontSize="10"
            letterSpacing="0.2em"
            textAnchor="middle"
            x={CX}
            y={CY + 24}
          >
            LOOP
          </text>

          {/* Stage nodes */}
          {positions.map((pos, i) => {
            const isActive = i === active;
            const isEnd = Math.cos(pos.angle) < -0.3;
            return (
              <g
                className="cursor-pointer"
                key={STAGES[i].id}
                onFocus={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                aria-label={`${STAGES[i].label}: ${STAGES[i].detail}`}
              >
                <circle
                  data-node
                  cx={pos.x}
                  cy={pos.y}
                  fill="#456df4"
                  opacity={isActive ? 0.2 : 0}
                  r="20"
                  style={{
                    transition: "opacity 500ms ease",
                  }}
                />
                <circle
                  data-node
                  cx={pos.x}
                  cy={pos.y}
                  fill={isActive ? "#456df4" : dark ? "#c3d1ff" : "#0a0e1c"}
                  r={isActive ? 8 : 5.5}
                  style={{
                    transition: "r 400ms cubic-bezier(0.22,1,0.36,1), fill 400ms ease",
                  }}
                />
                <text
                  className="font-mono" data-node
                  fill={
                    isActive
                      ? dark
                        ? "#ffffff"
                        : "#0a0e1c"
                      : dark
                        ? "#8a94ac"
                        : "#5b6580"
                  }
                  fontSize="10.5"
                  letterSpacing="0.14em"
                  textAnchor={isEnd ? "end" : Math.abs(Math.cos(pos.angle)) < 0.3 ? "middle" : "start"}
                  x={pos.x + Math.cos(pos.angle) * 22}
                  y={pos.y + Math.sin(pos.angle) * 22 + 4}
                >
                  {STAGES[i].label.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </DrawSvg>

      <ol className="space-y-1">
        {STAGES.map((stage, i) => (
          <li key={stage.id}>
            <button
              className={cn(
                "w-full border-l-2 py-3.5 pl-5 text-left transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                i === active
                  ? dark
                    ? "border-signal-400 bg-white/[0.04]"
                    : "border-signal-500 bg-slate-ai-50"
                  : dark
                    ? "border-white/10 hover:border-white/30"
                    : "border-ink-900/10 hover:border-ink-900/30",
              )}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              type="button"
            >
              <span
                className={cn(
                  "text-[0.9375rem] font-bold tracking-tight transition-colors duration-300",
                  i === active
                    ? dark
                      ? "text-white"
                      : "text-ink-900"
                    : dark
                      ? "text-slate-ai-400"
                      : "text-slate-ai-600",
                )}
              >
                {stage.label}
              </span>
              <span
                className={cn(
                  "mt-1 block text-[0.8125rem] leading-relaxed",
                  dark ? "text-slate-ai-400" : "text-slate-ai-600",
                )}
              >
                {stage.detail}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
