export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  overview: string[];
  challenge: string;
  decisions: string[];
  outcomes: string[];
  stack: string[];
  coverBackground: string;
  images: ProjectImage[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "commerce",
    title: "LUXE",
    summary: "Premium fashion storefront with a smooth, editorial shopping flow.",
    description:
      "LUXE is a modern luxury commerce experience designed around curated browsing, effortless wishlist management, and a checkout that feels clear and confident from cart to confirmation.",
    overview: [
      "LUXE presents products with an editorial layout—big visuals, clean spacing, and quick access to browse, save, and buy.",
      "The storefront journey is streamlined across key touchpoints: landing → shop discovery → wishlist collection → cart review → checkout confirmation—keeping the UI elegant while maintaining conversion-focused clarity.",
    ],
    challenge:
      "Build a luxury storefront that feels editorial without slowing down discovery or checkout—big imagery, clear hierarchy, and a path users trust.",
    decisions: [
      "Editorial product cards with generous whitespace instead of dense grids",
      "Wishlist and cart as first-class destinations, not afterthoughts",
      "Framer Motion for restrained page transitions; avoid decorative noise",
      "TanStack Query + Firebase for wishlist and cart state that stays in sync",
    ],
    outcomes: [
      "End-to-end flow from landing through order confirmation",
      "Responsive layouts that keep product imagery dominant on mobile",
      "Typed React + TypeScript codebase ready for iteration",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router + React Query",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
      "radix-ui",
    ],
    coverBackground: `url("${import.meta.env.BASE_URL}Luxe.png")`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}Luxe_home.png`,
        alt: "LUXE home screen with curated editorial hero and quick navigation to shop.",
        caption: "Landing experience that sets the mood and guides users into the collection.",
      },
      {
        src: `${import.meta.env.BASE_URL}Luxe_shop.png`,
        alt: "LUXE shop listing view with product browsing and clean category presentation.",
        caption: "Collection browsing with fast scanning and refined product cards.",
      },
      {
        src: `${import.meta.env.BASE_URL}Luxe_wishlist.png`,
        alt: "LUXE wishlist screen showing saved products for later consideration.",
        caption: "Wishlist management focused on clarity and next-step action.",
      },
      {
        src: `${import.meta.env.BASE_URL}Luxe_cart.png`,
        alt: "LUXE cart screen with selected items, totals, and checkout progression.",
        caption: "Cart review built for trust and a smooth path to checkout.",
      },
      {
        src: `${import.meta.env.BASE_URL}Luxe_order.png`,
        alt: "LUXE order confirmation and checkout workflow summary.",
        caption: "Order confirmation that communicates success and what happens next.",
      },
    ],
    link: "https://mehdiazzam.github.io/Luxe/",
    repo: "https://github.com/mehdiazzam/Luxe",
  },
  {
    id: "saas",
    title: "Vaultify",
    summary: "Money tracking platform with real-time insights.",
    description:
      "Finance web app for tracking accounts, transactions, budgets, savings goals, loans, and overall financial trends.",
    overview: [
      "Vaultify is a finance dashboard built to help users understand their financial position at a glance through clean data visualization and thoughtful information hierarchy.",
      "It brings together accounts, budgets, savings goals, and transaction history in one place, with a focus on responsive layouts and real-time feedback across key flows.",
    ],
    challenge:
      "Surface dense financial data without overwhelm—accounts, budgets, loans, and goals need clear hierarchy and instant feedback.",
    decisions: [
      "Dashboard-first layout with account cards and spending charts above the fold",
      "Zustand + TanStack Query for local UI state and remote finance data",
      "Recharts for trends that stay readable in dark and light themes",
      "Consistent filter/search patterns across transactions and budgets",
    ],
    outcomes: [
      "Unified views for accounts, budgets, loans, goals, and settings",
      "Dark and light themes with token-driven chrome",
      "Responsive charts and tables that stay usable on smaller screens",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Firebase",
      "Recharts",
      "Framer Motion",
      "Tailwind CSS",
      "lucide-react",
    ],
    coverBackground: `url("${import.meta.env.BASE_URL}Vaultify.png")`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}Vaultify_dashboard.png`,
        alt: "Vaultify dark dashboard overview",
        caption: "Dashboard overview with account cards, transactions, and analytics.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_transactions.png`,
        alt: "Vaultify transactions page",
        caption: "Transactions with search, category filtering, and clear income/expense states.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_loans.png`,
        alt: "Vaultify loans page",
        caption: "Loans workflow showing borrowed, lent, and repayment progress.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_budget.png`,
        alt: "Vaultify budgets page",
        caption: "Budget management with category limits and remaining balance.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_goals.png`,
        alt: "Vaultify savings goals page",
        caption: "Savings goals for tracking targets and contributions.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_settings.png`,
        alt: "Vaultify settings page",
        caption: "Settings for theme, profile, and shortcuts.",
      },
      {
        src: `${import.meta.env.BASE_URL}Vaultify_light.png`,
        alt: "Vaultify light dashboard overview",
        caption: "Light theme dashboard with financial summaries and charts.",
      },
    ],
    link: "https://mehdiazzam.github.io/Vaultify/",
    repo: "https://github.com/mehdiazzam/Vaultify",
  },
];

export function getProjectById(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId);
}

export function getProjectNeighbors(projectId: string) {
  const index = projects.findIndex((project) => project.id === projectId);
  if (index === -1) {
    return { prev: undefined, next: undefined, index: -1, total: projects.length };
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return { prev, next, index, total: projects.length };
}
