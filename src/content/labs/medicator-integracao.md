---
kind: lab
title: Medicator Lab — Extração e qualidade
summary: Experimente granularidade, normalização e multiplicação de linhas em uma amostra fictícia.
year: 2026
status: Experimental
featured: false
publish: true
cover: labs/medicator-integracao/cover.svg
technologies:
- SQL (conceito)
- HTML
- CSS
- JavaScript
- JSON
maturity: Experimento sintético no navegador
hypothesis: A chave composta preserva clientes de empresas diferentes e revela joins que multiplicam linhas?
experiments:
- Comparar ID local com chave composta por empresa e cliente
- Observar a multiplicação de linhas de um join simulado
- Normalizar e-mail e preservar telefone como texto
evidence:
- Prévia executável incorporada ao portfólio
- Transformações e classificações calculadas em JavaScript sobre fixtures fictícias
currentState:
- Três cenários controlados, com restauração da amostra
- Pipeline de seis etapas e log acompanhado
- Nenhuma conexão ou carga em ferramentas reais
unsupportedCapabilities:
- Autenticação e integração operacional com o fornecedor
- Execução de SQL/Python ou orquestração Apache Airflow
- Persistência multiusuário, retries de rede ou checkpoint operacional
limitations:
- Não executa SQL nem consulta um banco Medicator
- Campos genéricos ilustrativos, não dicionário oficial completo do fornecedor
- Ausência de contato não elimina automaticamente um cadastro
nextTests:
- Ampliar cenários de erro e casos de borda
- Revisar contratos contra documentação oficial antes de desenvolver conector real
- Validar usabilidade e interpretação das evidências
links: []
demo: labs/medicator-integracao/demo/index.html
---

## O problema investigado

Um ID local pode existir em empresas diferentes. Além disso, um join pode repetir linhas sem que novos clientes tenham sido cadastrados. Este Lab torna esses dois efeitos observáveis numa amostra gerada do zero.

## Estrutura do experimento

Cada registro ilustrativo possui empresa, ID local, e-mail e telefone textual. Uma pequena dimensão fictícia é associada em memória. A comparação entre linhas e chaves compostas evidencia a multiplicação; não é uma cópia da consulta ou do schema operacional de um ERP.

## O que observar

No cenário padrão, o mesmo ID local em duas empresas permanece em duas chaves distintas. Ao escolher o join problemático, o resultado é bloqueado para revisão em vez de remover duplicidades silenciosamente. Contatos vazios continuam na amostra e são classificados, não descartados.

## Limite da evidência

As transformações são executadas no navegador; a extração e o join representam conceitos de engenharia de dados. Não há conexão Medicator, execução de SQL nem validação de um schema oficial. A amostra não comprova uma integração homologada.
