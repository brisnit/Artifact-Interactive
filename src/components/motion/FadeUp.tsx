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
  withScrollTrigger,
} from "./motion";

/**
 * The workhorse reveal. Elements start slightly displaced and settle as they
 * enter view. Nothing here scales or rotates — restraint is the point.
 */
export function FadeUp({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 26,
  duration = DUR.reveal,
  start = "top 86%",
  trigger = "scroll",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  trigger?: "scroll" | "load";
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      gsap.set(node, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(node, { opacity: 0, y });

    if (trigger === "load") {
      const ctx = gsap.context(() => {
        gsap.to(node, { opacity: 1, y: 0, duration, ease: EASE.out, delay });
      }, node);
      return () => ctx.revert();
    }

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(node, {
          opacity: 1,
          y: 0,
          duration,
          ease: EASE.out,
          delay,
          scrollTrigger: { trigger: node, start, once: true },
        });
      }, node),
    );
  }, [delay, duration, start, trigger, y]);

  return (
    <Tag className={cn("gsap-hidden", className)} ref={ref}>
      {children}
    </Tag>
  );
}

/**
 * Staggers direct children into view as one group — used for card rows, lists,
 * and metadata clusters so a section arrives as a phrase, not as N events.
 */
export function StaggerGroup({
  children,
  as: Tag = "div",
  className,
  stagger = STAGGER.card,
  delay = 0,
  y = 30,
  start = "top 84%",
  selector = ":scope > *",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
  start?: string;
  /** Override when the animated items are not the immediate children. */
  selector?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const items = node.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });

    return withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: DUR.reveal,
          ease: EASE.out,
          stagger,
          delay,
          scrollTrigger: { trigger: node, start, once: true },
        });
      }, node),
    );
  }, [delay, selector, stagger, start, y]);

  return (
    <Tag className={className} ref={ref}>
      {children}
    </Tag>
  );
}

/**
 * Counts a number up when it enters view. Renders the final value in the
 * markup so the figure is present without JavaScript and for screen readers.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 1.7,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    return withScrollTrigger(() =>
      gsap.context(() => {
        const counter = { v: 0 };
        gsap.to(counter, {
          v: value,
          duration,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
          onUpdate: () => {
            node.textContent = `${prefix}${Math.round(counter.v).toLocaleString()}${suffix}`;
          },
          onComplete: () => {
            node.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
          },
        });
      }, node),
    );
  }, [duration, prefix, suffix, value]);

  return (
    <span className={className} ref={ref}>
      {`${prefix}${value.toLocaleString()}${suffix}`}
    </span>
  );
}
