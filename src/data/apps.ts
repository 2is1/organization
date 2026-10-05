export type AppStatus = "stable" | "beta" | "alpha" | "archived";

export type AppItem = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ("Web" | "Desktop" | "Mobile" | "CLI" | "Library" | "AI")[];
  status: AppStatus;
  stack: string[];
  stars?: number;
  updated: string;
  repo: string;
  demo?: string;
  accent: string; // tailwind gradient classes
  glyph: string;
};

export const apps: AppItem[] = [
  {
    slug: "options-categorizer",
    name: "Options Categorizer",
    tagline: "Private, local-first data organization tool with nested groups and drag-and-drop sorting.",
    description:
      "Organize your world with Options Categorizer. A free, private tool to manage lists, travel plans, and hobbies using flexible categories, groups, and drag-and-drop sorting.",
    category: ["Web", "Mobile"],
    status: "stable",
    stack: ["React", "Vite", "TypeScript", "Node.js", "Tailwind", "SQLite"],
    // stars: 1284,
    updated: "2026-09-20",
    repo: "https://github.com/2is1/tier-list",
    demo: "https://tier-list.click",
    accent: "from-cyan-400 to-blue-600",
    glyph: "≡",
  },
  {
    slug: "offside",
    name: "Offside",
    tagline: "Offside, Predict. Compete. Win.",
    description:
      "Predict match outcomes, test your football knowledge, compete with others, and see how your predictions perform over time.",
    category: ["Web", "Mobile"],
    status: "alpha",
    stack: ["React", "Vite", "TypeScript", "Nest.js", "Tailwind", "React-Native", "PostgreSQL"],
    // stars: 932,
    updated: "2026-10-05",
    repo: "https://github.com/2is1/offside",
    accent: "from-violet-400 to-fuchsia-600",
    glyph: "⚽",
  },
  {
    slug: "tic",
    name: "Tic",
    tagline: "One System. Infinite Channels. Zero Compromise.",
    description:
      "A world-class, multi-channel TV playout automation system.",
    category: ["Web", "Desktop"],
    status: "alpha",
    stack: ["React", "Vite", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"],
    // stars: 932,
    updated: "2026-10-04",
    repo: "https://github.com/2is1/tic",
    accent: "from-emerald-400 to-teal-600",
    glyph: "📺",
  },
  // {
  //   slug: "mergemind",
  //   name: "MergeMind",
  //   tagline: "AI reviewer that reads the diff, not the vibes.",
  //   description:
  //     "Reviews pull requests with repository-aware context, flags risky migrations and writes the changelog entry for you. Runs entirely as a GitHub Action.",
  //   category: ["AI"],
  //   status: "beta",
  //   stack: ["Python", "LLM", "GitHub Actions"],
  //   stars: 2410,
  //   updated: "2026-02-18",
  //   repo: "https://github.com/2is1/mergemind",
  //   demo: "https://2is1.github.io/mergemind",
  //   accent: "from-emerald-400 to-teal-600",
  //   glyph: "✦",
  // },
  // {
  //   slug: "pocketpair",
  //   name: "PocketPair",
  //   tagline: "Shared task lists for exactly two people.",
  //   description:
  //     "A deliberately tiny mobile app for couples, co-founders and duos. Encrypted sync, no accounts, no feed, no ads — just one shared list.",
  //   category: ["Mobile"],
  //   status: "beta",
  //   stack: ["React Native", "Expo", "SQLite"],
  //   stars: 645,
  //   updated: "2026-02-02",
  //   repo: "https://github.com/2is1/pocketpair",
  //   accent: "from-amber-400 to-orange-600",
  //   glyph: "◐",
  // },
  // {
  //   slug: "onepass-cli",
  //   name: "onepass",
  //   tagline: "Deploy any static site in one command.",
  //   description:
  //     "Detects your framework, builds it, fixes the base path and pushes to GitHub Pages. Works with Vite, Astro, Next export and plain HTML.",
  //   category: ["CLI"],
  //   status: "stable",
  //   stack: ["Node.js", "Ink", "TypeScript"],
  //   stars: 1877,
  //   updated: "2026-02-14",
  //   repo: "https://github.com/2is1/onepass",
  //   accent: "from-sky-400 to-indigo-600",
  //   glyph: "⌘",
  // },
  // {
  //   slug: "halfpixel",
  //   name: "HalfPixel",
  //   tagline: "Design tokens that compile to anything.",
  //   description:
  //     "Author your palette, spacing and type scale once; emit Tailwind config, CSS variables, Swift and Kotlin themes from the same source of truth.",
  //   category: ["Library"],
  //   status: "alpha",
  //   stack: ["TypeScript", "Tailwind", "Style Dictionary"],
  //   stars: 388,
  //   updated: "2026-01-08",
  //   repo: "https://github.com/2is1/halfpixel",
  //   accent: "from-rose-400 to-pink-600",
  //   glyph: "◈",
  // },
  // {
  //   slug: "binary-notes",
  //   name: "Binary Notes",
  //   tagline: "Markdown notes with a local-first brain.",
  //   description:
  //     "Offline note-taking in the browser with semantic search running fully on-device via WebGPU embeddings. Your notes never leave the tab.",
  //   category: ["Web"],
  //   status: "beta",
  //   stack: ["React", "WebGPU", "IndexedDB"],
  //   stars: 1105,
  //   updated: "2026-02-09",
  //   repo: "https://github.com/2is1/binary-notes",
  //   demo: "https://2is1.github.io/binary-notes",
  //   accent: "from-lime-400 to-green-600",
  //   glyph: "▤",
  // },
  // {
  //   slug: "twinsocket",
  //   name: "TwinSocket",
  //   tagline: "Mirror a websocket stream to two clients.",
  //   description:
  //     "A featherweight relay for debugging realtime apps: tee any socket connection into a second inspector client without touching your server code.",
  //   category: ["CLI"],
  //   status: "archived",
  //   stack: ["Go", "WebSocket"],
  //   stars: 212,
  //   updated: "2025-09-21",
  //   repo: "https://github.com/2is1/twinsocket",
  //   accent: "from-slate-400 to-slate-600",
  //   glyph: "⇄",
  // },
];

export const categories = ["All", "Web", "Desktop", "Mobile"/*, "CLI", "Library", "AI"*/] as const;

export const statusStyles: Record<AppStatus, string> = {
  stable: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  beta: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
  alpha: "bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-500/30",
  archived: "bg-slate-500/10 text-slate-400 ring-slate-500/30",
};
