# Citation Style

PerfectBlu is source-first. Every factual page should identify where its information comes from without reproducing copyrighted text at length.

## Source priority

1. The six Frank Herbert novels
2. Frank Herbert interviews, essays, notes, and authorized companion material
3. Brian Herbert and Kevin J. Anderson novels
4. Comics and graphic adaptations
5. Films, television, games, and other adaptations
6. Secondary commentary, clearly marked as secondary

## Citation format

Use compact source notes until edition-specific page references are selected.

Preferred format:

```text
Author, Title, part or book, chapter reference if known.
```

Examples:

```text
Frank Herbert, Dune, Book I, chapter reference TBD.
Frank Herbert, Dune Messiah, chapter reference TBD.
```

When a page uses structured frontmatter, use this shape:

```yaml
sources:
  - label: Frank Herbert, Dune, Book I, chapter reference TBD.
    work: dune
    part: Book I
    chapter: TBD
    note: Exact edition reference needed.
```

## Edition policy

Page numbers vary by edition. Prefer book, part, and chapter references until the project selects canonical editions for page-level citations.

If a page number is added later, include the edition on the related source page.

## Copyright limits

- Prefer original summaries over quoted text.
- Use short quotes only when necessary.
- Do not reproduce long passages from novels, comics, scripts, or companion works.
- Do not write chapter summaries so detailed that they substitute for the source work.
- Do not add scans, panels, screenshots, or cover art unless the license is clear.

## Unknown references

If an exact chapter or edition reference is not known, use `TBD` and keep the page status as `stub` or `draft`.

## Review checklist

Before moving a page to `reviewed` or `canonical`:

- Every major claim has a source note or is clearly basic metadata.
- Continuity is identified.
- No long copyrighted excerpts are included.
- Uncertain references are marked `TBD`.
- Secondary commentary is not presented as primary canon.
