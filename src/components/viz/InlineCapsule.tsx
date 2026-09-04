"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { DUR, EASE, gsap, prefersReducedMotion } from "@/components/motion";

/**
 * A live visual that sits *inside* the hero headline, intersecting the type.
 * Two variants: a signal capsule (raw activity arriving) and a pathway capsule
 * (trajectories resolving). They scale in during the intro, drift gently
 * afterwards, and react to hover — the one moment of playfulness on the site.
 */
export function InlineCapsule({
  variant,
  label,
  delay = 0,
  className,
}: {
  variant: "signal" | "pathway";
  label: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      gsap.set(node, { scale: 1, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(node, { scale: 0.24, opacity: 0, transformOrigin: "center" });
      gsap.to(node, {
        scale: 1,
        opacity: 1,
        duration: DUR.arrive,
        ease: EASE.arrive,
        delay,
        onComplete: () => {
          gsap.to(node, {
            y: variant === "signal" ? 5 : -5,
            rotation: variant === "signal" ? 0.9 : -0.9,
            duration: variant === "signal" ? 3.1 : 3.6,
            ease: EASE.drift,
            yoyo: true,
            repeat: -1,
          });
        },
      });
    }, node);

    return () => ctx.revert();
  }, [delay, variant]);

  const onEnter = () => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      scale: 1.05,
      duration: DUR.hover,
      ease: EASE.arrive,
      overwrite: "auto",
    });
  };
  const onLeave = () => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.7,
      ease: EASE.settle,
      overwrite: "auto",
    });
  };

  return (
    <span
      aria-label={label}
      className={cn(
        "relative mx-[0.12em] inline-block h-[0.72em] w-[1.85em] shrink-0 translate-y-[-0.04em]",
        "overflow-hidden rounded-full align-middle will-change-transform",
        variant === "signal"
          ? "bg-ink-900 ring-1 ring-inset ring-signal-400/30"
          : "bg-signal-600 ring-1 ring-inset ring-signal-300/40",
        className,
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      ref={ref}
      role="img"
    >
      {variant === "signal" ? <SignalCapsuleArt /> : <PathwayCapsuleArt />}
    </span>
  );
}

/** Raw activity arriving as a dense field of small marks. */
function SignalCapsuleArt() {
  const marks = [
    [10, 30], [18, 55], [26, 22], [33, 62], [41, 40], [48, 18],
    [55, 52], [62, 33], [70, 66], [77, 28], [85, 48], [92, 38],
    [14, 74], [30, 82], [46, 76], [66, 84], [82, 72], [95, 62],
    [22, 44], [58, 70], [74, 44], [38, 30],
  ];
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="cap-sig" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1d2a5c" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#2941ad" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#456df4" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect fill="url(#cap-sig)" height="100" width="100" />
      {marks.map(([cx, cy], i) => (
        <circle
          className="capsule-mark"
          cx={cx}
          cy={cy}
          fill={i % 3 === 0 ? "#ffffff" : "#c3d1ff"}
          key={i}
          opacity={i % 3 === 0 ? 1 : 0.75}
          r={i % 3 === 0 ? 3 : 2.1}
          style={{ animationDelay: `${(i % 7) * 420}ms` }}
        />
      ))}
    </svg>
  );
}

/** Trajectories resolving out of a single point. */
function PathwayCapsuleArt() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <g fill="none" stroke="#ffffff" strokeLinecap="round">
        <path d="M12 50 C 40 50, 52 16, 88 16" strokeOpacity="0.4" strokeWidth="3" />
        <path d="M12 50 C 40 50, 52 50, 88 50" strokeOpacity="0.95" strokeWidth="5" />
        <path d="M12 50 C 40 50, 52 84, 88 84" strokeOpacity="0.55" strokeWidth="3.5" />
      </g>
      <circle cx="12" cy="50" fill="#ffffff" r="6" />
      {[16, 50, 84].map((cy, i) => (
        <circle
          className="capsule-mark"
          cx="88"
          cy={cy}
          fill="#ffffff"
          key={cy}
          opacity={cy === 50 ? 1 : 0.65}
          r={cy === 50 ? 6 : 4}
          style={{ animationDelay: `${i * 700}ms` }}
        />
      ))}
    </svg>
  );
}
