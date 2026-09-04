"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { loadScrollTrigger } from "./motion";

/**
 * Owns the lifecycle of the scroll system.
 *
 * ScrollTrigger is fetched here as soon as the app hydrates, so its chunk is
 * in flight while the (GSAP-core) hero entrance is already playing. It also
 * keeps measurements honest across client navigations: the App Router keeps
 * the document alive, so triggers from the previous route have to be killed
 * and the new page re-measured once fonts have settled.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    loadScrollTrigger().then((ScrollTrigger) => {
      if (cancelled || !ScrollTrigger) return;

      const refresh = () => ScrollTrigger.refresh();
      timers.push(window.setTimeout(refresh, 240));

      // Fonts change metrics; re-measure once they land.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) refresh();
        }).catch(() => {});
      }
      window.addEventListener("load", refresh);
      timers.push(-1);

      return () => window.removeEventListener("load", refresh);
    });

    return () => {
      cancelled = true;
      timers.forEach((t) => t >= 0 && window.clearTimeout(t));
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      // Leaving a route: drop that page's triggers so they cannot fire against
      // unmounted nodes or hold stale scroll positions.
      loadScrollTrigger().then((ScrollTrigger) => {
        ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, [pathname]);

  return null;
}
