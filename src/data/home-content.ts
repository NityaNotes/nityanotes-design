/** Authored copy for the home route. */
export const homeContent = {
  seo: {
    title: "Dota",
    description: "A minimal Dota starter focused on a clean home page, documentation, and core workspace links.",
    keywords: ["Dota", "Dota Wrap", "documentation", "workspace"],
    og: { title: "Dota", description: "A minimal Dota starter focused on a clean home page, documentation, and core workspace links." },
  },
  hero: {
    eyebrow: "Dota workspace",
    title: "Build on Dota without extra noise.",
    description: "A minimal starting point for Dota apps, with the core workspace, docs, and page structure kept clear and close.",
    documentation: { label: "Read documentation", href: "https://dota-workspace.vercel.app/docs?content=Getting-Started.md" },
    home: { label: "Open Dota home", href: "https://dota-workspace.vercel.app/" },
  },
} as const;
