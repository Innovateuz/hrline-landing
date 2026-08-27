import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { GlowField } from "../ui/GlowField";
import { DashboardMockup } from "../mockups/DashboardMockup";
import { usePointerParallax } from "../../hooks/usePointerParallax";
import { CONFIG } from "../../data/config";
import { useI18n } from "../../i18n";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = usePointerParallax(ref);

  const stats = [
    [CONFIG.hero.total, t.hero.stats.total],
    [CONFIG.hero.atWork, t.hero.stats.atWork],
    [CONFIG.hero.absent, t.hero.stats.absent],
  ] as const;

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <GlowField variant="hero" grid />

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.brand.badge}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-5 text-display font-bold text-ink"
            >
              {t.hero.h1Lead}{" "}
              <span className="text-gradient">{t.hero.h1Accent}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="a" href="#contact" size="lg" withArrow>
                {t.cta.leaveRequest}
              </Button>
              <Button as="a" href="#pain-points" size="lg" variant="ghost">
                {t.cta.viewFeatures}
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-6">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-ink">{n}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    {l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative">
            <DashboardMockup px={x} py={y} />
          </div>
        </div>
      </div>
    </section>
  );
}
