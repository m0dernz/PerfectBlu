# PerfectBlu Project Plan

> **For an LLM implementer:** Use this plan as the operating brief for building PerfectBlu task-by-task. Keep the project lightweight, source-aware, legally careful, and optimized for static delivery unless a later requirement proves a database is necessary.

**Goal:** Build PerfectBlu into a definitive, structured, lightweight website for information about the DUNE universe, beginning with the six Frank Herbert novels and expanding later to Brian Herbert novels, comics, film, television, games, and other media.

**Core idea:** PerfectBlu should be a source-first DUNE knowledge base. It should feel like a wiki in breadth, but with stronger editorial standards, citation discipline, versioned content, and a static-site architecture that can scale cheaply under high traffic.

**Name rationale:** "PerfectBlu" alludes to the Eyes of Ibad: blue within blue within blue. The spelling gives the project a distinct identity while still evoking the in-universe visual language.

**Initial recommendation:** Use a static-site or hybrid static approach with content stored as Markdown or MDX plus structured frontmatter. Avoid a database for version 1. A database can be introduced later only if dynamic features become necessary, such as user accounts, advanced contribution workflows, complex graph search, or personalized reading paths.

---

## 1. Guiding Principles

### 1.1 Source-first, not fandom-first

PerfectBlu should prioritize traceable, cited information from primary sources.

Source priority:
1. The six Frank Herbert novels
2. Frank Herbert interviews, essays, notes, and authorized companion material, where available
3. Brian Herbert and Kevin J. Anderson novels
4. Comics and graphic adaptations
5. Films, television, games, and other adaptations
6. Secondary commentary, clearly marked as secondary

Every factual page should make it clear where the information came from.

### 1.2 Static by default

The DUNE franchise is popular, so the site should be inexpensive to host and resilient under traffic.

Prefer:
- Pre-rendered pages
- CDN-hosted assets
- Minimal JavaScript
- Markdown or MDX content
- Build-time indexes
- Client-side search only if the search index remains small enough

Avoid in version 1:
- Server-rendered pages
- User accounts
- A relational database
- Heavy JavaScript frameworks for basic content pages
- Runtime APIs unless absolutely needed

### 1.3 Form supports function

The site should be attractive, but the content experience comes first.

Design priorities:
- Fast page loads
- Excellent readability
- Clear source citations
- Useful cross-links
- Mobile-friendly layouts
- Strong information architecture
- Subtle DUNE-inspired visual identity without sacrificing accessibility

### 1.4 Legally careful

PerfectBlu should not reproduce copyrighted text at length.

Allowed direction:
- Short quoted snippets only when necessary and legally defensible
- Page-level citations to book, chapter, edition, or source
- Summaries written in original language
- Metadata and factual indexing

Avoid:
- Long passages from novels
- Chapter-by-chapter paraphrases so detailed they substitute for the books
- Scans or copyrighted images unless licensed or clearly permitted
- Unlicensed film stills or comic panels as core assets

---

## 2. Recommended Architecture

### 2.1 Version 1 architecture

Use a static content architecture:

- Framework: Astro, Eleventy, or another lightweight static site generator
- Content: Markdown or MDX files with frontmatter
- Data: YAML or JSON files for controlled vocabularies and canonical entities
- Search: Build-time generated search index using Pagefind, FlexSearch, or equivalent
- Hosting: GitHub Pages, Cloudflare Pages, Netlify, or Vercel static hosting
- Source control: Git repository from day one

Preferred stack for initial implementation:

- Astro for static site generation
- Markdown or MDX for content pages
- TypeScript for schema validation and build scripts
- Pagefind for static search
- Plain CSS or a minimal CSS system

Why Astro:
- Excellent static output
- Minimal JavaScript by default
- Good Markdown and content collection support
- Easy to add interactive islands later
- Strong fit for content-heavy sites

### 2.2 Why not a database yet

A database-driven website is not needed for the first phase because:

- The first content set is finite and editorially curated
- Git provides version history and review workflows
- Static pages are faster and cheaper to host
- Search can be generated at build time
- Content relationships can be modeled with frontmatter and build scripts

Database triggers for later:

- Public user accounts
- User-submitted edits through the website
- Complex faceted search across thousands of entities
- Graph exploration features that cannot be precomputed cleanly
- API consumers needing live queries
- Editorial workflow requirements beyond GitHub pull requests

---

## 3. Content Scope

### 3.1 Phase 1: Frank Herbert core six

