---
kind: lab
title: Medicator Lab — Normalização e chaves compostas
summary: Investigação de resolução de chaves compostas, integridade referencial e prevenção de multiplicações em joins cadastrais.
year: 2026
status: Experimental
featured: false
publish: true
cover: labs/medicator-sync/cover.png
technologies:
  - Modelagem Relacional
  - Python
  - SQL
  - Normalização
maturity: Estudo de engenharia com amostra sintética
hypothesis: O tratamento antecipado de chaves compostas e a validação de granularidade em lote eliminam multiplicações indevidas em cruzamentos cadastrais?
experiments:
  - Deduplicação baseada em chaves sintéticas compostas
  - Resolução de integridade referencial antes da ingestão analítica
  - Identificação de divergências de cardinalidade (1:N e N:N)
evidence:
  - Prévia estruturada calculada sobre dataset sintético de testes
  - Reconciliação completa de volume entre camadas com zero registros órfãos
currentState:
  - Amostra controlada com simulação de inconsistências típicas de ERP
  - Validação de chaves e visualização de log de transformação
  - Sem conexão a bancos de dados operacionais
unsupportedCapabilities:
  - Conexão JDBC/ODBC direta com bancos de dados de produção
  - Reindexação dinâmica em instâncias transacionais ativas
  - Processamento massivo fora do ambiente de teste
limitations:
  - Regras de negócio e atributos calibrados para a amostra sintética
  - Não executa queries em servidores do ecossistema Medicator
  - Escopo voltado à arquitetura de dados e reconciliação
nextTests:
  - Automatização de checagens de integridade referencial em pipelines CI
  - Geração de testes de contrato automatizados com Great Expectations
  - Expansão dos cenários de chaves nulas ou parcialmente preenchidas
links: []
demo: labs/medicator-sync/demo/index.html
locale: pt-BR
---

## O problema investigado

Em sistemas de gestão legados ou de nicho, registros mestres frequentemente dependem de chaves naturais compostas (como combinação de filiais, códigos e séries). Cruzamentos diretos sem tratamento de granularidade geram produtos cartesianos e métricas duplicadas nos dashboards.

## Estrutura do experimento

O experimento estabelece uma camada de transformação que converte atributos fragmentados em identificadores únicos normalizados. Registros com inconsistências de chave ou vínculos órfãos são isolados antes da consolidação dimensional.

## O que observar

A lógica separa registros conformes daqueles com ambiguidade cadastral. O log de processamento evidencia a resolução das chaves compostas e demonstra como a camada analítica recebe apenas a granularidade correta, protegendo o cálculo de totais.

## Limite da evidência

Tabelas, nomes de atributos e volumes refletem um modelo representativo criado do zero para testes. Nenhuma base de dados real, segredo ou informação de clientes foi utilizada na demonstração.
