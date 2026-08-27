import { motion, useTransform, type MotionValue } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { Donut } from "../ui/Donut";
import { Icon } from "../ui/Icon";
import { CONFIG, formatNum } from "../../data/config";
import { useI18n } from "../../i18n";

interface Props {
  px: MotionValue<number>;
  py: MotionValue<number>;
}

const rosterMeta = [
  { in: "09:02", status: "ok" },
  { in: "08:47", status: "ok" },
  { in: "09:15", status: "late" },
  { in: "—", status: "off" },
];

const statusDot: Record<string, string> = {
  ok: "bg-emerald-400",
  late: "bg-amber-400",
  off: "bg-mist-200",
};

function FloatCard({
  className,
  children,
  delay = 0,
  depth = 60,
  px,
  py,
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
  depth?: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  const tx = useTransform(px, [-0.5, 0.5], [depth * 0.5, -depth * 0.5]);
  const ty = useTransform(py, [-0.5, 0.5], [depth * 0.4, -depth * 0.4]);
  return (
    <motion.div
      style={{ x: tx, y: ty }}
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="animate-float-slow" style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

export function DashboardMockup({ px, py }: Props) {
  const { t } = useI18n();
  const d = t.dashboard;
  const bars = CONFIG.dashboardBars;
  const roster = t.roster.map((r, i) => ({ ...r, ...rosterMeta[i] }));

  const rotY = useTransform(px, [-0.5, 0.5], [10, -10]);
  const rotX = useTransform(py, [-0.5, 0.5], [-7, 7]);

  return (
    <div className="perspective-2000 relative mx-auto w-full max-w-[560px]">
      <motion.div
        className="preserve-3d relative"
        style={{ rotateX: rotX, rotateY: rotY }}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/25 blur-[90px]" />

        {/* ---- main dashboard screen ---- */}
        <div
          className="preserve-3d glass relative rounded-[26px] p-3 shadow-float"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="overflow-hidden rounded-[18px] bg-white ring-1 ring-mist-200">
            <div className="flex items-center justify-between border-b border-mist-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-brand-400 to-violet-deep">
                  <span className="h-2.5 w-2.5 rounded-sm bg-white/90" />
                </span>
                <span className="text-[13px] font-bold tracking-tight">HRline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium text-ink-muted">
                  {d.online}
                </span>
              </div>
            </div>

            <div className="flex">
              <div className="hidden w-11 flex-col items-center gap-3 border-r border-mist-100 py-4 sm:flex">
                {["chart", "face", "target", "wallet", "doc"].map((n, i) => (
                  <span
                    key={n}
                    className={`grid h-8 w-8 place-items-center rounded-lg ${
                      i === 0 ? "bg-brand-50 text-brand-600" : "text-ink-muted"
                    }`}
                  >
                    <Icon name={n} className="h-4 w-4" />
                  </span>
                ))}
              </div>

              <div className="flex-1 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-ink-muted">
                      {d.employeesToday}
                    </p>
                    <p className="text-2xl font-bold tracking-tight">
                      {CONFIG.hero.total}{" "}
                      <span className="text-sm font-semibold text-ink-muted">
                        {d.total}
                      </span>
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {roster.slice(0, 3).map((r) => (
                      <Avatar key={r.name} name={r.name} size={26} />
                    ))}
                    <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-brand-50 text-[9px] font-bold text-brand-600 ring-2 ring-white">
                      +438
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[auto_1fr] gap-4">
                  <Donut value={88} size={104} label="88%" sub={d.atWork} />
                  <div className="flex flex-col justify-center gap-2">
                    <div className="rounded-xl bg-mist p-2.5">
                      <p className="text-[10px] text-ink-muted">{d.atWork}</p>
                      <p className="text-sm font-bold text-ink">
                        {CONFIG.hero.atWork}
                      </p>
                    </div>
                    <div className="rounded-xl bg-mist p-2.5">
                      <p className="text-[10px] text-ink-muted">{d.absent}</p>
                      <p className="text-sm font-bold text-ink">
                        {CONFIG.hero.absent}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-mist-100 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-ink-muted">
                      {d.attendanceWeek}
                    </p>
                    <p className="text-[10px] font-bold text-brand-600">98%</p>
                  </div>
                  <div className="mt-2 flex h-16 items-end gap-1.5">
                    {bars.map((b, i) => (
                      <motion.span
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
                        initial={{ height: 0 }}
                        animate={{ height: `${b}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.9 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-3 space-y-1.5">
                  {roster.map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center gap-2.5 rounded-lg px-1 py-1"
                    >
                      <Avatar name={r.name} size={24} ring={false} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold text-ink">
                          {r.name}
                        </p>
                        <p className="text-[9px] text-ink-muted">{r.role}</p>
                      </div>
                      <span className="text-[10px] font-medium tabular-nums text-ink-muted">
                        {r.in}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${statusDot[r.status]}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- companion phone ---- */}
        <motion.div
          className="preserve-3d absolute -bottom-12 -left-4 w-[150px] sm:-left-24"
          style={{ transform: "translateZ(90px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <div className="animate-float rounded-[24px] border border-white/70 bg-white p-2 shadow-float">
            <div className="rounded-[16px] bg-gradient-to-b from-brand-50 to-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold text-ink-muted">
                  {d.shift}
                </p>
                <p className="text-[9px] font-semibold text-ink">08:47–18:00</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist-200">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-violet-deep" />
              </div>
              <p className="mt-2 text-[9px] text-ink-muted">{d.earnedToday}</p>
              <p className="text-[13px] font-bold text-brand-600">
                {formatNum(312000)}&nbsp;{t.units.currency}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ---- floating stat cards ---- */}
      <FloatCard
        px={px}
        py={py}
        depth={70}
        delay={0.9}
        className="-right-4 top-6 sm:-right-10"
      >
        <div className="glass flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-glass">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
            <Icon name="check" className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none text-ink">
              {d.employeesAdded}
            </p>
            <p className="text-[9px] text-ink-muted">{d.thisWeek}</p>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        px={px}
        py={py}
        depth={55}
        delay={1.05}
        className="right-2 top-1/2 sm:-right-16"
      >
        <div className="glass rounded-2xl px-3.5 py-2.5 shadow-glass">
          <p className="text-[9px] font-medium text-ink-muted">
            {d.attendanceLabel}
          </p>
          <p className="text-base font-bold text-ink">98%</p>
          <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-mist-200">
            <div className="h-full w-[98%] rounded-full bg-brand-500" />
          </div>
        </div>
      </FloatCard>

      <FloatCard
        px={px}
        py={py}
        depth={80}
        delay={1.2}
        className="left-0 -top-5 sm:-left-14"
      >
        <div className="glass flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-glass">
          <Donut value={87} size={38} stroke={5} label="87" />
          <div>
            <p className="text-[11px] font-bold leading-none text-ink">
              {d.kpiShort}
            </p>
            <p className="text-[9px] text-ink-muted">{d.companyAverage}</p>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        px={px}
        py={py}
        depth={65}
        delay={1.35}
        className="-bottom-6 right-8 sm:right-2"
      >
        <div className="glass-dark flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-white shadow-glow">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10">
            <Icon name="wallet" className="h-4 w-4" />
          </span>
          <p className="text-[11px] font-bold">{d.salaryCalculated}</p>
        </div>
      </FloatCard>
    </div>
  );
}
