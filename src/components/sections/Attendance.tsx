import { SectionTitle } from "../ui/SectionTitle";
import { Icon } from "../ui/Icon";
import { Reveal, RevealGroup, revealItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { FaceIdTerminal } from "../mockups/FaceIdTerminal";
import { useI18n } from "../../i18n";

export function Attendance() {
  const { t } = useI18n();
  const a = t.attendance;
  return (
    <section
      id="attendance"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-0 h-[420px] w-[420px] rounded-full bg-violet-deep/40 blur-[130px]" />
        <div className="absolute right-[-6%] bottom-0 h-[380px] w-[380px] rounded-full bg-brand-600/30 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #000 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-x">
        <SectionTitle eyebrow={a.eyebrow} title={a.title} tone="light" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <FaceIdTerminal />
          </Reveal>

          <RevealGroup className="space-y-4">
            {a.cards.map((card, ci) => (
              <motion.div
                key={ci}
                variants={revealItem}
                className="glass-dark rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand-200">
                    <Icon
                      name={ci === 0 ? "face" : "phone"}
                      className="h-5 w-5"
                    />
                  </span>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {card.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* feature card */}
            <motion.div
              variants={revealItem}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-deep via-brand-600 to-violet p-6 shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  <Icon name="face" className="h-3.5 w-3.5" /> {a.feature.badge}
                </span>
                <h3 className="mt-4 text-xl font-bold">{a.feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {a.feature.text}
                </p>
                <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-white/10 p-3 text-sm">
                  <Icon name="telegram" className="h-5 w-5 shrink-0 text-sky-300" />
                  <span className="text-white/90">{a.feature.highlight}</span>
                </div>
              </div>
            </motion.div>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
