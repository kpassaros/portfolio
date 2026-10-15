---
title: "Medicator Integration Lab"
summary: "Laboratório de engenharia de dados focado em normalização, resolução de chaves compostas e conciliação de cadastros farmacêuticos."
year: 2026
status: "Experimental"
featured: false
publish: true
kind: "lab"
maturity: "Estudo de engenharia"
cover: "projects/cashflow-intelligence/cover.png"
technologies:
  - "Python"
  - "SQL"
  - "Modelagem Relacional"
hypothesis: "O tratamento antecipado de chaves compostas e a validação de granularidade em lote eliminam multiplicações indevidas em cruzamentos cadastrais."
experiments:
  - "Deduplicação baseada em chaves sintéticas compostas"
  - "Tratamento de integridade referencial antes da ingestão em data warehouse"
evidence: "Eliminação de duplicidades em bases sintéticas de teste com volume superior a 50 mil registros."
currentState: "Mapeamento conceitual e regras de transformação documentadas com dataset sintético."
unsupportedCapabilities:
  - "Conexão direta com banco de dados em produção via portfólio"
limitations:
  - "Regras de negócio ajustadas para validação em amostras controladas"
nextTests:
  - "Automatização da validação de integridade referencial em pipelines CI"
links:
  - label: "Repositório"
    url: "https://github.com/kpassaros/portfolio"
    primary: true
locale: "pt-BR"
---

## Escopo do Estudo
Investigação de desafios de extração e tratamento em sistemas de gestão com chaves compostas e alta sensibilidade de integridade[cite: 1, 9].

## Solução e Padrões Avaliados
* **Chaves Sintéticas Únicas:** Criação de identificadores canônicos para evitar erros em joins dimensionais[cite: 9].
* **Camada de Validação Intermediária:** Checagens automáticas de schema antes da disponibilização para camadas analíticas[cite: 1, 9].
