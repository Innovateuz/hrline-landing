import { useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

interface ParallaxValues {
  /** -0.5 .. 0.5 relative to the tracked container */
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/** Tracks the pointer over `ref` and returns smoothed -0.5..0.5 offsets. */
export function usePointerParallax(
  ref: React.RefObject<HTMLElement>
): ParallaxValues {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width - 0.5);
      rawY.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, rawX, rawY]);

  return { x, y };
}
