import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One string per language.
const localized = z.object({ sr: z.string(), en: z.string() });

// Academy curriculum, one file per level (src/content/academy/level-N.json).
const academy = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/academy' }),
  schema: z.object({
    order: z.number().int(),
    label: localized,
    title: localized,
    subtitle: localized,
    goal: localized,
    modules: z.array(
      z.object({
        number: z.number().int(),
        title: localized,
        badge: localized,
        milestone: localized,
        lessons: z.array(z.object({ number: z.string(), title: localized })),
      }),
    ),
  }),
});

export const collections = { academy };
