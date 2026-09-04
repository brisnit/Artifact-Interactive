"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { seeded } from "@/lib/rand";

const W = 1200;
const H = 860;

type Node = { x: number; y: number; r: number; delay: number };

/**
 * The homepage's conceptual visualization: raw behavioural signals on the left,
 * a connected intelligence lattice in the centre, and possible pathways
 * resolving on the right. Deterministic geometry, CSS-driven motion, and a
 * light pointer parallax — no animation library.
 */
export function HeroSignalField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [live, setLive] = useState(false);

  const { signals, lattice, edges, feeders, paths, endpoints } = useMemo(
    buildScene,
    [],
  );

  useEffect(() => {
    const t = window.setTimeout(() => setLive(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = wrapRef.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;
        setParallax({ x: nx, y: ny });
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hero-field relative h-full w-full select-none"
      data-live={live ? "true" : "false"}
      ref={wrapRef}
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <radialGradient cx="52%" cy="50%" id="hero-core" r="46%">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.34" />
            <stop offset="55%" stopColor="#456df4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#456df4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-path" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#9db3ff" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="hero-feed" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#456df4" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#7590fb" stopOpacity="0.5" />
          </linearGradient>
          <filter id="hero-glow" x="-60%" y="-60%" height="220%" width="220%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Core luminance */}
        <ellipse
          cx={640}
          cy={430}
          fill="url(#hero-core)"
          rx={520}
          ry={400}
          style={{
            transform: `translate(${parallax.x * -14}px, ${parallax.y * -10}px)`,
            transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* ---- Layer 1: raw signals ---- */}
        <g
          style={{
            transform: `translate(${parallax.x * 22}px, ${parallax.y * 16}px)`,
            transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {signals.map((s, i) => (
            <circle
              className="hero-signal"
              cx={s.x}
              cy={s.y}
              fill="#7590fb"
              key={`s-${i}`}
              r={s.r}
              style={{
                animationDelay: `${s.delay}ms`,
                transitionDelay: `${s.delay}ms`,
              }}
            />
          ))}
        </g>

        {/* ---- Feeder lines: signals entering the lattice ---- */}
        <g
          fill="none"
          stroke="url(#hero-feed)"
          strokeWidth="0.9"
          style={{
            transform: `translate(${parallax.x * 12}px, ${parallax.y * 9}px)`,
            transition: "transform 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {feeders.map((d, i) => (
            <path
              className="hero-draw"
              d={d}
              key={`f-${i}`}
              style={{ transitionDelay: `${300 + i * 45}ms` }}
            />
          ))}
        </g>

        {/* ---- Layer 2: intelligence lattice ---- */}
        <g
          style={{
            transform: `translate(${parallax.x * -8}px, ${parallax.y * -6}px)`,
            transition: "transform 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <g fill="none" stroke="#9db3ff" strokeOpacity="0.28" strokeWidth="0.9">
            {edges.map((e, i) => (
              <line
                className="hero-edge"
                key={`e-${i}`}
                style={{ transitionDelay: `${700 + i * 26}ms` }}
                x1={lattice[e[0]].x}
                x2={lattice[e[1]].x}
                y1={lattice[e[0]].y}
                y2={lattice[e[1]].y}
              />
            ))}
          </g>
          {lattice.map((n, i) => (
            <g key={`n-${i}`}>
              <circle
                className="hero-node-halo"
                cx={n.x}
                cy={n.y}
                fill="#456df4"
                opacity="0.14"
                r={n.r * 3.4}
                style={{ animationDelay: `${n.delay}ms` }}
              />
              <circle
                className="hero-node"
                cx={n.x}
                cy={n.y}
                fill="#c3d1ff"
                r={n.r}
                style={{ transitionDelay: `${760 + i * 34}ms` }}
              />
            </g>
          ))}
        </g>

        {/* ---- Layer 3: possible pathways ---- */}
        <g
          fill="none"
          style={{
            transform: `translate(${parallax.x * -20}px, ${parallax.y * -14}px)`,
            transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {paths.map((p, i) => (
            <g key={`p-${i}`}>
              <path
                className="hero-draw"
                d={p.d}
                stroke="url(#hero-path)"
                strokeLinecap="round"
                strokeWidth={p.weight}
                style={{ transitionDelay: `${1150 + i * 170}ms` }}
              />
              <circle
                className="hero-tracer"
                fill="#ffffff"
                r={2.4}
                style={{
                  offsetPath: `path("${p.d}")`,
                  animationDelay: `${1900 + i * 900}ms`,
                  animationDuration: `${5200 + i * 700}ms`,
                }}
              />
            </g>
          ))}
          {endpoints.map((p, i) => (
            <g key={`ep-${i}`}>
              <circle
                className="hero-node"
                cx={p.x}
                cy={p.y}
                fill="#456df4"
                filter="url(#hero-glow)"
                r={p.r}
                style={{ transitionDelay: `${1900 + i * 170}ms` }}
              />
              <circle
                className="hero-node"
                cx={p.x}
                cy={p.y}
                fill="#ffffff"
                r={p.r * 0.4}
                style={{ transitionDelay: `${1980 + i * 170}ms` }}
              />
            </g>
          ))}
        </g>
      </svg>

    </div>
  );
}

function buildScene() {
  const rnd = seeded(20190418);

  // Raw signals — dense on the left, thinning toward the lattice.
  const signals: Node[] = [];
  for (let i = 0; i < 58; i += 1) {
    const bias = rnd();
    const x = 30 + bias * bias * 430;
    const y = 50 + rnd() * (H - 100);
    signals.push({
      x,
      y,
      r: 1 + rnd() * 2.2,
      delay: Math.round(rnd() * 1400),
    });
  }

  // Intelligence lattice — an irregular but balanced mesh.
  const lattice: Node[] = [];
  const cols = [430, 520, 610, 700, 780];
  cols.forEach((cx, ci) => {
    const count = [5, 6, 5, 4, 3][ci];
    for (let i = 0; i < count; i += 1) {
      const span = 620 - ci * 60;
      const y = H / 2 - span / 2 + (span / (count - 1)) * i + (rnd() - 0.5) * 42;
      lattice.push({
        x: cx + (rnd() - 0.5) * 26,
        y,
        r: 2.4 + rnd() * 2.6,
        delay: Math.round(rnd() * 4000),
      });
    }
  });

  // Edges: connect each node forward to one or two nodes in the next column.
  const edges: [number, number][] = [];
  const offsets = [0, 5, 11, 16, 20, 23];
  for (let c = 0; c < cols.length - 1; c += 1) {
    const aStart = offsets[c];
    const aEnd = offsets[c + 1];
    const bStart = offsets[c + 1];
    const bEnd = offsets[c + 2];
    for (let a = aStart; a < aEnd; a += 1) {
      const links = 1 + Math.round(rnd());
      for (let l = 0; l < links; l += 1) {
        const b = bStart + Math.floor(rnd() * (bEnd - bStart));
        edges.push([a, b]);
      }
    }
  }

  // Feeder curves: a subset of signals flowing into the first lattice column.
  const feeders: string[] = [];
  for (let i = 0; i < 14; i += 1) {
    const s = signals[Math.floor(rnd() * 34)];
    const t = lattice[Math.floor(rnd() * 5)];
    const mx = (s.x + t.x) / 2;
    feeders.push(
      `M${s.x.toFixed(1)} ${s.y.toFixed(1)} C ${mx.toFixed(1)} ${s.y.toFixed(1)}, ${mx.toFixed(1)} ${t.y.toFixed(1)}, ${t.x.toFixed(1)} ${t.y.toFixed(1)}`,
    );
  }

  // Possible pathways resolving out of the lattice.
  const origin = { x: 790, y: 430 };
  const targets = [
    { y: 150, weight: 1.4 },
    { y: 290, weight: 2.4 },
    { y: 430, weight: 3.4 },
    { y: 570, weight: 2 },
    { y: 710, weight: 1.2 },
  ];
  const paths = targets.map((t) => ({
    d: `M${origin.x} ${origin.y} C 900 ${origin.y}, 960 ${t.y}, 1130 ${t.y}`,
    weight: t.weight,
  }));
  const endpoints = targets.map((t) => ({
    x: 1130,
    y: t.y,
    r: 3 + t.weight * 1.3,
  }));

  return { signals, lattice, edges, feeders, paths, endpoints };
}
