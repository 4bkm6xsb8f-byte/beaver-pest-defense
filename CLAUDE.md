# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Beaver Pest Defense — marketing website for a local pest control company, serving Milwaukee, WI & surrounding areas. Static Next.js 15 export deployed to GitHub Pages via GitHub Actions. A single homepage plus a set of SEO landing pages for specific buyer types (commercial, warehouse, healthcare, residential, etc.).

**Live URL:** https://beaverpestdefense.com (canonical apex domain; `www` redirects to it via GitHub Pages)  
**GitHub repo:** https://github.com/4bkm6xsb8f-byte/beaver-pest-defense  
**Local directory:** `~/Developer/Beaver_Pest_Defense`

## Stack

- Next.js 15 (App Router, `output: "export"` for static GitHub Pages hosting)
- Tailwind CSS v3 with custom brand tokens (see `tailwind.config.ts`)
- TypeScript
- Google Fonts via `next/font/google`: Barlow Condensed (`font-display`) + Barlow (`font-sans`)

## Commands

```bash
npm run dev     # dev server at localhost:3000
npm run build   # static export to ./out
npm run lint    # ESLint
```

## Architecture

Homepage: `app/page.tsx` composes all sections in order:

**Navbar → Hero → WhyChooseUs → Services → PropertyTypes → ContactCTA → Footer**

- `Navbar` — sticky; transparent-to-frosted on scroll; mobile drawer; Facebook icon; `"use client"`
- `Hero` — split panel: dark text left, `building.jpg` photo right with gradient blend
- `WhyChooseUs` — 5 reason cards with inline SVG icons
- `Services` — pest service list, some items link to dedicated service landing pages
- `PropertyTypes` — 7 commercial + residential property categories with inline SVG icons, each linking to a landing page
- `ContactCTA` — contact info (phone/email/hours/service area/Facebook), trust signals, and form (includes "Residential" property type); `"use client"`
- `Footer` — services/property links to landing pages, hours, logo, Facebook icon

### SEO landing pages

`components/LandingPage.tsx` is a shared template (Navbar + hero + content blocks + trust signals + CTA + optional FAQ + Footer, plus `Service` and — when `faqs` is passed — `FAQPage` JSON-LD) used by ten route pages under `app/<slug>/page.tsx`, each supplying its own `metadata` (title/description/canonical) and content:

`/commercial-pest-control/` `/warehouse-pest-control/` `/property-management-pest-control/` `/healthcare-pest-control/` `/dental-office-pest-control/` `/hospital-pest-control/` `/office-building-pest-control/` `/residential-pest-control/` `/rodent-control/` `/integrated-pest-management/`

Their CTAs link to `/#contact` (the homepage contact form) since there is no separate contact page. Six of the ten pass an `image` prop (see Images below) for a two-column hero; the other four (commercial, hospital, rodent-control, IPM — broader/umbrella topics without a distinct photo) render text-only with the shield watermark. Copy across pages was deliberately de-duplicated (e.g. commercial vs. office-building, healthcare vs. hospital) to avoid near-duplicate-content SEO risk — when adding or editing a page, don't reuse whole sentences from another page's blocks.

## Business info & SEO

- `lib/site.ts` — single source of truth for phone, email, Facebook URL, city/state, service area (`Milwaukee, WI & Surrounding Areas`), and `NEARBY_COMMUNITIES` (a representative, unverified suburb list used in footer copy for local-SEO long-tail — confirm actual coverage before treating it as authoritative). Import from here rather than hardcoding.
- `app/layout.tsx` sets site-wide metadata (title/description/OG) and injects a `PestControlService` (LocalBusiness) JSON-LD schema. No `keywords` meta tag — it has no SEO value and was removed as keyword stuffing.
- `app/robots.ts` and `app/sitemap.ts` generate static `/robots.txt` and `/sitemap.xml` at build time (`export const dynamic = "force-static"` is required for `output: "export"`). Add new routes to the `ROUTES` array in `sitemap.ts` when adding pages.
- `components/SocialIcons.tsx` exports `FacebookLink`, used in Navbar, Footer, and ContactCTA.
- Meta descriptions should stay roughly 140-160 characters; title tags under ~60. Several unverified claims exist site-wide (e.g. "licensed and insured", the Facebook URL, business hours in the JSON-LD) — see the business owner before treating them as confirmed fact.

