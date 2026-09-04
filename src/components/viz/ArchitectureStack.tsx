"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Layer = {
  id: string;
  name: string;
  role: string;
  nodes: string[];
  detail: string;
};

const LAYERS: Layer[] = [
  {
    id: "experience",
    name: "Experience Layer",
    role: "Where learning actually happens",
    nodes: ["Students", "Faculty", "Systems", "Content"],
    detail:
      "The lectures, labs, seminars, assignments, conversations, and platforms that already exist. Artifact does not replace this layer or ask it to change shape.",
  },
  {
    id: "signal",
    name: "Signal Layer",
    role: "What the experience emits",
    nodes: ["Interaction", "Comprehension", "Engagement", "Activity", "Outcomes"],
    detail:
      "Lightweight interactions and existing institutional activity, captured as structured signals anchored to a concept, a moment, and a context.",
  },
  {
    id: "intelligence",
    name: "Intelligence Layer",
    role: "What the signals mean together",
    nodes: ["Relationships", "Patterns", "Trajectories", "Models"],
    detail:
      "Signals are connected across time, population, curriculum, and system boundary. Relationships that are invisible inside any single source become observable here.",
  },
  {
    id: "predictive",
    name: "Predictive Layer",
    role: "What may happen next",
    nodes: ["Emerging risk", "Opportunities", "Possible pathways"],
    detail:
      "Modeled trajectories with associated likelihoods and contributing conditions — surfaced early enough that a decision can still change the outcome.",
  },
  {
    id: "action",
    name: "Action Layer",
    role: "Where intelligence becomes a decision",
    nodes: ["Students", "Professors", "Advisors", "Administrators"],
    detail:
      "Intelligence delivered to the person who can act on it, in language they already use, with the reasoning visible and the authority left with them.",
  },
];

const GLYPH_CAPTIONS = [
  "Participants and systems, operating independently",
  "Each source emitting structured signal",
  "Signals joined into a mesh of relationships",
  "A current state branching into modeled pathways",
  "Intelligence routed to the people who decide",
];

/**
 * The platform architecture. Five layers, selectable, with signal traversing
 * downward through the stack. Built as buttons so it is fully keyboard
 * navigable and reads correctly to assistive technology.
 */
