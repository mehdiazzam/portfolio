import { ArrowUpRight } from "lucide-react";
import { content } from "../lib/content";
import { contactLinks } from "../lib/social";

export function Contact() {
  const emailLink = contactLinks.find((link) => link.id === "email")!;
  const whatsappLink = contactLinks.find((link) => link.id === "whatsapp")!;
  const EmailIcon = emailLink.icon;
  const WhatsAppIcon = whatsappLink.icon;

  return (
    <section
      id="contact"
      className="section-zone section-zone-muted reveal-section scroll-mt-nav"
    >
      <div className="content-shell">
        <span
          className="pointer-events-none absolute -right-0 select-none font-display text-[7rem] font-semibold leading-none text-accent/[0.08] lg:text-[9rem]"
          aria-hidden
        >
          05
        </span>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.4fr_0.6fr] lg:items-start lg:gap-10">
          <div className="section-header flex flex-col gap-6">
            <p className="eyebrow">Contact</p>
            <div className="copper-divider" />
            <h2>{content.contact.headline}</h2>
            <p className="max-w-md text-base">{content.contact.subline}</p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={emailLink.href}
              className="group accent-bar flex flex-col gap-4 rounded-sm border border-line bg-panel/60 p-6 transition hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line bg-panel text-accent">
                  <EmailIcon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    {emailLink.label}
                  </p>
                  <p className="break-all text-base font-medium text-ink">
                    {emailLink.handle}
                  </p>
                  <p className="text-sm text-ink-muted">
                    {content.contact.responseTime}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start text-sm font-medium text-accent sm:self-center">
                {content.contact.emailCta}
                <ArrowUpRight size={16} />
              </span>
            </a>

            <a
              href={whatsappLink.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-sm border border-line bg-panel/40 px-4 py-4 transition hover:border-accent/40"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-accent">
                <WhatsAppIcon size={18} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-medium text-ink">
                  {whatsappLink.label}
                </span>
                <span className="truncate text-xs text-ink-muted">
                  {whatsappLink.handle}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-ink-muted transition group-hover:text-accent"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