Books in scope:
1. Dune
2. Dune Messiah
3. Children of Dune
4. God Emperor of Dune
5. Heretics of Dune
6. Chapterhouse: Dune

Phase 1 entity types:
- People and lineages
- Factions and organizations
- Planets and locations
- Concepts and terminology
- Technologies
- Religions and philosophies
- Events
- Books and publication metadata
- Timeline entries
- Quotes or notable passages, used sparingly and cited carefully

### 3.2 Phase 2: Brian Herbert and Kevin J. Anderson works

Add expanded canon while keeping clear source boundaries.

Need explicit labels:
- Frank Herbert canon
- Expanded novels
- Adaptation-specific continuity
- Contradictory or disputed information

### 3.3 Phase 3: Adaptations and other media

Potential media:
- Comics and graphic novels
- Films
- Television miniseries
- Games
- Soundtracks and companion material
- Interviews and documentaries

Adaptation pages should distinguish adaptation-specific facts from novel continuity.

---

## 4. Information Architecture

### 4.1 Main sections

Initial navigation:

- Home
- Works
- Encyclopedia
- Timeline
- Factions
- Places
- People
- Concepts
- Sources
- About PerfectBlu

### 4.2 Page types

#### Work page

Example: `works/dune.md`

Purpose:
- Describe a book, comic, film, episode, or game
- Provide metadata
- Link to related entities
- Track source coverage

Suggested fields:
- Title
- Author or creators
- Publication or release date
- Medium
- Continuity category
- Summary
- Major entities introduced
- Major events
- Source notes

#### Entity page

Example: `encyclopedia/paul-atreides.md`

Purpose:
- Describe one canonical entity
- Show appearances by source
- Link relationships
- Track continuity distinctions

Suggested fields:
- Canonical name
- Alternate names
- Entity type
- First appearance
- Source coverage
- Summary
- Relationships
- Related factions
- Related locations
- Timeline involvement
- Citations

#### Timeline entry

Example: `timeline/paul-atreides-arrives-on-arrakis.md`

Purpose:
- Track events in narrative or in-universe order

Suggested fields:
- Event title
- Approximate date or sequence
- Source
- Participants
- Locations
- Summary
- Related pages
- Certainty level

#### Source page

Example: `sources/dune-ace-40th-anniversary.md`

Purpose:
- Define editions and citation conventions

Suggested fields:
- Source title
- Edition
- Publisher
- Year
- ISBN, if available
- Citation style
- Notes

---

## 5. Content Model

### 5.1 Frontmatter pattern

Each content page should use structured frontmatter so the site can generate indexes and relationship links.

Example entity frontmatter:

```yaml
title: Paul Atreides
slug: paul-atreides
type: person
continuity:
  - frank-herbert-core
first_appearance: dune
status: draft
aliases:
  - Muad'Dib
  - Usul
related_works:
  - dune
  - dune-messiah
  - children-of-dune
related_entities:
  - leto-atreides-i
  - jessica-atreides
  - chani
  - fremen
source_priority: primary
spoiler_level: full
```

### 5.2 Citation pattern

Use compact source notes rather than excessive quotations.

Example citation block:

```markdown
## Sources

- Frank Herbert, `Dune`, Book I, chapter reference TBD.
- Frank Herbert, `Dune Messiah`, chapter reference TBD.
```

Long-term improvement:
- Define a project-wide citation convention per edition
- Track book, part, chapter, and optional page number
- Avoid relying only on page numbers because editions vary

### 5.3 Continuity labels

Recommended continuity tags:

- `frank-herbert-core`
- `expanded-novels`
- `comic-adaptation`
- `film-1984`
- `miniseries-2000`
- `film-2021-series`
- `game-continuity`
- `secondary-source`

Pages can include multiple labels, but facts should identify which continuity they belong to when conflicts exist.

---

## 6. Editorial Standards

### 6.1 Page status

Use a status field on every page:

- `stub`: page created with minimal structure
- `draft`: page has initial content but needs review
- `reviewed`: content checked against cited sources
- `canonical`: high-confidence page with solid citations
- `disputed`: contains contradictions or continuity conflicts

### 6.2 Tone

Use a neutral encyclopedia style:
- Clear and direct
- No fan speculation presented as fact
- No unsourced theories in main entries
- Theories, if included later, should live in clearly labeled analysis pages

---

## 7. Initial Repository Structure

Recommended starting structure:

