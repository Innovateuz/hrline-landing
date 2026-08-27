import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import { useReveal } from "../../hooks/useReveal";
import { CONFIG, formatNum } from "../../data/config";
import { useI18n } from "../../i18n";
import { Icon } from "../ui/Icon";

function Amount({
  value,
  className = "",
  prefix = "",
}: {
  value: number;
  className?: string;
  prefix?: string;
}) {
  const { ref, value: v } = useCountUp(Math.abs(value));
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatNum(v)}
    </span>
  );
}

export function PayrollDashboard() {
  const { t } = useI18n();
  const s = t.payroll.slip;
  const p = CONFIG.payroll;
  const { ref, shown } = useReveal<HTMLDivElement>(0.7);

  return (
    <div
      ref={ref}
      className="perspective-2000 relative mx-auto w-full max-w-[420px]"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/25 blur-[100px]" />

      <motion.div
        className="preserve-3d glass rounded-[28px] p-3 shadow-float"
        initial={{ opacity: 0, rotateY: 14, y: 30 }}
        animate={shown ? { opacity: 1, rotateY: 7, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-[20px] bg-white ring-1 ring-mist-200">
          <div className="flex items-center justify-between bg-gradient-to-r from-brand-500 to-violet-deep px-5 py-4 text-white">
            <div>
              <p className="text-[11px] text-white/70">
                {s.title} · {s.period}
              </p>
              <p className="text-sm font-semibold">{s.name}</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
              <Icon name="wallet" className="h-5 w-5" />
            </span>
          </div>

          <div className="px-5 py-5">
            <p className="text-[11px] font-medium text-ink-muted">{s.accrued}</p>
            <p className="text-3xl font-bold tracking-tight text-ink">
              <Amount value={p.base} />{" "}
              <span className="text-base font-semibold text-ink-muted">
                {t.units.currency}
              </span>
            </p>

            <div className="mt-4 space-y-2">
              <Row label={s.worked} value={s.workedValue} />
              <Row
                label={s.penalties}
                value={
                  <Amount
                    value={p.penalty}
                    prefix="−"
                    className="text-rose-500"
                  />
                }
                accent="rose"
              />
              <Row
                label={s.bonus}
                value={
                  <Amount
                    value={p.bonus}
                    prefix="+"
                    className="text-emerald-500"
                  />
                }
                accent="emerald"
              />
            </div>

            <div className="mt-4 flex items-end justify-between rounded-2xl bg-ink px-4 py-3.5 text-white">
              <span className="text-xs font-medium text-white/60">{s.total}</span>
              <span className="text-2xl font-bold">
                <Amount value={p.total} />{" "}
                <span className="text-sm font-semibold text-white/60">
                  {t.units.currency}
                </span>
              </span>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-xl bg-brand-50 py-2.5 text-[12px] font-bold text-brand-700">
                {s.downloadPdf}
              </button>
              <button className="flex-1 rounded-xl border border-mist-200 py-2.5 text-[12px] font-bold text-ink">
                {s.printSlip}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-4 bottom-10 sm:-left-12"
        initial={{ opacity: 0, x: -20 }}
        animate={shown ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="animate-float rounded-2xl border border-white/70 bg-white p-3 shadow-float">
          <p className="text-[9px] text-ink-muted">{s.calcTook}</p>
          <p className="text-base font-bold text-brand-600">{s.calcValue}</p>
        </div>
      </motion.div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: React.ReactNode;
  accent?: "rose" | "emerald";
}) {
  const bg =
    accent === "rose"
      ? "bg-rose-50"
      : accent === "emerald"
      ? "bg-emerald-50"
      : "bg-mist";
  return (
    <div
      className={`flex items-center justify-between rounded-xl ${bg} px-3.5 py-2.5`}
    >
      <span className="text-[12px] text-ink-muted">{label}</span>
      <span className="text-[13px] font-bold text-ink">{value}</span>
    </div>
  );
}
