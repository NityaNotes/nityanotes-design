/** Authored copy and metadata for the typography reference route. */
export const designTypographyContent = {
  seo: {
    title: "Typography · Nitya Notes",
    description: "English and Hindi typography roles for Nitya Notes.",
    keywords: ["Nitya Notes", "typography", "Hindi", "English"],
    og: {
      title: "Typography · Nitya Notes",
      description: "English and Hindi typography roles for Nitya Notes.",
    },
  },
  hero: {
    eyebrow: "Nitya Notes · Design grammar",
    title: "Typography.",
    lede: "A small, reusable rule set for a quiet reading and writing interface — written scripture first, so the citation, the meaning line, the controls, and the counts serve one verse at a time.",
    action: {
      label: "Continue to English typography",
      href: "/design/english",
    },
  },
  order: {
    label: "The order of things",
    eyebrow: "01 · The order of things",
    title: "The śloka is the subject; everything else is apparatus.",
    lede: "This product shows one verse at a time, so the type system is written scripture first. The citation, the meaning line, the controls and the counts exist to present one verse and get out of the way — the rules protect that order rather than a visual hierarchy.",
    verse: ["कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥"],
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana",
    gloss: "Your right is to action alone, never to its fruits.",
    source: "Bhagavad Gītā 2.47",
    conclusion: "A verse is presented in one fixed sequence — verse, transliteration, gloss, source. The citation is how you find the verse again, not how you meet it, so it never comes first.",
  },
  serif: {
    label: "One serif, and it is the verse",
    eyebrow: "02 · One serif, and it is the verse",
    title: "Tiro carries every śloka; the interface stays a low-contrast sans.",
    lede: "Tiro Devanagari Sanskrit is the only face with a written stroke on any screen, in either language. Everything around it — headings, body, labels — is the interface sans, so the verse reads as a text rather than a large label.",
    registers: ["Scripture · Tiro", "Interface · en — DM Sans", "Interface · hi — Noto Sans Devanagari", "Data · monospace"],
    conclusion: "Scripture is the one family the language switch never touches: the verse is Tiro on an English screen and Tiro on a Hindi one, because it is the same verse either way. Monospace is reserved for verse IDs and code — it is not a style for small labels.",
  },
  scale: {
    label: "The scale at a glance",
    eyebrow: "03 · The scale at a glance",
    title: "Seventeen roles, scripture first.",
    lede: "Fluid roles interpolate between a 360px and a 1440px viewport, then lock. Fixed roles are fixed on purpose: body copy never drops below 16px, and interface chrome stays the same physical size on a phone and a monitor.",
    roles: [
      { name: ".type-display", sample: "Write what matters.", className: "type-display-sm" },
      { name: ".type-section", sample: "A clear hierarchy.", className: "type-section" },
      { name: ".type-subsection", sample: "Nested headings carry structure.", className: "type-subsection" },
      { name: ".type-lede", sample: "A lede makes the purpose clear before the body carries the detail.", className: "type-lede" },
      { name: ".type-card-title", sample: "Card answers begin here.", className: "type-card-title" },
      { name: "body", sample: "Default body stays practical at the reading size; supporting detail uses muted colour rather than a second scale of arbitrary sizes.", className: "" },
      { name: ".type-compact", sample: "Metadata and helper text stay compact so they support the reading flow.", className: "type-compact" },
      { name: ".type-eyebrow", sample: "Position · Sequence · Corpus", className: "type-eyebrow" },
    ],
    conclusion: "The scripture ladder does not interleave with the interface ladder: a 26px verse and a 26px heading are not peers. Never set a verse with an interface role, or a heading with a verse role, to match them.",
  },
} as const;
