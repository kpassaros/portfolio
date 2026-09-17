# Guia de implementação — Google Sheets + Apps Script + DataStudio

## Arquitetura
1. `Base_Bruta`: recebe importação sem edição manual.
2. Apps Script valida, padroniza e remove duplicidades.
3. `Fato_Movimentacoes`: base tratada para o DataStudio.
4. Dimensões auxiliares organizam calendário, categorias, centros, entidades e meios de pagamento.
5. `Controle_Qualidade`: registra linhas recebidas, aceitas, corrigidas e rejeitadas.
6. DataStudio consome apenas tabelas tratadas.

## Passo a passo
1. Crie uma planilha Google e importe `base_bruta.csv` na aba `Base_Bruta`.
2. Importe `base_tratada.csv` apenas como referência de resultado esperado.
3. Abra Extensões → Apps Script e cole `transformacao_apps_script.gs`.
4. Execute `transformarCashFlow`; autorize o script.
5. Confirme as abas `Fato_Movimentacoes` e `Controle_Qualidade`.
6. No DataStudio, conecte `Fato_Movimentacoes`.
7. Defina datas como Data e valores como Moeda BRL.
8. Crie os campos calculados indicados abaixo.
9. Monte as seis páginas conforme `layout-referencia.html`.
10. Valide filtros, totais, mobile e períodos sem dados.
11. Publique como “qualquer pessoa com o link pode visualizar”, somente com a base sintética.
12. Copie a URL de incorporação e atualize `demo.embedUrl`; mantenha a imagem/HTML como fallback.

## Campos calculados sugeridos
- `Entrada Realizada`: CASE WHEN tipo = "Entrada" THEN valor_realizado ELSE 0 END
- `Saída Realizada`: CASE WHEN tipo = "Saída" THEN valor_realizado ELSE 0 END
- `Saldo`: SUM(Entrada Realizada) - SUM(Saída Realizada)
- `Valor Vencido`: CASE WHEN status = "Vencido" THEN valor_previsto ELSE 0 END
- `Dias de Atraso`: DATE_DIFF(IFNULL(data_pagamento, TODAY()), data_vencimento)
- `Faixa Aging`: CASE por intervalos 1–7, 8–15, 16–30 e 31+
- `Variação`: SUM(valor_realizado) - SUM(valor_previsto)
- `Aderência ao Previsto`: SUM(valor_realizado) / SUM(valor_previsto)

## Atualização automática
Configure um gatilho diário para `transformarCashFlow`. O script deve registrar horário, linhas recebidas, duplicidades e erros.

## Segurança
Utilize exclusivamente a base sintética deste kit na publicação pública. Não conecte planilhas corporativas, credenciais ou dados pessoais.
