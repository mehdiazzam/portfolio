export const content = {
  en: {
    name: "Mehdi Azzam",
    role: "Frontend Developer",
    hero: {
      headline:
        "Syria - Remote",
      ctaPrimary: "View work",
      ctaSecondary: "Get in touch",
    },
    about: {
      eyebrow: "Bio",
      headline:
        "Frontend Developer focused on building modern, responsive, and high-performance web applications with clean code and intuitive user experiences.",
      body: "Skilled in React, TypeScript and UI/UX principles, with a passion for creating scalable digital products that combine functionality with elegant design. Dedicated to continuous learning",

      highlights: [
        "Production-ready React and TypeScript architecture",
        "Performance tuning for Core Web Vitals and smooth UX",
        "Reusable design systems with accessible components",
      ],
    },
    experience: {
      eyebrow: "Experience",
      headline: "Building web products from freelance work to my own projects.",
      items: [
        {
          period: "1.5 years",
          role: "Freelance Frontend Developer",
          description:
            "Building landing pages, developing websites, and delivering client-facing web products.",
        },
        {
          period: "8 months · ongoing",
          role: "Personal Project — Frontend",
          description:
            "Developing the frontend for my own real-world product. Still in progress.",
        },
      ],
    },
    contact: {
      headline: "Let's build something exceptional.",
      subline: "Open for select collaborations and premium product work.",
      availability: "Available for new projects",
      emailCta: "Send an email",
      socialTitle: "Connect",
      responseTime: "I typically respond within 24 hours.",
    },
  },
  es: {
    name: "Tu Nombre",
    role: "Ingeniero Frontend",
    hero: {
      headline: "Creo experiencias digitales con caracter.",
      ctaPrimary: "Ver trabajo",
      ctaSecondary: "Contactar",
    },
    about: {
      eyebrow: "Nota del estudio",
      headline: "Diseno con gusto, ingenieria con precision.",
      body: [
        "Ayudo a equipos ambiciosos a convertir ideas complejas en productos que parecen inevitables.",
        "Mi enfoque combina UI premium, motion systems e interacciones memorables.",
      ],
      highlights: [
        "Sistemas frontend con mentalidad de producto",
        "Pulido visual que eleva la percepcion de marca",
        "Motion design sutil, nunca ruidoso",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      headline: "Construyendo productos web desde freelance hasta proyectos propios.",
      items: [
        {
          period: "1.5 años",
          role: "Desarrollador Frontend Freelance",
          description:
            "Creación de landing pages, desarrollo de sitios web y entrega de productos web para clientes.",
        },
        {
          period: "8 meses · en curso",
          role: "Proyecto Personal — Frontend",
          description:
            "Desarrollo del frontend de mi propio producto real. Aún en progreso.",
        },
      ],
    },
    contact: {
      headline: "Construyamos algo excepcional.",
      subline: "Disponible para colaboraciones premium.",
      availability: "Disponible para nuevos proyectos",
      emailCta: "Enviar correo",
      socialTitle: "Conectar",
      responseTime: "Normalmente respondo en 24 horas.",
    },
  },
};

export type Locale = keyof typeof content;
