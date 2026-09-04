"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 16);
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile sheet on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Lock scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setOpenSubmenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Every page opens on a deep-navy hero, so the header inverts until the
     user scrolls past it (or opens the mobile sheet). */
  const overHero = !scrolled && !menuOpen;

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenSubmenu(null), 140);
  };

  const cancelClose = () => window.clearTimeout(closeTimer.current);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2.5 focus:text-[0.875rem] focus:font-semibold focus:text-white"
        href="#main"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled || menuOpen
            ? "border-b border-ink-900/[0.06] bg-white/72 backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-artifact">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16 lg:h-[4.5rem]" : "h-20 lg:h-24",
            )}
          >
            <Wordmark
              priority
              tone={overHero ? "light" : "dark"}
              withCategory
            />

            {/* ---- Desktop navigation ---- */}
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {navigation.map((item) => (
                  <li
                    className="relative"
                    key={item.href}
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenSubmenu(item.children ? item.href : null);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      aria-current={isActive(item.href) ? "page" : undefined}
                      aria-expanded={
                        item.children ? openSubmenu === item.href : undefined
                      }
                      className={cn(
                        "relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 text-[0.875rem] font-medium tracking-tight transition-colors duration-300",
                        overHero
                          ? isActive(item.href)
                            ? "text-white"
                            : "text-slate-ai-300 hover:text-white"
                          : isActive(item.href)
                            ? "text-ink-900"
                            : "text-slate-ai-700 hover:text-ink-900",
                      )}
                      href={item.href}
                      onFocus={() =>
                        setOpenSubmenu(item.children ? item.href : null)
                      }
                    >
                      {item.label}
                      {item.children && (
                        <svg
                          aria-hidden="true"
                          className={cn(
                            "transition-transform duration-300",
                            openSubmenu === item.href && "rotate-180",
                          )}
                          fill="none"
                          height="5"
                          viewBox="0 0 9 5"
                          width="9"
                        >
                          <path
                            d="M1 1l3.5 3L8 1"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.4"
                          />
                        </svg>
                      )}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3 -bottom-px h-px origin-left transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          overHero ? "bg-signal-400" : "bg-signal-500",
                          isActive(item.href) ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>

                    {item.children && (
                      <div
                        className={cn(
                          "absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          openSubmenu === item.href
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0",
                        )}
                      >
                        <ul className="overflow-hidden rounded-lg border border-ink-900/10 bg-white p-2 shadow-[0_28px_60px_-32px_rgba(10,14,28,0.45)]">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                className="group block rounded-md px-4 py-3.5 transition-colors duration-250 hover:bg-slate-ai-50"
                                href={child.href}
                              >
                                <span className="flex items-center justify-between gap-3 text-[0.875rem] font-semibold tracking-tight text-ink-900">
                                  {child.label}
                                  <svg
                                    aria-hidden="true"
                                    className="text-signal-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    fill="none"
                                    height="9"
                                    viewBox="0 0 6 9"
                                    width="6"
                                  >
                                    <path
                                      d="M1 1l3.5 3.5L1 8"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="1.6"
                                    />
                                  </svg>
                                </span>
                                <span className="mt-1 block text-[0.8125rem] leading-snug text-slate-ai-600">
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-5 pl-4 xl:flex">
              <Link
                className={cn(
                  "whitespace-nowrap text-[0.875rem] font-semibold tracking-tight transition-colors duration-300",
                  overHero
                    ? "text-slate-ai-300 hover:text-white"
                    : "text-ink-900 hover:text-signal-600",
                )}
                href={site.cta.secondary.href}
              >
                {site.cta.secondary.label}
              </Link>
              <Button
                className="whitespace-nowrap"
                href={site.cta.primary.href}
                size="sm"
                variant={overHero ? "inverse" : "primary"}
                withArrow
              >
                Explore Learning Intelligence
              </Button>
            </div>

            {/* ---- Mobile trigger ---- */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={cn(
                "relative -mr-2 flex size-11 items-center justify-center rounded-md transition-colors duration-300 xl:hidden",
                overHero ? "text-white" : "text-ink-900",
              )}
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              <span className="flex flex-col items-end gap-[5px]">
                <span
                  className={cn(
                    "block h-[1.5px] bg-current transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    menuOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5",
                  )}
                />
                <span
                  className={cn(
                    "block h-[1.5px] bg-current transition-all duration-300",
                    menuOpen ? "w-5 opacity-0" : "w-3.5 opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "block h-[1.5px] w-5 bg-current transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    menuOpen && "-translate-y-[6.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Reading progress — the only chrome the header gains on scroll. */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 bottom-0 h-px origin-left bg-signal-500 transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* ---- Mobile sheet ---- */}
      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        id="mobile-menu"
        inert={!menuOpen}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-ink-950/35 backdrop-blur-sm transition-opacity duration-400",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={cn(
            "absolute inset-x-0 top-0 max-h-dvh overflow-y-auto bg-white pt-20 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="container-artifact">
            <ul className="divide-y divide-ink-900/[0.07] border-y border-ink-900/[0.07]">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <Link
                    className={cn(
                      "flex items-baseline justify-between gap-4 py-4 transition-opacity duration-500",
                      menuOpen ? "opacity-100" : "opacity-0",
                    )}
                    href={item.href}
                    style={{ transitionDelay: menuOpen ? `${120 + i * 45}ms` : "0ms" }}
                  >
                    <span
                      className={cn(
                        "text-[1.375rem] font-bold tracking-tight",
                        isActive(item.href) ? "text-signal-600" : "text-ink-900",
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-[0.16em] text-slate-ai-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                  {item.children && (
                    <ul className="pb-4 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            className="block py-2 text-[0.9375rem] text-slate-ai-700"
                            href={child.href}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={site.cta.primary.href} size="lg" withArrow>
                Explore Learning Intelligence
              </Button>
              <Button href={site.cta.secondary.href} size="lg" variant="secondary">
                Talk With Artifact
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
