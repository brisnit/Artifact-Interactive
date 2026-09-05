"use client";

import { DrawSvg } from "@/components/motion";
import { cn } from "@/lib/cn";

/**
 * ARTIFACTS → SIGNALS → INTELLIGENCE → ACTION.
 *
 * The investor thesis as a single line: scattered marks accumulate, connect,
 * resolve, and finally point somewhere. Each stage is drawn with the same
 * vocabulary used elsewhere on the site so the argument reads as continuous
 * with the product, not as a separate pitch graphic.
 */
export function ArtifactChain() {
  const stages = [
    { label: "ARTIFACTS", x: 0 },
    { label: "SIGNALS", x: 1 },
    { label: "INTELLIGENCE", x: 2 },
    { label: "ACTION", x: 3 },
  ];

  return (
    <DrawSvg duration={1.5} scrub start="top 80%" end="bottom 55%">
      <svg
        aria-label="Four stages: scattered artefacts accumulate into signals, connect into intelligence, and resolve into action"
        className="w-full"
        role="img"
        viewBox="0 0 1000 260"
      >
        <defs>
          <linearGradient id="ac-line" gradientUnits="userSpaceOnUse" x1="60" x2="940" y1="0" y2="0">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#456df4" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Spine */}
        <line
          data-draw
          stroke="url(#ac-line)"
          strokeWidth="1.2"
          x1="60"
          x2="940"
          y1="130"
          y2="130"
        />

        {/* 01 Artifacts — scattered, unconnected */}
        <g data-node>
          {[
            [72, 96], [96, 118], [64, 142], [110, 152], [88, 168],
            [124, 108], [78, 122], [116, 132],
          ].map(([cx, cy], i) => (
            <circle cx={cx} cy={cy} fill="#8a94ac" key={i} opacity="0.75" r="2.6" />
          ))}
        </g>

        {/* 02 Signals — beginning to align */}
        <g data-node>
          {[[318, 100], [332, 118], [306, 132], [340, 146], [322, 162]].map(
            ([cx, cy], i) => (
              <circle cx={cx} cy={cy} fill="#9db3ff" key={i} r="3.2" />
            ),
          )}
        </g>
        {[[318, 100, 332, 118], [332, 118, 306, 132], [306, 132, 340, 146], [340, 146, 322, 162]].map(
          ([x1, y1, x2, y2], i) => (
            <line
              data-draw
              key={`s-${i}`}
              stroke="#9db3ff"
              strokeOpacity="0.45"
              strokeWidth="1"
              x1={x1}
              x2={x2}
              y1={y1}
              y2={y2}
            />
          ),
        )}

        {/* 03 Intelligence — a connected mesh */}
        <g>
          {[
            [560, 96, 600, 118], [600, 118, 566, 140], [566, 140, 612, 156],
            [612, 156, 640, 122], [640, 122, 600, 118], [560, 96, 640, 122],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              data-draw
              key={`i-${i}`}
              stroke="#456df4"
              strokeOpacity="0.5"
              strokeWidth="1.1"
              x1={x1}
              x2={x2}
              y1={y1}
              y2={y2}
            />
          ))}
          <g data-node>
            {[[560, 96], [600, 118], [566, 140], [612, 156], [640, 122]].map(
              ([cx, cy], i) => (
                <circle cx={cx} cy={cy} fill="#c3d1ff" key={i} r={i === 1 ? 5 : 3.6} />
              ),
            )}
          </g>
        </g>

        {/* 04 Action — resolves to a single direction */}
        <path
          d="M840 130 C 872 130, 884 130, 916 130"
          data-draw
          fill="none"
          stroke="#456df4"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <g data-node>
          <circle cx="836" cy="130" fill="#456df4" opacity="0.14" r="22" />
          <circle cx="836" cy="130" fill="#456df4" r="7" />
          <path
            d="M912 122l10 8-10 8"
            fill="none"
            stroke="#456df4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>

        {/* Stage labels */}
        {stages.map((s, i) => (
          <text
            className="font-mono"
            data-label
            fill="#8a94ac"
            fontSize="10.5"
            key={s.label}
            letterSpacing="0.2em"
            textAnchor="middle"
            x={95 + i * 247}
            y="226"
          >
            {s.label}
          </text>
        ))}
      </svg>
    </DrawSvg>
  );
}

/**
 * The learning ecosystem, with Artifact operating as the connective layer.
 * Deliberately drawn as a loop rather than a funnel — the argument is that
 * signal moves in every direction, not from student to institution.
 */
