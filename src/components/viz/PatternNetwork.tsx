"use client";

import { useMemo } from "react";
import { DrawSvg } from "@/components/motion";
import { seeded } from "@/lib/rand";

const W = 900;
const H = 420;

/**
 * "Small signals become larger patterns."
 * Hundreds of individual interactions on the left resolve into a small number
 * of dense clusters on the right. The point of the drawing is the reduction.
 */
export function PatternNetwork({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { points, clusters, links } = useMemo(build, []);
  const labelFill = tone === "dark" ? "#c3d1ff" : "#1b2338";
  const axisFill = tone === "dark" ? "#8a94ac" : "#5b6580";
  const pointFill = tone === "dark" ? "#7590fb" : "#8a94ac";

  return (
    <DrawSvg duration={1.6} scrub start="top 82%" end="bottom 60%">
      <svg
        aria-label="Individual learning interactions accumulating into a small number of recurring patterns"
        className="w-full"
        role="img"
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <linearGradient id="pn-link" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#456df4" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#pn-link)" strokeWidth="0.75">
          {links.map((d, i) => (
            <path d={d} data-draw key={`l-${i}`} />
          ))}
        </g>

        {points.map((p, i) => (
          <circle
            cx={p.x}
            cy={p.y}
            data-node
            fill={pointFill}
            key={`p-${i}`}
            opacity={0.55}
            r={p.r}
          />
        ))}

        {clusters.map((c, i) => (
          <g data-node key={`c-${i}`}>
            <circle cx={c.x} cy={c.y} fill="#456df4" opacity="0.09" r={c.r + 18} />
            <circle cx={c.x} cy={c.y} fill="#456df4" opacity="0.16" r={c.r + 8} />
            <circle cx={c.x} cy={c.y} fill="#456df4" r={c.r} />
            <text
              className="font-mono"
              fill={labelFill}
              fontSize="10.5"
              letterSpacing="0.06em"
              textAnchor="middle"
              x={c.x}
              y={c.y + c.r + 24}
            >
              {c.label}
            </text>
          </g>
        ))}

        <g data-label fill={axisFill} fontSize="10" letterSpacing="0.16em">
          <text className="font-mono" x="4" y="14">
            INDIVIDUAL SIGNALS
          </text>
          <text className="font-mono" textAnchor="end" x={W - 4} y="14">
            RECURRING PATTERNS
          </text>
        </g>
      </svg>
    </DrawSvg>
  );
}

function build() {
  const rnd = seeded(51204);

  const points = Array.from({ length: 168 }, () => {
    const bias = rnd();
    return {
      x: 20 + bias * bias * 420,
      y: 44 + rnd() * (H - 96),
      r: 1.4 + rnd() * 1.9,
    };
  });

  const clusters = [
    { x: 700, y: 96, r: 9, label: "COMPREHENSION DIP" },
    { x: 790, y: 210, r: 12, label: "ENGAGEMENT SHIFT" },
    { x: 676, y: 316, r: 8, label: "RECOVERY PATTERN" },
  ];

  const links: string[] = [];
  points.forEach((p, i) => {
    if (i % 3 !== 0) return;
    const c = clusters[i % clusters.length];
    const mx = (p.x + c.x) / 2 + 40;
    links.push(
      `M${p.x.toFixed(1)} ${p.y.toFixed(1)} C ${mx.toFixed(1)} ${p.y.toFixed(1)}, ${(mx - 70).toFixed(1)} ${c.y.toFixed(1)}, ${c.x} ${c.y}`,
    );
  });

  return { points, clusters, links };
}
