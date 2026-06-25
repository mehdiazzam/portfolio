import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Locale } from "../lib/content";
import { content } from "../lib/content";
import { social, socialLinks } from "../lib/social";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const copy = content[locale];
  const emailLink = socialLinks.find((link) => link.id === "email")!;
  const profileLinks = socialLinks.filter((link) => link.id !== "email");
  const EmailIcon = emailLink.icon;

  return (
    <section id="contact" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        05
      </span>
      <div className="content-shell">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-16">
          <div className="section-header flex flex-col gap-6 lg:sticky lg:top-24">
            <p className="eyebrow">Contact</p>
            <div className="copper-divider" />
            <h2>{copy.contact.headline}</h2>
            <p className="max-w-md text-base">{copy.contact.subline}</p>
            <span className="inline-flex w-fit items-center gap-2 rounded-sm border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {copy.contact.availability}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <motion.a
              href={emailLink.href}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="group surface-card-elevated accent-bar flex flex-col gap-6 p-8 transition hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-accent/30 bg-accent text-canvas transition group-hover:brightness-110">
                  <EmailIcon size={24} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    {emailLink.label}
                  </p>
                  <p className="break-all text-lg font-medium text-ink">{social.email}</p>
                  <p className="text-sm text-ink-muted">{copy.contact.responseTime}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-canvas transition group-hover:brightness-110 sm:self-center">
                {copy.contact.emailCta}
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
                {copy.contact.socialTitle}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {profileLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.08 }}
                      className="group accent-bar flex flex-col gap-4 rounded-sm border border-line bg-panel/70 p-6 transition hover:border-accent/40 hover:bg-panel"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-panel text-accent transition group-hover:border-accent/40">
                          <Icon size={20} strokeWidth={1.75} />
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-accent/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-ink">{item.label}</p>
                        <p className="text-sm text-ink-muted">@{item.handle}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
