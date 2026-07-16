# Beaver Pest Defense

Single-page marketing website for Beaver Pest Defense, built with Next.js and exported as a static site for GitHub Pages.

## Stack

- Next.js 15 App Router with `output: "export"`.
- React 19.
- TypeScript.
- Tailwind CSS v3.
- GitHub Pages deployment through `.github/workflows/deploy.yml`.

## Project Structure

- `app/page.tsx` - Main landing page composition.
- `app/layout.tsx` and `app/globals.css` - App shell and global styles.
- `components/` - Navbar, hero, services, property types, contact CTA, footer, and supporting page sections.
- `lib/config.ts` - Static asset base path helper.
- `public/` - Custom domain, brand guide, logo, and site images.
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

The site deploys to GitHub Pages from `main`. The custom domain is configured in `public/CNAME` as `www.beaverpestdefense.com`.

## Maintenance Notes

- Keep public image references compatible with static export; this project intentionally uses plain image paths instead of `next/image`.
- Update `public/CNAME` and any canonical/social metadata together if the domain changes.
- Any component using event handlers must be marked with `"use client"`.
