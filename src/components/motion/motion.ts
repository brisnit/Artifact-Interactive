"use client";

import { gsap } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

export { gsap };
export type { ScrollTriggerType };

/**
 * ScrollTrigger is loaded on demand rather than bundled into the critical
 * path. GSAP core (~28 KB gz) is needed immediately for the hero and page-hero
 * entrances; ScrollTrigger (~18 KB gz) is only needed once something below the
 * fold has to react to scroll, so it is fetched right after hydration in its
 * own chunk.
 *
 * Every scroll-driven primitive awaits this promise. It resolves once, is
 * shared by all callers, and registers the plugin exactly once.
 */
let pending: Promise<typeof ScrollTriggerType | null> | null = null;

export function loadScrollTrigger() {
  if (!pending) {
    pending = import("gsap/ScrollTrigger")
      .then((mod) => {
        gsap.registerPlugin(mod.ScrollTrigger);
        return mod.ScrollTrigger;
      })
      .catch(() => {
        // If the chunk cannot be fetched, stop hiding scroll-revealed content
        // rather than leaving the page half-empty.
        document.documentElement.classList.add("motion-fallback");
        return null;
      });
  }
  return pending;
}

/** True when the visitor has asked for less motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The Artifact motion vocabulary. Every animation on the site draws from this
 * so nothing feels improvised.
 */
export const EASE = {
  /** Default: decisive out-curve for reveals. */
  out: "power3.out",
  /** Type reveals — slightly sharper so words land rather than drift. */
  type: "power4.out",
  /** Elements arriving with presence (inline capsules, nodes). */
  arrive: "back.out(1.4)",
  /** Hover release — a single soft settle, never a bounce. */
  settle: "power2.out",
  /** Continuous ambient drift. */
  drift: "sine.inOut",
} as const;

export const DUR = {
  type: 1.05,
  reveal: 0.9,
  arrive: 0.95,
  hover: 0.42,
} as const;

/** Standard stagger amounts, so rhythm is consistent between sections. */
export const STAGGER = {
  word: 0.075,
  line: 0.12,
  card: 0.11,
  node: 0.045,
} as const;

/**
 * Splits a string into words wrapped for masked reveal. Returns plain data so
 * the markup can be rendered on the server — no layout-shifting client split.
 */
export function toWords(text: string) {
  return text.split(/(\s+)/).filter((chunk) => chunk.length > 0);
}

/**
 * Shared helper for primitives that animate on scroll: waits for the plugin,
 * bails if the component unmounted first, and hands back a revert function.
 */
export function withScrollTrigger(
  build: () => gsap.Context | undefined,
): () => void {
  let ctx: gsap.Context | undefined;
  let cancelled = false;

  loadScrollTrigger().then((st) => {
    if (cancelled || !st) return;
    ctx = build();
  });

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}
