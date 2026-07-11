# The Caeldrion Codex

The official lore archive of the Empire of Caeldrion — Grand Army, Icons, Arcanum, Geography, and History — built as a Next.js 13 (App Router) site with Tailwind CSS and MDX content.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Add or edit lore

Every entry is an MDX file under `content/<section>/<slug>.mdx` with frontmatter:

```yaml
---
title: "Entry Title"
codexRef: GA-07          # filing number; controls sort order
category: Grand Army
division: iron-legion    # optional — sets the sash color from lib/sections.ts
sash: "#D4AF37"          # optional — explicit sash color if no division
tags: [tag-one, tag-two]
summary: One-sentence archivist summary shown on cards and entry headers.
heroImage: /assets/...   # optional
clearance: General       # or Restricted — display only
date: 2026-07-08
---
```

New files appear automatically in their section index and sidebar. Cross-link entries with standard markdown links (`[the Burn](/arcanum/the-burn)`). Inside MDX you can use `<PlateGallery plates={[...]} />` and `<Figure src alt caption aspect />`.

## Design system

- Tokens (colors, fonts) live in `tailwind.config.ts`; divisional metadata in `lib/sections.ts`.
- The **Sash Doctrine**: every card and header is an identical silver-ruled component — the only permitted variation is the colored cloth band (`.sash` in `app/globals.css`).
- Design spec: `docs/superpowers/specs/2026-07-08-caeldrion-codex-design.md`.

Images are served unoptimized from `public/assets/` (local-only deployment).
