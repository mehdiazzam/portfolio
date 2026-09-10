export const content = {
  name: "Mehdi Azzam",
  role: "Frontend Developer",
  location: "Syria · Remote",
  hero: {
    greeting: "Hi, I'm",
    highlightName: "Mehdi",
    lastName: "Azzam",
    headline:
      "I build responsive web apps and landing pages with React and TypeScript. Clean code, clear UX, and interfaces that hold up in production.",
    features: [
      {
        icon: "code",
        label: "Clean & maintainable code with React and TypeScript",
      },
      {
        icon: "responsive",
        label: "Responsive layouts that work across devices",
      },
      {
        icon: "bolt",
        label: "Fast, accessible interfaces",
      },
    ],
  },
  about: {
    eyebrow: "About Me",
    body: "Passionate about building modern web apps with React, TypeScript, and Tailwind CSS. I focus on readable code, solid layout, and shipping interfaces that stay usable in production.",
    stats: [
      { icon: "years", label: "2+ Years Experience" },
    ],
  },
  experience: {
    eyebrow: "Experience",
    headline: "Freelance work and building my own product frontend.",
    items: [
      {
        period: "2023 — Present",
        role: "Freelance Frontend Developer",
        description:
          "Landing pages and client websites—responsive layouts, clear structure, and polished UI.",
      },
      {
        period: "2025 — Present",
        role: "Personal Product — Frontend",
        description:
          "Building the frontend for my own product. UI and interaction work still in progress.",
      },
    ],
  },
  education: {
    eyebrow: "Education",
    items: [
      {
        period: "2022 — Present",
        title: "Information Technology",
        place: "SVU University",
        icon: "grad",
      },
      {
        period: "2021",
        title: "High School Degree",
        place: "General Secondary Education",
        icon: "book",
      },
    ],
  },
  contact: {
    headline: "Let's talk about your next frontend project.",
    subline: "Open for landing pages, marketing sites, and product UI work.",
    emailCta: "Email me",
    socialTitle: "Elsewhere",
    responseTime: "Usually reply within a day.",
  },
} as const;
