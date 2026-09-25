import fs from 'node:fs';
import path from 'node:path';

const roots = ['src/content/projects', 'src/content/labs'];
const required = ['title', 'summary', 'year', 'status', 'publish', 'cover'];
const errors = [];
const productionFiles = [
  'src/pages/index.astro',
  'src/pages/about.astro',
  'src/pages/career.astro',
  'src/pages/skills.astro',
  'src/pages/contact.astro',
  'src/components/Header.astro',
  'src/components/Footer.astro'
];
const forbiddenProductionText = [
  'PROVA DE CONCEITO',
  'POC ASTRO',
  'POC ARQUITETURAL',
  'POC estática para validação',
  'migração integral do conteúdo'
];

for (const root of roots) {
  const files = fs.readdirSync(root).filter((name) => /\.mdx?$/.test(name));
  for (const file of files) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatter) {
      errors.push(`${file}: frontmatter ausente`);
      continue;
    }
    for (const key of required) {
      if (!new RegExp(`^${key}:`, 'm').test(frontmatter[1])) errors.push(`${file}: ${key} ausente`);
    }
    const cover = frontmatter[1].match(/^cover:\s*(.+)$/m)?.[1]?.trim();
    if (cover && !fs.existsSync(path.join('public', cover))) errors.push(`${file}: capa ausente ${cover}`);
  }
}

for (const file of productionFiles) {
  if (!fs.existsSync(file)) {
    errors.push(`${file}: página obrigatória ausente`);
    continue;
  }
  const text = fs.readFileSync(file, 'utf8');
  for (const forbidden of forbiddenProductionText) {
    if (text.includes(forbidden)) errors.push(`${file}: texto provisório encontrado: ${forbidden}`);
  }
}

const labText = fs.readFileSync('src/content/labs/futureviz-lab.md', 'utf8');
if (labText.includes('validatedCapabilities:')) {
  errors.push('futureviz-lab.md: capacidades não podem ser apresentadas como validadas');
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('audit OK: conteúdo e assets mínimos presentes');
