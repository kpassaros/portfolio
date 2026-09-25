---
kind: lab
title: FutureViz Lab — Component Builder
summary: Protótipo conceitual que investiga uma experiência visual para composição de componentes de BI.
year: 2026
status: Em construção
featured: false
publish: true
cover: labs/futureviz-lab/cover.png
technologies: [HTML, CSS, JavaScript, JSON Schema, DAX, Handlebars]
maturity: Protótipo conceitual
hypothesis: Um schema canônico pode sincronizar canvas, propriedades, prévia e geradores de código sem duplicar o componente.
experiments:
  - Organização visual de propriedades e preview
  - Hipótese de bindings para métricas, dimensões e textos
  - Investigação de saídas específicas para Power BI, DataStudio e WebDev
evidence:
  - Protótipo visual navegável
currentState:
  - Interface conceitual disponível em Labs
  - Nenhum plano de testes foi formalizado
  - Nenhuma capacidade de exportação foi validada
unsupportedCapabilities:
  - Edição bidirecional irrestrita de código no MVP
  - Publicação automática nas ferramentas no MVP
limitations:
  - Paridade completa entre plataformas não é garantida
  - DataStudio não executa JavaScript inline no Templr testado
  - Canvas totalmente livre prejudica responsividade e geração confiável
nextTests:
  - Definir hipótese e critérios de aceite
  - Formular plano de testes de usabilidade
  - Especificar contrato mínimo antes de desenvolver integrações
links:
  - label: Repositório FutureViz
    url: https://github.com/kpassaros/futureviz-bi-components
    primary: true
---

O FutureViz Lab é apresentado como protótipo conceitual. Ele não faz parte da versão estável da biblioteca FutureViz Components.