export function ArchitectureStack() {
  const [active, setActive] = useState(2);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div className="relative">
        {/* Vertical signal spine, with a pulse travelling down it */}
        <span
          aria-hidden="true"
          className="absolute left-[1.375rem] top-6 bottom-6 w-px overflow-hidden bg-linear-to-b from-signal-400/10 via-signal-400/45 to-signal-400/10"
        >
          <span className="arch-pulse absolute inset-x-0 h-24 bg-linear-to-b from-transparent via-signal-300 to-transparent" />
        </span>

        {/* Direction of travel through the stack */}
        <div
          aria-hidden="true"
          className="mb-5 flex items-center gap-3 pl-14 lg:pl-16"
        >
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-signal-300">
            Signal descends
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-signal-400/40 to-transparent" />
        </div>

        <ol className="relative space-y-2.5">
          {LAYERS.map((layer, i) => {
            const isActive = i === active;
            return (
              <li key={layer.id}>
                <Reveal delay={i * 90}>
                  <button
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-lg border p-5 pl-14 text-left lg:p-6 lg:pl-16",
                      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "border-signal-400/45 bg-white/[0.07]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]",
                    )}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-[1.375rem] top-1/2 z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
                        isActive
                          ? "bg-signal-400 shadow-[0_0_0_5px_rgba(69,109,244,0.22)]"
                          : "bg-slate-ai-500 group-hover:bg-signal-300",
                      )}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3
                        className={cn(
                          "text-[1.0625rem] font-bold tracking-tight transition-colors duration-300 lg:text-[1.1875rem]",
                          isActive ? "text-white" : "text-slate-ai-200",
                        )}
                      >
                        {layer.name}
                      </h3>
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-slate-ai-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.8125rem] text-slate-ai-400">
                      {layer.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {layer.nodes.map((node) => (
                        <span
                          className={cn(
                            "rounded-sm border px-2 py-1 text-[0.6875rem] font-medium transition-all duration-500",
                            isActive
                              ? "border-signal-400/35 bg-signal-500/12 text-signal-200"
                              : "border-white/10 text-slate-ai-400",
                          )}
                          key={node}
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div
          aria-hidden="true"
          className="mt-5 flex items-center gap-3 pl-14 lg:pl-16"
        >
          <span className="h-px flex-1 bg-linear-to-l from-signal-400/40 to-transparent" />
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-signal-300">
            Intelligence returns
          </span>
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <Reveal delay={200}>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 lg:p-9">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-signal-300">
              Layer {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-[1.5rem] font-bold tracking-tight text-white lg:text-[1.75rem]">
              {LAYERS[active].name}
            </h3>
            <p
              className="mt-4 text-[0.9375rem] leading-relaxed text-slate-ai-300"
              key={LAYERS[active].id}
            >
              {LAYERS[active].detail}
            </p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <LayerGlyph index={active} />
              <p className="mt-5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-slate-ai-400">
                {GLYPH_CAPTIONS[active]}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/** A small per-layer abstract glyph so the detail panel is never text-only. */
function LayerGlyph({ index }: { index: number }) {
  const common = {
    className: "w-full",
    viewBox: "0 0 320 120",
    role: "img",
  } as const;

  if (index === 0) {
    return (
      <svg {...common} aria-label="Distinct participants and systems, unconnected">
        {[30, 90, 150, 210, 270].map((x, i) => (
          <g key={x}>
            <rect
              fill="none"
              height="44"
              rx="3"
              stroke="#8a94ac"
              strokeOpacity="0.5"
              width="44"
              x={x - 22}
              y={38 + (i % 2 ? 8 : -8)}
            />
            <circle cx={x} cy={60 + (i % 2 ? 8 : -8)} fill="#c3d1ff" r="3" />
          </g>
        ))}
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...common} aria-label="Signals emitted from each source">
        {[30, 90, 150, 210, 270].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="96" fill="#8a94ac" r="3" />
            {[0, 1, 2].map((j) => (
              <circle
                className="animate-float"
                cx={x + (j - 1) * 7}
                cy={68 - j * 18}
                fill="#456df4"
                key={j}
                opacity={0.85 - j * 0.22}
                r={2.4 - j * 0.4}
                style={{ animationDelay: `${i * 260 + j * 400}ms` }}
              />
            ))}
          </g>
        ))}
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg {...common} aria-label="Signals connected into a mesh of relationships">
        <g stroke="#456df4" strokeOpacity="0.45" strokeWidth="0.9">
          {[
            [40, 30, 120, 70],
            [120, 70, 200, 34],
            [200, 34, 280, 78],
            [40, 30, 110, 100],
            [110, 100, 200, 34],
            [110, 100, 280, 78],
            [120, 70, 280, 78],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} x2={x2} y1={y1} y2={y2} />
          ))}
        </g>
        {[
          [40, 30],
          [120, 70],
          [200, 34],
          [110, 100],
          [280, 78],
        ].map(([cx, cy], i) => (
          <circle cx={cx} cy={cy} fill="#c3d1ff" key={i} r={i === 1 ? 5 : 3.6} />
        ))}
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg {...common} aria-label="A current state branching into possible pathways">
        <g fill="none" stroke="#456df4" strokeLinecap="round">
          <path d="M40 60 C 130 60, 160 20, 285 20" strokeOpacity="0.35" strokeWidth="1.4" />
          <path d="M40 60 C 130 60, 160 60, 285 60" strokeOpacity="0.9" strokeWidth="2.6" />
          <path d="M40 60 C 130 60, 160 100, 285 100" strokeOpacity="0.55" strokeWidth="1.8" />
        </g>
        <circle cx="40" cy="60" fill="#ffffff" r="5" />
        {[20, 60, 100].map((cy, i) => (
          <circle cx="285" cy={cy} fill="#456df4" key={cy} r={i === 1 ? 5 : 3.4} />
        ))}
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="Intelligence delivered to the people who can act">
      <circle cx="60" cy="60" fill="#456df4" r="7" />
      {[
        [220, 22],
        [258, 60],
        [220, 98],
      ].map(([x, y], i) => (
        <g key={i}>
          <path
            d={`M67 60 C 140 60, 160 ${y}, ${x - 12} ${y}`}
            fill="none"
            stroke="#456df4"
            strokeOpacity="0.4"
            strokeWidth="1.4"
          />
          <rect
            fill="none"
            height="20"
            rx="2.5"
            stroke="#c3d1ff"
            strokeOpacity="0.7"
            width="30"
            x={x - 12}
            y={y - 10}
          />
        </g>
      ))}
    </svg>
  );
}
