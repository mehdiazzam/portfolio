import { motion } from "framer-motion";
import { content } from "../lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="section-zone reveal-section">
      <span className="section-index" aria-hidden>
        02
      </span>
      <div className="content-shell">
        <div className="section-header flex flex-col gap-6">
          <p className="eyebrow">{content.experience.eyebrow}</p>
          <div className="copper-divider" />
          <h2>{content.experience.headline}</h2>
        </div>

        <ol className="relative ml-3 flex flex-col gap-0 border-l border-accent/35 pl-8 lg:ml-4 lg:pl-10">
          {content.experience.items.map((item, index) => (
            <motion.li
              key={item.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="relative pb-12 last:pb-0"
            >
              <span
                className="absolute -left-[2.15rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-canvas lg:-left-[2.65rem]"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-display text-xs uppercase tracking-[0.22em] text-accent">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-medium text-ink">{item.role}</h3>
              <p className="mt-2 max-w-2xl text-base text-ink-muted">
                {item.description}
              </p>
              <span className="mt-3 inline-block font-display text-sm text-accent/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
