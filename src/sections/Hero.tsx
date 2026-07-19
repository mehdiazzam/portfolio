import { ChevronDown, MapPin } from "lucide-react";
import { AnimatedText } from "../components/common/AnimatedText";
import { MagneticButton } from "../components/common/MagneticButton";
import { content } from "../lib/content";

export function Hero() {
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

      <div className="content-shell flex flex-1 flex-col justify-center gap-7 pb-16 pt-8 lg:items-start lg:pb-24">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink-muted">
          <MapPin size={14} className="shrink-0 text-accent" />
          {content.location}
        </p>
        <div className="border-b border-accent/35 pb-4">
          <AnimatedText text={content.name} className="text-ink" />
        </div>
        <p className="max-w-xl text-lg text-ink-muted">{content.hero.headline}</p>
        <p className="text-sm text-ink-muted">{content.role}</p>
        <div className="flex flex-wrap gap-4">
          <MagneticButton href="#projects" className="btn-primary">
            {content.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            {content.hero.ctaSecondary}
          </MagneticButton>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.28em] text-accent/70 transition hover:text-accent lg:left-auto lg:right-16 lg:translate-x-0"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
