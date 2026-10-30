import { motion } from "framer-motion";
import { FiCode, FiLayers, FiLink, FiShield } from "react-icons/fi";
import {
  SiAxios,
  SiCss,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
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
  nextjs: SiNextdotjs,
  vite: SiVite,
  responsive: FiLayers,
  reactnative: FaMobileAlt,
  android: FaAndroid,
  mobile: FaMobileAlt,
  tailwindcss: SiTailwindcss,
  reactquery: SiReactquery,
  state: FiCode,
  redux: SiRedux,
  axios: SiAxios,
  git: SiGit,
  restapi: FiLink,
  nodejs: SiNodedotjs,
  auth: FiShield,
  firebase: SiFirebase,
  postgresql: SiPostgresql,
  wordpress: SiWordpress,
  python: SiPython,
  notion: SiNotion,
};

const featuredIcons = ["react", "typescript", "tailwindcss", "vite"] as const;

const featuredSkills = featuredIcons.flatMap((icon) => {
  for (const category of skillCategories) {
    const match = category.items.find((item) => item.icon === icon);
    if (match) return [match];
  }
  return [];
});

const featuredIconSet = new Set<string>(featuredIcons);

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
        <div className="section-header max-w-xl">
          <p className="eyebrow">Skills</p>
          <div className="copper-divider" />
          <h2 className="mt-3">Tools I use</h2>
        </div>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {featuredSkills.map((skill) => {
            const Icon = skillIcons[skill.icon] ?? FiLink;
            return (
              <li
                key={skill.label}
                className="flex min-h-[4.25rem] items-center gap-3 rounded-sm border border-accent/40 bg-panel/70 px-3 py-3 text-sm font-medium text-ink"
              >
                <span className="text-accent">
                  <Icon size={22} />
                </span>
                {skill.label}
              </li>
            );
          })}
        </ul>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((category) => {
            const items = category.items.filter((skill) => !featuredIconSet.has(skill.icon));
            if (items.length === 0) return null;

            return (
              <div key={category.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {category.title}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((skill) => {
                    const Icon = skillIcons[skill.icon] ?? FiLink;
                    return (
                      <motion.li
                        key={skill.label}
                        variants={itemVariants}
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-sm border border-line bg-panel/50 px-2.5 py-1 text-[13px] text-ink"
                      >
                        <span className="text-accent">
                          <Icon size={14} />
                        </span>
                        {skill.label}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
