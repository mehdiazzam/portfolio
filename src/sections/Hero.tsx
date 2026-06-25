import { ChevronDown, MapPin } from "lucide-react";
import { AnimatedText } from "../components/common/AnimatedText";
import { MagneticButton } from "../components/common/MagneticButton";
import type { Locale } from "../lib/content";
import { content } from "../lib/content";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const copy = content[locale];

  return (
    <section
      id="hero"
      className="section-zone section-zone-hero relative flex min-h-[100dvh] reveal-section"
    >
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[20vw] font-semibold leading-none text-accent/[0.04] lg:left-auto lg:right-16 lg:translate-x-0"
        aria-hidden
      >
        MA
      </span>

      <div className="content-shell flex flex-1 flex-col justify-center gap-8 pb-16 pt-8 lg:items-start lg:pb-24">
        <span className="eyebrow inline-flex w-fit rounded-sm border border-accent/30 bg-accent/10 px-4 py-1.5">
          {copy.role}
        </span>
        <div className="border-b-2 border-accent/40 pb-4">
          <AnimatedText text={copy.name} className="text-ink" />
        </div>
        <p className="max-w-xl text-lg flex items-center gap-2">
          <MapPin size={18} className="shrink-0 text-accent" />
          {copy.hero.headline}
        </p>
        <div className="flex flex-wrap gap-4">
          <MagneticButton href="#projects" className="btn-primary">
            {copy.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            {copy.hero.ctaSecondary}
          </MagneticButton>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.28em] text-accent/70 transition hover:text-accent lg:left-auto lg:right-16 lg:translate-x-0"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <ChevronDown size={18} className="animate-pulse-copper" />
      </a>
    </section>
  );
}
