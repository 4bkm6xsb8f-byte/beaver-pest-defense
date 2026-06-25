# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Beaver Pest Defense — single-page marketing website for a local pest control company. Static Next.js 15 export deployed to GitHub Pages via GitHub Actions.

**Live URL:** https://www.beaverpestdefense.com  
**GitHub repo:** https://github.com/4bkm6xsb8f-byte/beaver-pest-defense  
**Local directory:** `~/Developer/Beaver_Pest_Defense`

## Stack

- Next.js 15 (App Router, `output: "export"` for static GitHub Pages hosting)
- Tailwind CSS v3 with custom color tokens (see `tailwind.config.ts`)
- TypeScript
- Google Fonts via `next/font/google`: Barlow Condensed (display) + Barlow (body)

## Commands

```bash
npm run dev     # dev server at localhost:3000
npm run build   # static export to ./out
npm run lint    # ESLint
```

## Architecture

Single page: `app/page.tsx` composes all sections in order. Each section is its own component in `components/`.

Page sections (top to bottom):
- `Navbar` — sticky, transparent-to-frosted on scroll; mobile drawer; `"use client"`
- `Hero` — split panel: dark text left, building photo right; two CTAs
- `Services` — pest service cards
- `WhyChooseUs` — dark section, 5 reason cards with SVG icons
- `PropertyTypes` — commercial property categories with SVG icons
- `ContactCTA` — contact info + request-inspection form; `"use client"` (has onSubmit)
- `Footer` — dark, links + hours

## Images

All `<img>` tags use `src={`${SITE_BASE}/filename`}` via `lib/config.ts`:
```ts
export const SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
```
This is a no-op now (basePath removed), but kept for consistency. Do NOT use `next/image` — static export doesn't support server-side image optimization.

## GitHub Pages / static export notes

- `next.config.ts` sets `output: "export"` — no basePath (site serves at domain root).
- Custom domain `www.beaverpestdefense.com` configured via `public/CNAME`.
- `public/.nojekyll` prevents GitHub Pages from processing the output with Jekyll.
- Any Server Component with event handlers must be marked `"use client"`.

## Custom Tailwind tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-black` | `#0A0A0A` | Hero / page background |
| `brand-charcoal` | `#111111` | Section backgrounds |
| `brand-dark` | `#1A1A1A` | Card backgrounds |
| `brand-lime` | `#6DC02F` | Primary accent, CTAs |
| `brand-silver` | `#A0A0A0` | Body / muted text |
| `brand-border` | `#2A2A2A` | Borders |
