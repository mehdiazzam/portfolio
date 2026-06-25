import { motion } from 'framer-motion'
import type { Locale } from '../lib/content'
import { content } from '../lib/content'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

type AboutProps = {
  locale: Locale
}

export function About({ locale }: AboutProps) {
  const copy = content[locale]

  return (
    <section id="about" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        01
      </span>
      <div className="content-shell">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div data-parallax="24" className="lg:sticky lg:top-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="surface-card-elevated accent-bar flex flex-col items-center gap-6 px-10 py-16 text-center lg:py-20"
            >
              <img
                src="/mehdi.jpg"
                alt={copy.name}
                className="h-44 w-44 animate-float rounded-sm object-cover ring-2 ring-accent/40 lg:h-52 lg:w-52"
              />
              <div>
                <p className="eyebrow">Mehdi Azzam</p>
              </div>
            </motion.div>
          </div>

          <div className="section-header flex flex-col gap-6">
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <div className="copper-divider" />
            <h3>{copy.about.headline}</h3>
            <div className="space-y-4 text-base">
              <p>{copy.about.body}</p>
            </div>
            <div className="flex flex-col gap-4">
              {copy.about.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="accent-bar flex items-start gap-4 rounded-sm border border-line bg-panel/70 p-4 text-sm text-ink"
                >
                  <span className="shrink-0 font-display text-lg text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
