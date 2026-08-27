import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowField } from "../ui/GlowField";
import { PhoneMockup } from "../mockups/PhoneMockup";
import { RevealGroup, revealItem, Reveal } from "../ui/Reveal";
import { useI18n } from "../../i18n";

export function MobileApp() {
  const { t } = useI18n();
  const [screen, setScreen] = useState(0);

  return (
    <section id="mobile-app" className="relative py-24 sm:py-32">
      <GlowField variant="light" />
      <div className="container-x">
        <SectionTitle
          eyebrow={t.mobileApp.eyebrow}
          title={t.mobileApp.title}
          align="left"
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {t.mobileApp.questions.map((q, i) => (
              <motion.div
                key={i}
                variants={revealItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group card-surface flex gap-4 p-5 lg:p-6"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-xs font-bold text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold leading-snug text-ink">
                    {q.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                    {q.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal className="relative">
            <PhoneMockup
              count={t.mobileApp.screens.length}
              activeIndex={screen}
              className="mx-auto"
            />

            <div className="mx-auto mt-6 flex max-w-xs flex-wrap justify-center gap-2">
              {t.mobileApp.screens.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setScreen(i)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    screen === i
                      ? "bg-brand-500 text-white shadow-glow"
                      : "border border-mist-200 bg-white text-ink-muted hover:border-brand-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
