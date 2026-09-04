"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SignalWave } from "@/components/ui/SignalWave";
import { HeroSignalField } from "@/components/viz/HeroSignalField";
import { InlineCapsule } from "@/components/viz/InlineCapsule";
import {
  RevealText,
  EASE,
  gsap,
  prefersReducedMotion,
  withScrollTrigger,
} from "@/components/motion";
import { brandLines } from "@/lib/site";

/**
 * The homepage hero. Three architectural lines carrying the brand's spine,
 * with two live capsules set into the type. The composition is deliberately
 * asymmetric: the headline runs wide, the supporting column sits low-left,
 * and the intelligence field bleeds off the right edge.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll(".gsap-hidden"), { opacity: 1, y: 0 });
      return;
    }

    // The entrance runs immediately on GSAP core — it must never wait on a
    // network round-trip for the ScrollTrigger chunk.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE.out } });

      tl.fromTo(
        ".hero-support",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
        1.05,
      )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.2,
        )
        .fromTo(
          ".hero-meta",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 },
          1.35,
        )
        .fromTo(
          ".hero-field-wrap",
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" },
          0.5,
        );

    }, root);

    // The cinematic recede is scroll-driven, so it joins once the plugin lands.
    const revertScroll = withScrollTrigger(() =>
      gsap.context(() => {
        gsap.to(".hero-inner", {
          y: -70,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to(".hero-field-wrap", {
          y: 90,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to(railRef.current, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "top+=200 top",
            scrub: true,
          },
        });
      }, root),
    );

    return () => {
      ctx.revert();
      revertScroll();
    };
  }, []);

  return (
    <section
      className="on-dark relative overflow-hidden bg-ink-950 text-white"
      ref={rootRef}
    >
      <div aria-hidden="true" className="absolute inset-0 grid-texture" />

      <div className="hero-field-wrap absolute inset-0 lg:left-[18%]">
        <HeroSignalField />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-ink-950 from-30% via-ink-950/88 via-60% to-ink-950/25 lg:via-ink-950/55 lg:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink-950"
      />

      <div className="container-wide relative">
        <div className="hero-inner flex min-h-[42rem] flex-col justify-center pt-36 pb-24 lg:min-h-[90vh] lg:pt-44 lg:pb-32">
          {/* The brand spine, set as signage. */}
          <h1 className="text-hero text-white">
            <RevealText delay={0.35}>
              {[
                { text: "Learning leaves" },
                {
                  node: (
                    <InlineCapsule
                      delay={0.75}
                      label="A field of small learning signals"
                      variant="signal"
                    />
                  ),
                },
                { text: "signals." },
              ]}
            </RevealText>

            <RevealText className="text-slate-ai-400" delay={0.62}>
              Signals become intelligence.
            </RevealText>

            <RevealText delay={0.86}>
              {[
                { text: "Intelligence reveals", className: "text-signal-400" },
                {
                  node: (
                    <InlineCapsule
                      delay={1.15}
                      label="Three possible pathways branching from a current state"
                      variant="pathway"
                    />
                  ),
                },
                { text: "paths.", className: "text-signal-400" },
              ]}
            </RevealText>
          </h1>

          <div
            aria-hidden="true"
            className="hero-support gsap-hidden mt-10 h-4 w-[min(28rem,70%)] text-signal-500/50"
          >
            <SignalWave className="h-full w-full" periods={14} strokeWidth={2.2} />
          </div>

          <div className="mt-10 max-w-[38rem]">
            <p className="hero-support gsap-hidden text-lead text-slate-ai-300">
              Artifact Interactive creates Learning Intelligence Platforms that
              transform everyday learning activity into intelligence institutions
              can use to understand what is happening, anticipate what may happen
              next, and uncover better paths toward success.
            </p>

            <div className="hero-actions gsap-hidden mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/platform" size="lg" variant="inverse" withArrow>
                Explore the Platform
              </Button>
              <Button href="/how-it-works" size="lg" variant="inverse-outline">
                Our Approach
              </Button>
            </div>
          </div>

          <ul className="mt-16 grid gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-3 lg:mt-20">
            {brandLines.promise.map((line, i) => (
              <li
                className="hero-meta gsap-hidden flex items-baseline gap-4"
                key={line}
              >
                <span className="index-numeral font-mono text-[0.625rem] text-signal-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] font-medium text-slate-ai-300">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        ref={railRef}
      >
        <span className="flex h-14 w-px overflow-hidden bg-white/15">
          <span className="scroll-cue block w-full bg-signal-400" />
        </span>
      </div>
    </section>
  );
}
