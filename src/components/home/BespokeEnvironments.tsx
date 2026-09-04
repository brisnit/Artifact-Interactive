"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import {
  DrawSvg,
  gsap,
  prefersReducedMotion,
  withScrollTrigger,
} from "@/components/motion";

const ENVIRONMENTS = [
  {
    index: "01",
    name: "Universities",
    href: "/solutions/higher-education",
    body: "Students, faculty, programs, curriculum, engagement, retention, and outcomes — understood as one environment.",
  },
  {
    index: "02",
    name: "High Schools",
    href: "/solutions/high-schools",
    body: "Earlier visibility into engagement, comprehension, learning behavior, and the pathways students are actually on.",
  },
  {
    index: "03",
    name: "Businesses",
    href: "/solutions/business",
    body: "Workforce learning, institutional knowledge, skills development, training effectiveness, and organizational capability.",
  },
];

/**
 * Three distinct environments drawn back to a single architecture. The
 * diagram is the argument: the same intelligence layer, shaped three
 * different ways.
 */
export function BespokeEnvironments() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const rows = root.querySelectorAll("[data-env-row]");
    gsap.set(rows, { opacity: 0, y: 34 });

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(rows, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: { trigger: root, start: "top 78%", once: true },
        });
      }, root),
    );
  }, []);

  return (
    <div ref={rootRef}>
      <DrawSvg className="mx-auto max-w-4xl" start="top 76%">
        <svg
          aria-label="Three institution types converging on one shared intelligence architecture"
          className="w-full"
          role="img"
          viewBox="0 0 840 190"
        >
          <defs>
            {/* userSpaceOnUse: the centre path is perfectly vertical, and an
                objectBoundingBox gradient on a zero-width box does not paint. */}
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="env-line"
              x1="0"
              x2="0"
              y1="38"
              y2="152"
            >
              <stop offset="0%" stopColor="#456df4" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#456df4" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {[140, 420, 700].map((x) => (
            <path
              d={`M${x} 44 C ${x} 104, 420 104, 420 150`}
              data-draw
              fill="none"
              key={x}
              stroke="url(#env-line)"
              strokeLinecap="round"
              strokeWidth="1.6"
            />
          ))}

          {[140, 420, 700].map((x) => (
            <g key={`n-${x}`}>
              <circle cx={x} cy="38" data-node fill="#456df4" opacity="0.12" r="19" />
              <circle cx={x} cy="38" data-node fill="#ffffff" r="6" />
            </g>
          ))}

          <g data-node>
            <rect
              fill="#ffffff"
              height="34"
              rx="4"
              width="188"
              x="326"
              y="150"
            />
            <text
              className="font-mono"
              fill="#0a0e1c"
              fontSize="10"
              letterSpacing="0.16em"
              textAnchor="middle"
              x="420"
              y="171"
            >
              ARTIFACT INTELLIGENCE
            </text>
          </g>
        </svg>
      </DrawSvg>

      <ul className="mt-16 grid gap-px overflow-hidden border-y border-white/10 lg:mt-20 lg:grid-cols-3">
        {ENVIRONMENTS.map((env) => (
          <li data-env-row key={env.name}>
            <Link
              className={cn(
                "group relative flex h-full flex-col p-8 outline outline-white/10 lg:p-10",
                "transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.045]",
              )}
              href={env.href}
            >
              <span className="index-numeral font-mono text-[0.6875rem] text-signal-300">
                {env.index}
              </span>
              <span className="mt-7 block text-[1.75rem] font-bold leading-none tracking-[-0.035em] text-white transition-colors duration-400 group-hover:text-signal-300 lg:text-[2.125rem]">
                {env.name}
              </span>
              <span className="mt-5 block flex-1 text-[0.9375rem] leading-relaxed text-slate-ai-300">
                {env.body}
              </span>
              <span className="mt-9 flex items-center gap-2.5 text-[0.8125rem] font-semibold text-signal-300">
                Explore
                <svg
                  aria-hidden="true"
                  className="transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
                  fill="none"
                  height="10"
                  viewBox="0 0 14 12"
                  width="12"
                >
                  <path
                    d="M1 6h11m0 0L7.5 1.5M12 6l-4.5 4.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-signal-400 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
