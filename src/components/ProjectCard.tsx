import { motion, useMotionValue, useSpring } from "framer-motion";
import type { KeyboardEvent, MouseEvent } from "react";
import type { Project } from "../lib/projects";
import { getProjectRoute, navigateToRoute } from "../routes/projectRoutes";

export interface ProjectCardProps {
  project: Project;
  index: number;
  displayIndex: number;
  featured?: boolean;
}

export function ProjectCard({
  project,
  index,
  displayIndex,
  featured = false,
}: ProjectCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const tiltY = useSpring(rotateY, { stiffness: 120, damping: 14 });

  const openProjectPage = () => {
    navigateToRoute(getProjectRoute(project.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateXValue = ((y - rect.height / 2) / rect.height) * -10;
    const rotateYValue = ((x - rect.width / 2) / rect.width) * 12;
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectPage();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-sm border border-line bg-panel/80 shadow-soft ${
        featured ? "border-t-2 border-t-accent lg:p-8 p-6" : "p-6"
      }`}
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      onClick={openProjectPage}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} details`}
    >
      <span
        className="pointer-events-none absolute right-4 top-4 font-display text-5xl font-semibold leading-none text-accent/15 lg:text-6xl"
        aria-hidden
      >
        {String(displayIndex).padStart(2, "0")}
      </span>

      <div
        className={`relative mb-6 w-full overflow-hidden rounded-sm ${
          featured ? "h-56 lg:h-72" : "h-48"
        }`}
        style={{
          backgroundImage: project.coverBackground,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-black/30" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className={`text-ink ${featured ? "text-2xl lg:text-3xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className="text-sm text-ink-muted line-clamp-3">{project.summary}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-accent py-3 text-sm font-semibold uppercase tracking-[0.2em] text-canvas transition-transform duration-300 group-hover:translate-y-0">
        View project
      </div>
    </motion.article>
  );
}
