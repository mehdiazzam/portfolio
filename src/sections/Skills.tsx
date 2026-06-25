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
import { FaMobileAlt, FaAndroid, FaApple } from "react-icons/fa";
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
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.36 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="section-zone section-zone-muted reveal-section">
      <span className="section-index" aria-hidden>
        03
      </span>
      <div className="content-shell">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.35fr_0.65fr] lg:items-start lg:gap-16">
          <div className="section-header flex flex-col gap-4 lg:sticky lg:top-24">
            <p className="eyebrow">Capabilities</p>
            <div className="copper-divider" />
            <h2>Core skills</h2>
            <p className="max-w-md text-base">
              The stack I use to build performant, modern, and animated web
              experiences.
            </p>
          </div>

          <motion.div
            className="flex w-full flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className={`rounded-sm border border-line p-5 shadow-soft md:p-7 ${
                  categoryIndex % 2 === 0 ? "bg-panel/80" : "bg-canvas/60"
                }`}
                style={{
                  borderTopWidth: "2px",
                  borderTopColor: "hsl(var(--color-accent) / 0.45)",
                }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => {
                    const Icon = skillIcons[skill.icon] ?? FiLink;

                    return (
                      <motion.div
                        key={skill.label}
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 22,
                        }}
                        className="group inline-flex items-center gap-2 rounded-sm border border-line/80 bg-panel/50 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent/40 hover:bg-accent/10"
                      >
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-panel text-sm text-accent transition-colors group-hover:bg-accent group-hover:text-canvas">
                          <Icon />
                        </span>
                        <span>{skill.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
