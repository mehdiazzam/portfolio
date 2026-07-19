import { User, Wrench, FolderOpen, Mail, FileDown, Briefcase } from "lucide-react";
import { MagneticButton } from "./common/MagneticButton";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection, type SectionId } from "../hooks/useActiveSection";

const navItems: { id: SectionId; label: string; href: string; icon: typeof User }[] = [
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "skills", label: "Skills", href: "#skills", icon: Wrench },
  { id: "projects", label: "Projects", href: "#projects", icon: FolderOpen },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  compact = false,
}: {
  href: string;
  label: string;
  icon: typeof User;
  isActive: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <a
        href={href}
        aria-label={label}
        aria-current={isActive ? "true" : undefined}
        className={`flex h-10 w-10 items-center justify-center rounded-sm transition ${
          isActive
            ? "bg-accent text-canvas"
            : "text-ink-muted hover:bg-panel hover:text-accent"
        }`}
      >
        <Icon size={18} strokeWidth={1.75} />
      </a>
    );
  }

  return (
    <a
      href={href}
      aria-current={isActive ? "true" : undefined}
      className={`group relative flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition ${
        isActive
          ? "bg-accent/10 text-ink"
          : "text-ink-muted hover:bg-panel/80 hover:text-accent"
      }`}
    >
      {isActive ? (
        <span
          className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-accent"
          aria-hidden
        />
      ) : null}
      <span
        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition ${
          isActive
            ? "border-accent/30 bg-accent text-canvas"
            : "border-line bg-panel/60 group-hover:border-accent/40"
        }`}
      >
        <Icon size={16} strokeWidth={1.75} />
      </span>
      <span className="font-medium tracking-tight">{label}</span>
    </a>
  );
}

export function SideRail() {
  const activeSection = useActiveSection();

  return (
    <>
      {/* Desktop side rail */}
      <aside
        className="fixed inset-y-0 left-0 z-50 hidden w-[var(--rail-width)] flex-col border-r border-accent/20 bg-canvas/90 backdrop-blur-md lg:flex"
        aria-label="Site navigation"
      >
        <div className="flex flex-col gap-1 px-4 py-8">
          <a
            href="#hero"
            className="mb-6 flex items-center gap-3 px-3 transition hover:opacity-90"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 font-display text-sm font-semibold tracking-tight text-accent">
              MA
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-ink">Portfolio</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Frontend
              </span>
            </span>
          </a>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={activeSection === item.id}
              />
            ))}
          </nav>
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-line px-4 py-6">
          <ThemeToggle className="w-full rounded-sm border border-line px-3 py-2.5 text-ink-muted transition hover:border-accent hover:text-accent" />
          <MagneticButton
            href={`${import.meta.env.BASE_URL}Mehdi_azzam.pdf`}
            download
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-line bg-panel px-3 py-2.5 text-sm font-medium text-ink shadow-soft transition hover:border-accent hover:text-accent"
          >
            <FileDown size={16} />
            Resume
          </MagneticButton>
        </div>
      </aside>

      {/* Mobile bottom dock */}
      <nav
        className="mobile-dock fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-2 border-t border-accent/30 bg-canvas/95 px-4 py-3 backdrop-blur-md lg:hidden"
        aria-label="Site navigation"
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.id}
              compact
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle className="rounded-sm border border-line px-3 py-2 text-ink-muted transition hover:border-accent hover:text-accent" />
          <MagneticButton
            href={`${import.meta.env.BASE_URL}Mehdi_azzam.pdf`}
            download
            aria-label="Download resume"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-panel text-ink shadow-soft transition hover:border-accent hover:text-accent"
          >
            <FileDown size={16} />
          </MagneticButton>
        </div>
      </nav>
    </>
  );
}
