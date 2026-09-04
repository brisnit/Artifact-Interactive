import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { FadeUp, RevealText } from "@/components/motion";

type Tone = "light" | "paper" | "mist" | "dark" | "deep";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink-900",
  paper: "bg-slate-ai-50 text-ink-900",
  mist: "bg-signal-50/60 text-ink-900",
  dark: "bg-ink-900 text-white on-dark",
  deep: "bg-ink-950 text-white on-dark",
};

export function Section({
  children,
  tone = "light",
  className,
  id,
  as: Tag = "section",
  bleed = false,
  "aria-labelledby": ariaLabelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  as?: ElementType;
  bleed?: boolean;
  "aria-labelledby"?: string;
}) {
  return (
    <Tag
      aria-labelledby={ariaLabelledBy}
      className={cn(
        // overflow-clip, not overflow-hidden: it contains the ambient glow
        // fields without establishing a scroll container, so the `lg:sticky`
        // panels inside several sections keep working.
        "relative overflow-clip",
        tones[tone],
        bleed ? "" : "py-20 md:py-28 lg:py-[7.5rem]",
        className,
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}

/**
 * Standard section header: headline and optional deck.
 * Keeps typographic rhythm identical across every page.
 */
export function SectionHeading({
  title,
  deck,
  align = "left",
  tone = "dark-text",
  id,
  level = 2,
  className,
  maxWidth = "max-w-[46rem]",
  action,
}: {
  title: ReactNode;
  deck?: ReactNode;
  align?: "left" | "center";
  tone?: "dark-text" | "light-text";
  id?: string;
  level?: 2 | 3;
  className?: string;
  maxWidth?: string;
  action?: ReactNode;
}) {
  const Heading = (level === 2 ? "h2" : "h3") as ElementType;
  const light = tone === "light-text";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className={cn(align === "center" && "mx-auto text-center", maxWidth)}>
        <Heading
          className={cn("text-heading", light ? "text-white" : "text-ink-900")}
          id={id}
        >
          {/* A plain-string title gets the masked word reveal; a composed one
              (mixed colours, line breaks) falls back to a single fade so the
              markup stays intact. */}
          {typeof title === "string" ? (
            <RevealText delay={0.06} trigger="scroll">
              {title}
            </RevealText>
          ) : (
            <FadeUp delay={0.06} y={18}>
              {title}
            </FadeUp>
          )}
        </Heading>
        {deck && (
          <FadeUp delay={0.18}>
            <div
              className={cn(
                "text-lead mt-7",
                light ? "text-slate-ai-300" : "text-slate-ai-700",
              )}
            >
              {deck}
            </div>
          </FadeUp>
        )}
      </div>
      {action && (
        <FadeUp className="shrink-0" delay={0.26}>
          {action}
        </FadeUp>
      )}
    </div>
  );
}
