# Beaver Pest Defense

Marketing website for Beaver Pest Defense, built with Next.js and exported as a static site for GitHub Pages. A homepage plus a set of SEO landing pages for specific buyer types (commercial, warehouse, healthcare, residential, etc.), serving Milwaukee, WI & surrounding areas.

## Stack

- Next.js 15 App Router with `output: "export"`.
- React 19.
- TypeScript.
- Tailwind CSS v3.
- GitHub Pages deployment through `.github/workflows/deploy.yml`.

## Project Structure

- `app/page.tsx` - Homepage composition.
- `app/layout.tsx` and `app/globals.css` - App shell, global styles, site-wide SEO metadata, and LocalBusiness JSON-LD schema.
- `app/robots.ts` / `app/sitemap.ts` - Generate static `/robots.txt` and `/sitemap.xml`.
- `app/<slug>/page.tsx` - Ten SEO landing pages (e.g. `commercial-pest-control`, `warehouse-pest-control`, `residential-pest-control`), each rendering `components/LandingPage.tsx` with its own metadata and copy.
- `components/` - Navbar, hero, services, property types, contact CTA, footer, landing page template, social icons, and supporting page sections.
- `lib/config.ts` - Static asset base path helper.
- `lib/site.ts` - Business info constants (phone, email, Facebook, service area) shared across the site.
- `public/` - Custom domain (CNAME), brand guide, logo, and site images (`photo-*.jpg` are neutral stock photography, not real company photos — see CLAUDE.md).
- `next.config.ts` - Static export configuration.
- `tailwind.config.ts` - Brand tokens and Tailwind configuration.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static export:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Deployment

The site deploys to GitHub Pages from `main`. The custom domain is configured in `public/CNAME` as `beaverpestdefense.com` (apex). DNS (Cloudflare) has A records for the apex pointing at GitHub Pages and a `www` CNAME to the apex, so GitHub Pages automatically redirects `www` to the apex and issues the certificate for it.

## Maintenance Notes

- Keep public image references compatible with static export; this project intentionally uses plain image paths instead of `next/image`.
- Update `public/CNAME` and any canonical/social metadata together if the domain changes.
- Any component using event handlers must be marked with `"use client"`.
- Business info (phone, email, Facebook, service area) lives in `lib/site.ts` — update it there rather than hardcoding.
- Adding a new landing page: create `app/<slug>/page.tsx` rendering `components/LandingPage.tsx`, then add the route to `app/sitemap.ts`.
