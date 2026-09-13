# CashFlow Intelligence

Case de portfólio de Dados & BI com dados 100% sintéticos.

## Problema
Consolidar movimentações financeiras e transformar lançamentos em visão executiva de caixa.

## Entregáveis
- `data/fluxo_caixa.csv`: base para importação no Power BI
- `data/dicionario_dados.csv`: dicionário
- `data/cashflow-summary.json`: KPIs validados
- Portal estático com narrativa do case

## Modelo recomendado
Fato_Movimentacoes ligada às dimensões Calendário, Categoria, Centro de Custo, Entidade e Forma de Pagamento.

## Medidas DAX sugeridas
```DAX
Entradas = CALCULATE(SUM(Fato_Movimentacoes[valor_realizado]), Fato_Movimentacoes[tipo] = "Entrada")
Saídas = CALCULATE(SUM(Fato_Movimentacoes[valor_realizado]), Fato_Movimentacoes[tipo] = "Saída")
Saldo = [Entradas] - [Saídas]
Valor Vencido = CALCULATE(SUM(Fato_Movimentacoes[valor_previsto]), Fato_Movimentacoes[status] = "Vencido")
Taxa de Atraso = DIVIDE(CALCULATE(COUNTROWS(Fato_Movimentacoes), Fato_Movimentacoes[status] = "Pago em atraso"), CALCULATE(COUNTROWS(Fato_Movimentacoes), Fato_Movimentacoes[valor_realizado] > 0))
```
