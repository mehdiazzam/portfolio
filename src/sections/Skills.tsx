import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FaMobileAlt, FaAndroid } from "react-icons/fa";
import type { IconType } from "react-icons";
import { skillCategories } from "../lib/skills";

const skillIcons: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  reactnative: FaMobileAlt,
  android: FaAndroid,
  mobile: FaMobileAlt,
  tailwindcss: SiTailwindcss,
  git: SiGit,
  restapi: FiLink,
  nodejs: SiNodedotjs,
  firebase: SiFirebase,
  wordpress: SiWordpress,
  python: SiPython,
  linux: SiLinux,
  notion: SiNotion,
};

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        03
      </span>
      <div className="content-shell">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.35fr_0.65fr] lg:items-start lg:gap-16">
          <div className="section-header flex flex-col gap-4 lg:sticky lg:top-24">
            <p className="eyebrow">Capabilities</p>
            <div className="copper-divider" />
            <h2>Toolbelt</h2>
            <p className="max-w-md text-base">
              A typed inventory of what I reach for—and where it shows up in real work.
            </p>
          </div>

          <motion.div
            className="flex w-full flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {category.title}
                </p>
                <ul className="divide-y divide-line/60 border-y border-line/60">
                  {category.items.map((skill) => {
                    const Icon = skillIcons[skill.icon] ?? FiLink;
                    return (
                      <motion.li
                        key={skill.label}
                        variants={itemVariants}
                        className="group flex items-start gap-4 py-3.5 transition hover:bg-panel/40"
                      >
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center text-accent">
                          <Icon size={18} />
                        </span>
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <span className="text-sm font-medium tracking-tight text-ink">
                            {skill.label}
                          </span>
                          {skill.proof ? (
                            <span className="text-xs text-ink-muted sm:text-right">
                              {skill.proof}
                            </span>
                          ) : null}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
