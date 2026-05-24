# Deployment Guide

PerfectBlu is designed to deploy as a static website.

## Build output

The production build is generated from the `site/` directory:

```bash
cd site
npm ci
npm run build
```

Static files are written to:

```text
site/dist/
```

## Recommended hosts

Any static host can serve PerfectBlu. Good fits include:

- Cloudflare Pages
- GitHub Pages
- Netlify
- Vercel static output

## Cloudflare Pages settings

Recommended settings:

```text
Framework preset: Astro
Root directory: site
Build command: npm run build
Build output directory: dist
Node version: 22
```

## Netlify settings

Recommended settings:

```text
Base directory: site
Build command: npm run build
Publish directory: site/dist
Node version: 22
```

If Netlify asks for a publish directory relative to the base directory, use:

```text
dist
```

## GitHub Pages direction

GitHub Pages can be used, but the workflow should publish `site/dist/` after running:

```bash
cd site
npm ci
npm run build
```

Add a dedicated deploy workflow only after the repository hosting target is chosen.

## Search deployment note

Pagefind search files are generated during `npm run build` and must be deployed with the rest of `site/dist/`.

## Verification after deploy

After deployment, verify:

- Home page loads.
- `/works/` lists the six Frank Herbert novels.
- `/encyclopedia/` lists seeded entries.
- `/sources/` lists source records.
- `/timeline/` lists timeline stubs.
- `/search/` loads and returns results for `Arrakis` and `Atreides`.
