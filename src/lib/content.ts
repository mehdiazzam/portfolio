export const content = {
  name: "Mehdi Azzam",
  role: "Frontend Developer",
  location: "Syria · Remote",
  hero: {
    headline: "I build responsive web apps and landing pages with React and TypeScript.",
    ctaPrimary: "View projects",
    ctaSecondary: "Contact",
  },
  about: {
    eyebrow: "Bio",
    headline:
      "Frontend developer focused on modern, responsive web apps with clean code and clear UX.",
    body: "I work mainly with React and TypeScript. I care about readable code, solid layout, and interfaces that stay usable in production. Always learning and improving.",
    highlights: [
      "React and TypeScript for product UI",
      "Responsive layouts and performance basics",
      "Accessible, reusable components",
    ],
  },
  experience: {
    eyebrow: "Experience",
    headline: "Freelance work and building my own product frontend.",
    items: [
      {
        period: "1.5 years",
        role: "Freelance Frontend Developer",
        description:
          "Landing pages and client websites—responsive layouts, clear structure, and polished UI.",
      },
      {
        period: "8 months · ongoing",
        role: "Personal Product — Frontend",
        description:
          "Building the frontend for my own product. UI and interaction work still in progress.",
      },
    ],
  },
  contact: {
    headline: "Let's talk about your next frontend project.",
    subline:
      "Open for landing pages, marketing sites, and product UI work.",
    emailCta: "Email me",
    socialTitle: "Elsewhere",
    responseTime: "Usually reply within a day.",
  },
} as const;
