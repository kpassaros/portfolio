# Medidas DAX
```DAX
Total Itens = COUNTROWS(Operacoes)
Horas = SUM(Operacoes[EsforcoHoras])
Backlog = CALCULATE([Total Itens], Operacoes[Status] = "Backlog")
Concluidos = CALCULATE([Total Itens], Operacoes[Status] = "Concluído")
Taxa Conclusao = DIVIDE([Concluidos], [Total Itens])
WIP = CALCULATE([Total Itens], Operacoes[Status] = "Em andamento")
```
