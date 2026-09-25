# Portfólio Dados & BI — Astro

Portfólio de Kaíque Passaros publicado como site estático com Astro e GitHub Pages.

## Arquitetura

- Páginas estáticas geradas pelo Astro.
- Projetos e Labs mantidos em Content Collections tipadas.
- GitHub Actions executa auditoria, verificação, build e deploy.
- Base path inferido pelo nome do repositório para GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run audit
npm run check
npm run build
npm run dev
```

## Publicação

O workflow `Deploy portfolio to Pages` publica a branch `main` no GitHub Pages. Antes de produção, execute o checklist de `VALIDATION.md` em homologação.
