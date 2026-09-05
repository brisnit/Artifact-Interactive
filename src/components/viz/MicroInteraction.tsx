"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { DrawSvg } from "@/components/motion";

type Prompt = {
  id: string;
  context: string;
  question: string;
  options: string[];
  meta: string;
};

const PROMPTS: Prompt[] = [
  {
    id: "clarity",
    context: "BIO 214 · Lecture 09 · 00:34:12",
    question: "How clear is this right now?",
    options: ["Clear", "Mostly clear", "I'm lost"],
    meta: "Anchored to concept: enzyme kinetics",
  },
  {
    id: "change",
    context: "BIO 214 · Lecture 09 · 00:41:58",
    question: "What changed your understanding?",
    options: ["Concept", "Example", "Discussion", "Practice"],
    meta: "Anchored to moment: 7 minutes after the dip",
  },
];

/**
 * The product's surface layer: two lightweight prompts as a student would meet
 * them. Interactive, but the interaction is illustrative — nothing is stored.
 */
export function MicroInteraction() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {PROMPTS.map((prompt, i) => (
        <PromptCard key={prompt.id} prompt={prompt} autoDelay={2200 + i * 2600} />
      ))}
    </div>
  );
}

function PromptCard({
  prompt,
  autoDelay,
}: {
  prompt: Prompt;
  autoDelay: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // A single, gentle demonstration selection so the idea reads at a glance.
  useEffect(() => {
    if (touched) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    let timer: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          setSelected((current) => (current === null ? 1 : current));
        }, autoDelay);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [autoDelay, touched]);

  return (
    <div
      className="rounded-xl border border-ink-900/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(10,14,28,0.6)] lg:p-6"
      ref={ref}
    >
      <div className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-slate-ai-500">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-signal-500" />
        {prompt.context}
      </div>

      <p className="mt-5 text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink-900">
        {prompt.question}
      </p>

      <div
        aria-label={prompt.question}
        className="mt-5 flex flex-wrap gap-2"
        role="group"
      >
        {prompt.options.map((option, i) => {
          const isOn = selected === i;
          return (
            <button
              aria-pressed={isOn}
              className={cn(
                "whitespace-nowrap rounded-md border px-3.5 py-2 text-[0.8125rem] font-semibold tracking-tight",
                "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOn
                  ? "border-signal-600 bg-signal-600 text-white shadow-[0_8px_20px_-12px_rgba(69,109,244,0.9)]"
                  : "border-ink-900/12 bg-white text-ink-700 hover:border-signal-500/50 hover:text-signal-600",
              )}
              key={option}
              onClick={() => {
                setTouched(true);
                setSelected(isOn ? null : i);
              }}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          "mt-5 flex items-center gap-2.5 border-t border-ink-900/[0.07] pt-4 text-[0.75rem] transition-opacity duration-500",
          selected === null ? "opacity-40" : "opacity-100",
        )}
      >
        <svg
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-colors duration-500",
            selected === null ? "text-slate-ai-300" : "text-signal-500",
          )}
          fill="none"
          height="10"
          viewBox="0 0 64 24"
          width="24"
        >
          <path
            d="M0 12 q 8 -10 16 0 q 8 10 16 0 q 8 -10 16 0 q 8 10 16 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3.5"
          />
        </svg>
        <span className="text-slate-ai-500">
          {selected === null ? "Awaiting signal" : prompt.meta}
        </span>
      </div>
    </div>
  );
}

/**
 * Longitudinal companion: one response is noise; a term of responses is a
 * trajectory. Rendered as a small sparkline band.
 */
export function LongitudinalBand() {
  const weeks = [
    62, 68, 71, 58, 44, 39, 47, 61, 72, 76, 74, 81, 79, 86,
  ];
  const width = 560;
  const height = 130;
  const step = width / (weeks.length - 1);
  const points = weeks.map((v, i) => ({
    x: i * step,
    y: height - (v / 100) * (height - 20) - 10,
  }));
  const line = points
    .map((p, i) => (i === 0 ? `M${p.x.toFixed(1)} ${p.y.toFixed(1)}` : `L${p.x.toFixed(1)} ${p.y.toFixed(1)}`))
    .join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;

  return (
    <DrawSvg duration={1.5}>
      <svg
      aria-label="A term of comprehension signals showing a dip in weeks five and six and recovery afterwards"
      className="w-full"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient id="lb-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#456df4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#456df4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#lb-fill)" />
      <path
        data-draw
        d={line}
        fill="none"
        stroke="#456df4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      {points.map((p, i) => (
        <circle
          data-node
          cx={p.x}
          cy={p.y}
          fill={i === 5 ? "#0a0e1c" : "#456df4"}
          key={i}
          r={i === 5 ? 4 : 2.4}
        />
      ))}
      <text
        className="font-mono"
        fill="#5b6580"
        fontSize="9"
        letterSpacing="0.14em"
        x="0"
        y={height - 1}
      >
        WEEK 1
      </text>
      <text
        className="font-mono"
        fill="#5b6580"
        fontSize="9"
        letterSpacing="0.14em"
        textAnchor="end"
        x={width}
        y={height - 1}
      >
        WEEK 14
      </text>
      </svg>
    </DrawSvg>
  );
}
