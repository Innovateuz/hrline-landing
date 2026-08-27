import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SCREENS } from "./PhoneScreens";

interface PhoneMockupProps {
  count: number;
  activeIndex?: number;
  onCycle?: (index: number) => void;
  className?: string;
  interval?: number;
  floating?: boolean;
}

export function PhoneMockup({
  count,
  activeIndex,
  onCycle,
  className = "",
  interval = 3400,
  floating = true,
}: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [index, setIndex] = useState(0);

  const controlled = activeIndex != null;
  const current = controlled ? activeIndex! : index % count;

  useEffect(() => {
    if (controlled || !inView) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % count;
        onCycle?.(next);
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [controlled, inView, interval, count, onCycle]);

  const Screen = SCREENS[current] ?? SCREENS[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        className={`relative mx-auto w-[248px] rounded-[42px] border border-white/70 bg-gradient-to-b from-[#f3f3fb] to-white p-2.5 shadow-float ${
          floating ? "animate-float-slow" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-[34px] bg-white ring-1 ring-mist-200">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div className="min-h-[440px] bg-gradient-to-b from-brand-50/40 to-white px-3.5 pb-5 pt-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <span className="absolute -right-1 top-28 h-14 w-1 rounded-full bg-mist-200" />
      </div>

      <div className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300/25 blur-[90px]" />
    </div>
  );
}
