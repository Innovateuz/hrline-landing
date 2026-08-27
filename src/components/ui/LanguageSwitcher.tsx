import { useI18n, LANGS } from "../../i18n";

interface Props {
  className?: string;
  variant?: "bar" | "full";
  tone?: "light" | "dark";
}

/** Compact RU / EN / UZ segmented control. */
export function LanguageSwitcher({
  className = "",
  variant = "bar",
  tone = "light",
}: Props) {
  const { lang, setLang } = useI18n();
  const dark = tone === "dark";

  if (variant === "full") {
    return (
      <div className={`flex gap-2 ${className}`}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
              lang === l.code
                ? "bg-brand-500 text-white"
                : "border border-mist-200 bg-white text-ink-muted hover:border-brand-200"
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center rounded-full border p-0.5 ${
        dark ? "border-white/15 bg-white/5" : "border-mist-200 bg-white/70"
      } ${className}`}
      role="group"
      aria-label="Язык / Language / Til"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.name}
          className={`rounded-full px-2.5 py-1.5 text-xs font-bold tracking-wide transition-all ${
            lang === l.code
              ? "bg-brand-500 text-white shadow-glow"
              : dark
              ? "text-white/50 hover:text-white"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
