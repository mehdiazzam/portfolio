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
      { label: "Python", icon: "python" },
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "React Native", icon: "reactnative" },
      { label: "Mobile UI", icon: "mobile" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
      { label: "Node.js", icon: "nodejs" },
      { label: "REST API", icon: "restapi" },
      { label: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { label: "Git", icon: "git" },
      { label: "WordPress", icon: "wordpress" },
      { label: "Linux", icon: "linux" },
      { label: "Notion", icon: "notion" },
    ],
  },
];
