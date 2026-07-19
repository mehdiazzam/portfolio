import { motion } from "framer-motion";
import { content } from "../lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        01
      </span>
      <div className="content-shell">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div data-parallax="24" className="lg:sticky lg:top-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-start gap-4"
            >
              <img
                src={`${import.meta.env.BASE_URL}mehdi.jpg`}
                alt={content.name}
                className="aspect-[4/5] w-full max-w-sm rounded-sm object-cover ring-1 ring-accent/30"
              />
              <p className="eyebrow">{content.name}</p>
            </motion.div>
          </div>

          <div className="section-header flex flex-col gap-6">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <div className="copper-divider" />
            <h3>{content.about.headline}</h3>
            <p className="text-base">{content.about.body}</p>
            <ul className="flex flex-col gap-3">
              {content.about.highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="accent-bar flex items-start gap-4 py-2 pl-4 text-sm text-ink"
                >
                  <span className="shrink-0 font-display text-base text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
