import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "../components/ThemeToggle";
import { ImageLightbox } from "../components/ui/ImageLightbox";
import type { Project, ProjectImage } from "../lib/projects";
import { getProjectNeighbors } from "../lib/projects";
import { getProjectRoute, getSectionRoute } from "../routes/projectRoutes";

export interface ProjectDetailsPageProps {
  project?: Project;
}

function coverSrcFor(project: Project) {
  const match = project.coverBackground.match(/url\(["']?(.*?)["']?\)/);
  return match?.[1] ?? project.images[0]?.src ?? "";
}

function ProjectChrome({
  title,
  backHref,
  backLabel,
}: {
  title: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-line/70 bg-canvas/95 backdrop-blur-md"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="mx-auto flex min-h-14 w-full max-w-6xl items-center gap-2 px-4 sm:px-5">
        <a
          href={backHref}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-ink transition hover:border-accent hover:text-accent"
          aria-label={backLabel}
        >
          <ArrowLeft size={18} />
        </a>
        <p className="min-w-0 flex-1 truncate font-display text-lg text-ink">{title}</p>
        <ThemeToggle compact className="mobile-icon-btn" />
      </div>
    </header>
  );
}

function ShotFigure({
  image,
  index,
  onOpen,
  className,
}: {
  image: ProjectImage;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-sm border border-line bg-panel/70 shadow-soft ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="relative block w-full text-left"
        aria-label={`Open image: ${image.alt}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[16/10] w-full object-cover"
        />
        <span className="absolute bottom-3 right-3 inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-3 text-xs font-semibold uppercase tracking-[0.14em] text-canvas">
          <Expand size={14} />
          Open
        </span>
      </button>
      <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function ProjectDetailsPage({ project }: ProjectDetailsPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const backHref = getSectionRoute("projects");

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const navigateLightbox = useCallback((nextIndex: number) => {
    setActiveImageIndex(nextIndex);
  }, []);

  if (!project) {
    return (
      <>
        <ProjectChrome title="Project" backHref={backHref} backLabel="Back to projects" />
        <main id="main-content">
          <section className="section-shell min-h-[70vh] justify-center">
            <p className="eyebrow">Project</p>
            <h1>Project not found</h1>
            <p className="max-w-xl text-base">
              The project you tried to open does not exist or the link is no
              longer available.
            </p>
            <div>
              <a
                href={backHref}
                className="btn-ghost inline-flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to projects
              </a>
            </div>
          </section>
        </main>
      </>
    );
  }

  const { prev, next } = getProjectNeighbors(project.id);
  const coverSrc = coverSrcFor(project);

  return (
    <>
      <ProjectChrome
        title={project.title}
        backHref={backHref}
        backLabel="Back to projects"
      />
      <main id="main-content">
        <ImageLightbox
          activeIndex={activeImageIndex}
          images={project.images}
          projectTitle={project.title}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />

        <section className="section-shell">
          <p className="eyebrow">{project.summary}</p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="max-w-3xl">{project.title}</h1>
                <p className="mt-5 max-w-2xl text-lg">{project.description}</p>
              </div>

              <div className="overflow-hidden rounded-sm border border-line shadow-soft">
                <img
                  src={coverSrc}
                  alt={`${project.title} cover`}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>

            <aside className="surface-card-elevated accent-bar flex flex-col gap-8 p-5 sm:p-8">
              <div className="flex flex-col gap-3">
                <p className="eyebrow">Stack Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-line px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost inline-flex items-center justify-center gap-2"
                  >
                    View Code
                    <SiGithub size={16} />
                  </a>
                ) : null}
              </div>
            </aside>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="accent-bar pl-4">
              <p className="eyebrow">Challenge</p>
              <p className="mt-4 text-base text-ink-muted">{project.challenge}</p>
            </div>
            <div className="accent-bar pl-4">
              <p className="eyebrow">Decisions</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {project.decisions.map((decision) => (
                  <li key={decision} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      —
                    </span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="accent-bar pl-4">
              <p className="eyebrow">Outcomes</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      —
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="accent-bar pl-4">
              <p className="eyebrow">Description</p>
              <div className="mt-6 space-y-4 text-base">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden">
                {project.images.map((image, index) => (
                  <div
                    key={image.src}
                    className="w-[84%] shrink-0 snap-center"
                  >
                    <ShotFigure image={image} index={index} onOpen={setActiveImageIndex} />
                  </div>
                ))}
              </div>

              <div className="hidden gap-6 md:grid md:grid-cols-2">
                {project.images.map((image, index) => (
                  <ShotFigure
                    key={image.src}
                    image={image}
                    index={index}
                    onOpen={setActiveImageIndex}
                    className="md:last:col-span-2"
                  />
                ))}
              </div>
            </div>
          </div>

          {prev && next ? (
            <nav
              className="mt-4 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
              aria-label="Project navigation"
            >
              <a
                href={getProjectRoute(prev.id)}
                className="group inline-flex min-h-11 items-center gap-3 rounded-sm border border-line bg-panel/60 px-5 py-4 text-sm transition hover:border-accent/40 hover:text-accent"
              >
                <ArrowLeft
                  size={16}
                  className="shrink-0 text-accent transition group-hover:-translate-x-0.5"
                />
                <span className="flex flex-col gap-0.5 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                    Previous
                  </span>
                  <span className="font-medium text-ink">{prev.title}</span>
                </span>
              </a>
              <a
                href={getProjectRoute(next.id)}
                className="group inline-flex min-h-11 items-center gap-3 rounded-sm border border-line bg-panel/60 px-5 py-4 text-sm transition hover:border-accent/40 hover:text-accent sm:flex-row-reverse"
              >
                <ArrowRight
                  size={16}
                  className="shrink-0 text-accent transition group-hover:translate-x-0.5"
                />
                <span className="flex flex-col gap-0.5 text-left sm:text-right">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                    Next
                  </span>
                  <span className="font-medium text-ink">{next.title}</span>
                </span>
              </a>
            </nav>
          ) : null}
        </section>
      </main>
    </>
  );
}
