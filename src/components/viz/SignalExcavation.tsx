"use client";

import { useMemo } from "react";
import { DrawSvg } from "@/components/motion";
import { seeded } from "@/lib/rand";

// Wide and shallow: at full container width this renders ~570px tall rather
// than ~720, which keeps the section from becoming a vertical void.
const W = 1200;
const H = 420;

/**
 * "Excavate the signals. Surface the intelligence."
 *
 * Scattered fragments in the lower strata are drawn upward through a threshold
 * line and resolve into a small, ordered band of intelligence at the top. The
 * buried/surfaced split is the whole idea, so the threshold is the one hard
 * line in the drawing.
 */
export function SignalExcavation({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const { buried, lifts, surfaced } = useMemo(build, []);

  const label = dark ? "#8a94ac" : "#5b6580";
  const fragment = dark ? "#3d4863" : "#b3bbcd";

  return (
    <DrawSvg duration={1.6} scrub start="top 88%" end="center 52%">
      <svg
        aria-label="Scattered fragments below a threshold line being drawn upward and resolving into an ordered band of intelligence above it"
        className="w-full"
        role="img"
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <linearGradient id="ex-lift" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#456df4" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Buried strata — faint horizontal bands */}
        {[236, 286, 336, 386].map((y) => (
          <line
            key={y}
            stroke={dark ? "#ffffff" : "#0a0e1c"}
            strokeOpacity="0.05"
            strokeWidth="1"
            x1="0"
            x2={W}
            y1={y}
            y2={y}
          />
        ))}

        {/* Fragments, still buried */}
        {buried.map((f, i) => (
          <rect
            data-node
            fill={fragment}
            height={f.h}
            key={`b-${i}`}
            opacity={0.5 + f.h / 12}
            rx="1"
            transform={`rotate(${f.r} ${f.x} ${f.y})`}
            width={f.w}
            x={f.x}
            y={f.y}
          />
        ))}

        {/* The threshold: below it, artefacts. Above it, intelligence. */}
        <line
          data-draw
          stroke={dark ? "#9db3ff" : "#456df4"}
          strokeOpacity="0.5"
          strokeWidth="1.2"
          x1="0"
          x2={W}
          y1="186"
          y2="186"
        />
        <text
          className="font-mono"
          data-label
          fill={label}
          fontSize="9.5"
          letterSpacing="0.16em"
          x="0"
          y="176"
        >
          SURFACED — INTELLIGENCE
        </text>
        <text
          className="font-mono"
          data-label
          fill={label}
          fontSize="9.5"
          letterSpacing="0.16em"
          x="0"
          y="204"
        >
          BURIED — RAW ARTEFACTS
        </text>

        {/* Lift paths */}
        {lifts.map((d, i) => (
          <path
            d={d}
            data-draw
            fill="none"
            key={`l-${i}`}
            stroke="url(#ex-lift)"
            strokeWidth="1"
          />
        ))}

        {/* Surfaced intelligence — an ordered band */}
        {surfaced.map((s, i) => (
          <g data-node key={`s-${i}`}>
            <circle cx={s.x} cy={s.y} fill="#456df4" opacity="0.10" r="30" />
            <circle cx={s.x} cy={s.y} fill="#456df4" opacity="0.2" r="17" />
            <circle cx={s.x} cy={s.y} fill="#456df4" r={s.r} />
            <circle cx={s.x} cy={s.y} fill="#ffffff" r={s.r * 0.36} />
          </g>
        ))}
        <path
          d={`M${surfaced[0].x} ${surfaced[0].y} ${surfaced
            .slice(1)
            .map((s) => `L${s.x} ${s.y}`)
            .join(" ")}`}
          data-draw
          fill="none"
          stroke="#456df4"
          strokeOpacity="0.75"
          strokeWidth="1.8"
        />
      </svg>
    </DrawSvg>
  );
}

function build() {
  const rnd = seeded(90210);

  const buried = Array.from({ length: 74 }, () => ({
    x: 20 + rnd() * (W - 60),
    y: 212 + rnd() * (H - 232),
    w: 3 + rnd() * 11,
    h: 2 + rnd() * 3,
    r: (rnd() - 0.5) * 60,
  }));

  const surfaced = Array.from({ length: 7 }, (_, i) => ({
    x: 110 + i * 165,
    y: 100 + Math.sin(i * 0.9) * 28,
    r: 5.5 + (i % 3) * 1.8,
  }));

  // Each lift starts at a buried fragment and rises to the nearest node.
  const lifts = Array.from({ length: 18 }, (_, i) => {
    const f = buried[Math.floor(rnd() * buried.length)];
    const s = surfaced[i % surfaced.length];
    const midY = (f.y + s.y) / 2;
    return `M${f.x.toFixed(1)} ${f.y.toFixed(1)} C ${f.x.toFixed(1)} ${midY.toFixed(1)}, ${s.x} ${midY.toFixed(1)}, ${s.x} ${s.y.toFixed(1)}`;
  });

  return { buried, lifts, surfaced };
}
