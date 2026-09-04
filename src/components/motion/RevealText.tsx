"use client";

import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import {
  DUR,
  EASE,
  STAGGER,
  gsap,
  prefersReducedMotion,
  toWords,
  withScrollTrigger,
} from "./motion";

/** Longest total stagger span, in seconds, regardless of word count. */
const MAX_STAGGER_SPAN = 0.55;

/**
 * The site's signature type reveal: each word sits inside an overflow-hidden
 * mask and rises into place. Words are split on the server, so the markup is
 * complete and readable before any JavaScript runs — GSAP only animates the
 * inner spans, which start at their final position in CSS terms.
 */
export function RevealText({
  children,
  as: Tag = "span",
  className,
  wordClassName,
  delay = 0,
  stagger = STAGGER.word,
  trigger = "load",
  start = "top 82%",
}: {
  /** Plain text, or an array of segments so parts can be styled differently. */
  children: string | Segment[];
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** "load" animates on mount; "scroll" waits for the element to enter view. */
  trigger?: "load" | "scroll";
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll<HTMLElement>("[data-word-inner]");
    if (!targets.length) return;

    /*
      A per-word stagger reads as craft on a short headline and as a slow
      crawl on a sentence. Cap the total stagger so a three-word line keeps
      its full rhythm while a thirty-word statement lands in about half a
      second — the same vocabulary, paced to the length of the line.
    */
    const effectiveStagger = Math.min(
      stagger,
      MAX_STAGGER_SPAN / Math.max(targets.length - 1, 1),
    );

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, y: 0, opacity: 1 });
      return;
    }

    // Above-the-fold reveals run on GSAP core alone so they are never held up
    // by the ScrollTrigger chunk; scroll reveals wait for it.
    if (trigger === "load") {
      const ctx = gsap.context(() => {
        gsap.set(targets, { yPercent: 108, y: 0, opacity: 1 });
        gsap.to(targets, {
          yPercent: 0,
          y: 0,
          duration: DUR.type,
          ease: EASE.type,
          stagger: effectiveStagger,
          delay,
        });
      }, node);
      return () => ctx.revert();
    }

    gsap.set(targets, { yPercent: 108, y: 0, opacity: 1 });

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(targets, {
          yPercent: 0,
          y: 0,
          duration: DUR.type,
          ease: EASE.type,
          stagger: effectiveStagger,
          delay,
          scrollTrigger: { trigger: node, start, once: true },
        });
      }, node),
    );
  }, [delay, stagger, trigger, start]);

  const segments: Segment[] =
    typeof children === "string" ? [{ text: children }] : children;

  return (
    <Tag className={cn("block", className)} ref={ref}>
      {segments.map((segment, si) =>
        segment.node ? (
          // A non-text element sharing the line (an inline capsule, say).
          <span className="inline-block align-middle" key={`n-${si}`}>
            {segment.node}
          </span>
        ) : (
          toWords(segment.text ?? "").map((chunk, wi) =>
            /^\s+$/.test(chunk) ? (
              <span key={`s-${si}-${wi}`}> </span>
            ) : (
              <span
                className={cn(
                  "inline-block overflow-hidden align-bottom",
                  // Descenders need room or the mask clips them.
                  "pb-[0.12em] -mb-[0.12em]",
                  segment.className,
                  wordClassName,
                )}
                key={`w-${si}-${wi}`}
              >
                <span className="inline-block will-change-transform" data-word-inner>
                  {chunk}
                </span>
              </span>
            ),
          )
        ),
      )}
    </Tag>
  );
}

export type Segment = {
  text?: string;
  className?: string;
  /** An element to place inline within the reveal (does not get masked). */
  node?: ReactNode;
};

/**
 * A single masked line — used when the unit of reveal should be the whole line
 * rather than each word (decks, long paragraphs set as display type).
 */
export function RevealLine({
  children,
  className,
  delay = 0,
  trigger = "scroll",
  start = "top 85%",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "load" | "scroll";
  start?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const inner = node.firstElementChild;
    if (!inner) return;

    if (prefersReducedMotion()) {
      gsap.set(inner, { yPercent: 0, y: 0, opacity: 1 });
      return;
    }

    gsap.set(inner, { yPercent: 110, y: 0, opacity: 1 });

    if (trigger === "load") {
      const ctx = gsap.context(() => {
        gsap.to(inner, {
          yPercent: 0,
          duration: DUR.type,
          ease: EASE.type,
          delay,
        });
      }, node);
      return () => ctx.revert();
    }

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(inner, {
          yPercent: 0,
          duration: DUR.type,
          ease: EASE.type,
          delay,
          scrollTrigger: { trigger: node, start, once: true },
        });
      }, node),
    );
  }, [delay, trigger, start]);

  return (
    <span
      className={cn("block overflow-hidden pb-[0.12em] -mb-[0.12em]", className)}
      ref={ref}
    >
      <span className="block will-change-transform">{children}</span>
    </span>
  );
}
