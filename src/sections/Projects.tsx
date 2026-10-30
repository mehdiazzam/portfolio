import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub, SiGitlab } from "react-icons/si";
import { projects, type Project } from "../lib/projects";
import { getProjectRoute, navigateToRoute } from "../routes/projectRoutes";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function coverSrcFor(project: Project) {
  return (
    project.images[0]?.src ??
    project.coverBackground.replace(/^url\(["']?|["']?\)$/g, "")
  );
}

function ProjectActions({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="mobile-touch-row">
      <button
        type="button"
        onClick={onOpen}
        className="btn-primary inline-flex items-center gap-2"
      >
        View case study
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
          aria-label={`${project.title} on ${project.repo.includes("gitlab.com") ? "GitLab" : "GitHub"}`}
        >
          {project.repo.includes("gitlab.com") ? (
            <SiGitlab size={16} />
          ) : (
            <SiGithub size={16} />
          )}
          Code
        </a>
      ) : null}
    </div>
  );
}

function ProjectPreview({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-sm border border-line text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={`Open ${project.title} case study`}
      >
        <img
          src={coverSrcFor(project)}
          alt={`${project.title} preview`}
          style={
            project.images[0]?.objectPosition
              ? { objectPosition: project.images[0].objectPosition }
              : undefined
          }
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 sm:p-5">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-white/75">
              {String(index + 1).padStart(2, "0")} · Case study
            </p>
            <p className="mt-1 truncate font-display text-xl text-white sm:text-2xl">
              {project.title}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-accent px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-canvas">
            Open
            <ArrowRight size={14} />
          </span>
        </div>
      </button>

      <div className="flex flex-col gap-5">
        <div className="max-w-xl">
          <p className="text-base text-ink-muted">{project.summary}</p>
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
        <ProjectActions project={project} onOpen={onOpen} />
      </div>
    </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const baseId = useId();
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktopTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToSlide = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const slide = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !slide) return;
    scroller.scrollTo({
      left: slide.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = (index + projects.length) % projects.length;
      setActiveIndex(nextIndex);
      scrollToSlide(nextIndex);
    },
    [scrollToSlide],
  );

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    refs: typeof mobileTabRefs,
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
    refs.current[next]?.focus();
  };

  const onMobileScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let closest = 0;
    let best = Infinity;

    Array.from(scroller.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - center);
      if (distance < best) {
        best = distance;
        closest = index;
      }
    });

    setActiveIndex((current) => (current === closest ? current : closest));
  };

  const openDetails = (selected = project) => {
    if (!selected) return;
    navigateToRoute(getProjectRoute(selected.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="section-zone section-zone-muted reveal-section scroll-mt-nav"
    >
      <div className="content-shell">
        <div className="section-header flex flex-col gap-6">
          <p className="eyebrow">Projects</p>
          <div className="copper-divider" />
          <h2>Selected work</h2>
          <p className="max-w-2xl text-base">
            Recent frontend builds I designed and developed.
          </p>
        </div>

        <div
          className="mobile-tab-strip lg:hidden"
          role="tablist"
          aria-label="Select project"
          aria-orientation="horizontal"
        >
          {projects.map((item, index) => {
            const selected = activeIndex === index;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  mobileTabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-mobile-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-mobile-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => goTo(index)}
                onKeyDown={(event) => onTabKeyDown(event, index, mobileTabRefs)}
                className={`flex min-h-11 shrink-0 snap-start items-center gap-2 border-b-2 px-3 text-left text-sm font-medium tracking-tight transition ${
                  selected
                    ? "border-accent text-ink"
                    : "border-transparent text-ink-muted"
                }`}
              >
                <span className="font-display text-xs text-accent/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </button>
            );
          })}
        </div>

        <div
          ref={scrollerRef}
          onScroll={onMobileScroll}
          className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 lg:hidden"
        >
          {projects.map((item, index) => (
            <article
              key={item.id}
              id={`${baseId}-mobile-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-mobile-tab-${item.id}`}
              className="w-full shrink-0 snap-center"
              style={{ flex: "0 0 100%" }}
            >
              <ProjectPreview
                project={item}
                index={index}
                onOpen={() => openDetails(item)}
              />
            </article>
          ))}
        </div>

        <div className="mt-2 hidden lg:grid lg:grid-cols-[11rem_1fr] lg:gap-10">
          <div
            className="flex flex-col"
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
                    desktopTabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => goTo(index)}
                  onKeyDown={(event) =>
                    onTabKeyDown(event, index, desktopTabRefs)
                  }
                  className={`group flex min-h-11 items-center gap-3 border-l-2 px-4 py-3 text-left transition ${
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
              >
                <ProjectPreview
                  project={project}
                  index={activeIndex}
                  onOpen={() => openDetails(project)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
