import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linkSchema = z.object({ label: z.string(), url: z.string().url(), primary: z.boolean().default(false) });
const embedSchema = z.object({
  type: z.enum(['iframe', 'image', 'external']),
  title: z.string(),
  url: z.string().url().optional(),
  fallback: z.string().optional(),
  aspectRatio: z.string().default('16/9'),
  sandbox: z.array(z.string()).default([])
});
const baseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  year: z.number(),
  status: z.string(),
  featured: z.boolean().default(false),
  publish: z.boolean().default(true),
  cover: z.string(),
  technologies: z.array(z.string()).default([]),
  links: z.array(linkSchema).default([]),
  locale: z.enum(['pt-BR', 'en-US']).default('pt-BR')
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: baseSchema.extend({
    kind: z.literal('project'),
    projectType: z.string(),
    problem: z.string(),
    role: z.string(),
    solution: z.string(),
    results: z.array(z.string()),
    architecture: z.array(z.string()).default([]),
    embeds: z.array(embedSchema).default([])
  })
});

const labs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: baseSchema.extend({
    kind: z.literal('lab'),
    maturity: z.string(),
    hypothesis: z.string(),
    experiments: z.array(z.string()),
    evidence: z.array(z.string()).default([]),
    currentState: z.array(z.string()).default([]),
    unsupportedCapabilities: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    nextTests: z.array(z.string()).default([])
  })
});

export const collections = { projects, labs };
