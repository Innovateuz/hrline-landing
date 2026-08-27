import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";

/** Animates a number from 0 to `end` once the element scrolls into view. */
export function useCountUp(end: number, duration = 1600) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.75);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shown) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(end * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shown, end, duration]);

  return { ref, value };
}
