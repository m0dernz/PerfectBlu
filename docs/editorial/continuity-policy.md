# Continuity Policy

PerfectBlu tracks DUNE information by source and continuity. A fact should not be presented as universal when it only applies to one continuity.

## Continuity labels

Initial labels:

- `frank-herbert-core`: the six Frank Herbert novels
- `expanded-novels`: Brian Herbert and Kevin J. Anderson novels
- `comic-adaptation`: comics and graphic adaptations
- `film-1984`: the 1984 film continuity
- `miniseries-2000`: the 2000 and 2003 television miniseries continuity
- `film-2021-series`: the Denis Villeneuve film continuity
- `game-continuity`: video game continuity
- `secondary-source`: commentary or reference material

## Default ordering

When a page contains multiple continuities, order sections like this:

1. Frank Herbert core
2. Expanded novels
3. Comics and graphic adaptations
4. Screen adaptations
5. Games
6. Secondary sources

## Conflict handling

When sources conflict:

1. State the Frank Herbert core version first, when applicable.
2. Label expanded or adaptation-specific differences clearly.
3. Do not merge contradictory facts into a single unsourced statement.
4. Use page status `disputed` if the conflict needs editorial review.

## Page structure guidance

Entity pages may include continuity-specific sections when needed:

```markdown
## Frank Herbert core

## Expanded novels

## Adaptations
```

## Frontmatter example

```yaml
continuity:
  - frank-herbert-core
status: draft
```

If an entity appears in several continuities, include all applicable tags and separate facts in the body.

## Review checklist

- Continuity tags match the body content.
- Adaptation-specific facts are labeled as adaptation-specific.
- Disputed or contradictory facts are not flattened into one claim.
- Pages that need further editorial review use `disputed` or `draft` status.
