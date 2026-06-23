import { Crown } from "lucide-react";

interface OrnamentalEyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "purple" | "white";
  className?: string;
}

/**
 * Spellbook-style eyebrow with a gold wisp + crown on each side.
 * Use everywhere an eyebrow text appears above a section heading.
 */
export default function OrnamentalEyebrow({
  children,
  align = "left",
  tone = "purple",
  className = "",
}: OrnamentalEyebrowProps) {
  const colorClass =
    tone === "gold"
      ? "text-accent"
      : tone === "white"
      ? "text-white"
      : "text-magic";

  const containerJustify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex ${containerJustify} ${className}`}>
      <div
        className={`inline-flex items-center gap-2.5 ${colorClass} font-script text-xs sm:text-sm uppercase tracking-[0.28em] leading-none`}
      >
        {align === "center" && (
          <span
            aria-hidden="true"
            className="hidden sm:block w-7 h-px gold-wisp-left"
          />
        )}
        <Crown
          aria-hidden="true"
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent flex-shrink-0"
        />
        <span className="whitespace-nowrap">{children}</span>
        <Crown
          aria-hidden="true"
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent flex-shrink-0"
        />
        {align === "center" && (
          <span
            aria-hidden="true"
            className="hidden sm:block w-7 h-px gold-wisp-right"
          />
        )}
      </div>
    </div>
  );
}
