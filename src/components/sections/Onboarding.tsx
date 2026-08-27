import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowField } from "../ui/GlowField";
import { Icon } from "../ui/Icon";
import { useReveal } from "../../hooks/useReveal";
import { useI18n } from "../../i18n";

const icons = ["doc", "badge", "target"];
const fills = [45, 72, 100];

function Step({
  step,
  index,
}: {
  step: { title: string; text: string };
  index: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={shown ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div className="relative z-10 mb-5 flex items-center gap-3 md:block">
        <span className="grid h-[72px] w-[72px] place-items-center rounded-2xl bg-white text-lg font-bold text-brand-600 shadow-float ring-1 ring-brand-100">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="card-surface group p-6"
      >
        <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-500 group-hover:scale-110">
          <Icon name={icons[index]} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
          {step.text}
        </p>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-mist-200">
          <motion.div
            initial={{ width: 0 }}
            animate={shown ? { width: `${fills[index]}%` } : { width: 0 }}
            transition={{ duration: 0.9, delay: 0.25 + index * 0.12 }}
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-violet-deep"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Onboarding() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="onboarding" className="relative py-24 sm:py-32">
      <GlowField variant="light" />
      <div className="container-x">
        <SectionTitle eyebrow={t.onboarding.eyebrow} title={t.onboarding.title} />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-mist-200 md:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-brand-400 to-violet-deep"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {t.onboarding.steps.map((step, i) => (
              <Step key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
