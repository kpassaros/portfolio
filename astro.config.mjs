import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repository.endsWith('.github.io');
const inferredBase = process.env.GITHUB_ACTIONS === 'true' && repository && !isUserSite ? `/${repository}` : '/';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || inferredBase,
  trailingSlash: 'always'
});
