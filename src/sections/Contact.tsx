import { ArrowUpRight } from "lucide-react";
import { content } from "../lib/content";
import { contactLinks, socialLinks } from "../lib/social";

const profileLinks = socialLinks.filter(
  (link) => link.id === "github" || link.id === "linkedin",
);

export function Contact() {
  const emailLink = contactLinks.find((link) => link.id === "email")!;
  const whatsappLink = contactLinks.find((link) => link.id === "whatsapp")!;
  const EmailIcon = emailLink.icon;
  const WhatsAppIcon = whatsappLink.icon;

  return (
    <section
      id="contact"
      className="section-zone band-contrast reveal-section scroll-mt-nav"
    >
      <div className="content-shell">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-12">
          <div className="section-header flex flex-col gap-5">
            <p className="eyebrow">Contact</p>
            <div className="copper-divider" />
            <h2>{content.contact.headline}</h2>
            <p className="max-w-md text-base">{content.contact.subline}</p>
            <p className="text-sm">{content.contact.responseTime}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a href={emailLink.href} className="contrast-row flex-wrap">
              <span className="contrast-icon">
                <EmailIcon size={20} strokeWidth={1.75} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.22em] text-accent">
                  {emailLink.label}
                </span>
                <span className="contrast-strong break-all text-base font-medium">
                  {emailLink.handle}
                </span>
              </span>
              <span className="inline-flex min-h-11 w-full items-center justify-end gap-1 text-sm font-medium text-accent sm:w-auto">
                {content.contact.emailCta}
                <ArrowUpRight size={16} />
              </span>
            </a>

            <a
              href={whatsappLink.href}
              target="_blank"
              rel="noreferrer"
              className="contrast-row"
            >
              <span className="contrast-icon">
                <WhatsAppIcon size={20} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.22em] text-accent">
                  {whatsappLink.label}
                </span>
                <span className="contrast-strong truncate text-base font-medium">
                  {whatsappLink.handle}
                </span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-accent" />
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              {profileLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contrast-row"
                  >
                    <span className="contrast-icon">
                      <Icon size={18} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-sm font-medium contrast-strong">
                        {link.label}
                      </span>
                      <span className="truncate text-xs">{link.handle}</span>
                    </span>
                    <ArrowUpRight size={16} className="shrink-0 text-accent" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
