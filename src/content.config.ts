import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		loader: glob({ pattern: '**/*.md*', base: './src/content/projects' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
