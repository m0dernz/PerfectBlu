# Deployment Guide

PerfectBlu is designed to deploy as a static website.

## Chosen initial target

The initial deployment target is GitHub Pages, published from the `main` branch through GitHub Actions.

Production URL:

```text
https://m0dernz.github.io/PerfectBlu/
```

Deployment workflow:

```text
.github/workflows/pages.yml
```

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

## GitHub Pages settings

Recommended repository setting:

```text
Pages source: GitHub Actions
```

The deployment workflow runs these steps:

1. Install dependencies with `npm ci`.
2. Run `npm run check`.
3. Run `npm run build`.
4. Upload `site/dist/` as the Pages artifact.
5. Deploy the artifact to GitHub Pages.

## Alternative hosts

Any static host can serve PerfectBlu. Other good fits include:

- Cloudflare Pages
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
