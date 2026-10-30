import { BookOpen, CalendarDays, FolderKanban, GraduationCap } from "lucide-react";
import { content } from "../lib/content";
import { projects } from "../lib/projects";

const educationIcons = {
  grad: GraduationCap,
  book: BookOpen,
} as const;

const facts = [
  {
    value: "2+",
    label: "Years",
    icon: CalendarDays,
  },
  {
    value: String(projects.length),
    label: "Products",
    icon: FolderKanban,
  },
  {
    value: "SVU",
    label: "University",
    icon: GraduationCap,
  },
] as const;

export function About() {
  return (
    <section id="about" className="section-zone reveal-section scroll-mt-nav">
      <div className="content-shell">
        <div className="section-header max-w-2xl">
          <p className="eyebrow">{content.about.eyebrow}</p>
          <div className="copper-divider" />
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{content.about.body}</p>
        </div>

        <ul className="grid grid-cols-3 gap-2 sm:gap-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <li
                key={fact.label}
                className="flex min-h-[7.5rem] flex-col justify-between gap-3 rounded-sm border border-line/80 bg-panel/40 p-3 sm:p-4"
              >
                <Icon size={18} className="text-accent" strokeWidth={1.75} />
                <div>
                  <p className="font-display text-2xl leading-none text-ink sm:text-3xl">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-ink-muted sm:text-xs">
                    {fact.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div id="experience" className="scroll-mt-nav flex flex-col gap-6">
          <div>
            <p className="eyebrow">{content.experience.eyebrow}</p>
            <div className="copper-divider mt-3" />
            <h2 className="mt-4 max-w-xl text-2xl text-ink lg:text-[1.75rem]">
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

        <div id="education" className="scroll-mt-nav flex flex-col gap-5">
          <div>
            <p className="eyebrow">{content.education.eyebrow}</p>
            <div className="copper-divider mt-3" />
          </div>

          <ul className="flex flex-col gap-5">
            {content.education.items.map((item) => {
              const Icon = educationIcons[item.icon];
              const isDegree = item.icon === "grad";

              return (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className={`inline-flex shrink-0 items-center justify-center rounded-full border text-accent ${
                      isDegree
                        ? "h-12 w-12 border-accent/40"
                        : "h-10 w-10 border-line text-ink-muted"
                    }`}
                  >
                    <Icon size={isDegree ? 20 : 16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        isDegree ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {item.period}
                    </p>
                    <h3
                      className={`mt-1 font-medium ${
                        isDegree ? "text-lg text-ink" : "text-base text-ink-muted"
                      }`}
                    >
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
    </section>
  );
}
