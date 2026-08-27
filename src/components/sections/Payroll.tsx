import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowField } from "../ui/GlowField";
import { PayrollDashboard } from "../mockups/PayrollDashboard";
import { RevealGroup, revealItem, Reveal } from "../ui/Reveal";
import { useI18n } from "../../i18n";

export function Payroll() {
  const { t } = useI18n();
  return (
    <section id="payroll" className="relative py-24 sm:py-32">
      <GlowField variant="violet" />
      <div className="container-x">
        <SectionTitle
          eyebrow={t.payroll.eyebrow}
          title={t.payroll.title}
          align="left"
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          <RevealGroup className="space-y-4">
            {t.payroll.cards.map((card, i) => (
              <motion.div
                key={i}
                variants={revealItem}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group card-surface flex gap-4 p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal>
            <PayrollDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
