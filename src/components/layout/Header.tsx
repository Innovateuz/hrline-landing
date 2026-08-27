import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { NAV } from "../../data/config";
import { useI18n } from "../../i18n";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass py-2.5 shadow-[0_10px_40px_-15px_rgba(30,27,75,0.25)]"
              : "border border-transparent py-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden text-xs font-medium text-ink-muted lg:inline">
              {t.brand.descriptor}
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-ink"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:flex" />
            <Button
              as="a"
              href="#contact"
              size="md"
              className="hidden sm:inline-flex"
              withArrow
            >
              {t.cta.contact}
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-mist-200 bg-white text-ink md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-x mt-2 md:hidden"
          >
            <div className="glass rounded-3xl p-3 shadow-float">
              <nav className="flex flex-col">
                {NAV.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="rounded-2xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-brand-50"
                  >
                    {t.nav[l.key]}
                  </a>
                ))}
              </nav>
              <LanguageSwitcher variant="full" className="mt-2 px-1" />
              <Button
                as="a"
                href="#contact"
                onClick={close}
                className="mt-2 w-full"
                withArrow
              >
                {t.cta.contact}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
