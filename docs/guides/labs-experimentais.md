# Labs de integração — versão sintética incorporada

## Escopo

Três experimentos simples em Medicator, HubSpot e OmniChat. As fontes são amostras inventadas; transformações e classificações são calculadas localmente em JavaScript. Não há API real, credencial, banco, SQL/Python executado, uploads ou serviço multiusuário. Nomes das ferramentas identificam o recorte de estudo, não parceria ou homologação oficial.

## Arquitetura

Conteúdo em src/content/labs; prévias em public/labs/SLUG/demo/index.html; motor e CSS compartilhados em public/labs/shared; incorporação por LabDemo.astro. O campo demo aceita somente caminho local controlado. O iframe concede apenas allow-scripts, sem allow-same-origin, popups, formulários ou navegação superior. A altura e o tema usam mensagens verificadas pela referência da janela do próprio iframe; nenhum comando operacional é exposto.

## Experiência

Pipeline de seis etapas e somente log abaixo. O resultado aparece no evento RESULTADO. Executar repete ciclos até pausar; restaurar e recarregar repõem a amostra. Movimento reduzido não ativa reprodução automática. Os experimentos iniciam pausados para evitar movimento sem escolha do visitante. A explicação e o fallback ficam no portfólio, sem botão externo obrigatório.

## Conteúdo e evidências

Medicator: chave composta, multiplicação de join e normalização. HubSpot: contrato ilustrativo, rejeições, referências e reaplicação em memória. OmniChat: páginas fictícias, mensagens órfãs, ordenação e histórico legível com trilha técnica preservada. Dicionários, campos e regras do Lab não são schemas oficiais completos. Exemplos operacionais, indicadores internos e referências privadas não foram copiados.

## Verificação antes de publicar

Executar npm ci, npm run audit, npm run check e npm run build com BASE_PATH=/portfolio e SITE_URL=https://kpassaros.github.io. Conferir catálogo com quatro Labs, rotas, capas, iframe, cenários, conclusão, repetição, pausa, temas, mobile, fallback e acessibilidade. Build Astro desta preparação precisa ser validado no ambiente com dependências instaladas; uma prévia standalone não substitui o compilado. Revisar o diff completo, abrir PR e publicar somente após checks e prévia aprovados.

## Próximos passos

Repositórios independentes e conectores reais não são criados por este lote. A demonstração integrada do Prisma não é modificada nem seu pipeline operacional copiado. A separação futura dos experimentos pode reutilizar estes arquivos estáticos e documentação revisada, sem obrigar o visitante a sair do portfólio.