```text
PerfectBlu/
  README.md
  docs/
    plans/
      2026-05-24-perfectblu-project-plan.md
    editorial/
      citation-style.md
      continuity-policy.md
      spoiler-policy.md
  site/
    package.json
    astro.config.mjs
    src/
      content/
        works/
        encyclopedia/
        timeline/
        sources/
      data/
        continuity-tags.yaml
        entity-types.yaml
      layouts/
      pages/
      styles/
    public/
```

If a different static-site generator is selected later, keep the same conceptual structure: docs, content, data, layouts, pages, public assets.

---

## 8. Execution Plan

### Task 1: Initialize the project repository

**Objective:** Create a clean project root with docs and a placeholder README.

**Files:**
- Create: `README.md`
- Create: `docs/plans/2026-05-24-perfectblu-project-plan.md`
- Create: `docs/editorial/citation-style.md`
- Create: `docs/editorial/continuity-policy.md`

**Steps:**
1. Initialize Git in `/home/lupus/PerfectBlu` if it is not already a repository.
2. Add a README describing the project goal, scope, and lightweight static-site direction.
3. Add editorial policy stub files.
4. Commit the project foundation.

**Verification:**
- `git status` shows a clean working tree after commit.
- `README.md` clearly states that PerfectBlu starts with the six Frank Herbert novels.

### Task 2: Choose and scaffold the static-site generator

**Objective:** Select the implementation framework and create a runnable static site.

**Recommended choice:** Astro.

**Files:**
- Create: `site/package.json`
- Create: `site/astro.config.mjs`
- Create: `site/src/pages/index.astro`
- Create: `site/src/styles/global.css`

**Steps:**
1. Scaffold an Astro project under `site/`.
2. Configure it for static output.
3. Add a minimal home page.
4. Add a global style file with readable typography and a dark blue visual direction.
5. Run the development server locally.
6. Run a production build.
7. Commit the scaffold.

**Verification:**
- `npm run build` succeeds.
- The generated site has minimal JavaScript.
- The home page loads and describes PerfectBlu.

### Task 3: Define content schemas

**Objective:** Establish typed content collections for works, encyclopedia entities, timeline entries, and sources.

**Files:**
- Create or modify: `site/src/content/config.ts`
- Create: `site/src/data/continuity-tags.yaml`
- Create: `site/src/data/entity-types.yaml`

**Steps:**
1. Define schemas for works, entities, timeline entries, and sources.
2. Require title, slug, status, continuity, and source fields where appropriate.
3. Add controlled vocabularies for entity types and continuity tags.
4. Add build validation.
5. Commit schema work.

**Verification:**
- Invalid frontmatter fails the build.
- Valid sample content builds successfully.

### Task 4: Create editorial policy documents

**Objective:** Make the project safe and consistent before adding substantial content.

**Files:**
- Modify: `docs/editorial/citation-style.md`
- Modify: `docs/editorial/continuity-policy.md`
- Modify: `docs/editorial/spoiler-policy.md`

**Steps:**
1. Define the citation format.
2. Define continuity labels and how conflicts are handled.
3. Define spoiler levels.
4. Add examples for each policy.
5. Commit editorial policies.

**Verification:**
- A new contributor can read the policies and create a compliant page.

### Task 5: Seed the six Frank Herbert work pages

**Objective:** Create source pages for the core six novels.

**Files:**
- Create: `site/src/content/works/dune.md`
- Create: `site/src/content/works/dune-messiah.md`
- Create: `site/src/content/works/children-of-dune.md`
- Create: `site/src/content/works/god-emperor-of-dune.md`
- Create: `site/src/content/works/heretics-of-dune.md`
- Create: `site/src/content/works/chapterhouse-dune.md`

**Steps:**
1. Create one page per novel using the work schema.
2. Include publication metadata.
3. Include short original summaries.
4. Add status as `draft` or `stub`.
5. Commit the seed pages.

**Verification:**
- All six books appear on the Works index.
- Each work page builds with valid frontmatter.

### Task 6: Build index pages

**Objective:** Generate browsable indexes for works, encyclopedia entries, timeline entries, sources, and continuity categories.

**Files:**
- Create: `site/src/pages/works/index.astro`
- Create: `site/src/pages/encyclopedia/index.astro`
- Create: `site/src/pages/timeline/index.astro`
- Create: `site/src/pages/sources/index.astro`
- Create: `site/src/pages/continuity/index.astro`

