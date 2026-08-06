import {
  Braces,
  CheckCircle2,
  Coffee,
  Code2,
  BookOpen,
  GraduationCap,
  LayoutTemplate,
  Zap,
  CalendarDays,
} from "lucide-react";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { content } from "../lib/content";
import { social } from "../lib/social";

const featureIcons = {
  code: Code2,
  responsive: LayoutTemplate,
  bolt: Zap,
} as const;

const statIcons = {
  years: CalendarDays,
  projects: CheckCircle2,
  clients: Coffee,
  dedicated: Braces,
} as const;

const educationIcons = {
  grad: GraduationCap,
  book: BookOpen,
} as const;

const heroSocial = [
  { href: social.github, label: "GitHub", icon: SiGithub },
  { href: social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: social.emailHref, label: "Email", icon: Mail },
] as const;

export function IntroBoard() {
  return (
    <section id="hero" className="section-zone section-zone-muted mobile-section-page pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-5 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-14">
        {/* Intro */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="mx-auto flex w-full max-w-[10.75rem] flex-col overflow-hidden rounded-sm border border-line bg-panel shadow-[0_12px_30px_-20px_rgba(0,0,0,0.65)] sm:mx-0 sm:shrink-0 sm:max-w-[11.5rem]">
              <img
                src={`${import.meta.env.BASE_URL}mehdi.jpg`}
                alt={content.name}
                className="aspect-square w-full object-cover"
              />
              <p className="border-t border-accent/70 bg-panel px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {content.name}
              </p>
            </div>

            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {content.role}
              </p>
              <h1 className="text-[clamp(2rem,4vw,3.1rem)] leading-[1.05] text-ink">
                {content.hero.greeting}{" "}
                <span className="text-accent">{content.hero.highlightName}</span>{" "}
                {content.hero.lastName}
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                {content.hero.headline}
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {content.hero.features.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <li
                  key={feature.label}
                  className="flex items-start gap-3 border-t border-line/70 pt-3 text-sm text-ink"
                >
                  <span className="mt-0.5 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span>{feature.label}</span>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {heroSocial.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink-muted transition hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="relative scroll-mt-24">
          <span
            className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-semibold leading-none text-accent/[0.08] lg:text-[9rem]"
            aria-hidden
          >
            01
          </span>
          <div className="relative flex flex-col gap-6">
            <div>
              <p className="eyebrow">{content.experience.eyebrow}</p>
              <div className="copper-divider mt-3" />
              <h2 className="mt-4 max-w-md text-2xl text-ink lg:text-[1.75rem]">
                {content.experience.headline}
              </h2>
            </div>

            <ol className="relative ml-2 border-l border-accent/40 pl-7">
              {content.experience.items.map((item) => (
                <li key={item.role} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[2.05rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-canvas"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-ink">{item.role}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* About */}
        <div id="about" className="relative scroll-mt-24">
          <div className="flex flex-col gap-6">
            <div>
              <p className="eyebrow">{content.about.eyebrow}</p>
              <div className="copper-divider mt-3" />
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {content.about.body}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {content.about.stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-3 rounded-sm border border-line/80 bg-panel/40 p-4"
                  >
                    <Icon size={22} className="text-accent" strokeWidth={1.75} />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="relative scroll-mt-24">
          <span
            className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-semibold leading-none text-accent/[0.08] lg:text-[9rem]"
            aria-hidden
          >
            02
          </span>
          <div className="relative flex flex-col gap-6">
            <div>
              <p className="eyebrow">{content.education.eyebrow}</p>
              <div className="copper-divider mt-3" />
            </div>

            <ul className="flex flex-col gap-5">
              {content.education.items.map((item) => {
                const Icon = educationIcons[item.icon];
                return (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-lg font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">{item.place}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