## Contact form → QuoteIQ integration

`components/ContactCTA.tsx`'s form submits directly to QuoteIQ's Contact Forms Inbound API (`lib/quoteiq.ts`) — `POST https://us-central1-quoteiq-2.cloudfunctions.net/submitFormV2` with `X-API-Key` and `{ form_id, data }`. This is a static export with no backend, so the call happens client-side; the Inbound API key is therefore visible in the shipped JS bundle by design (it can only create submissions on this one form, not read data) — a deliberate tradeoff made with the site owner rather than an oversight.

- `QUOTEIQ_FORM_ID` in `lib/quoteiq.ts` is hardcoded (not sensitive — it's already public in the QuoteIQ-hosted form's own URL).
- `NEXT_PUBLIC_QUOTEIQ_API_KEY` is a GitHub Actions repo secret (`QUOTEIQ_API_KEY`), injected at build time in `.github/workflows/deploy.yml`. For local dev, set it in `.env.local` (gitignored).
- The QuoteIQ-side form ("Quote Request Form", https://quoteiq-2.web.app/forms/v2/vlyPsyZTtRXTyiZJbBR6) was showing "closed" as of this integration — it must be published/opened in the QuoteIQ dashboard before submissions will succeed. Until then, or if the API key isn't configured, submissions fail gracefully (an error message pointing to phone/email — see `ContactCTA.tsx`'s `status === "error"` branch) rather than crashing.
- The payload field keys sent (`first_name`, `last_name`, `company`, `phone`, `property_type`, `message`) are reasonable snake_case guesses — QuoteIQ's docs say they should match the form's configured field labels. Verify against the actual QuoteIQ form once it's accessible and adjust `handleSubmit` in `ContactCTA.tsx` if the field names differ.

## Images

All `<img>` tags use `src={\`${SITE_BASE}/filename\`}` via `lib/config.ts`:
```ts
export const SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
```
`NEXT_PUBLIC_BASE_PATH` is not set in CI (site serves at domain root), so `SITE_BASE` is always `""`. Do NOT use `next/image` — no server-side image optimization in static export.

`public/photo-*.jpg` are neutral, non-deceptive stock photography (Pexels License — free for commercial use) chosen per landing-page topic (`photo-residential.jpg`, `photo-warehouse.jpg`, `photo-dental.jpg`, `photo-office.jpg`, `photo-healthcare.jpg`, `photo-property-management.jpg`). None depict Beaver Pest Defense's actual staff, vehicles, or facilities — don't caption or present them as if they do. If real company photography becomes available, swap these out via the `image` prop on the relevant `app/<slug>/page.tsx`.

## Static export / GitHub Pages notes

- `next.config.ts`: `output: "export"`, `trailingSlash: true`, no `basePath`
- Custom domain via `public/CNAME` (`beaverpestdefense.com`, apex — DNS in Cloudflare has A records for the apex pointing at GitHub Pages' 4 IPs, plus a `www` CNAME to the apex; GitHub Pages handles the `www` → apex redirect and cert once the apex is the configured custom domain)
- `public/.nojekyll` prevents Jekyll processing
- Any component with event handlers must be `"use client"`
- New routes need `app/<slug>/page.tsx` (folder route, since `trailingSlash: true`) and an entry in `app/sitemap.ts`

## Custom Tailwind tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-black` | `#0A0A0A` | Primary background |
| `brand-charcoal` | `#111111` | Section backgrounds |
| `brand-dark` | `#1C1C1C` | Card / panel backgrounds |
| `brand-border` | `#2A2A2A` | Subtle borders |
| `brand-lime` | `#6DC02F` | Primary accent, CTAs |
| `brand-lime-light` | `#80D636` | Hover states |
| `brand-lime-dim` | `#4E8B21` | Muted lime |
| `brand-silver` | `#C8C8C8` | Secondary / muted text |

## Global CSS utilities

- `.brand-rule` — thin lime-to-transparent horizontal separator line
- `.text-lime-gradient` — vertical lime gradient for headline text
- `bg-shield-pattern` — subtle SVG shield tile (Tailwind `backgroundImage` token)
