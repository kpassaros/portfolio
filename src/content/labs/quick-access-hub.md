---
title: "Quick Access Hub para Notion"
summary: "Componente experimental incorporado ao Notion para transformar links dispersos em uma central pesquisável de serviços."
year: 2026
status: "Experimental"
featured: false
publish: true
kind: "lab"
maturity: "Protótipo funcional"
cover: "projects/quick-access-hub/cover.png"
technologies:
  - "Notion"
  - "HTML"
  - "CSS"
  - "JavaScript"
hypothesis: "Incorporar uma interface web leve com busca e filtragem dinâmica dentro de páginas do Notion reduz o tempo de localização de serviços internos em comparação a listas de links nativas."
experiments:
  - "Renderização de catálogo modular a partir de micro-componente HTML/JS puro"
  - "Preservação da hierarquia de permissões original do workspace"
  - "Adaptação responsiva e suporte a dark mode nativo dentro de embeds"
evidence: "Mais de 1.000 visualizações na página central em 90 dias com aumento significativo na adoção dos serviços internos."
currentState: "Componente interativo funcional operando como micro-frontend autocontido, sem chamadas externas a APIs ou dependências pesadas."
unsupportedCapabilities:
  - "Edição de permissões dos links diretamente pela interface do componente"
  - "Sincronização bidirecional em tempo real com bancos externos sem recarregar a página"
limitations:
  - "Dependência do suporte a iframes/embeds da plataforma hospedeira"
  - "Necessidade de atualização no catálogo para adicionar novos serviços"
nextTests:
  - "Geração automatizada do manifesto de links via automação em CI"
  - "Suporte a atalhos rápidos de teclado para focar a barra de busca"
links:
  - label: "Repositório"
    url: "https://github.com/kpassaros/portfolio"
    primary: true
demo: "labs/quick-access-hub/demo/index.html"
locale: "pt-BR"
---

## Hipótese do Experimento
A navegação padrão em estruturas extensas de páginas no Notion tende a ficar dispersa e com baixa hierarquia visual[cite: 4]. O objetivo deste experimento foi validar se um componente web autocontido embutido via iframe/embed ofereceria maior velocidade de localização de serviços para colaboradores[cite: 3, 4, 11].

## O que foi validado
* **Desacoplamento de Visual e Navegação:** A busca instantânea e o agrupamento em abas ("Solicitar" e "Acompanhar") organizam a jornada do usuário em uma única tela compacta[cite: 3, 6].
* **Resiliência e Acessibilidade:** Suporte completo a tema claro e escuro (`prefers-color-scheme`) e adaptação a telas menores sem transbordamento horizontal[cite: 6, 10].

## Governança e Dados
> **Aviso de Dados:** A demonstração pública do projeto utiliza serviços e links 100% fictícios[cite: 12]. O resultado de adoção reportado reflete métricas agregadas e anonimizadas[cite: 3, 4, 12].
