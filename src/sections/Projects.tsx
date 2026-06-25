import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../lib/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-zone reveal-section">
      <span className="section-index" aria-hidden>
        04
      </span>
      <div className="content-shell">
        <div className="section-header flex flex-col gap-6">
          <p className="eyebrow">Projects</p>
          <div className="copper-divider" />
          <h2>Selected work</h2>
          <p className="max-w-2xl text-base">
            A selection of projects showcasing my skills in frontend
            development.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Select project"
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  onClick={() => goTo(index)}
                  className={`rounded-sm border px-4 py-2 text-sm font-medium transition ${
                    activeIndex === index
                      ? "border-accent bg-accent/10 text-ink"
                      : "border-line bg-panel/60 text-ink-muted hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={activeProject}
                  index={activeIndex}
                  displayIndex={activeIndex + 1}
                  featured
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
