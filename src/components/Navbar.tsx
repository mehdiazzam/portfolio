import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";
import { isNavItemActive, navItems, scrollToSection } from "../lib/navigation";
import type { MouseEvent } from "react";

export function Navbar() {
  const activeSection = useActiveSection();

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      {/* Mobile header — compact, thumb-friendly actions */}
      <header className="mobile-header flex lg:hidden">
        <div className="mobile-header-inner">
          <a
            href="#hero"
            onClick={(event) => handleNavClick(event, "#hero")}
            className="absolute left-4 font-display text-lg font-semibold tracking-tight text-accent"
            aria-label="Back to home"
          >
            Portfolio
          </a>

          <div className="flex gap-2">
            <ThemeToggle className="mobile-icon-btn" />
            <a
              href={`${import.meta.env.BASE_URL}Mehdi_azzam.docx`}
              download
              aria-label="Download CV"
              className="mobile-icon-btn text-accent"
            >
              <Download size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-64 lg:flex-col lg:justify-between lg:border-r lg:border-line/60 lg:bg-canvas/90 lg:backdrop-blur-md">
        <div className="flex flex-col gap-6 px-6 py-8">
          <a
            href="#hero"
            onClick={(event) => handleNavClick(event, "#hero")}
            className="font-display text-2xl font-semibold tracking-tight text-accent"
          >
            Portfolio
          </a>

          <nav className="flex flex-col gap-1" aria-label="Primary">
            {navItems.map((item) => {
              const active = isNavItemActive(activeSection, item.id);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  aria-current={active ? "true" : undefined}
                  className={`rounded-sm px-3 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-muted hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-3 px-6 py-6">
          <ThemeToggle className="rounded-sm border border-line px-3 py-2 text-ink-muted transition hover:border-accent hover:text-accent" />
          <a
            href={`${import.meta.env.BASE_URL}Mehdi_Azzam_CV.docx`}
            download
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
          >
            Download CV
            <Download size={14} />
          </a>
        </div>
      </aside>
    </>
  );
}
