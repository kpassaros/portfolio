---
kind: lab
title: HubSpot Lab — Contratos e referências
summary: Investigue validação de propriedades, referências e repetição de um lote sem chamadas ao CRM.
year: 2026
status: Experimental
featured: false
publish: true
cover: labs/hubspot-integracao/cover.svg
technologies:
- Modelagem CRM (conceito)
- HTML
- CSS
- JavaScript
- JSON
maturity: Experimento sintético no navegador
hypothesis: Um contrato explícito pode separar registros aptos, rejeições e atualizações repetidas antes de uma
  carga?
experiments:
- Mapear campos de origem para um contrato CRM ilustrativo
- Rejeitar e-mail inválido e referência ausente com justificativa
- Reaplicar um lote sobre um Map em memória usando ID externo
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
- Não chama APIs nem cria contatos ou associações no HubSpot
- Contrato e regra de obrigatoriedade escolhidos para o experimento, não regras universais do CRM
- Idempotência limitada ao armazenamento em memória desta sessão
nextTests:
- Ampliar cenários de erro e casos de borda
- Revisar contratos contra documentação oficial antes de desenvolver conector real
- Validar usabilidade e interpretação das evidências
links: []
demo: labs/hubspot-integracao/demo/index.html
---

## O problema investigado

Uma carga exige mais que transportar campos: o destino precisa de um contrato, critérios de aceitação e referências rastreáveis. Repetir um lote também não deveria criar novos registros indefinidamente.

## Estrutura do experimento

O Lab escolhe um contrato ilustrativo com ID externo, nome de exibição, e-mail e referência Core. Um de/para explícito normaliza valores; registros inválidos e referências desconhecidas são separados. A saída é um Map em memória, não uma API ou sandbox HubSpot.

## O que observar

O lote contém um e-mail propositalmente inválido. Reaplicar o mesmo lote atualiza as mesmas chaves em memória, sem multiplicar a saída. O cenário de associação ausente mostra por que uma referência deve ser conferida antes de uma carga.

## Limite da evidência

Campos, obrigatoriedade e semântica de escrita foram escolhidos para este experimento. Não são um payload oficial universal nem um conector HubSpot. Coincidência de e-mail não é usada como prova de identidade; a chave de repetição é o ID externo fictício.
