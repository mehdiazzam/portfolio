import type { MouseEvent } from "react";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { content } from "../lib/content";
import { scrollToSection } from "../lib/navigation";
import { social } from "../lib/social";

const heroSocial = [
  { href: social.github, label: "GitHub", icon: SiGithub },
  { href: social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: social.emailHref, label: "Email", icon: Mail },
] as const;

export function IntroBoard() {
  const handleJump = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <section id="hero" className="section-zone mobile-section-page">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:gap-8 sm:px-5 sm:py-12 lg:px-10 lg:py-16">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-10">
          <div className="w-48 shrink-0 overflow-hidden rounded-sm border border-line bg-panel shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] sm:w-56 lg:w-64">
            <img
              src={`${import.meta.env.BASE_URL}mehdi.jpg`}
              alt={content.name}
              className="aspect-square w-full object-cover"
            />
            <p className="border-t border-accent/70 bg-panel px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              {content.name}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {content.role}
            </p>
            <h1 className="text-[clamp(2.4rem,8vw,3.4rem)] leading-[1.02] text-ink sm:text-[clamp(2.6rem,4vw,3.6rem)]">
              {content.hero.greeting}{" "}
              <span className="text-accent">{content.hero.highlightName}</span>{" "}
              {content.hero.lastName}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
              {content.location}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {content.hero.headline}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
          <a
            href="#projects"
            onClick={(event) => handleJump(event, "#projects")}
            className="btn-primary w-full justify-center sm:w-auto"
          >
            View work
          </a>
          <a
            href="#contact"
            onClick={(event) => handleJump(event, "#contact")}
            className="btn-ghost w-full justify-center sm:w-auto"
          >
            Contact
          </a>
        </div>

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
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink-muted transition hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
