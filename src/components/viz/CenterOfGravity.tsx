"use client";

import { DrawSvg } from "@/components/motion";

/**
 * Center of gravity.
 *
 * The whole repositioning in one comparison. Left: the LMS at the center,
 * every other system attached to its edges and not to each other, AI bolted
 * on last. Right: intelligence at the center, the institution's experiences
 * connected to it and to one another — and the LMS still present, connected,
 * outside the ring. It is shown as optional, never as removed.
 */

const W = 480;
const H = 400;
const CX = 240;
const CY = 200;
const R = 135;

const TODAY = [
  "SIS",
  "ADVISING",
  "ANALYTICS",
  "CRM",
  "ASSESSMENT",
  "COMMS",
  "DASHBOARDS",
  "AI TOOLS",
];

const ARTIFACT = [
  "STUDENTS",
  "FACULTY",
  "ADVISING",
  "CURRICULUM",
  "ADMINISTRATION",
  "KNOWLEDGE",
  "PRIVATE AI",
  "PATHWAYS",
];

function point(i: number, radius = R) {
  const angle = ((i * 45 - 90) * Math.PI) / 180;
  return {
    x: CX + Math.cos(angle) * radius,
    y: CY + Math.sin(angle) * radius,
    cos: Math.cos(angle),
    sin: Math.sin(angle),
  };
}

function Label({ i, text, fill }: { i: number; text: string; fill: string }) {
  const p = point(i, R + 17);
  const anchor = p.cos > 0.3 ? "start" : p.cos < -0.3 ? "end" : "middle";
  const dy = p.sin > 0.3 ? 12 : p.sin < -0.3 ? -3 : 4;
  return (
    <text
      className="font-mono"
      data-label
      fill={fill}
      fontSize="12"
      letterSpacing="0.06em"
      textAnchor={anchor}
      x={p.x}
      y={p.y + dy}
    >
      {text}
    </text>
  );
}

function Today() {
  return (
    <svg
      aria-label="Today: the LMS at the center, with student information, advising, analytics, CRM, assessment, communications and dashboards each attached to it separately, and AI tools bolted on"
      className="w-full"
      role="img"
      viewBox={`0 0 ${W} ${H}`}
    >
      {TODAY.map((label, i) => {
        const p = point(i);
        const inner = point(i, 46);
        const bolted = label === "AI TOOLS";
        return (
          <line
            data-draw
            key={`l-${label}`}
            stroke="#b3bbcd"
            strokeDasharray={bolted ? "4 5" : undefined}
            strokeWidth="1.3"
            x1={inner.x}
            x2={p.x}
            y1={inner.y}
            y2={p.y}
          />
        );
      })}
      <circle cx={CX} cy={CY} data-node fill="#e8ecf4" r="44" stroke="#8a94ac" strokeWidth="1.3" />
      <text
        data-label
        fill="#1b2338"
        fontSize="17"
        fontWeight="700"
        letterSpacing="0.04em"
        textAnchor="middle"
        x={CX}
        y={CY + 6}
      >
        LMS
      </text>
      {TODAY.map((label, i) => {
        const p = point(i);
        const bolted = label === "AI TOOLS";
        return (
          <circle
            cx={p.x}
            cy={p.y}
            data-node
            fill={bolted ? "#ffffff" : "#8a94ac"}
            key={`n-${label}`}
            r="6"
            stroke="#8a94ac"
            strokeWidth={bolted ? 1.5 : 0}
          />
        );
      })}
      {TODAY.map((label, i) => (
        <Label fill="#5b6580" i={i} key={`t-${label}`} text={label} />
      ))}
    </svg>
  );
}

function WithArtifact() {
  const lms = { x: CX + Math.cos(Math.PI / 3) * 180, y: CY + Math.sin(Math.PI / 3) * 180 };
  const ring = ARTIFACT.map((_, i) => point(i));

  return (
    <svg
      aria-label="With Artifact: learning intelligence at the center, connected to students, faculty, advising, curriculum, administration, institutional knowledge, private AI and pathways, which are also connected to each other; the LMS remains connected outside the ring"
      className="w-full"
      role="img"
      viewBox={`0 0 ${W} ${H}`}
    >
      {/* The ring: experiences connected to one another, not only to the core. */}
      <path
        d={`M${ring.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L")} Z`}
        data-draw
        fill="none"
        stroke="#456df4"
        strokeOpacity="0.28"
        strokeWidth="1.2"
      />
      {ARTIFACT.map((label, i) => {
        const p = point(i);
        const inner = point(i, 54);
        return (
          <line
            data-draw
            key={`l-${label}`}
            stroke="#456df4"
            strokeOpacity="0.5"
            strokeWidth="1.3"
            x1={inner.x}
            x2={p.x}
            y1={inner.y}
            y2={p.y}
          />
        );
      })}
      {/* The LMS: still connected, outside the ring. */}
      <line
        data-draw
        stroke="#8a94ac"
        strokeDasharray="4 5"
        strokeWidth="1.2"
        x1={lms.x - 8}
        x2={CX + Math.cos(Math.PI / 3) * 56}
        y1={lms.y - 14}
        y2={CY + Math.sin(Math.PI / 3) * 56}
      />
      <circle cx={CX} cy={CY} data-node fill="#456df4" opacity="0.12" r="72" />
      <circle cx={CX} cy={CY} data-node fill="#456df4" r="52" />
      <text
        className="font-mono"
        data-label
        fill="#ffffff"
        fontSize="10"
        letterSpacing="0.12em"
        textAnchor="middle"
        x={CX}
        y={CY - 3}
      >
        LEARNING
      </text>
      <text
        className="font-mono"
        data-label
        fill="#ffffff"
        fontSize="10"
        letterSpacing="0.12em"
        textAnchor="middle"
        x={CX}
        y={CY + 11}
      >
        INTELLIGENCE
      </text>
      {ring.map((p, i) => (
        <circle cx={p.x} cy={p.y} data-node fill="#456df4" key={`n-${ARTIFACT[i]}`} r="7" />
      ))}
      <circle
        cx={lms.x}
        cy={lms.y}
        data-node
        fill="#ffffff"
        r="15"
        stroke="#8a94ac"
        strokeDasharray="3 3"
        strokeWidth="1.3"
      />
      <text
        data-label
        fill="#5b6580"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.04em"
        x={lms.x + 22}
        y={lms.y + 4}
      >
        LMS
      </text>
      {ARTIFACT.map((label, i) => (
        <Label fill="#24377f" i={i} key={`t-${label}`} text={label} />
      ))}
    </svg>
  );
}

export function CenterOfGravity() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:gap-10">
      <figure>
        <DrawSvg duration={0.9} stagger={0.03}>
          <Today />
        </DrawSvg>
        <figcaption className="mt-5 border-t border-ink-900/10 pt-5">
          <span className="block text-[0.9375rem] font-bold tracking-tight text-slate-ai-600">
            Today
          </span>
          <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-slate-ai-600">
            The LMS at the center. Every other system attached to its edges —
            and now AI, attached on top.
          </span>
        </figcaption>
      </figure>
      <figure>
        <DrawSvg duration={0.9} stagger={0.03}>
          <WithArtifact />
        </DrawSvg>
        <figcaption className="mt-5 border-t border-signal-500/40 pt-5">
          <span className="block text-[0.9375rem] font-bold tracking-tight text-ink-900">
            With Artifact
          </span>
          <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-slate-ai-700">
            Intelligence at the center. The LMS stays connected for as long as
            it serves the institution.
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
