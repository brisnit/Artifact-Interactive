"use client";

import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { EASE, gsap, prefersReducedMotion, withScrollTrigger } from "./motion";

/**
 * Restrained parallax: the element drifts against the scroll by a small,
 * fixed number of pixels. Scrubbed, so it tracks the scrollbar exactly rather
 * than easing behind it.
 */
export function ParallaxMedia({
  children,
  className,
  distance = 60,
  as: Tag = "div",
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  /** Total travel across the element's full pass through the viewport. */
  distance?: number;
  as?: ElementType;
  /** Adds a very slight scale, for edge-to-edge editorial images. */
  scale?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    const inner = node.firstElementChild as HTMLElement | null;
    if (!inner) return;

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.fromTo(
          inner,
          { y: distance / 2, ...(scale ? { scale: 1.06 } : {}) },
          {
            y: -distance / 2,
            ...(scale ? { scale: 1 } : {}),
            ease: "none",
            scrollTrigger: {
              trigger: node,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }, node),
    );
  }, [distance, scale]);

  return (
    <Tag className={cn("overflow-hidden", className)} ref={ref}>
      {children}
    </Tag>
  );
}

/**
 * Editorial mask wipe. The frame stays put while its contents are revealed by
 * an expanding clip, with the inner content counter-scaling so the image feels
 * uncovered rather than stretched.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const inner = node.firstElementChild as HTMLElement | null;

    if (prefersReducedMotion()) {
      gsap.set(node, { clipPath: "inset(0% 0% 0% 0%)" });
      if (inner) gsap.set(inner, { scale: 1 });
      return;
    }

    const from =
      direction === "up" ? "inset(0% 0% 100% 0%)" : "inset(0% 100% 0% 0%)";
    gsap.set(node, { clipPath: from });
    if (inner) gsap.set(inner, { scale: 1.12 });

    return withScrollTrigger(() =>
      gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
          delay,
        });
        tl.to(node, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.25,
          ease: "power4.inOut",
        });
        if (inner) {
          tl.to(inner, { scale: 1, duration: 1.5, ease: EASE.out }, 0);
        }
      }, node),
    );
  }, [delay, direction]);

  return (
    <div className={cn("overflow-hidden", className)} ref={ref}>
      {children}
    </div>
  );
}

/**
 * Sticky storytelling wrapper: pins a panel while an adjacent column scrolls
 * past it, and hands the pass-through progress to a render prop.
 */
export function ScrollSection({
  children,
  className,
  onProgress,
  end = "bottom bottom",
}: {
  children: ReactNode;
  className?: string;
  onProgress?: (progress: number) => void;
  end?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || !onProgress || prefersReducedMotion()) return;

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(
          {},
          {
            scrollTrigger: {
              trigger: node,
              start: "top 70%",
              end,
              scrub: 0.5,
              onUpdate: (self) => onProgress(self.progress),
            },
          },
        );
      }, node),
    );
  }, [end, onProgress]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
