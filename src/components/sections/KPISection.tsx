import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowField } from "../ui/GlowField";
import { KPIWidget } from "../ui/KPIWidget";
import { RevealGroup, revealItem } from "../ui/Reveal";
import { useI18n } from "../../i18n";

const widgets = [
  "metrics",
  "formulas",
  "templates",
  "proof",
  "status",
  "bonus",
];

export function KPISection() {
  const { t } = useI18n();

  return (
    <section id="kpi" className="relative py-24 sm:py-32">
      <GlowField variant="violet" />
      <div className="container-x">
        <SectionTitle
          eyebrow={t.kpi.eyebrow}
          title={t.kpi.title}
          subtitle={t.kpi.subtitle}
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.kpi.items.map((item, i) => (
            <motion.article
              key={i}
              variants={revealItem}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="group card-surface flex flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full bg-brand-200 transition-colors group-hover:bg-brand-500" />
              </div>
              <h3 className="mt-3 text-[15px] font-bold leading-snug text-ink">
                {item.title}
              </h3>
              {item.text && (
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              )}
              <div className="mt-5 rounded-2xl bg-mist/70 p-3.5 lg:mt-auto">
                <KPIWidget type={widgets[i]} />
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
