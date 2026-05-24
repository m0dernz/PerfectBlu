# Spoiler Policy

PerfectBlu should support readers who want different levels of spoiler exposure.

## Spoiler levels

Use one of these frontmatter values on every content page:

- `none`: safe for new readers
- `book`: spoilers limited to the named source work
- `series`: spoilers across the six-book Frank Herbert arc
- `full`: may include expanded works and adaptation spoilers

## Default rule

Use `full` for encyclopedia pages unless a page is intentionally written as spoiler-safe.

Use `book` for work pages when the page discusses only that work.

Use `series` when an entry requires context from multiple Frank Herbert novels.

## Frontmatter example

```yaml
spoiler_level: full
```

## Display guidance

Pages should expose their spoiler level near the top of the page. Later versions may add spoiler filtering or spoiler-safe browsing.

## Writing guidance

- Do not hide spoilers inside ambiguous wording if the page is marked `full`.
- Do not include late-series revelations on a page marked `book` unless the source work is the relevant book.
- If spoiler-safe browsing becomes a priority, create separate summary sections rather than relying only on CSS hiding.

## Review checklist

- Spoiler level is present in frontmatter.
- The body content does not exceed the stated spoiler level.
- Work pages avoid spoilers from later works unless marked `series` or `full`.
