import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Avatar } from "../ui/Avatar";
import { Reveal } from "../ui/Reveal";
import { CONFIG } from "../../data/config";
import { useI18n } from "../../i18n";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${(i * 37) % 100}%`,
  delay: (i % 6) * 0.7,
  size: 3 + (i % 3),
}));

export function FinalCTA() {
  const { t } = useI18n();
  const f = t.finalCta;
  return (
    <section className="relative overflow-hidden py-10">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-brand-600 via-brand-500 to-violet-deep px-6 py-20 text-center text-white sm:px-16 sm:py-28">
          {/* ambient shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white/50"
                style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
                animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{
                  duration: 5 + (i % 4),
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* floating mini dashboard */}
          <motion.div
            className="pointer-events-none absolute left-10 top-16 hidden w-44 rotate-[-6deg] lg:block"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass rounded-2xl p-3 text-left shadow-glass">
              <p className="text-[9px] font-medium text-ink-muted">{f.atWork}</p>
              <p className="text-sm font-bold text-ink">
                {CONFIG.hero.atWork} / {CONFIG.hero.total}
              </p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-mist-200">
                <div className="h-full w-[88%] rounded-full bg-brand-500" />
              </div>
              <div className="mt-2 flex -space-x-1.5">
                {t.roster.slice(0, 3).map((r) => (
                  <Avatar key={r.name} name={r.name} size={18} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute right-12 bottom-16 hidden w-40 rotate-[6deg] lg:block"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass flex items-center gap-2 rounded-2xl p-3 shadow-glass">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-bold text-ink">{f.kpiShort}</p>
            </div>
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-h2 font-bold">{f.title}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
                {f.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button as="a" href="#contact" size="lg" variant="light" withArrow>
                  {f.primaryCta}
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  variant="outline-light"
                >
                  {f.secondaryCta}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
