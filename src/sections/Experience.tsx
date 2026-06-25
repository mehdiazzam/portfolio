import { motion } from 'framer-motion'
import type { Locale } from '../lib/content'
import { content } from '../lib/content'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

type ExperienceProps = {
  locale: Locale
}

export function Experience({ locale }: ExperienceProps) {
  const copy = content[locale]

  return (
    <section id="experience" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        02
      </span>
      <div className="content-shell">
        <div className="section-header flex flex-col gap-6">
          <p className="eyebrow">{copy.experience.eyebrow}</p>
          <div className="copper-divider" />
          <h2>{copy.experience.headline}</h2>
        </div>

        <div className="flex flex-col gap-4">
          {copy.experience.items.map((item, index) => (
            <motion.div
              key={item.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="accent-bar flex flex-col gap-3 rounded-sm border border-line bg-panel/70 p-6 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="shrink-0 font-display text-sm uppercase tracking-[0.2em] text-accent">
                {item.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-ink">{item.role}</h3>
                <p className="text-base text-ink-muted">{item.description}</p>
              </div>
              <span className="ml-auto hidden shrink-0 font-display text-lg text-accent/40 sm:inline">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
