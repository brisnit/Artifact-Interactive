"use client";

import { DrawSvg } from "@/components/motion";

/**
 * The boundary. Sensitive knowledge and the model sit inside a perimeter the
 * organization controls; the public cloud sits outside it, unreached. The
 * whole argument of the page is that one arrow does not cross the line.
 */
export function ControlledBoundary() {
  const inside = [
    { label: "LOCAL MODEL", x: 210, y: 118 },
    { label: "KNOWLEDGE BASE", x: 210, y: 214 },
    { label: "INTELLIGENCE LAYER", x: 210, y: 310 },
  ];

  return (
    <DrawSvg duration={1.4} start="top 84%">
      <svg
        aria-label="A controlled perimeter containing the local model, knowledge base and intelligence layer, with a public cloud endpoint outside it and no connection crossing the boundary"
        className="w-full"
        role="img"
        viewBox="0 0 1000 420"
      >
        {/* The perimeter */}
        <rect
          data-draw
          fill="none"
          height="340"
          rx="8"
          stroke="#456df4"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          width="560"
          x="40"
          y="44"
        />
        <text
          className="font-mono"
          data-label
          fill="#9db3ff"
          fontSize="10"
          letterSpacing="0.18em"
          x="40"
          y="32"
        >
          YOUR CONTROLLED ENVIRONMENT
        </text>

        {/* Components inside */}
        {inside.map((n) => (
          <g data-node key={n.label}>
            <rect
              fill="#101629"
              height="56"
              rx="5"
              stroke="#456df4"
              strokeOpacity="0.4"
              width="340"
              x={n.x - 130}
              y={n.y - 28}
            />
            <circle cx={n.x - 108} cy={n.y} fill="#456df4" r="4.5" />
            <text
              className="font-mono"
              fill="#c3d1ff"
              fontSize="10.5"
              letterSpacing="0.16em"
              x={n.x - 92}
              y={n.y + 4}
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Internal links: box bottom (centre y + 28) to the next box top. */}
        {[
          [118, 214],
          [214, 310],
        ].map(([from, to], i) => (
          <line
            data-draw
            key={i}
            stroke="#456df4"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            x1="210"
            x2="210"
            y1={from + 28}
            y2={to - 28}
          />
        ))}

        {/* Outside: the public endpoint, unreached */}
        <g data-node>
          <rect
            fill="none"
            height="56"
            rx="5"
            stroke="#5b6580"
            strokeDasharray="4 5"
            strokeWidth="1.2"
            width="240"
            x="700"
            y="186"
          />
          <text
            className="font-mono"
            fill="#8a94ac"
            fontSize="10.5"
            letterSpacing="0.16em"
            x="720"
            y="218"
          >
            PUBLIC CLOUD AI
          </text>
        </g>

        {/* The connection that is not made */}
        <line
          data-draw
          stroke="#5b6580"
          strokeDasharray="5 6"
          strokeOpacity="0.5"
          strokeWidth="1.2"
          x1="600"
          x2="700"
          y1="214"
          y2="214"
        />
        <g data-label>
          <line
            stroke="#8a94ac"
            strokeLinecap="round"
            strokeWidth="1.6"
            x1="640"
            x2="660"
            y1="204"
            y2="224"
          />
          <line
            stroke="#8a94ac"
            strokeLinecap="round"
            strokeWidth="1.6"
            x1="660"
            x2="640"
            y1="204"
            y2="224"
          />
        </g>
        <text
          className="font-mono"
          data-label
          fill="#8a94ac"
          fontSize="9.5"
          letterSpacing="0.14em"
          textAnchor="middle"
          x="650"
          y="252"
        >
          NOT REQUIRED
        </text>

        <text
          className="font-mono"
          data-label
          fill="#5b6580"
          fontSize="9.5"
          letterSpacing="0.16em"
          x="40"
          y="408"
        >
          THE MODEL COMES TO THE KNOWLEDGE — NOT THE OTHER WAY AROUND
        </text>
      </svg>
    </DrawSvg>
  );
}

/**
 * The portable environment: an encrypted drive carrying the whole stack,
 * connected, authenticated, used, disconnected.
 */
export function PortableEnvironment() {
  const steps = ["CONNECT", "AUTHENTICATE", "ACCESS", "DISCONNECT"];

  return (
    <DrawSvg duration={1.3} start="top 84%">
      <svg
        aria-label="An encrypted drive carrying model, knowledge base and software, moving through connect, authenticate, access and disconnect"
        className="w-full"
        role="img"
        viewBox="0 0 1000 260"
      >
        {/* The drive */}
        <g data-node>
          <rect
            fill="#101629"
            height="96"
            rx="6"
            stroke="#456df4"
            strokeOpacity="0.5"
            strokeWidth="1.4"
            width="150"
            x="30"
            y="70"
          />
          {["MODEL", "KNOWLEDGE", "SOFTWARE"].map((l, i) => (
            <g key={l}>
              <circle cx="50" cy={94 + i * 24} fill="#456df4" r="3" />
              <text
                className="font-mono"
                fill="#c3d1ff"
                fontSize="9"
                letterSpacing="0.14em"
                x="62"
                y={97 + i * 24}
              >
                {l}
              </text>
            </g>
          ))}
          <text
            className="font-mono"
            fill="#9db3ff"
            fontSize="9.5"
            letterSpacing="0.16em"
            x="30"
            y="58"
          >
            ENCRYPTED DRIVE
          </text>
        </g>

        {/* Sequence */}
        {steps.map((s, i) => {
          const x = 300 + i * 200;
          return (
            <g key={s}>
              <line
                data-draw
                stroke="#456df4"
                strokeOpacity={0.5 - i * 0.08}
                strokeWidth="1.2"
                x1={i === 0 ? 180 : x - 168}
                x2={x - 34}
                y1="118"
                y2="118"
              />
              <g data-node>
                <circle cx={x} cy="118" fill="#456df4" opacity="0.14" r="26" />
                <circle
                  cx={x}
                  cy="118"
                  fill={i === 3 ? "#0a0e1c" : "#456df4"}
                  r="8"
                  stroke={i === 3 ? "#456df4" : "none"}
                  strokeWidth="1.5"
                />
              </g>
              <text
                className="font-mono"
                data-label
                fill="#8a94ac"
                fontSize="10"
                letterSpacing="0.16em"
                textAnchor="middle"
                x={x}
                y="172"
              >
                {s}
              </text>
            </g>
          );
        })}
      </svg>
    </DrawSvg>
  );
}
