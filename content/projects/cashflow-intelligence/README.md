# CashFlow Intelligence

Projeto prático e interativo de inteligência financeira, construído com dados 100% sintéticos. O objetivo é transformar fontes financeiras dispersas em uma visão executiva e analítica de fluxo de caixa, orçamento, atrasos, conciliação e qualidade dos dados.

## Status

**Em evolução.** O dashboard já está publicado e incorporado ao portfólio, enquanto as páginas analíticas e suas validações continuam sendo detalhadas no guia de construção do projeto.

## Stack utilizada

- **DataStudio:** dashboard, campos calculados e regras analíticas em SQL.
- **Google Sheets:** armazenamento e organização das fontes tratadas.
- **Google Apps Script:** tratamentos, padronização, automações e conciliação.
- **VS Code:** escrita e validação dos códigos.
- **HTML:** criação e teste de componentes visuais personalizados.
- **CSV e JSON:** formatos de intercâmbio e documentação das bases.

## Arquitetura do projeto

O processo parte de seis fontes financeiras incompatíveis e as organiza em uma estrutura com fatos, dimensões, conciliação, log de qualidade e resumo de execução. O tratamento utiliza Apps Script e regras analíticas em SQL no DataStudio.

A camada analítica utiliza as seguintes fontes principais:

- `FATO_Financeira`
- `FATO_Orcamento`
- `CONCILIACAO`
- `LOG_Qualidade`
- `RESUMO_Execucao`

## Jornada analítica

O avanço do dashboard é acompanhado em seis frentes:

1. Visão Executiva.
2. Fluxo de Caixa.
3. Contas a Receber.
4. Contas a Pagar.
5. Orçamento × Realizado.
6. Conciliação e Qualidade.

## Validação

Antes de considerar cada etapa concluída, o projeto verifica totais de entradas, saídas e saldo, comportamento dos filtros, duplicidades, granularidade das combinações, rastreabilidade e funcionamento em tela de notebook.

## Transparência

Todos os indicadores e registros apresentados são fictícios. O valor demonstrado está na metodologia, na arquitetura, na automação, nas regras analíticas e na experiência interativa — não em resultados financeiros reais.
