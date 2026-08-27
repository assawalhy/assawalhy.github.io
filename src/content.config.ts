import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-en' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
  }),
});

const blogAr = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-ar' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
  }),
});

export const collections = {
  'blog-en': blogEn,
  'blog-ar': blogAr,
};
