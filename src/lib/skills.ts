export type SkillItem = {
  label: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextjs" },
      { label: "Vite", icon: "vite" },
      { label: "Responsive UI", icon: "responsive" },
    ],
  },
  {
    title: "UI & state",
    items: [
      { label: "Tailwind CSS", icon: "tailwindcss" },
      { label: "React Query", icon: "reactquery" },
      { label: "Zustand", icon: "state" },
      { label: "Redux", icon: "redux" },
      { label: "Axios", icon: "axios" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { label: "React Native", icon: "reactnative" },
      { label: "Mobile UI", icon: "mobile" },
    ],
  },
  {
    title: "Backend basics",
    items: [
      { label: "Node.js", icon: "nodejs" },
      { label: "Express.js", icon: "express" },
      { label: "REST API", icon: "restapi" },
      { label: "Authentication", icon: "auth" },
      { label: "JWT", icon: "jwt" },
      { label: "CRUD APIs", icon: "crud" },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "Firebase", icon: "firebase" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MySQL", icon: "mysql" },
      { label: "Prisma", icon: "prisma" },
      { label: "Python", icon: "python" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { label: "Git", icon: "git" },
      { label: "WordPress", icon: "wordpress" },
      { label: "Notion", icon: "notion" },
    ],
  },
];
