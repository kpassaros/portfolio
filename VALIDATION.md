# Checklist de homologação — Portfólio Astro

## Build
- [ ] Dependências instaladas sem erro.
- [ ] `npm run audit` aprovado.
- [ ] `npm run check` aprovado.
- [ ] `npm run build` aprovado.
- [ ] Deploy do GitHub Pages concluído.

## Rotas
- [ ] Home.
- [ ] Sobre.
- [ ] Carreira.
- [ ] Competências.
- [ ] Projetos e cases.
- [ ] Labs e case experimental.
- [ ] Contato.

## Funcional
- [ ] Currículo abre corretamente.
- [ ] Formulário de contato envia sem trocar de página.
- [ ] Dashboard CashFlow carrega, navega e aceita filtros.
- [ ] FutureViz abre a demo e o GitHub corretos.
- [ ] Busca funciona em Projetos e Labs.
- [ ] Tema claro e escuro persistem.
- [ ] Menu mobile abre e fecha.

## Visual e interação
- [ ] Loading aparece somente na Home.
- [ ] Loading termina sem mudança de cor no background.
- [ ] Rede neural permanece consistente em todas as rotas.
- [ ] Clique no background gera propagação visível em todas as páginas.
- [ ] Desktop 1366×768.
- [ ] Notebook 1024×768.
- [ ] Mobile 390×844.
- [ ] Sem overflow horizontal.

## Conteúdo
- [ ] Nenhuma referência a POC ou arquitetura em validação.
- [ ] Sobre, Carreira, Competências e Contato completos.
- [ ] FutureViz Components separado do FutureViz Lab.
- [ ] FutureViz Lab identificado como protótipo não validado.
- [ ] Links e informações profissionais revisados.

## Produção
- [ ] `package-lock.json` versionado.
- [ ] Dependências sem `latest` após homologação.
- [ ] Apenas um workflow publica no GitHub Pages.
- [ ] Branch de backup da produção confirmada.
- [ ] Rollback testado ou documentado.
