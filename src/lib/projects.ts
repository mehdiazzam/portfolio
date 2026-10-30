export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
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
    id: "pharmalink",
    title: "PharmaLink",
    summary: "Clinical supply desk connecting pharmacies and warehouses.",
    description:
      "PharmaLink is the frontend for a bilingual supply network: pharmacies find stock and place orders, warehouses approve and fulfill them, and both sides keep invoices, offers, and chat on the same record.",
    overview: [
      "The product is split into pharmacy, warehouse, and admin workspaces, with a public landing page that explains the path from request to delivery before anyone signs in.",
      "English and Arabic are first-class. The interface flips to RTL, and day-to-day flows — explore, orders, offers, invoices, and chat — stay available in both languages.",
    ],
    challenge:
      "Give pharmacies and warehouses one clear workspace for stock, orders, and billing without collapsing three different jobs into a single generic dashboard.",
    decisions: [
      "Role-based routes for pharmacy, warehouse, and admin, with lazy-loaded pages",
      "TanStack Query for server data and Zustand for session and UI state",
      "i18next with a real RTL layout, not a translated skin on an LTR page",
      "Leaflet for partner locations, and Socket.IO for chat and notifications",
    ],
    outcomes: [
      "Pharmacy workspace for supplier shelves, offers, orders, invoices, stats, and chat",
      "Warehouse workspace for inventory, incoming orders, offers, and invoices",
      "Admin tools for partner verification and user management",
      "Landing and sign-in that introduce the workflow in English and Arabic",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "i18next",
      "Leaflet",
      "Socket.IO",
    ],
    link: "http://76.13.9.191:8080/",
    repo: "https://gitlab.com/ram-dos/pharmalink-frontend",
    coverBackground: `url("${import.meta.env.BASE_URL}PharmaLink.png")`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}PharmaLink.png`,
        alt: "PharmaLink landing page for the clinical supply desk.",
        caption: "Landing page that introduces the supply desk before sign-in.",
        objectPosition: "31% center",
      },
      {
        src: `${import.meta.env.BASE_URL}PharmaLink_login.png`,
        alt: "PharmaLink sign-in for pharmacies, warehouses, and admins.",
        caption: "One sign-in for pharmacies, warehouses, and admins.",
      },
      {
        src: `${import.meta.env.BASE_URL}PharmaLink_setup.png`,
        alt: "PharmaLink setup step for choosing a pharmacy or warehouse role.",
        caption: "Setup starts by choosing a pharmacy or warehouse role.",
      },
      {
        src: `${import.meta.env.BASE_URL}PharmaLink_warehouses.png`,
        alt: "PharmaLink pharmacy view for browsing warehouse shelves.",
        caption: "Pharmacies browse partner shelves and open a supplier to order.",
      },
      {
        src: `${import.meta.env.BASE_URL}PharmaLink_settings.png`,
        alt: "PharmaLink account settings for language and theme.",
        caption: "Language and theme live in account settings, including a light workspace.",
      },
    ],
  },
  {
    id: "lilian",
    title: "Lilian Azzam",
    summary: "Electronic press kit for a lyric soprano.",
    description:
      "A cinematic press kit for Lilian Azzam: stage presence, sound bites, repertoire, and a way to inquire — structured like four movements of a performance.",
    overview: [
      "The site opens on a stage hero, then a first hearing of three arias, before the biography, gallery, and contact pages.",
      "Navigation is scored as Preludio, Aria, Intermezzo, and Coda, so casting and press move through the kit the way an audience moves through a programme.",
    ],
    challenge:
      "Present a singer’s voice, repertoire, and press materials without turning an electronic press kit into a generic personal site.",
    decisions: [
      "Opera-house palette — velvet, oxblood, and gold — with Fraunces for the name",
      "Movement-numbered navigation instead of a standard page menu",
      "Performance film and stills streamed from Cloudflare R2, not bundled in the app",
      "Sound bites and a horizontal score-scroll reel for the recordings",
    ],
    outcomes: [
      "A live press kit with stage, biography, gallery, and inquiry",
      "Repertoire grouped for opera, concert, and art song",
      "Audio and video a visitor can play without leaving the page",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://lightsalmon-lobster-679124.hostingersite.com/",
    repo: "https://github.com/mehdiazzam/Lilian-azzam",
    coverBackground: `url("${import.meta.env.BASE_URL}Lilian.png")`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}Lilian.png`,
        alt: "Lilian Azzam stage hero with the name in gold and ivory.",
        caption: "The stage opens on the name, the voice type, and a way to inquire.",
      },
      {
        src: `${import.meta.env.BASE_URL}Lilian_about.png`,
        alt: "Biography page for lyric soprano Lilian Azzam.",
        caption: "Biography and portrait sit beside the repertoire.",
      },
      {
        src: `${import.meta.env.BASE_URL}Lilian_media.png`,
        alt: "Horizontal performance reel of Lilian Azzam arias.",
        caption: "A swipeable film reel of performances.",
      },
    ],
  },
  {
    id: "4traders",
    title: "4TRADERS",
    summary: "Arabic forex news desk with a price tape and a reading page.",
    description:
      "4TRADERS is a right-to-left news site for forex: a short price tape, sections for central banks, markets, analysis, and the economic calendar, and a reading page for each story.",
    overview: [
      "The feed opens with a featured story, then a two-column list. Categories filter that list without leaving the page, and the tape stays in place.",
      "Pairs and prices stay in Latin digits inside the Arabic layout. The footer labels the tape as an illustrative snapshot, not a live market feed.",
    ],
    challenge:
      "Make an Arabic market brief feel like a desk — tape, sections, and a reading page — without pretending a static sample is a live wire.",
    decisions: [
      "RTL layout with IBM Plex Sans Arabic, and JetBrains Mono for pairs and prices",
      "A gold-on-near-black news theme instead of a generic article template",
      "Category filters and the article view on one screen, so the tape never disappears",
      "Static stories and a sample tape, labeled as illustrative",
    ],
    outcomes: [
      "A news feed with a featured lead and category filters",
      "A reading page for each story, with pair, time, and author",
      "An illustrative tape for EUR/USD, GBP/USD, USD/JPY, gold, and the dollar index",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "daisyUI"],
    link: "https://mehdiazzam.github.io/4Traders/",
    repo: "https://github.com/mehdiazzam/4Traders",
    coverBackground: `url("${import.meta.env.BASE_URL}4Traders.png")`,
    images: [
      {
        src: `${import.meta.env.BASE_URL}4Traders.png`,
        alt: "4TRADERS Arabic forex news feed with a price tape and featured story.",
        caption: "The feed leads with a featured story under a short price tape.",
      },
      {
        src: `${import.meta.env.BASE_URL}4Traders_analysis.png`,
        alt: "4TRADERS analysis category filtered to two forex stories.",
        caption: "Categories filter the same list: central banks, markets, analysis, and the calendar.",
      },
      {
        src: `${import.meta.env.BASE_URL}4Traders_article.png`,
        alt: "4TRADERS article page for an EUR/USD scenario before US inflation.",
        caption: "Each story opens into a reading page with the pair, time, and author.",
      },
    ],
  },
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
    link: "https://mehdiazzam.github.io/LUXE/",
    repo: "https://github.com/mehdiazzam/LUXE",
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
