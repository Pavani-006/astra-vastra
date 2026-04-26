# Astra Vastra

A dark-themed, minimal React + Vite portfolio website for the fashion designer brand "Astra Vastra" — modern Indian-fusion bridal wear.

## Pages
- `/` — Home / Gallery (2-column grid of 4 signature dresses: Midnight Bloom, Chandrika Grace, Noir Saaj, Velvet Vows)
- `/design/:slug` — Design Detail page
- `/add-design` — Add Design form (local state, toast on submit)
- `/about` — Brand story
- `/contact` — Inquiries with Instagram + email

## Tech
- pnpm monorepo
- React + Vite at `artifacts/astra-vastra/` (preview path `/`)
- Wouter routing, Tailwind, shadcn-style UI primitives
- No backend — purely presentation

## Assets
All dress imagery lives in `attached_assets/` and is imported via the `@assets/` Vite alias. The user provided 15 images: 5 are website inspiration mockups (not used as gallery imagery), and 10 are illustrated dress designs that drive the gallery and detail pages.

## Style direction
- Black background, white text, sparse gold accents (`#D4AF37`)
- Inter (sans) + Playfair Display (serif)
- Subtle fade-in animations only — no carousels, no parallax
