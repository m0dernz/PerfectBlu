# Development Guide

PerfectBlu is built as a static Astro site with structured content collections.

## Requirements

- Node.js 22 or newer
- npm

The repository includes `.nvmrc` with the preferred Node major version.

## Install

From the repository root:

```bash
cd site
npm ci
```

## Run locally

```bash
cd site
npm run dev
```

Astro will print the local development URL.

## Check content and types

```bash
cd site
npm run check
```

This validates Astro files and content collection schemas.

## Build static site

```bash
cd site
npm run build
```

The build writes static output to:

```text
site/dist/
```

The build also generates a Pagefind search index in:

```text
site/dist/pagefind/
```

## Preview production build

```bash
cd site
npm run preview
```

## Content workflow

1. Add or edit Markdown files under `site/src/content/`.
2. Use frontmatter that matches `site/src/content.config.ts`.
3. Keep source references compact and mark unknown exact references as `TBD`.
4. Run `npm run check`.
5. Run `npm run build`.
6. Commit related content changes together.

## Copyright and source discipline

Do not paste long book passages, comic panels, screenplay excerpts, scans, screenshots, or other copyrighted media into the repository. Prefer original summaries and concise source references.
