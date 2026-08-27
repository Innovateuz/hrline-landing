import { useEffect, useRef, useState } from "react";

/**
 * Reliable "is this element scrolled into view yet" flag.
 *
 * Uses a direct geometry check on every scroll/resize instead of relying solely
 * on IntersectionObserver — the latter can miss fast programmatic scrolls
 * (hash-link jumps, smooth-scroll libraries), which left sections stuck hidden.
 * Once revealed it never hides again.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.88
) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * threshold && r.bottom > 0) setShown(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const settle = setTimeout(check, 250);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(settle);
    };
  }, [shown, threshold]);

  return { ref, shown };
}
