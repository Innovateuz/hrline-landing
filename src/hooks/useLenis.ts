import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth inertia scrolling + smooth in-page anchor navigation.
 * Falls back to native behaviour when the user prefers reduced motion.
 */
export function useLenis() {
  useEffect(() => {
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(window.location.search).has("nolenis");

    const scrollToHash = (hash: string, instant = false) => {
      const el = document.querySelector(hash);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, {
          offset: -80,
          immediate: instant,
          duration: instant ? 0 : 1.1,
        });
      } else {
        (el as HTMLElement).scrollIntoView({
          behavior: instant ? "auto" : "smooth",
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    let lenis: Lenis | null = null;
    let raf = 0;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      });
      const loop = (time: number) => {
        lenis!.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    document.addEventListener("click", onClick);

    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash, true), 60);
    }

    return () => {
      document.removeEventListener("click", onClick);
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}
