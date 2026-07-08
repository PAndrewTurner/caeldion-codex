# Caeldion Codex — Design Spec (approved 2026-07-08)

## Vision
A digital reading room of the Imperial Archive: dark, quiet, precise. The Empire's pillars map to design behavior — Meritocracy (hierarchy is earned), Uniformity (every entry uses the identical document template), Economy (no decoration that doesn't inform).

## Stack
Next.js 13.5 App Router (Node 18.16 constraint) + TypeScript + Tailwind 3 + `next-mdx-remote@4` (rsc) + `gray-matter`. Local dev only. Images unoptimized (local).

## Tokens
- Archive Charcoal `#16181D` (page bg), Vault Slate `#1F232B` (panels)
- Alabaster War-Steel `#F8F9FA` (headings/primary text)
- Sea of Silver `#C0C0C0` (hairlines, ~30% alpha)
- Imperial Gold `#D4AF37` (links, emblems, active states)
- Divisional: Cobalt `#0047AB`, Crimson `#8B0000`, Ranger Green `#2E8B57`, Iron Black `#1A1A1A`, Imperial Purple `#4B0082`, Craftsman Steel-Teal `#3E6E70`
- Zero border-radius. 1px silver hairlines. No shadows.

## Type
- Display: Marcellus (imperial capitals, wide tracking, small-caps eyebrows)
- Body: Source Sans 3
- Utility: IBM Plex Mono (classification stamps, codex refs, tables, captions)

## Signature — The Sash Doctrine
Every card/header/nav item is an identical silver-ruled "uniform" component; the only permitted variation is a 4px vertical cloth-band (subtle woven gradient) in the divisional/category color. Divisional colors never tint backgrounds or headings. Every page carries a mono classification stamp doubling as breadcrumb, e.g. `CODEX/GA-02 · GRAND ARMY · COBALT ASCENDANCY`.

## Site map
- `/` home: compendium cover hero → 5 section cards → Sea of Silver doctrine strip (6 identical soldier cards, sash-differentiated) → featured plate
- `/grand-army` + `/grand-army/[slug]` — 6 divisions
- `/icons` + `/icons/[slug]` — Paladins, Royal Family, The Sovereign
- `/arcanum` + `/arcanum/[slug]` — Weave, Mana Wells, The Burn, Runic Armor, Arming Doublets
- `/geography` + `/geography/[slug]` — Empire map + Caeldrion, Highfjord, Miada, Sunlit Isles
- `/history` + `/history/[slug]` — event stubs to satisfy cross-links

## Content model
`content/{section}/*.mdx`, frontmatter: `title, codexRef, category, division?, tags, summary, heroImage?, date`. Entry template: breadcrumb stamp / sidebar nav / article / right-rail TOC (h2 extraction). Archivist voice; heavy `[text](/section/slug)` cross-links. Components: ClassificationStamp, UniformCard, DoctrineStrip, PlateGallery, TOC, SidebarNav.

## Quality floor
Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected, screenshot review of every page.
