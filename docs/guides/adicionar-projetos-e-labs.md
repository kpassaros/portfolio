# Adicionar um projeto — arquitetura Astro vigente

Este guia substitui as instruções de edição de `content/projects/` e `project.json` da implementação anterior. Essa estrutura ainda existe como legado no repositório; não é a fonte das Content Collections publicadas.

## Onde editar

- Case: `src/content/projects/SEU-SLUG.md`.
- Lab: `src/content/labs/SEU-SLUG.md`.
- Imagens e arquivos públicos: `public/projects/SEU-SLUG/` ou `public/labs/SEU-SLUG/`.
- Contrato: `src/content.config.ts`.
- Layout compartilhado: `src/layouts/CaseLayout.astro`.

O slug vem do nome do arquivo. Não criar um HTML por projeto nem editar arquivos gerados em `dist/`.

## 1. Partir de um case vigente

Use `src/content/projects/prisma-central.md` ou outro case da mesma coleção como referência. Crie somente o novo Markdown e seus assets. Mantenha nomes em minúsculas e kebab-case.

## 2. Preencher o frontmatter

Campos comuns: `title`, `summary`, `year`, `status`, `featured`, `publish`, `cover`, `technologies`, `links` e `locale` (opcional; padrão `pt-BR`).

Campos de projeto: `kind: project`, `projectType`, `problem`, `role`, `solution`, `results`, `architecture` e `embeds`.

- `publish: true` inclui o case nas rotas e no catálogo.
- `featured: true` o inclui nos destaques da Home; só marcar após decisão explícita.
- `cover` e `embeds[].fallback` usam caminhos relativos a `public/`, sem `/` inicial.
- `links[].url` é uma URL completa. `primary` escolhe a ênfase do botão.
- `technologies` descreve tecnologias realmente utilizadas, não ferramentas desejadas.

Não adicionar `id`, `slug`, `demo`, `repository`, `dataNature` ou `disclosure` como se fossem campos do schema atual. Metadados novos exigem decisão e atualização do contrato.

## 3. Adicionar imagens e demonstração

Use imagens sem dados sensíveis. Capas 16:9 funcionam no card atual; preserve a proporção de capturas completas.

O layout vigente renderiza `iframe` por URL externa e imagens por `fallback`. Para uma aplicação independente, a opção de menor acoplamento é usar capturas e botões externos. Um iframe precisa de revisão de permissões, comportamento de scroll e alternativa externa. O campo `fallback` de um iframe não cria sozinho uma detecção de falha no layout atual.

Projetos completos continuam em repositórios próprios. O portfólio apresenta a narrativa e os links; não copie backend, banco, segredos ou bases operacionais para `public/`.

## 4. Escrever a narrativa

O frontmatter alimenta introdução, problema, papel, solução, stack, demonstração, arquitetura, resultados e links. O corpo Markdown entra na seção de resultados do layout atual.

Inclua, quando pertinente: motivação, processo, evidências, limitações e aprendizados. Não atribua resultados reais a dados sintéticos e não descreva protótipos como soluções implantadas.

## 5. Validar e publicar

Node 24, dependências do lockfile:

```bash
npm ci
npm run audit
npm run check
npm run build
```

Para simular o prefixo do GitHub Pages:

```bash
BASE_PATH=/portfolio SITE_URL=https://kpassaros.github.io npm run build
npm run preview
```

O comando com variáveis acima usa sintaxe de terminal POSIX; no Windows, configure as mesmas variáveis no terminal antes do comando ou valide pelo workflow.

Fluxo: preservar tag/release estável → branch a partir da main → PR → audit/check/build verdes → prévia aprovada → merge → deploy → homologação. Mantenha a branch até a homologação final. Se a main mudou desde o pacote revisado, atualize a base antes de sobrescrever arquivos completos.

## Checklist

- [ ] Slug único e estável.
- [ ] Frontmatter aceito pelo schema.
- [ ] Capa e imagens disponíveis.
- [ ] Publicação e destaque definidos conscientemente.
- [ ] Catálogo e case funcionam com `/portfolio/`.
- [ ] Busca e filtros encontram o projeto.
- [ ] Desktop, notebook e celular sem overflow.
- [ ] Temas claro/escuro e menu verificados.
- [ ] Links externos conferidos, sem prometer embed não testado.
- [ ] Sem credenciais, dados reais ou endpoints internos.
- [ ] Limitações descritas e resultados sustentados.
- [ ] PR aprovado e checks remotos verdes antes do merge.


## Labs com prévia sintética incorporada

Para os Labs de integração, demo pode declarar labs/SEU-SLUG/demo/index.html. O arquivo deve existir em public/; não usar URL externa neste campo. LabDemo incorpora a prévia com isolamento, acompanha tema/altura e mantém alternativa local. Campos maturity, evidence e unsupportedCapabilities ficam explícitos na página. Consulte [Labs experimentais](labs-experimentais.md). Não criar links para fontes privadas ou anunciar esta prévia como integração real.
