import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Expand } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ImageLightbox } from "../components/ui/ImageLightbox";
import type { Project } from "../lib/projects";
import { getProjectNeighbors } from "../lib/projects";
import { getProjectRoute, getSectionRoute } from "../routes/projectRoutes";

export interface ProjectDetailsPageProps {
  project?: Project;
}

export function ProjectDetailsPage({ project }: ProjectDetailsPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const navigateLightbox = useCallback((nextIndex: number) => {
    setActiveImageIndex(nextIndex);
  }, []);

  if (!project) {
    return (
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
              href={getSectionRoute("projects")}
              className="btn-ghost inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to projects
            </a>
          </div>
        </section>
      </main>
    );
  }

  const { prev, next } = getProjectNeighbors(project.id);

  return (
    <main id="main-content">
      <ImageLightbox
        activeIndex={activeImageIndex}
        images={project.images}
        projectTitle={project.title}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />

      <section className="section-shell pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href={getSectionRoute("projects")}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to projects
          </a>
          <p className="eyebrow">{project.summary}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="max-w-3xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-lg">{project.description}</p>
            </div>

            <div
              className="min-h-[320px] overflow-hidden rounded-sm border border-line shadow-soft"
              style={{
                backgroundImage: project.coverBackground,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={`${project.title} cover`}
            >
              <div className="flex h-full min-h-[320px] items-end bg-gradient-to-t from-black/45 via-black/5 to-transparent p-8">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                    Case study
                  </p>
                  <h2 className="mt-3 text-white">{project.title}</h2>
                </div>
              </div>
            </div>
          </div>

          <aside className="surface-card-elevated accent-bar flex flex-col gap-8 p-8">
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

          <div className="grid gap-6 md:grid-cols-2">
            {project.images.map((image, index) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-sm border border-line bg-panel/70 shadow-soft md:last:col-span-2"
              >
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="relative block w-full text-left"
                  aria-label={`Open image: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-start justify-end bg-gradient-to-t from-black/35 via-transparent to-black/10 p-4 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white">
                      <Expand size={14} />
                      Open
                    </span>
                  </div>
                </button>
                <figcaption className="border-t border-line px-5 py-4 text-sm text-ink-muted">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {prev && next ? (
          <nav
            className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
            aria-label="Project navigation"
          >
            <a
              href={getProjectRoute(prev.id)}
              className="group inline-flex items-center gap-3 rounded-sm border border-line bg-panel/60 px-5 py-4 text-sm transition hover:border-accent/40 hover:text-accent"
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
              className="group inline-flex items-center gap-3 rounded-sm border border-line bg-panel/60 px-5 py-4 text-sm transition hover:border-accent/40 hover:text-accent sm:flex-row-reverse"
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
  );
}
