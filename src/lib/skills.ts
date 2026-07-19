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
    title: "Interface",
    items: [
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
      { label: "React Native", icon: "reactnative" },
      { label: "Mobile UI", icon: "mobile" },
    ],
  },
  {
    title: "Data & state",
    items: [
      { label: "REST API", icon: "restapi" },
      { label: "Firebase", icon: "firebase" },
      { label: "Node.js", icon: "nodejs" },
      { label: "Python", icon: "python" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { label: "Git", icon: "git" },
      { label: "Linux", icon: "linux" },
      { label: "WordPress", icon: "wordpress" },
      { label: "Notion", icon: "notion" },
    ],
  },
];
