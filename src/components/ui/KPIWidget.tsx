import { Icon } from "./Icon";
import { useI18n } from "../../i18n";

/** Mini UI visualization inside a KPI card. Animates on parent .group hover. */
export function KPIWidget({ type }: { type: string }) {
  const { t } = useI18n();
  const w = t.kpi.widgets;

  switch (type) {
    case "metrics": {
      const vals = [82, 64, 91];
      return (
        <div className="space-y-2">
          {w.metrics.map((k, i) => (
            <div key={k}>
              <div className="flex justify-between text-[10px] font-medium text-ink-muted">
                <span>{k}</span>
                <span>{vals[i]}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-mist-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-400 to-violet-deep transition-[width] duration-700 ease-out group-hover:delay-100"
                  style={{ width: `${vals[i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "formulas":
      return (
        <div className="grid grid-cols-2 gap-1.5">
          {w.formulas.map((f, i) => (
            <div
              key={f}
              className="rounded-lg border border-mist-200 bg-white px-2 py-1.5 text-[10px] font-semibold text-ink transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {w.formulaPrefix} · {f}
            </div>
          ))}
        </div>
      );

    case "templates":
      return (
        <div className="flex flex-wrap gap-1.5">
          {w.templates.map((tpl) => (
            <span
              key={tpl}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-medium text-brand-700 transition-colors group-hover:bg-brand-100"
            >
              {tpl}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-brand-200 px-2.5 py-1 text-[10px] font-medium text-brand-500">
            {w.templatesLaunch}
          </span>
        </div>
      );

    case "proof":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-lg bg-mist px-2.5 py-2 text-[10px]">
            <span className="font-semibold text-ink">{w.deadline}</span>
            <span className="font-medium text-ink-muted">{w.deadlineValue}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[10px] text-emerald-700 transition-transform duration-300 group-hover:scale-[1.02]">
            <Icon name="check" className="h-3.5 w-3.5" />
            <span className="font-semibold">{w.proofAttached}</span>
          </div>
        </div>
      );

    case "status": {
      const tones = ["brand", "amber", "emerald"];
      const widths = [60, 30, 100];
      return (
        <div className="space-y-1.5">
          {w.status.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  tones[i] === "brand"
                    ? "bg-brand-500"
                    : tones[i] === "amber"
                    ? "bg-amber-400"
                    : "bg-emerald-400"
                }`}
              />
              <span className="w-20 text-[10px] font-medium text-ink-muted">
                {label}
              </span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-mist-200">
                <div
                  className={`h-full rounded-full ${
                    tones[i] === "brand"
                      ? "bg-brand-500"
                      : tones[i] === "amber"
                      ? "bg-amber-400"
                      : "bg-emerald-400"
                  }`}
                  style={{ width: `${widths[i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "bonus":
      return (
        <div className="flex items-center justify-between rounded-xl bg-gradient-to-br from-brand-500 to-violet-deep px-3.5 py-3 text-white transition-transform duration-300 group-hover:scale-[1.02]">
          <div>
            <p className="text-[10px] text-white/70">{w.score}</p>
            <p className="text-sm font-bold">{w.bonus}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-[13px] font-bold">
            92
          </span>
        </div>
      );

    default:
      return null;
  }
}
