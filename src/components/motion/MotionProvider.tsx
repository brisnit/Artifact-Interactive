"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { loadScrollTrigger } from "./motion";

/**
 * Owns the lifecycle of the scroll system.
 *
 * ScrollTrigger is fetched as soon as the app hydrates, so its chunk is in
 * flight while the (GSAP-core) hero entrance is already playing.
 *
 * On a client-side navigation this also has to do two things the App Router
 * does not do for us:
 *
 *  1. Reset scroll to the top. `scroll-behavior: smooth` is set globally for
 *     in-page anchors, and it interferes with the router's own reset — pages
 *     were landing a couple of hundred pixels down, which read as "the page
 *     didn't load properly". We reset explicitly and instantly.
 *
 *  2. Re-measure. Triggers are created by each component during the layout
 *     phase against a document that still has the previous page's height, so
 *     they must be refreshed once the new page has painted.
 *
 * What it deliberately does NOT do is kill triggers globally. Every primitive
 * reverts its own `gsap.context` on unmount, which disposes its own triggers.
 * A global kill here ran asynchronously — after the incoming page had already
 * registered its triggers — and destroyed them, leaving masked images clipped
 * shut and their lazy sources never requested.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    let timer = 0;
    let onLoad: (() => void) | undefined;

    // Land at the top of the new page, bypassing smooth scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    loadScrollTrigger().then((ScrollTrigger) => {
      if (cancelled || !ScrollTrigger) return;

      const refresh = () => ScrollTrigger.refresh();

      // Once after paint, and again once fonts have settled the metrics.
      frame = window.requestAnimationFrame(refresh);
      timer = window.setTimeout(refresh, 260);

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) refresh();
        }).catch(() => {});
      }

      onLoad = refresh;
      window.addEventListener("load", onLoad);
    });

    return () => {
      cancelled = true;
      if (frame) window.cancelAnimationFrame(frame);
      if (timer) window.clearTimeout(timer);
      if (onLoad) window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  return null;
}
