import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ru, type Dict } from "./ru";
import { en } from "./en";
import { uz } from "./uz";

export type LangCode = "ru" | "en" | "uz";

const DICTS: Record<LangCode, Dict> = { ru, en, uz };
export const LANGS: { code: LangCode; label: string; name: string }[] = [
  { code: "ru", label: ru.label, name: ru.name },
  { code: "en", label: en.label, name: en.name },
  { code: "uz", label: uz.label, name: uz.name },
];

const STORAGE_KEY = "hrline:lang";

function detectLang(): LangCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en" || saved === "uz") return saved;
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  if (nav === "ru") return "ru";
  if (nav === "uz") return "uz";
  return "ru";
}

interface I18nValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue>({
  lang: "ru",
  setLang: () => {},
  t: ru,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() =>
    typeof window === "undefined" ? "ru" : detectLang()
  );

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const dict = DICTS[lang];
    document.documentElement.lang = lang;
    document.title = dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict.meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict.meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict.meta.description);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: DICTS[lang] }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
