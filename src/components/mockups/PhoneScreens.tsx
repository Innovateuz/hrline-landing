import { Donut } from "../ui/Donut";
import { Icon } from "../ui/Icon";
import { CONFIG, formatNum } from "../../data/config";
import { useI18n } from "../../i18n";

function ScreenHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-1 pb-3">
      <span className="text-[13px] font-bold text-ink">{title}</span>
      <span className="grid h-6 w-6 place-items-center rounded-full bg-mist text-ink-muted">
        <Icon name="bell" className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function Home() {
  const { t } = useI18n();
  const s = t.mobileApp.screen;
  return (
    <div>
      <ScreenHeader title={t.mobileApp.screens[0]} />
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-violet-deep p-3.5 text-white">
        <p className="text-[10px] text-white/70">{s.earnedMonth}</p>
        <p className="text-xl font-bold">
          {formatNum(CONFIG.payroll.base)} {t.units.currency}
        </p>
        <div className="mt-2 flex gap-2 text-[9px]">
          <span className="rounded-full bg-white/15 px-2 py-0.5">
            {CONFIG.payroll.hours} {t.units.hoursShort}
          </span>
          <span className="rounded-full bg-white/15 px-2 py-0.5">
            {s.shiftActive}
          </span>
        </div>
      </div>
      <button className="mt-3 w-full rounded-xl bg-brand-50 py-2.5 text-[12px] font-bold text-brand-700">
        {s.checkIn} · 08:47
      </button>
      <div className="mt-3 space-y-2">
        {[s.todayTasks, s.attendanceHistory, s.leave].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-mist-100 px-3 py-2.5"
          >
            <span className="text-[11px] font-medium text-ink">{label}</span>
            <Icon name="arrow" className="h-3.5 w-3.5 text-ink-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Attendance() {
  const { t } = useI18n();
  const s = t.mobileApp.screen;
  return (
    <div>
      <ScreenHeader title={t.mobileApp.screens[1]} />
      <div className="flex items-center justify-center py-2">
        <Donut value={96} size={120} label="96%" sub={s.forMonth} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          [s.onTime, s.onTimeValue],
          [s.late, s.lateValue],
          [s.overtime, s.overtimeValue],
          [s.absences, "0"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-mist p-2.5">
            <p className="text-[9px] text-ink-muted">{k}</p>
            <p className="text-[12px] font-bold text-ink">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-mist-100 p-2.5">
        <div className="flex h-12 items-end gap-1">
          {CONFIG.weekBars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Salary() {
  const { t } = useI18n();
  const s = t.mobileApp.screen;
  const p = CONFIG.payroll;
  return (
    <div>
      <ScreenHeader title={t.mobileApp.screens[2]} />
      <div className="rounded-2xl bg-ink p-3.5 text-white">
        <p className="text-[10px] text-white/60">{s.totalPayable}</p>
        <p className="text-2xl font-bold">{formatNum(p.total)}</p>
        <p className="text-[10px] text-white/60">
          {t.units.currency} · {s.forAugust}
        </p>
      </div>
      <div className="mt-3 space-y-1.5 text-[11px]">
        {[
          [s.worked, s.workedValue, "text-ink"],
          [s.penalties, `−${formatNum(p.penalty)}`, "text-rose-500"],
          [s.bonus, `+${formatNum(p.bonus)}`, "text-emerald-500"],
        ].map(([k, v, c]) => (
          <div
            key={k}
            className="flex items-center justify-between rounded-lg bg-mist px-3 py-2"
          >
            <span className="text-ink-muted">{k}</span>
            <span className={`font-bold ${c}`}>{v}</span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full rounded-xl bg-brand-500 py-2.5 text-[12px] font-bold text-white">
        {s.downloadPdf}
      </button>
    </div>
  );
}

function Tasks() {
  const { t } = useI18n();
  const s = t.mobileApp.screen;
  const rows: [string, "done" | "photo" | "active", string][] = [
    [s.taskOpen, "done", "09:00"],
    [s.taskPhoto, "photo", "12:30"],
    [s.taskReport, "active", "17:00"],
  ];
  return (
    <div>
      <ScreenHeader title={t.mobileApp.screens[3]} />
      <div className="space-y-2">
        {rows.map(([label, state, time]) => (
          <div key={label} className="rounded-xl border border-mist-100 p-2.5">
            <div className="flex items-center gap-2">
              <span
                className={`grid h-5 w-5 place-items-center rounded-full ${
                  state === "done"
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon
                  name={state === "done" ? "check" : "clock"}
                  className="h-3 w-3"
                />
              </span>
              <span className="flex-1 text-[11px] font-semibold text-ink">
                {label}
              </span>
              <span className="text-[9px] text-ink-muted">{time}</span>
            </div>
            {state === "photo" && (
              <div className="mt-2 flex items-center gap-1 text-[9px] text-brand-600">
                <Icon name="target" className="h-3 w-3" /> {s.photoGeo}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Vacation() {
  const { t } = useI18n();
  const s = t.mobileApp.screen;
  return (
    <div>
      <ScreenHeader title={t.mobileApp.screens[4]} />
      <div className="rounded-2xl bg-gradient-to-br from-violet-soft to-brand-600 p-3.5 text-white">
        <Icon name="plane" className="h-5 w-5" />
        <p className="mt-2 text-[11px] text-white/80">{s.daysAvailable}</p>
        <p className="text-2xl font-bold">14</p>
      </div>
      <div className="mt-3 space-y-2 text-[11px]">
        <div className="rounded-xl border border-mist-100 px-3 py-2.5">
          <p className="text-ink-muted">{s.from}</p>
          <p className="font-bold text-ink">{s.dateFrom}</p>
        </div>
        <div className="rounded-xl border border-mist-100 px-3 py-2.5">
          <p className="text-ink-muted">{s.to}</p>
          <p className="font-bold text-ink">{s.dateTo}</p>
        </div>
      </div>
      <button className="mt-3 w-full rounded-xl bg-brand-500 py-2.5 text-[12px] font-bold text-white">
        {s.submitRequest}
      </button>
    </div>
  );
}

/** Ordered to match dict `mobileApp.screens`. */
export const SCREENS = [Home, Attendance, Salary, Tasks, Vacation];
