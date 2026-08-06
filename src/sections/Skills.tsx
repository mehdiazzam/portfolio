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
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

export function Skills() {
  return (
    <section id="skills" className="section-zone section-zone-muted reveal-section scroll-mt-nav">
      <div className="content-shell">
        <span
          className="pointer-events-none absolute -right-0 select-none font-display text-[7rem] font-semibold leading-none text-accent/[0.08] lg:text-[9rem]"
          aria-hidden
        >
          04
        </span>
        <div className="section-header max-w-xl">
          <p className="eyebrow">Skills</p>
          <div className="copper-divider" />
          <h2 className="mt-3">Tools I use</h2>
        </div>

        <motion.div
          className="mt-2 flex w-full flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {category.title}
              </p>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((skill) => {
                  const Icon = skillIcons[skill.icon] ?? FiLink;
                  return (
                    <motion.li
                      key={skill.label}
                      variants={itemVariants}
                      className="inline-flex items-center gap-2 rounded-sm border border-line bg-panel/50 px-3 py-2 text-sm text-ink transition hover:border-accent/40"
                    >
                      <span className="text-accent">
                        <Icon size={16} />
                      </span>
                      {skill.label}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
