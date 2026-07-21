import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../lib/projects";
import { getProjectRoute, navigateToRoute } from "../routes/projectRoutes";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + projects.length) % projects.length);
  }, []);

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % projects.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = projects.length - 1;
    }

    if (next === null) {
      return;
    }

    event.preventDefault();
    goTo(next);
    tabRefs.current[next]?.focus();
  };

  const openDetails = () => {
    if (!project) return;
    navigateToRoute(getProjectRoute(project.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coverSrc =
    project?.images[0]?.src ??
    project?.coverBackground.replace(/^url\(["']?|["']?\)$/g, "");

  return (
    <section id="projects" className="section-zone section-zone-muted reveal-section scroll-mt-nav">
      <span className="section-index" aria-hidden>
        03
      </span>
      <div className="content-shell">
        <div className="section-header flex flex-col gap-6">
          <p className="eyebrow">Projects</p>
          <div className="copper-divider" />
          <h2>Selected work</h2>
          <p className="max-w-2xl text-base">
            Recent frontend builds I designed and developed.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-8 lg:grid lg:grid-cols-[11rem_1fr] lg:gap-10">
          <div
            className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
            role="tablist"
            aria-label="Select project"
            aria-orientation="vertical"
          >
            {projects.map((item, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => goTo(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`group flex min-w-[8.5rem] shrink-0 items-baseline gap-3 border-b-2 px-1 py-3 text-left transition lg:min-w-0 lg:border-b-0 lg:border-l-2 lg:px-4 lg:py-3 ${
                    selected
                      ? "border-accent text-ink"
                      : "border-transparent text-ink-muted hover:border-line hover:text-ink"
                  }`}
                >
                  <span className="font-display text-xs text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium tracking-tight">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {project ? (
              <motion.div
                key={project.id}
                id={`${baseId}-panel-${project.id}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${project.id}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="flex flex-col gap-6"
              >
                <button
                  type="button"
                  onClick={openDetails}
                  className="group relative block w-full overflow-hidden rounded-sm border border-line text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Open ${project.title} case study`}
                >
                  <img
                    src={coverSrc}
                    alt={`${project.title} preview`}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 sm:p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                        Case study
                      </p>
                      <p className="mt-1 font-display text-xl text-white sm:text-2xl">
                        {project.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-canvas opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      Open
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </button>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-base text-ink-muted">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-line px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={openDetails}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      View details
                      <ArrowRight size={16} />
                    </button>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-2"
                      >
                        Live
                        <ExternalLink size={14} />
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-2"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <SiGithub size={16} />
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
