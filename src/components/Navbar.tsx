import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection, type SectionId } from "../hooks/useActiveSection";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const navItems: { id: SectionId; label: string; href: string }[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);

  const isActive = (id: SectionId) => {
    if (id === "about") {
      return activeSection === "about" || activeSection === "education";
    }
    if (id === "hero") {
      return activeSection === "hero" || activeSection === "experience";
    }
    return activeSection === id;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight text-accent"
        >
          MA.
        </a>

        <nav
          className="relative hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`relative px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active ? "text-ink" : "text-ink-muted hover:text-accent"
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    aria-hidden
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden rounded-sm border border-line px-3 py-2 text-ink-muted transition hover:border-accent hover:text-accent sm:inline-flex" />
          <a
            href={`${import.meta.env.BASE_URL}Mehdi_azzam.pdf`}
            download
            className="hidden items-center gap-2 rounded-sm border border-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-canvas sm:inline-flex"
          >
            Download CV
            <Download size={14} />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-line bg-canvas lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-sm px-3 py-3 text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive(item.id)
                      ? "bg-accent/10 text-accent"
                      : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}Mehdi_azzam.pdf`}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-3 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
              >
                Download CV
                <Download size={14} />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
