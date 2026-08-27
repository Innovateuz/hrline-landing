import { useI18n } from "../../i18n";

interface LogoProps {
  className?: string;
  showDescriptor?: boolean;
  tone?: "dark" | "light";
}

export function Logo({
  className = "",
  showDescriptor = false,
  tone = "dark",
}: LogoProps) {
  const { t } = useI18n();
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-ink-muted";

  return (
    <a
      href="#top"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="HRline"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-violet-deep shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M7 5v14M7 12h8M15 5v14"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="18.5" cy="6.5" r="1.9" fill="white" />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-bold tracking-tight ${text}`}>
          HRline
        </span>
        {showDescriptor && (
          <span className={`mt-1 text-[11px] font-medium ${sub}`}>
            {t.brand.descriptor}
          </span>
        )}
      </span>
    </a>
  );
}
