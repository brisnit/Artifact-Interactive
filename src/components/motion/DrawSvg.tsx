"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  EASE,
  STAGGER,
  gsap,
  prefersReducedMotion,
  withScrollTrigger,
} from "./motion";

/**
 * Draws SVG paths into view by animating stroke-dashoffset, then pops any
 * marked nodes. Wrap a diagram in this and mark its parts:
 *
 *   data-draw   — a path to draw
 *   data-node   — a point to appear once the paths have travelled
 *   data-label  — text or chrome that fades in last
 *
 * `scrub` ties the drawing to the scrollbar for the cinematic sections;
 * otherwise it plays once on entry.
 */
export function DrawSvg({
  children,
  className,
  scrub = false,
  start = "top 80%",
  end = "bottom 55%",
  stagger = 0.09,
  duration = 1.5,
}: {
  children: ReactNode;
  className?: string;
  scrub?: boolean;
  start?: string;
  end?: string;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const paths = root.querySelectorAll<SVGPathElement | SVGLineElement>("[data-draw]");
    const nodes = root.querySelectorAll<SVGElement>("[data-node]");
    const labels = root.querySelectorAll<SVGElement>("[data-label]");

    if (prefersReducedMotion()) {
      // Guard each collection: gsap.set throws on an empty NodeList, and most
      // diagrams use only a subset of draw/node/label.
      if (paths.length) gsap.set(paths, { strokeDashoffset: 0, opacity: 1 });
      if (nodes.length) gsap.set(nodes, { opacity: 1, scale: 1 });
      if (labels.length) gsap.set(labels, { opacity: 1 });
      return;
    }

    // Set the hidden state up front on GSAP core, so nothing flashes while the
    // ScrollTrigger chunk is still in flight.
    paths.forEach((path) => {
      const length =
        typeof (path as SVGPathElement).getTotalLength === "function"
          ? (path as SVGPathElement).getTotalLength()
          : 0;
      if (!length) return;
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
    });
    if (nodes.length) {
      gsap.set(nodes, { opacity: 0, scale: 0.3, transformOrigin: "center" });
    }
    if (labels.length) gsap.set(labels, { opacity: 0 });

    return withScrollTrigger(() =>
      gsap.context(() => {
      paths.forEach((path) => {
        const length =
          typeof (path as SVGPathElement).getTotalLength === "function"
            ? (path as SVGPathElement).getTotalLength()
            : 0;
        if (!length) return;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      if (nodes.length) {
        gsap.set(nodes, {
          opacity: 0,
          scale: 0.3,
          transformOrigin: "center",
        });
      }
      if (labels.length) gsap.set(labels, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: scrub
          ? { trigger: root, start, end, scrub: 0.7 }
          : { trigger: root, start, once: true },
      });

      if (paths.length) {
        tl.to(paths, {
          strokeDashoffset: 0,
          duration,
          ease: scrub ? "none" : "power2.inOut",
          stagger,
        });
      }
      if (nodes.length) {
        tl.to(
          nodes,
          {
            opacity: 1,
            scale: 1,
            duration: scrub ? duration * 0.5 : 0.6,
            ease: scrub ? "none" : EASE.arrive,
            stagger: STAGGER.node,
          },
          scrub ? duration * 0.18 : "-=0.9",
        );
      }
      if (labels.length) {
        tl.to(
          labels,
          {
            opacity: 1,
            duration: scrub ? duration * 0.4 : 0.7,
            ease: "none",
            stagger: 0.05,
          },
          scrub ? duration * 0.45 : "-=0.5",
        );
      }
      }, root),
    );
  }, [duration, end, scrub, stagger, start]);

  return (
    <div className={cn("[&_[data-node]]:[transform-box:fill-box]", className)} ref={ref}>
      {children}
    </div>
  );
}

/**
 * Lerped pointer parallax for a diagram. Layers move by depth × strength,
 * smoothed in a rAF loop so the motion trails the cursor rather than snapping
 * to it. Children opt in with data-depth="0.4" etc.
 */
export function PointerParallax({
  children,
  className,
  strength = 16,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const layers = Array.from(
      root.querySelectorAll<HTMLElement | SVGElement>("[data-depth]"),
    );
    if (!layers.length) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth ?? "1");
        const x = currentX * strength * depth;
        const y = currentY * strength * depth;
        layer.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      });
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
