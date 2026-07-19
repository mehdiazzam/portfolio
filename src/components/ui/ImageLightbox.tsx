import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "../../lib/projects";

export interface ImageLightboxProps {
  activeIndex: number | null;
  images: ProjectImage[];
  projectTitle: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function ImageLightbox({
  activeIndex,
  images,
  projectTitle,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        const previousIndex =
          activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        onNavigate(previousIndex);
      }

      if (event.key === "ArrowRight") {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        onNavigate(nextIndex);
      }

      if (event.key === "Tab") {
        const dialog = document.getElementById("image-lightbox-dialog");
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (activeIndex === null) {
    return null;
  }

  const activeImage = images[activeIndex];
  const previousIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md"
      role="presentation"
      onClick={onClose}
    >
      <div
        id="image-lightbox-dialog"
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-line bg-canvas shadow-soft"
        role="dialog"
        aria-modal="true"
        aria-label={`${projectTitle} image preview`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="eyebrow">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <p className="truncate text-sm text-ink-muted">{activeImage.caption}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-panel text-ink transition hover:border-accent hover:text-accent"
            aria-label="Close image preview"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center bg-panel/40 px-4 py-4 sm:px-6 sm:py-6">
          {images.length > 1 ? (
            <button
              type="button"
              onClick={() => onNavigate(previousIndex)}
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-line bg-panel text-ink transition hover:border-accent hover:text-accent"
              aria-label="Show previous image"
            >
              <ChevronLeft size={20} />
            </button>
          ) : null}

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[72vh] w-full rounded-sm object-contain"
          />

          {images.length > 1 ? (
            <button
              type="button"
              onClick={() => onNavigate(nextIndex)}
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-line bg-panel text-ink transition hover:border-accent hover:text-accent"
              aria-label="Show next image"
            >
              <ChevronRight size={20} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
