"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { PersonaGlyph } from "@/components/viz/PersonaGlyph";
import { gsap, prefersReducedMotion } from "@/components/motion";

type Persona = {
  id: string;
  index: string;
  name: string;
  kind: "student" | "professor" | "administrator" | "family";
  statement: string;
  body: string;
  points: string[];
};

const PERSONAS: Persona[] = [
  {
    id: "students",
    index: "01",
    name: "Students",
    kind: "student",
    statement: "Understand your own learning, not just your grade.",
    body: "See your patterns, momentum, strengths, and the places where understanding tends to slip — early enough to do something about it.",
    points: [
      "Where comprehension is forming, and where it stalls",
      "How effort and outcome relate across a term",
      "Possible paths forward, framed as options rather than verdicts",
    ],
  },
  {
    id: "professors",
    index: "02",
    name: "Professors",
    kind: "professor",
    statement: "See what your room is telling you.",
    body: "Understand where understanding is forming, where friction is appearing, and how specific teaching decisions influence what happens next.",
    points: [
      "Concept-level comprehension across a cohort",
      "Friction located in the session where it occurred",
      "Which adjustments measurably changed the curve",
    ],
  },
  {
    id: "administrators",
    index: "03",
    name: "Administrators",
    kind: "administrator",
    statement: "Understand the institution as a system.",
    body: "See systemic patterns across programs, populations, curriculum, engagement, and outcomes — with the conditions that surround them.",
    points: [
      "Program and curriculum effectiveness over time",
      "Conditions preceding both success and risk",
      "Where institutional knowledge concentrates, and where it leaks",
    ],
  },
  {
    id: "families",
    index: "04",
    name: "Families",
    kind: "family",
    statement: "Meaningful visibility, where it is appropriate.",
    body: "Where an institution chooses to extend it, a picture of progress and support that does not reduce a learner to a grade.",
    points: [
      "Progress described as direction, not a single number",
      "Where support would genuinely help",
      "Governed by institutional policy and learner consent",
    ],
  },
];

/**
 * Personas as an editorial index rather than a card grid. Each row is a
 * typographic entry; selecting one swaps the panel beside it. The whole
 * section reads as a contents page for four different kinds of intelligence.
 */
export function PersonaSequence() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const persona = PERSONAS[active];

  useLayoutEffect(() => {
    const node = panelRef.current;
    if (!node || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        node.querySelectorAll("[data-panel-item]"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.06 },
      );
    }, node);
    return () => ctx.revert();
  }, [active]);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
      {/* The index */}
      <ul className="border-t border-ink-900/[0.09]">
        {PERSONAS.map((item, i) => {
          const isActive = i === active;
          return (
            <li className="border-b border-ink-900/[0.09]" key={item.id}>
              <button
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "row-hover group flex w-full items-center gap-5 py-7 text-left lg:gap-7 lg:py-8 xl:gap-10 xl:py-9",
                  isActive ? "pl-4 lg:pl-6" : "pl-0 hover:pl-3 lg:hover:pl-4",
                )}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                type="button"
              >
                <span
                  className={cn(
                    "index-numeral font-mono text-[0.6875rem] transition-colors duration-500",
                    isActive ? "text-signal-600" : "text-slate-ai-500",
                  )}
                >
                  {item.index}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block text-[1.75rem] font-bold leading-none tracking-[-0.035em] transition-colors duration-500 lg:text-[2rem] xl:text-[2.5rem]",
                      isActive ? "text-ink-900" : "text-slate-ai-400",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "mt-2.5 block max-w-[38ch] text-[0.875rem] leading-snug transition-colors duration-500 xl:mt-3 xl:text-[0.9375rem]",
                      isActive ? "text-slate-ai-700" : "text-slate-ai-500",
                    )}
                  >
                    {item.statement}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "hidden h-px w-10 shrink-0 transition-all duration-500 sm:block",
                    isActive ? "w-16 bg-signal-500" : "bg-ink-900/15",
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* The panel */}
      <div className="lg:sticky lg:top-32 lg:self-start" ref={panelRef}>
        <div className="overflow-hidden rounded-xl border border-ink-900/10 bg-white">
          <div className="border-b border-ink-900/[0.07] bg-slate-ai-50 px-7 pt-8 lg:px-9 lg:pt-9">
            <p
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-signal-600"
              data-panel-item
            >
              {persona.name}
            </p>
            <div className="mt-8 -mb-px" data-panel-item>
              <PersonaGlyph key={persona.id} kind={persona.kind} />
            </div>
          </div>
          <div className="p-7 lg:p-9">
            <p
              className="text-[1.0625rem] leading-relaxed text-slate-ai-700"
              data-panel-item
            >
              {persona.body}
            </p>
            <ul className="mt-7 space-y-3 border-t border-ink-900/[0.07] pt-7">
              {persona.points.map((point) => (
                <li
                  className="flex gap-3.5 text-[0.875rem] leading-relaxed text-ink-700"
                  data-panel-item
                  key={point}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-px w-4 shrink-0 bg-signal-500"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
