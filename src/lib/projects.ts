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
    coverBackground: 'url("/Luxe.png")',
    images: [
      {
        src: "/Luxe_home.png",
        alt: "LUXE home screen with curated editorial hero and quick navigation to shop.",
        caption: "A premium landing experience designed to set the mood and guide users into the collection.",
      },
      {
        src: "/Luxe_shop.png",
        alt: "LUXE shop listing view with product browsing and clean category presentation.",
        caption: "Collection browsing with fast scanning, refined product cards, and a luxury-first layout.",
      },
      {
        src: "/Luxe_wishlist.png",
        alt: "LUXE wishlist screen showing saved products for later consideration.",
        caption: "Wishlist management focused on clarity—easy review, selection, and next-step action.",
      },
      {
        src: "/Luxe_cart.png",
        alt: "LUXE cart screen with selected items, totals, and checkout progression.",
        caption: "Cart review built for trust and momentum—clear item details and a smooth path to checkout.",
      },
      {
        src: "/Luxe_order.png",
        alt: "LUXE order confirmation and checkout workflow summary.",
        caption: "Order confirmation designed to communicate success, details, and what happens next.",
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
    coverBackground: 'url("/Vaultify.png")',
    images: [
      {
        src: "/Vaultify_dashboard.png",
        alt: "Vaultify dark dashboard overview",
        caption: "Dashboard overview with account cards, recent transactions, and spending analytics.",
      },
      {
        src: "/Vaultify_transactions.png",
        alt: "Vaultify transactions page",
        caption: "Transactions page with search, category filtering, and clear income and expense states.",
      },
      {
        src: "/Vaultify_loans.png",
        alt: "Vaultify loans page",
        caption: "Loans and lending workflow showing borrowed, lent, and repayment progress details.",
      },
      {
        src: "/Vaultify_budget.png",
        alt: "Vaultify budgets page",
        caption: "Budget management screen focused on category limits and remaining balance visibility.",
      },
      {
        src: "/Vaultify_goals.png",
        alt: "Vaultify savings goals page",
        caption: "Savings goals area for tracking targets, progress, and fund contributions.",
      },
      {
        src: "/Vaultify_settings.png",
        alt: "Vaultify settings page",
        caption: "Settings screen covering theme preferences, profile management, and shortcuts.",
      },
      {
        src: "/Vaultify_light.png",
        alt: "Vaultify light dashboard overview",
        caption: "Light theme version of the main dashboard with financial summaries and charts.",
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
