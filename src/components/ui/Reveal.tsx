import type { ElementType, ReactNode } from "react";
import { FadeUp } from "@/components/motion";

/**
 * Site-wide reveal wrapper.
 *
 * Deliberately a server component: it holds no state and only forwards to the
 * client `FadeUp`, so none of this file ships in the client bundle.
 *
 * A thin adapter over the GSAP motion system, kept so that the many call sites
 * across the site do not each have to know about GSAP — and so every page
 * shares one easing curve, one distance, and one trigger point.
 *
 * New code should reach for `FadeUp`, `StaggerGroup`, or `RevealText` directly.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Milliseconds, matching the original IntersectionObserver API. */
  delay?: number;
  className?: string;
}) {
  return (
    <FadeUp as={as} className={className} delay={delay / 1000}>
      {children}
    </FadeUp>
  );
}
