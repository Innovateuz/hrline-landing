import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { CONFIG } from "../../data/config";
import { useI18n } from "../../i18n";
import { Icon } from "../ui/Icon";

type Phase = "idle" | "scanning" | "verified";

export function FaceIdTerminal() {
  const { t } = useI18n();
  const term = t.attendance.terminal;
  const tg = t.attendance.telegram;
  const { ref, shown } = useReveal<HTMLDivElement>(0.6);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!shown) return;
    let t: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setPhase("scanning");
      t = setTimeout(() => {
        setPhase("verified");
        t = setTimeout(() => {
          setPhase("idle");
          t = setTimeout(cycle, 900);
        }, 3200);
      }, 2600);
    };
    t = setTimeout(cycle, 600);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div ref={ref} className="perspective-2000 relative mx-auto w-full max-w-[420px]">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[100px]" />

      <motion.div
        className="preserve-3d"
        initial={{ opacity: 0, rotateY: -18, y: 30 }}
        animate={shown ? { opacity: 1, rotateY: -9, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* terminal body */}
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#2A2652] to-[#17142F] p-4 shadow-[0_50px_100px_-30px_rgba(76,29,149,0.6)] ring-1 ring-white/10">
          {/* camera bar */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {term.name}
            </span>
            <span
              className={`h-2 w-2 rounded-full ${
                phase === "scanning"
                  ? "bg-brand-400 animate-pulse"
                  : phase === "verified"
                  ? "bg-emerald-400"
                  : "bg-white/20"
              }`}
            />
          </div>

          {/* screen */}
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[22px] bg-[#0C0A1E] ring-1 ring-white/10">
            {/* depth grid */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(#818CF8 1px,transparent 1px),linear-gradient(90deg,#818CF8 1px,transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* biometric face mesh */}
            <div className="absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 120 132" className="h-[78%] w-[78%]">
                <defs>
                  <linearGradient id="faceg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#A5ABFF" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>

                {/* head contour */}
                <path
                  d="M60 8c19 0 30 14 31 33 1 10-2 17-4 25-2 9-9 20-15 26-5 5-8 7-12 7s-7-2-12-7c-6-6-13-17-15-26-2-8-5-15-4-25C31 22 41 8 60 8Z"
                  fill="none"
                  stroke="url(#faceg)"
                  strokeWidth="1.6"
                  opacity={phase === "verified" ? 0.9 : 0.55}
                />

                {/* triangulated mesh */}
                <g
                  stroke="url(#faceg)"
                  strokeWidth="0.7"
                  fill="none"
                  opacity={phase === "idle" ? 0.28 : 0.6}
                  style={{ transition: "opacity .5s" }}
                >
                  <path d="M60 14v104M38 30l44 0M34 52l52 0M36 78l48 0M44 100l32 0" />
                  <path d="M38 30 34 52 36 78 44 100 60 118 76 100 84 78 86 52 82 30Z" />
                  <path d="M34 52 60 40 86 52M36 78 60 64 84 78M60 14 38 30 34 52 60 64 86 52 82 30Z" />
                  <path d="M44 100 60 88 76 100M60 64 44 100M60 64 76 100" />
                </g>

                {/* feature landmarks */}
                <g>
                  {(
                    [
                      [48, 50], [72, 50], [60, 62], [50, 76], [70, 76],
                      [60, 82], [44, 40], [76, 40], [60, 40], [60, 100],
                      [38, 64], [82, 64],
                    ] as const
                  ).map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={i < 3 ? 1.8 : 1.3}
                      fill={phase === "verified" ? "#6EE7B7" : "#C4C9FF"}
                      initial={{ opacity: 0.2 }}
                      animate={
                        phase === "scanning"
                          ? { opacity: [0.2, 1, 0.4], scale: [1, 1.4, 1] }
                          : { opacity: phase === "verified" ? 0.95 : 0.35, scale: 1 }
                      }
                      transition={{
                        duration: 1.3,
                        delay: (i % 6) * 0.09,
                        repeat: phase === "scanning" ? Infinity : 0,
                      }}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* corner brackets */}
            {["left-4 top-4 border-l-2 border-t-2", "right-4 top-4 border-r-2 border-t-2", "left-4 bottom-4 border-l-2 border-b-2", "right-4 bottom-4 border-r-2 border-b-2"].map(
              (c) => (
                <span
                  key={c}
                  className={`absolute h-6 w-6 rounded-[3px] ${c} ${
                    phase === "verified" ? "border-emerald-400" : "border-brand-400/80"
                  } transition-colors`}
                />
              )
            )}

            {/* scanning line */}
            {phase === "scanning" && (
              <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
                <div className="absolute inset-x-0 h-[40%] animate-scan bg-gradient-to-b from-transparent via-brand-400/30 to-transparent">
                  <div className="absolute bottom-0 h-px w-full bg-brand-300 shadow-[0_0_12px_2px_rgba(129,140,248,0.9)]" />
                </div>
              </div>
            )}

            {/* status pill */}
            <div className="absolute inset-x-0 bottom-0 p-3">
              <AnimatePresence mode="wait">
                {phase === "scanning" && (
                  <motion.div
                    key="scan"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200 backdrop-blur"
                  >
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brand-300" />
                    Scanning
                  </motion.div>
                )}
                {phase === "verified" && (
                  <motion.div
                    key="ver"
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-xl bg-emerald-500/15 p-3 text-center ring-1 ring-emerald-400/30 backdrop-blur"
                  >
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                      <Icon name="check" className="h-4 w-4" />
                      Verified
                    </div>
                    <p className="mt-2 text-lg font-bold tabular-nums text-white">
                      {CONFIG.attendance.time}
                    </p>
                    <p className="text-[13px] font-medium text-white/90">
                      {term.verifiedName}
                    </p>
                    <p className="text-[11px] font-semibold text-emerald-300">
                      {term.status}
                    </p>
                  </motion.div>
                )}
                {phase === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
                  >
                    {term.idle}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* base */}
          <div className="mx-auto mt-3 h-1.5 w-1/3 rounded-full bg-white/10" />
        </div>

        {/* Telegram notification card */}
        <motion.div
          className="absolute -bottom-8 right-2 w-[200px] sm:-right-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: phase === "verified" ? 1 : 0.4,
            y: phase === "verified" ? 0 : 14,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-float rounded-2xl border border-white/70 bg-white p-3 shadow-float">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-sky-100 text-sky-600">
                <Icon name="telegram" className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-bold text-ink">{tg.app}</span>
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-ink-muted">
              {tg.message}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
