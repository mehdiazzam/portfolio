export type SkillItem = {
  label: string;
  icon: string;
  proof?: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Interface",
    items: [
      { label: "HTML", icon: "html", proof: "Semantic structure across client sites" },
      { label: "CSS", icon: "css", proof: "Layout systems and responsive polish" },
      { label: "JavaScript", icon: "javascript", proof: "Interactive UI behavior" },
      { label: "TypeScript", icon: "typescript", proof: "Typed React apps (LUXE, Vaultify)" },
      { label: "React", icon: "react", proof: "Component architecture for product UI" },
      { label: "Tailwind CSS", icon: "tailwindcss", proof: "Fast, consistent design systems" },
      { label: "React Native", icon: "reactnative", proof: "Mobile-minded UI patterns" },
      { label: "Mobile UI", icon: "mobile", proof: "Thumb-friendly layouts and flows" },
    ],
  },
  {
    title: "Data & state",
    items: [
      { label: "REST API", icon: "restapi", proof: "Client-side data fetching" },
      { label: "Firebase", icon: "firebase", proof: "Auth and realtime data (Vaultify)" },
      { label: "Node.js", icon: "nodejs", proof: "Tooling and light backend glue" },
      { label: "Python", icon: "python", proof: "Scripts and learning experiments" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { label: "Git", icon: "git", proof: "Version control and collaboration" },
      { label: "Linux", icon: "linux", proof: "Dev environment and deploy basics" },
      { label: "WordPress", icon: "wordpress", proof: "Client marketing sites" },
      { label: "Notion", icon: "notion", proof: "Specs, notes, and project planning" },
    ],
  },
];
