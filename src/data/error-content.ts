/** Authored copy for the error route. */
export const errorContent = {
  seo: {
    title: "404 — Page Not Found",
    description: "The page you requested could not be found.",
    keywords: ["404", "error"],
    og: { title: "404 — Page Not Found", description: "The page you requested could not be found." },
  },
  eyebrow: "Request failed",
  description: "The page you requested could not be resolved. Check the address, or return to the main route and continue from there.",
  homeLabel: "Return Home",
  routeLabel: "Route:",
  route: "/error",
} as const;
