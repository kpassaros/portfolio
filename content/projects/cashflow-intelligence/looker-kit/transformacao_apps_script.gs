function transformarCashFlow() {
  const ss = SpreadsheetApp.getActive();
  const origem = ss.getSheetByName('Base_Bruta');
  if (!origem) throw new Error('Aba Base_Bruta não encontrada.');
  const valores = origem.getDataRange().getDisplayValues();
  const cab = valores.shift();
  const idx = Object.fromEntries(cab.map((v,i)=>[v,i]));
  const vistos = new Set(); const saida=[]; let duplicadas=0, corrigidas=0, rejeitadas=0;
  const texto = v => String(v||'').trim();
  const moeda = v => { const s=texto(v).replace('R$','').replace(/\./g,'').replace(',','.').trim(); const n=Number(s); return Number.isFinite(n)?n:0; };
  const data = v => { const s=texto(v); if(!s) return ''; if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(s+'T12:00:00'); const m=s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/); return m?new Date(`${m[3]}-${m[2]}-${m[1]}T12:00:00`):''; };
  const titulo = v => texto(v).toLowerCase().replace(/(^|\s)\S/g,c=>c.toUpperCase());
  valores.forEach(r=>{
    const id=texto(r[idx.id_movimento]); if(!id){rejeitadas++;return} if(vistos.has(id)){duplicadas++;return} vistos.add(id);
    const venc=data(r[idx.data_vencimento]), pag=data(r[idx.data_pagamento]); if(!venc){rejeitadas++;return}
    const tipo=titulo(r[idx.tipo]); let categoria=titulo(r[idx.categoria]); let centro=titulo(r[idx.centro_custo])||'Não informado';
    if(categoria!==texto(r[idx.categoria])||centro!==texto(r[idx.centro_custo])||String(r[idx.valor_previsto]).includes('R$')) corrigidas++;
    const previsto=moeda(r[idx.valor_previsto]), realizado=moeda(r[idx.valor_realizado]);
    const hoje=new Date(); let status='Em aberto'; if(pag) status=pag>venc?'Pago em atraso':'Pago no prazo'; else if(venc<hoje) status='Vencido';
    saida.push([id,data(r[idx.data_competencia]),venc,pag,tipo,categoria,centro,titulo(r[idx.entidade]),titulo(r[idx.forma_pagamento]),status,previsto,realizado,'Base sintética',new Date()]);
  });
  const headers=['id_movimento','data_competencia','data_vencimento','data_pagamento','tipo','categoria','centro_custo','entidade','forma_pagamento','status','valor_previsto','valor_realizado','origem','atualizado_em'];
  let destino=ss.getSheetByName('Fato_Movimentacoes')||ss.insertSheet('Fato_Movimentacoes'); destino.clearContents(); destino.getRange(1,1,1,headers.length).setValues([headers]); if(saida.length) destino.getRange(2,1,saida.length,headers.length).setValues(saida); destino.setFrozenRows(1);
  let qa=ss.getSheetByName('Controle_Qualidade')||ss.insertSheet('Controle_Qualidade'); qa.appendRow([new Date(),valores.length,saida.length,duplicadas,corrigidas,rejeitadas]); if(qa.getLastRow()===1) qa.getRange(1,1,1,6).setValues([['atualizado_em','linhas_recebidas','linhas_aceitas','duplicidades','linhas_corrigidas','linhas_rejeitadas']]);
}
