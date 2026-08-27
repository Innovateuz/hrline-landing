import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { CONFIG, NAV } from "../../data/config";
import { useI18n } from "../../i18n";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;

  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute left-[10%] top-0 h-64 w-64 rounded-full bg-brand-600/40 blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm text-white/60">{f.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                as="a"
                href={`https://${CONFIG.website}`}
                variant="outline-light"
                size="md"
              >
                <Icon name="telegram" className="h-4 w-4" />
                {f.telegramBot}
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="outline-light"
                size="md"
              >
                {f.downloadApp}
              </Button>
            </div>
            <LanguageSwitcher tone="dark" className="mt-6 w-fit" />
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              {f.sections}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t.nav[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              {f.contacts}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <p className="text-white/40">{f.salesDept}</p>
                <p className="font-semibold">{CONFIG.sales}</p>
              </li>
              <li>
                <p className="text-white/40">{f.techDept}</p>
                <p className="font-semibold">{CONFIG.tech}</p>
              </li>
              <li>
                <a
                  href={CONFIG.websiteUrl}
                  className="font-semibold text-brand-200 hover:text-white"
                >
                  {CONFIG.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <p>{f.copyright}</p>
          <p>{f.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}
