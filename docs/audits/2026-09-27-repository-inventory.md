# Inventário do repositório — 27/09/2026

## Objetivo

Classificar a estrutura da baseline `66145fe3438c6a9f3c52c6141ad713f4a0c5ba20` antes de consolidar, arquivar ou excluir qualquer arquivo.

Esta etapa não remove nem move arquivos.

## Fonte vigente

O site publicado é gerado pelo Astro a partir destes grupos:

- `src/`: páginas, layouts, componentes, dados e Content Collections.
- `public/`: assets e scripts copiados para o build.
- `.github/workflows/`: validação e deploy.
- `scripts/audit.mjs`: auditoria mínima chamada pelo `package.json`.
- `astro.config.mjs`, `package.json` e `tsconfig.json`: configuração do build.

## Resumo da classificação

| Classificação | Quantidade ou escopo | Ação proposta |
| --- | ---: | --- |
| Manter | Núcleo Astro e documentação vigente | Preservar |
| Consolidar | 4 documentos funcionais | Atualizar para a arquitetura Astro e mover para `docs/` |
| Arquivar | 13 documentos históricos na raiz | Mover para `docs/archive/legacy-packages/` |
| Candidato à exclusão | Estrutura estática anterior e assets duplicados | Excluir somente após validação em branch |
| Requer validação | Scripts, schemas, catálogos e conteúdo legado | Confirmar ausência de consumo indireto |

## 1. Manter

### Aplicação

- `.github/workflows/deploy.yml`
- `.github/workflows/validate.yml`
- `public/`
- `src/`
- `scripts/audit.mjs`
- `astro.config.mjs`
- `package.json`
- `tsconfig.json`
- `README.md`

### Documentação vigente

- `docs/EVOLUCAO-DO-PORTFOLIO.md`
- `docs/PENDENCIAS-MANUAIS-GITHUB.md`
- `docs/TAXONOMIA-COMPETENCIAS-E-STACKS.md`
- `POLITICA-DADOS-PORTFOLIO.md`
- `VALIDATION.md`

### Observação

`POLITICA-DADOS-PORTFOLIO.md` e `VALIDATION.md` continuam úteis, mas devem ser movidos para subpastas de `docs/` em um lote posterior, com os links atualizados.

## 2. Consolidar e atualizar

| Arquivo | Motivo | Destino sugerido |
| --- | --- | --- |
| `GUIA-ADICIONAR-PROJETO.md` | Descreve `content/projects/` e `project.json`, não as Content Collections atuais | `docs/guides/ADICIONAR-PROJETO-ASTRO.md` |
| `GUIA-ATUALIZAR-CARREIRA.md` | Aponta para `data/experience.json`; a fonte vigente está em `src/data/experience.json` | `docs/guides/ATUALIZAR-CARREIRA.md` |
| `GUIA-FORMULARIO-E-IDIOMAS.md` | Mistura configurações da arquitetura anterior e precisa ser comparado com o código vigente | `docs/guides/FORMULARIO-E-IDIOMAS.md` |
| `VALIDATION.md` | Checklist válido, mas contém controles ainda não automatizados | `docs/qa/VALIDATION.md` |

## 3. Arquivar

Os arquivos abaixo registram pacotes, correções ou estados intermediários. Não devem permanecer na raiz operacional:

- `ATUALIZACOES-DESTE-PACOTE.md`
- `HOTFIX-CASHFLOW-NAVEGACAO.md`
- `PRODUCTION-CANDIDATE.md`
- `README-APLICACAO.md`
- `README-ATUALIZACAO.md`
- `README-BACKGROUND-FIX.md`
- `README-CORRECAO.md`
- `README-FINAL3.md`
- `README-FINAL4.md`
- `README-FINAL5.md`
- `README-FINAL6.md`
- `UPDATE-2026-09-25.md`

Destino sugerido:

```txt
docs/archive/legacy-packages/
```

`POLITICA-DADOS-PORTFOLIO.md` não entra no arquivo histórico: deve ser consolidado como política vigente.

## 4. Candidatos à exclusão após validação

### Aplicação estática anterior

- `app.js`
- `styles.css`
- `index.html`
- `carreira/`
- `contato/`
- `labs/`
- `projeto/`
- `projetos/`
- `sobre/`
- `.nojekyll`

Esses itens pertencem ao site anterior. O build Astro usa `src/pages/`, `src/layouts/`, `src/components/` e `public/`.

### Assets duplicados

Foram encontrados arquivos binariamente idênticos em `assets/` e `public/assets/`. A fonte usada pelo Astro é `public/assets/`.

Diretório candidato à exclusão:

```txt
assets/
```

Também existem cópias soltas na raiz, como `brand-mark.png` e `favicon.ico`, que exigem comparação com `public/assets/` antes da remoção.

## 5. Requer validação

### Conteúdo e catálogos anteriores

- `content/`
- `data/`
- `schemas/`

Esses diretórios contêm projetos, dashboards, CSVs, JSONs e schemas da arquitetura anterior. Eles não são carregados pelas Content Collections atuais, mas podem conter artefatos que ainda precisam ser migrados ou preservados fora do build.

### Scripts anteriores

- `apply-update.mjs`
- `scripts/apply-cashflow-update.py`
- `scripts/build-projects.mjs`
- `scripts/check-content.mjs`
- `scripts/project-lib.mjs`
- `scripts/validate-projects.mjs`

O `package.json` e os workflows atuais chamam somente `scripts/audit.mjs`. Os demais scripts devem ser avaliados individualmente antes de arquivamento ou exclusão.

### Skills

- `skills/`

Confirmar se o diretório é documentação do projeto, pacote externo ou recurso ainda utilizado antes de qualquer ação.

## 6. Riscos técnicos confirmados

### Build não reproduzível

- Não existe `package-lock.json`.
- `astro`, `@astrojs/check` e `typescript` usam a versão `latest`.
- Os workflows usam `npm install`, não `npm ci`.

Consequência: builds futuros podem instalar versões diferentes mesmo sem alteração no código.

### Auditoria parcial

`scripts/audit.mjs` verifica:

- frontmatter mínimo;
- existência das capas;
- páginas obrigatórias;
- textos provisórios;
- uma regra específica do FutureViz Lab.

Ainda não verifica:

- links quebrados;
- segredos ou dados sensíveis;
- acessibilidade;
- regressão visual;
- responsividade;
- arquivos órfãos;
- duplicações;
- smoke test pós-deploy.

## 7. Primeiro lote seguro

1. Adicionar `.gitignore`.
2. Versionar este inventário.
3. Fixar versões diretas das dependências.
4. Gerar `package-lock.json` em ambiente com acesso ao registro npm.
5. Trocar `npm install` por `npm ci` somente depois de validar o lockfile.
6. Executar `npm run audit`, `npm run check` e `npm run build`.
7. Não mover ou excluir arquivos neste lote.

## 8. Segundo lote proposto

1. Criar `docs/archive/legacy-packages/`.
2. Mover os documentos históricos da raiz.
3. Atualizar os três guias para a arquitetura Astro.
4. Mover política e checklist para subpastas de `docs/`.
5. Atualizar links do `README.md`.
6. Validar novamente antes do merge.

## Critério para iniciar exclusões

Uma exclusão só poderá começar quando:

- existir tag ou release de rollback;
- o lockfile estiver versionado;
- `audit`, `check` e `build` estiverem verdes;
- a lista de referências estiver revisada;
- houver comparação visual da baseline;
- a Pull Request estiver aprovada.
