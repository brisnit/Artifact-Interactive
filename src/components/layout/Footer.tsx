import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { SignalWave } from "@/components/ui/SignalWave";
import { Wordmark } from "./Wordmark";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Platform", links: footerNav.platform },
  { title: "Solutions", links: footerNav.solutions },
  { title: "Company", links: footerNav.company },
];

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 grid-texture opacity-60" />

      {/* Brand signal wave across the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-8 text-signal-500/20"
      >
        <SignalWave animated className="h-full w-full" periods={40} strokeWidth={2} />
      </div>

      <div className="container-artifact relative pt-24 pb-12 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr] lg:gap-20">
          <div>
            <Wordmark priority={false} tone="light" />
            <p className="mt-6 text-[0.9375rem] font-semibold tracking-tight text-slate-ai-200">
              Learning Intelligence Platform
            </p>
            <p className="mt-5 max-w-[34ch] text-[0.875rem] leading-relaxed text-slate-ai-400">
              Artifact Interactive explores how human-centered technology, data,
              and intelligence can create better pathways for learning.
            </p>
            <a
              className="mt-7 inline-flex items-center gap-2 border-b border-white/20 pb-0.5 text-[0.875rem] text-slate-ai-200 transition-colors duration-300 hover:border-signal-400 hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <nav aria-label={column.title} key={column.title}>
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-signal-300">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-block text-[0.875rem] text-slate-ai-300 transition-colors duration-300 hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-slate-ai-400">
            © {new Date().getFullYear()} Artifact Interactive. All rights reserved.
          </p>
          <ul className="flex items-center gap-7">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-[0.8125rem] text-slate-ai-400 transition-colors duration-300 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
