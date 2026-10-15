---
title: "HubSpot API Sync Lab"
summary: "Laboratório de arquitetura para ingestão paginada, controle de taxa de requisições e persistência de checkpoints em APIs REST."
year: 2026
status: "Experimental"
featured: false
publish: true
kind: "lab"
maturity: "Estudo de engenharia"
cover: "projects/hubspot-sync/cover.png"
technologies:
  - "Python"
  - "REST API"
  - "JSONL"
hypothesis: "A persistência de estados por cursor e a escrita em arquivos intermediários JSONL garantem recuperação rápida de falhas sem sobrecarregar limites de API."
experiments:
  - "Paginação orientada por cursor com gravação de checkpoint"
  - "Estratégia de backoff exponencial para tratamento de rate limits"
evidence: "Extração consistente de 100% dos registros sintéticos mesmo sob simulação de quedas de rede."
currentState: "Padrão de script testado localmente em ambiente simulado."
unsupportedCapabilities:
  - "Execução da extração em tempo real pelo navegador"
limitations:
  - "Simulação de API realizada com fixtures locais"
nextTests:
  - "Implementação de dead-letter queue para payloads corrompidos"
links:
  - label: "Repositório"
    url: "https://github.com/kpassaros/portfolio"
    primary: true
locale: "pt-BR"
---

## Escopo do Estudo
Padrões de extração e resiliência em APIs de CRM com paginação por token e limites estritos de requisições por minuto[cite: 1, 9].

## Estrutura Validada
* **Controle de Paginação:** Cursor gravado a cada lote processado com sucesso[cite: 1, 9].
* **Persistência Imutável:** Gravação inicial em arquivos de linhas JSON (JSONL) com cálculo de hash SHA-256[cite: 1, 9].
