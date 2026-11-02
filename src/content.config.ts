import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Пост лежит в src/content/blog/<slug>/<lang>.md.
// Перевод на язык необязателен: если файла нет, показываем английскую версию.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
