import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

function pickClosestSection(
  sections: HTMLElement[],
  intersecting: Map<SectionId, boolean>,
): SectionId | null {
  const visible = sections.filter((el) => intersecting.get(el.id as SectionId));
  if (visible.length === 0) return null;

  const closest = visible
    .map((el) => {
      const rect = el.getBoundingClientRect();
      return { id: el.id as SectionId, distance: Math.abs(rect.top) };
    })
    .sort((a, b) => a.distance - b.distance)[0];

  return closest.id;
}

function pickFallbackSection(sections: HTMLElement[]): SectionId {
  if (window.scrollY < 80) {
    return "hero";
  }

  const targetY = window.innerHeight * 0.3;
  let closest = sections[0];
  let closestDistance = Infinity;

  for (const el of sections) {
    const rect = el.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    const distance = Math.abs(midpoint - targetY);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = el;
    }
  }

  return closest.id as SectionId;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (sections.length === 0) {
      return;
    }

    const intersecting = new Map<SectionId, boolean>();

    const updateActiveSection = () => {
      const picked = pickClosestSection(sections, intersecting);
      setActiveSection(picked ?? pickFallbackSection(sections));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target.id as SectionId, entry.isIntersecting);
        }
        updateActiveSection();
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      const hasVisible = [...intersecting.values()].some(Boolean);
      if (!hasVisible) {
        updateActiveSection();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return activeSection;
}
