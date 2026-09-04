"use client";

import { useState } from "react";
import { DrawSvg } from "@/components/motion";
import { cn } from "@/lib/cn";

type Path = {
  id: string;
  label: string;
  likelihood: string;
  summary: string;
  conditions: string[];
  d: string;
  y: number;
  weight: number;
  tone: "risk" | "steady" | "opportunity";
};

const PATHS: Path[] = [
  {
    id: "a",
    label: "Path A",
    likelihood: "Lower likelihood",
    summary: "Comprehension continues to decline through the assessment window.",
    conditions: [
      "Confusion signals repeat on the same concept",
      "Participation falls for three consecutive sessions",
      "No advising or instructional contact recorded",
    ],
    d: "M120 200 C 280 200, 350 88, 578 88",
    y: 88,
    weight: 1.8,
    tone: "risk",
  },
  {
    id: "b",
    label: "Path B",
    likelihood: "Most likely",
    summary: "The current trajectory holds, with understanding forming unevenly.",
    conditions: [
      "Comprehension recovers on some concepts, not others",
      "Engagement remains stable but flat",
      "Outcome falls within the expected band",
    ],
    d: "M120 200 C 280 200, 350 200, 578 200",
    y: 200,
    weight: 3.6,
    tone: "steady",
  },
  {
    id: "c",
    label: "Path C",
    likelihood: "Available with intervention",
    summary:
      "A targeted change in condition shifts the trajectory measurably upward.",
    conditions: [
      "Concept revisited through a different modality",
      "Peer or supplemental support introduced early",
      "Confidence signals recover within two sessions",
    ],
    d: "M120 200 C 280 200, 350 312, 578 312",
    y: 312,
    weight: 2.4,
    tone: "opportunity",
  },
];

const TONE: Record<Path["tone"], { stroke: string; chip: string; dot: string }> = {
  risk: {
    stroke: "#8a94ac",
    chip: "text-slate-ai-600 bg-slate-ai-100",
    dot: "bg-slate-ai-400",
  },
  steady: {
    stroke: "#456df4",
    chip: "text-signal-700 bg-signal-50",
    dot: "bg-signal-500",
  },
  opportunity: {
    stroke: "#456df4",
    chip: "text-signal-700 bg-signal-50",
    dot: "bg-signal-500",
  },
};

/**
 * Branching pathway visualization for the predictive section. Hovering or
 * focusing a pathway emphasises it in the drawing — the interaction is the
 * explanation, not decoration.
 */
export function PredictivePaths() {
  const [active, setActive] = useState<string | null>("b");

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
      <DrawSvg duration={1.4} scrub start="top 78%" end="bottom 62%">
        <svg
          aria-label="A current state branching into three modeled pathways with different likelihoods"
          className="w-full"
          role="img"
          viewBox="0 0 700 400"
        >
          <defs>
            <linearGradient id="pp-fade-signal" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#456df4" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#456df4" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="pp-fade-muted" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#8a94ac" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#b3bbcd" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Baseline history feeding the current state */}
          <path
            d="M12 236 C 40 236, 52 196, 78 208 C 96 216, 100 190, 120 200"
            data-draw
            fill="none"
            stroke="#9aa3b8"
            strokeLinecap="round"
            strokeWidth="1.6"
          />

          {PATHS.map((p, i) => {
            const emphasised = active === p.id;
            return (
              <g
                key={p.id}
                opacity={active && !emphasised ? 0.32 : 1}
                className="transition-opacity duration-500"
              >
                <path
                  d={p.d}
                  data-draw
                  fill="none"
                  stroke={`url(#pp-fade-${p.tone === "risk" ? "muted" : "signal"})`}
                  strokeLinecap="round"
                  strokeWidth={emphasised ? p.weight + 1.4 : p.weight}
                  style={{
                    transition: "stroke-width 400ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <circle
                  cx="578"
                  cy={p.y}
                  data-node
                  fill={p.tone === "risk" ? "#8a94ac" : "#456df4"}
                  r={emphasised ? 8 : 5.5}
                  style={{
                    transition: "r 400ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <circle cx="578" cy={p.y} data-node fill="#ffffff" r={emphasised ? 3 : 2} />
                <text
                  className="font-mono"
                  fill="#626e8a"
                  fontSize="10.5"
                  letterSpacing="0.14em"
                  x="598"
                  y={p.y + 4}
                >
                  {p.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Current state marker */}
          <g>
            <circle cx="120" cy="200" fill="#456df4" opacity="0.12" r="26" />
            <circle cx="120" cy="200" fill="#0a0e1c" r="7.5" />
            <text
              className="font-mono"
              fill="#1b2338"
              fontSize="10.5"
              letterSpacing="0.14em"
              textAnchor="middle"
              x="120"
              y="245"
            >
              CURRENT STATE
            </text>
            <text
              className="font-mono"
              fill="#5b6580"
              fontSize="9.5"
              letterSpacing="0.12em"
              textAnchor="middle"
              x="120"
              y="262"
            >
              WEEK 4
            </text>
          </g>

          <text
            className="font-mono"
            data-label
            fill="#5b6580"
            fontSize="9.5"
            letterSpacing="0.16em"
            x="8"
            y="290"
          >
            OBSERVED
          </text>
          <text
            className="font-mono"
            data-label
            fill="#5b6580"
            fontSize="9.5"
            letterSpacing="0.16em"
            x="146"
            y="290"
          >
            MODELED
          </text>
        </svg>
      </DrawSvg>

      <ul className="space-y-3">
        {PATHS.map((p, i) => {
          const emphasised = active === p.id;
          return (
            <li key={p.id}>
              <button
                aria-expanded={emphasised}
                className={cn(
                  "w-full rounded-lg border p-5 text-left transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  emphasised
                    ? "border-signal-500/45 bg-white shadow-[0_18px_40px_-30px_rgba(10,14,28,0.5)]"
                    : "border-ink-900/10 bg-white/60 hover:border-ink-900/25",
                )}
                onClick={() => setActive(emphasised ? null : p.id)}
                onFocus={() => setActive(p.id)}
                onMouseEnter={() => setActive(p.id)}
                type="button"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-900">
                    <span
                      aria-hidden="true"
                      className={cn("size-2 rounded-full", TONE[p.tone].dot)}
                    />
                    {p.label}
                  </span>
                  <span
                    className={cn(
                      "rounded-sm px-2 py-1 text-[0.6875rem] font-semibold",
                      TONE[p.tone].chip,
                    )}
                  >
                    {p.likelihood}
                  </span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-700">
                  {p.summary}
                </p>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    emphasised
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <ul className="overflow-hidden">
                    {p.conditions.map((c) => (
                      <li
                        className="flex gap-2.5 py-1 text-[0.8125rem] text-slate-ai-600"
                        key={c}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-px w-3 shrink-0 bg-slate-ai-300"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            </li>
          );
        })}
        <li className="pt-2 text-[0.8125rem] leading-relaxed text-slate-ai-500">
          Likelihoods describe conditions, not people. A modeled pathway is an
          invitation to look closer — not a prediction about any individual.
        </li>
      </ul>
    </div>
  );
}
