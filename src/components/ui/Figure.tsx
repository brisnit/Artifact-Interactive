import Image from "next/image";
import { ImageReveal } from "@/components/motion";
import { cn } from "@/lib/cn";

/**
 * A real photograph or figure in one of the site's reserved image slots.
 *
 * The counterpart to `ImagePlaceholder`: same frame treatment, same editorial
 * mask wipe, but with actual content. Kept as one primitive so every image on
 * the site shares a border, a reveal, and a caption style.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  tone = "light",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  tone?: "light" | "dark";
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <figure className={className}>
      <ImageReveal
        className={cn(
          "rounded-lg border",
          dark ? "border-white/12" : "border-ink-900/10",
        )}
      >
        <Image
          alt={alt}
          className="w-full"
          height={height}
          priority={priority}
          sizes={sizes}
          src={src}
          width={width}
        />
      </ImageReveal>
      {caption && (
        <figcaption
          className={cn(
            "mt-3.5 text-[0.8125rem] leading-relaxed",
            dark ? "text-slate-ai-400" : "text-slate-ai-500",
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
