# Contributing to PerfectBlu

PerfectBlu is a source-first DUNE universe reference. Contributions should protect citation quality, continuity clarity, and legal safety.

## Contribution priorities

1. Improve source accuracy.
2. Add missing source references.
3. Expand stubs with original summaries.
4. Keep continuity labels clear.
5. Improve site speed, accessibility, and maintainability.

## Before editing content

Read:

- `docs/editorial/citation-style.md`
- `docs/editorial/continuity-policy.md`
- `docs/editorial/spoiler-policy.md`

## Content rules

- Do not paste long copyrighted passages.
- Do not add scans, comic panels, screenshots, or cover art unless licensing is clear.
- Use original summaries.
- Mark unknown references as `TBD`.
- Keep page status as `stub` or `draft` until source review is complete.
- Do not mix continuity-specific facts without labeling them.

## Development checks

From `site/` run:

```bash
npm run check
npm run build
```

Both commands should pass before a pull request is ready.

## Commit style

Use short conventional-style commit messages:

- `docs: add citation guidance`
- `feat: add source records`
- `fix: correct entity frontmatter`
- `ci: update build workflow`

## Pull request checklist

- Content follows editorial policies.
- Copyright-sensitive material is avoided.
- New or changed pages build successfully.
- Sources are included or marked `TBD`.
- Continuity and spoiler fields are present.
