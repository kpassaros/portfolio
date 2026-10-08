---
kind: lab
title: OmniChat Lab — Histórico e rastreabilidade
summary: Organize mensagens fictícias sem perder a trilha técnica que explica o histórico.
year: 2026
status: Experimental
featured: false
publish: true
cover: labs/omnichat-integracao/cover.svg
technologies:
- Modelagem de mensagens (conceito)
- HTML
- CSS
- JavaScript
- JSON
maturity: Experimento sintético no navegador
hypothesis: É possível apresentar uma conversa legível preservando IDs, anexos e eventos na trilha técnica?
experiments:
- Reunir páginas fictícias e preservar IDs de mensagens
- Ordenar eventos e validar suas referências de conversa
- Omitir evento técnico sem conteúdo da leitura humana, preservando-o na trilha técnica
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
- Não consulta a API OmniChat nem comprova cobertura histórica de uma conta
- Mensagens e anexos são fictícios; nenhuma mídia operacional é distribuída
- Paginação representativa, sem checkpoint ou retentativa de rede nesta demo
nextTests:
- Ampliar cenários de erro e casos de borda
- Revisar contratos contra documentação oficial antes de desenvolver conector real
- Validar usabilidade e interpretação das evidências
links: []
demo: labs/omnichat-integracao/demo/index.html
---

## O problema investigado

Um histórico técnico pode conter mensagens, anexos e eventos de sistema. A leitura humana precisa ser clara sem apagar a trilha que permite conferir o processamento.

## Estrutura do experimento

Duas páginas fictícias são reunidas, as referências de conversa são verificadas e os eventos são ordenados por timestamp UTC. A visão legível preserva cliente, atendente, texto e indicação de anexo; eventos técnicos vazios não entram nessa leitura, mas continuam na trilha original.

## O que observar

Mensagens consecutivas do assistente virtual são consolidadas mantendo a lista dos IDs de origem. O cenário fora de ordem testa a ordenação; uma mensagem órfã é separada para revisão, sem atribuí-la a outro cliente.

## Limite da evidência

Clientes, conversas, mensagens e nomes de anexos são inventados. Não são capturas ou exports operacionais. Paginação é representativa e não demonstra cobertura histórica, retentativas ou checkpoint de uma API real. Nenhum arquivo de anexo real está disponível.
