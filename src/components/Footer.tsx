import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { social } from "../lib/social";

const footerSocial = [
  { href: social.emailHref, label: "Email", icon: Mail },
  { href: social.github, label: "GitHub", icon: SiGithub },
  { href: social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 bg-panel/30 py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 lg:flex-row lg:px-10">
        <span className="text-sm text-ink-muted">
          {year} Mehdi Azzam.
        </span>
        <div className="flex items-center gap-2">
          {footerSocial.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-ink-muted transition hover:border-accent hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
