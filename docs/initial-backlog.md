# Initial Backlog

These are issue-ready tasks to create after the GitHub repository is available.

## Content citation tasks

### Content: choose canonical editions for Frank Herbert core six

Scope: Decide which editions of the six Frank Herbert novels PerfectBlu will use for page-level citation references.

Sources:
- Dune, edition TBD
- Dune Messiah, edition TBD
- Children of Dune, edition TBD
- God Emperor of Dune, edition TBD
- Heretics of Dune, edition TBD
- Chapterhouse: Dune, edition TBD

Acceptance criteria:
- `docs/editorial/citation-style.md` identifies the selected editions.
- Each source record in `site/src/content/sources/` includes edition details.
- Guidance explains when to cite book, part, chapter, and page number.

### Content: source-review Dune work page

Scope: Replace placeholder source references on `site/src/content/works/dune.md` with exact chapter-level references.

Acceptance criteria:
- No long copyrighted passages are added.
- Page status moves from `stub` to `draft` or `reviewed` only if references support the summary.
- Related introduced entities are added where source-backed.

### Content: source-review initial encyclopedia stubs

Scope: Review the 15 initial encyclopedia stubs and add exact source references where known.

Acceptance criteria:
- Each stub has at least one meaningful source note.
- Unverified claims remain marked with `TBD`.
- Continuity remains `frank-herbert-core` unless another source is explicitly added.

### Content: expand Arrakis page

Scope: Expand `site/src/content/encyclopedia/arrakis.md` into a richer source-backed article.

Acceptance criteria:
- Include ecological, political, and melange-related sections.
- Add exact source references where available.
- Avoid long quotations.

### Content: expand Bene Gesserit page

Scope: Expand `site/src/content/encyclopedia/bene-gesserit.md` with source-backed information about role, training, politics, and breeding program references.

Acceptance criteria:
- Keep facts tied to Frank Herbert core sources.
- Use separate sections for later books if needed.
- Avoid unsourced speculation.

## Site tasks

### Site: add relationship link rendering

Scope: Convert `related_works` and `related_entities` frontmatter into rendered internal links on entity and work detail pages.

Acceptance criteria:
- Existing stubs render relationship links.
- Missing related pages fail gracefully.
- Build remains static.

### Site: add content status badges

Scope: Create consistent visual badges for `stub`, `draft`, `reviewed`, `canonical`, and `disputed`.

Acceptance criteria:
- Badges appear on work, entity, timeline, and source detail pages.
- Badges are accessible and readable on mobile.

### Site: add Pagefind filters

Scope: Add search filters for section or content type if Pagefind supports it cleanly with current static output.

Acceptance criteria:
- Search can distinguish works, encyclopedia entries, sources, and timeline pages.
- No database or server runtime is introduced.

### Site: choose deployment target

Scope: Decide between Cloudflare Pages, GitHub Pages, Netlify, or Vercel for initial deployment.

Acceptance criteria:
- `docs/deployment.md` is updated with the chosen target.
- A deploy workflow or host configuration is added if needed.
- Production URL is documented in README.
