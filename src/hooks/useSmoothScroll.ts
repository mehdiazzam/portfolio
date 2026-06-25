import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useSmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const anchorClickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest(
        'a[href^="#"], a[href^="#"][data-scroll-ignore]'
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || hash.startsWith("#/")) return;
      if (anchor.hasAttribute("data-scroll-ignore")) return;

      const section = document.querySelector(hash);
      if (!section) return;

      event.preventDefault();
      // Avoid browser re-navigation artifacts that can leave the UI in a
      // broken click/scroll state.
      window.history.pushState(null, "", hash);
      lenis.scrollTo(section as HTMLElement, { duration: 1.05 });
    };

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    window.addEventListener("click", anchorClickHandler);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("click", anchorClickHandler);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
}