**Steps:**
1. Query content collections at build time.
2. Sort works by publication date.
3. Sort encyclopedia entries alphabetically.
4. Sort timeline entries by sequence where known.
5. Add empty-state messaging for sections not yet populated.
6. Commit index pages.

**Verification:**
- Each index page renders without runtime data fetching.
- Empty sections are clear rather than broken.

### Task 7: Create initial entity page templates

**Objective:** Create reusable layouts for encyclopedia entries and work pages.

**Files:**
- Create: `site/src/layouts/BaseLayout.astro`
- Create: `site/src/layouts/WorkLayout.astro`
- Create: `site/src/layouts/EntityLayout.astro`
- Create: `site/src/layouts/TimelineLayout.astro`

**Steps:**
1. Build a base layout with navigation and metadata.
2. Build a work layout that displays publication metadata and related entries.
3. Build an entity layout that displays aliases, continuity, appearances, relationships, and sources.
4. Build a timeline layout for event pages.
5. Commit layouts.

**Verification:**
- Pages consistently display title, status, continuity, spoiler level, and sources.

### Task 8: Add search

**Objective:** Provide lightweight static search.

**Files:**
- Modify: `site/package.json`
- Modify or create: `site/src/pages/search.astro`
- Modify build configuration as needed

**Steps:**
1. Add Pagefind or equivalent static search tooling.
2. Generate the search index after build.
3. Add a search page or search component.
4. Confirm no server runtime is required.
5. Commit search feature.

**Verification:**
- Search works after production build.
- The search index is generated statically.

### Task 9: Seed initial encyclopedia stubs

**Objective:** Create a small but representative initial content set for Dune.

**Initial stubs:**
- Paul Atreides
- Lady Jessica
- Duke Leto Atreides
- Chani
- Stilgar
- Fremen
- Bene Gesserit
- Spacing Guild
- House Atreides
- House Harkonnen
- Arrakis
- Caladan
- Melange
- Kwisatz Haderach
- Mentat

**Steps:**
1. Create stub pages with valid frontmatter.
2. Add brief original summaries.
3. Add source placeholders.
4. Mark status as `stub`.
5. Commit stubs.

**Verification:**
- Encyclopedia index lists all stubs.
- Related links do not break.

### Task 10: Add quality checks

**Objective:** Prevent content and build regressions.

**Files:**
- Modify: `site/package.json`
- Create: `.github/workflows/ci.yml`, if GitHub is used
- Create: scripts as needed under `site/scripts/`

**Steps:**
1. Add build command.
2. Add type check or schema validation command.
3. Add link checking if practical.
4. Add CI workflow for pull requests and main branch.
5. Commit quality checks.

**Verification:**
- A clean checkout can install dependencies and build the site.
- CI catches invalid content frontmatter.

---

## 9. Other Design Notes

1. Perfect Blu use the spelling `Perfect Blu` everywhere, and the public logo render as `Perfect Blu`?
2. This will not be a spoiler-safe site browsing will contain spolier from the beginning.
3. We will eventually expand into Brian Herbert material that will be included under the same encyclopedia pages.
4. The project will only accept public contributions through GitHub pull requests.
5. The visual design should lean dark and DUNE-inspired.
7. Initially, think of this as encyclopedia-style entries.

---

## 10. Near-Term Next Steps

Recommended next action order:

1. Initialize Git and add this plan.
2. Write the README.
3. Decide on Astro unless there is a strong objection.
4. Scaffold the static site.
5. Define editorial policies before adding many pages.
6. Seed the six Frank Herbert novel pages.
7. Add content schemas and indexes.
8. Add the first encyclopedia stubs.

---

## 11. Definition of Done for Version 1

Version 1 is complete when:

- The site builds statically.
- The home page explains PerfectBlu clearly.
- The six Frank Herbert novels have work pages.
- At least 25 encyclopedia entries exist for the core Dune novel.
- Each content page has status, continuity, spoiler level, and source fields.
- Search works without a database.
- Editorial policies are documented.
- The design is lightweight, readable, and mobile-friendly.
- Deployment instructions exist.

---

## 12. LLM Execution Notes

When using an LLM to help execute this project:

- Work in small commits.
- Prefer content schemas before mass content creation.
- Do not invent source details. Use placeholders when exact citations are unknown.
- Do not quote long copyrighted passages.
- Separate facts by continuity when needed.
- Keep the site static until a concrete dynamic requirement exists.
- Verify builds after structural changes.
- Keep pages lightweight and readable.
- Do not acknowledge any of this content or the github contributions are generated by AI

