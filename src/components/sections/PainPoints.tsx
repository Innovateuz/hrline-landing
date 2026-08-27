import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowField } from "../ui/GlowField";
import { Icon } from "../ui/Icon";
import { RevealGroup, revealItem } from "../ui/Reveal";
import { useI18n } from "../../i18n";

const icons = ["clock", "revolve", "table", "badge", "wallet", "spark"];

export function PainPoints() {
  const { t } = useI18n();

  return (
    <section id="pain-points" className="relative py-24 sm:py-32">
      <GlowField variant="light" />
      <div className="container-x">
        <SectionTitle
          eyebrow={t.painPoints.eyebrow}
          title={t.painPoints.title}
          subtitle={t.painPoints.subtitle}
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.painPoints.items.map((item, i) => (
            <motion.article
              key={i}
              variants={revealItem}
              whileHover={{ y: -7 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group card-surface relative overflow-hidden rounded-3xl bg-mist/60 p-6"
            >
              <span className="pointer-events-none absolute -right-6 -top-6 text-[80px] font-bold leading-none text-brand-100/70">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-[0_10px_30px_-12px_rgba(99,102,241,0.5)] ring-1 ring-brand-100 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <Icon name={icons[i]} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-inset ring-brand-300/40 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
