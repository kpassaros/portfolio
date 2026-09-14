# Medidas DAX
```DAX
Produzido = SUM(Producao[ProduzidoKg])
Planejado = SUM(Producao[PlanejadoKg])
Perdas = SUM(Producao[PerdaKg])
Rendimento = DIVIDE([Produzido], [Planejado])
Lead Time Medio = AVERAGE(Producao[LeadTimeHoras])
Lotes Criticos = CALCULATE(DISTINCTCOUNT(Producao[Lote]), Producao[Risco] = "Alto")
```
