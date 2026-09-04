import { DrawSvg } from "@/components/motion";

/**
 * Small abstract glyphs, one per persona, so each card carries a distinct
 * visual idea rather than a generic icon.
 */
export function PersonaGlyph({
  kind,
}: {
  kind: "student" | "professor" | "administrator" | "family";
}) {
  return (
    <DrawSvg duration={1.2} start="top 92%">
      <Glyph kind={kind} />
    </DrawSvg>
  );
}

function Glyph({
  kind,
}: {
  kind: "student" | "professor" | "administrator" | "family";
}) {
  const common = { className: "w-full", viewBox: "0 0 320 116", role: "img" } as const;

  if (kind === "student") {
    // A single learner's trajectory over a term.
    return (
      <svg {...common} aria-label="One learner's trajectory across a term">
        <path
          data-draw
          d="M8 92 C 52 92, 62 44, 104 56 C 142 67, 148 96, 190 78 C 232 60, 240 26, 300 18"
          fill="none"
          stroke="#456df4"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        {[
          [8, 92],
          [104, 56],
          [190, 78],
          [300, 18],
        ].map(([cx, cy], i) => (
          <circle
            data-node
            cx={cx}
            cy={cy}
            fill={i === 3 ? "#456df4" : "#9db3ff"}
            key={i}
            r={i === 3 ? 5 : 3.2}
          />
        ))}
      </svg>
    );
  }

  if (kind === "professor") {
    // A cohort's comprehension distribution across a lecture.
    return (
      <svg {...common} aria-label="Comprehension across a cohort during one session">
        {Array.from({ length: 22 }, (_, i) => {
          const h = [30, 44, 58, 70, 78, 62, 40, 26, 20, 28, 46, 64, 76, 84, 88, 80, 66, 54, 62, 74, 82, 90][i];
          const dip = i >= 6 && i <= 9;
          return (
            <rect
              data-node
              fill={dip ? "#0a0e1c" : "#456df4"}
              height={h}
              key={i}
              opacity={dip ? 0.85 : 0.55}
              rx="1.5"
              width="8"
              x={8 + i * 14}
              y={100 - h}
            />
          );
        })}
      </svg>
    );
  }

  if (kind === "administrator") {
    // Programs as bands, with one diverging.
    return (
      <svg {...common} aria-label="Program-level patterns across an institution">
        {[
          { d: "M8 26 C 90 26, 150 30, 310 24", o: 0.3 },
          { d: "M8 46 C 90 46, 150 52, 310 44", o: 0.3 },
          { d: "M8 66 C 90 66, 160 96, 310 100", o: 1 },
          { d: "M8 86 C 90 86, 150 82, 310 78", o: 0.3 },
        ].map((line, i) => (
          <path
            data-draw
            d={line.d}
            fill="none"
            key={i}
            stroke={line.o === 1 ? "#456df4" : "#8a94ac"}
            strokeLinecap="round"
            strokeOpacity={line.o}
            strokeWidth={line.o === 1 ? 2.4 : 1.4}
          />
        ))}
        <circle
          data-node
          cx="310"
          cy="100"
          fill="#456df4"
          r="4.5"
        />
      </svg>
    );
  }

  // Family: progress shown as a shape, not a single number.
  return (
    <svg {...common} aria-label="Progress represented as a shape rather than a single score">
      {[
        { x: 46, r: 26, o: 0.16 },
        { x: 46, r: 17, o: 0.3 },
        { x: 46, r: 9, o: 1 },
      ].map((c, i) => (
        <circle
          data-node
          cx={c.x}
          cy="58"
          fill="#456df4"
          key={i}
          opacity={c.o}
          r={c.r}
        />
      ))}
      {[
        { y: 34, w: 150 },
        { y: 54, w: 210 },
        { y: 74, w: 120 },
      ].map((bar, i) => (
        <g key={i}>
          <rect
            fill="#8a94ac"
            height="5"
            opacity="0.18"
            rx="2.5"
            width="216"
            x="96"
            y={bar.y}
          />
          <rect
            data-node
            fill="#456df4"
            height="5"
            opacity={i === 1 ? 1 : 0.5}
            rx="2.5"
            width={bar.w}
            x="96"
            y={bar.y}
          />
        </g>
      ))}
    </svg>
  );
}
