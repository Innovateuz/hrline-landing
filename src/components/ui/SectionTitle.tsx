import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}: SectionTitleProps) {
  const alignCls =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const subColor = tone === "light" ? "text-white/70" : "text-ink-muted";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`text-h2 font-bold ${titleColor}`}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
