import { cn } from "@/lib/cn";

/**
 * The Artifact signal wave — lifted from the wordmark's underline and used
 * across the site as the brand's connective device. One period is 32 units, so
 * the animated variant can translate by exactly two periods and loop seamlessly.
 */
function wavePath(periods: number) {
  let d = "M0 12";
  for (let i = 0; i < periods; i += 1) {
    d += " q 8 -10 16 0 q 8 10 16 0";
  }
  return d;
}

export function SignalWave({
  className,
  strokeWidth = 3,
  animated = false,
  periods = 8,
  opacity = 1,
}: {
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
  periods?: number;
  opacity?: number;
}) {
  const visible = periods;
  const drawn = animated ? periods + 2 : periods;

  return (
    <svg
      aria-hidden="true"
      className={cn("overflow-hidden", className)}
      fill="none"
      /* The wave is a decorative band: it should fill the box it is given
         rather than letterbox inside it. */
      preserveAspectRatio="none"
      style={{ opacity }}
      viewBox={`0 0 ${visible * 32} 24`}
    >
      <g
        className={
          animated ? "[animation:signal-drift_2.6s_linear_infinite]" : undefined
        }
      >
        <path
          d={wavePath(drawn)}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}

/** A single wave period, used as a bullet / divider accent. */
export function WaveMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("text-signal-500", className)}
      fill="none"
      height="10"
      viewBox="0 0 64 24"
      width="26"
    >
      <path
        d="M0 12 q 8 -10 16 0 q 8 10 16 0 q 8 -10 16 0 q 8 10 16 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
    </svg>
  );
}
