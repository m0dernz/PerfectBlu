import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const continuityTag = z.enum([
  'frank-herbert-core',
  'expanded-novels',
  'comic-adaptation',
  'film-1984',
  'miniseries-2000',
  'film-2021-series',
  'game-continuity',
  'secondary-source',
]);

const status = z.enum(['stub', 'draft', 'reviewed', 'canonical', 'disputed']);
const spoilerLevel = z.enum(['none', 'book', 'series', 'full']);

const sourceReference = z.object({
  label: z.string(),
  work: z.string().optional(),
  part: z.string().optional(),
  chapter: z.string().optional(),
  note: z.string().optional(),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    creators: z.array(z.string()).default([]),
    medium: z.string(),
    publication_date: z.string().optional(),
    continuity: z.array(continuityTag),
    status,
    spoiler_level: spoilerLevel,
    summary: z.string().optional(),
    introduced_entities: z.array(z.string()).default([]),
    major_events: z.array(z.string()).default([]),
    sources: z.array(sourceReference).default([]),
  }),
});

const encyclopedia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/encyclopedia' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    entity_type: z.string(),
    continuity: z.array(continuityTag),
    first_appearance: z.string().optional(),
    status,
    aliases: z.array(z.string()).default([]),
    related_works: z.array(z.string()).default([]),
    related_entities: z.array(z.string()).default([]),
    source_priority: z.enum(['primary', 'secondary', 'mixed']).default('primary'),
    spoiler_level: spoilerLevel,
    summary: z.string().optional(),
    sources: z.array(sourceReference).default([]),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/timeline' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    sequence: z.number().optional(),
    approximate_date: z.string().optional(),
    continuity: z.array(continuityTag),
    status,
    participants: z.array(z.string()).default([]),
    locations: z.array(z.string()).default([]),
    related_works: z.array(z.string()).default([]),
    certainty: z.enum(['known', 'approximate', 'inferred', 'disputed']).default('approximate'),
    spoiler_level: spoilerLevel,
    summary: z.string().optional(),
    sources: z.array(sourceReference).default([]),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sources' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    creators: z.array(z.string()).default([]),
    medium: z.string(),
    publisher: z.string().optional(),
    year: z.number().optional(),
    isbn: z.string().optional(),
    continuity: z.array(continuityTag),
    status,
    citation_style: z.string().optional(),
  }),
});

export const collections = {
  works,
  encyclopedia,
  timeline,
  sources,
};
