import type { MouseEvent } from "react";
import { Home, User, FolderKanban, Wrench, Mail } from "lucide-react";
import { useActiveSection, type SectionId } from "../hooks/useActiveSection";
import { isNavItemActive, navItems, scrollToSection } from "../lib/navigation";

const navIcons: Record<SectionId, typeof Home> = {
  hero: Home,
  experience: Home,
  about: User,
  education: User,
  projects: FolderKanban,
  skills: Wrench,
  contact: Mail,
};

export function MobileBottomNav() {
  const activeSection = useActiveSection();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav
      className="mobile-bottom-nav lg:hidden"
      aria-label="Mobile section navigation"
    >
      <div className="mobile-bottom-nav-inner">
        {navItems.map((item) => {
          const active = isNavItemActive(activeSection, item.id);
          const Icon = navIcons[item.id];

          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={active ? "true" : undefined}
              onClick={(event) => handleClick(event, item.href)}
              className={`mobile-bottom-nav-item ${active ? "is-active" : ""}`}
            >
              <Icon size={20} strokeWidth={active ? 2.25 : 1.75} aria-hidden />
              <span>{item.shortLabel}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
