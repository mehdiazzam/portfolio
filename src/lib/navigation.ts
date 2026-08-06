import type { SectionId } from "../hooks/useActiveSection";

export const navItems: { id: SectionId; label: string; shortLabel: string; href: string }[] = [
  { id: "hero", label: "Home", shortLabel: "Home", href: "#hero" },
  { id: "about", label: "About", shortLabel: "About", href: "#about" },
  { id: "projects", label: "Projects", shortLabel: "Work", href: "#projects" },
  { id: "skills", label: "Skills", shortLabel: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", shortLabel: "Contact", href: "#contact" },
];

export function isNavItemActive(activeSection: SectionId, id: SectionId): boolean {
  if (id === "about") {
    return activeSection === "about" || activeSection === "education";
  }
  if (id === "hero") {
    return activeSection === "hero" || activeSection === "experience";
  }
  return activeSection === id;
}

export function scrollToSection(href: string): void {
  const targetId = href.replace("#", "");
  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  window.location.hash = href;
}