export function LearningEcosystem() {
  const nodes = [
    { label: "STUDENT", x: 140, y: 80 },
    { label: "LEARNING EXPERIENCE", x: 500, y: 62 },
    { label: "PROFESSOR", x: 860, y: 80 },
    { label: "INSTITUTION", x: 500, y: 250 },
  ];

  return (
    <DrawSvg duration={1.5} start="top 80%">
      <svg
        aria-label="Student, learning experience, professor and institution connected through an Artifact Intelligence layer at the centre"
        className="w-full"
        role="img"
        viewBox="0 0 1000 320"
      >
        {/* Connections through the centre */}
        {nodes.map((n, i) => (
          <line
            data-draw
            key={`c-${i}`}
            stroke="#456df4"
            strokeOpacity="0.35"
            strokeWidth="1.1"
            x1={n.x}
            x2="500"
            y1={n.y}
            y2="160"
          />
        ))}

        {/* The intelligence layer */}
        <g data-node>
          <ellipse cx="500" cy="160" fill="#456df4" opacity="0.1" rx="150" ry="42" />
          <rect
            fill="#0a0e1c"
            height="42"
            rx="5"
            stroke="#456df4"
            strokeOpacity="0.5"
            width="252"
            x="374"
            y="139"
          />
          <text
            className="font-mono"
            fill="#c3d1ff"
            fontSize="10.5"
            letterSpacing="0.18em"
            textAnchor="middle"
            x="500"
            y="165"
          >
            ARTIFACT INTELLIGENCE
          </text>
        </g>

        {/* Participants */}
        {nodes.map((n) => (
          <g data-node key={n.label}>
            <circle cx={n.x} cy={n.y} fill="#456df4" opacity="0.12" r="19" />
            <circle cx={n.x} cy={n.y} fill="#c3d1ff" r="6" />
            <text
              className="font-mono"
              fill="#8a94ac"
              fontSize="10"
              letterSpacing="0.16em"
              textAnchor="middle"
              x={n.x}
              y={n.y < 160 ? n.y - 30 : n.y + 38}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </DrawSvg>
  );
}

/**
 * Learning → Workforce → Organizations → Experiences.
 * Nested arcs widening from one entry point: the same thesis, progressively
 * larger environments.
 */
export function PlatformExpansion({ className }: { className?: string }) {
  const rings = [
    { r: 96, label: "LEARNING", opacity: 1 },
    { r: 158, label: "WORKFORCE", opacity: 0.66 },
    { r: 220, label: "ORGANIZATIONS", opacity: 0.44 },
    { r: 282, label: "EXPERIENCES", opacity: 0.26 },
  ];

  return (
    <DrawSvg className={cn(className)} duration={1.6} scrub start="top 82%" end="bottom 60%">
      <svg
        aria-label="Four widening rings from a single centre, labelled learning, workforce, organizations and experiences"
        className="w-full"
        role="img"
        viewBox="0 0 680 380"
      >
        {rings.map((ring, i) => {
          // Labels step up a diagonal rather than sharing the horizontal axis,
          // which had them printing on top of one another.
          const labelY = 196 - i * 40;
          return (
            <g key={ring.label}>
              <circle
                cx="60"
                cy="190"
                data-draw
                fill="none"
                r={ring.r}
                stroke="#456df4"
                strokeOpacity={ring.opacity * 0.7}
                strokeWidth={ring.opacity * 2 + 0.6}
              />
              <line
                data-label
                stroke="#456df4"
                strokeOpacity={ring.opacity * 0.5}
                strokeWidth="1"
                x1={60 + Math.sqrt(Math.max(ring.r ** 2 - (190 - labelY) ** 2, 0))}
                x2={60 + ring.r + 16}
                y1={labelY}
                y2={labelY}
              />
              <text
                className="font-mono"
                data-label
                fill="#c3d1ff"
                fillOpacity={Math.max(ring.opacity, 0.55)}
                fontSize="10.5"
                letterSpacing="0.18em"
                x={60 + ring.r + 24}
                y={labelY + 3.5}
              >
                {ring.label}
              </text>
            </g>
          );
        })}
        <g data-node>
          <circle cx="60" cy="190" fill="#456df4" opacity="0.16" r="26" />
          <circle cx="60" cy="190" fill="#456df4" r="9" />
          <circle cx="60" cy="190" fill="#ffffff" r="3.4" />
        </g>
      </svg>
    </DrawSvg>
  );
}
