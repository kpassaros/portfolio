# Auditoria de documentação, legado e duplicações — inclusão do Prisma

## Escopo e limites

Base: `portfolio-main (2).zip`, com comentário de arquivo indicando o commit
`e1e6c58522ce51c826ccf5e60438f7f99c2a405f`. O identificador veio do ZIP; não foi
consultado o repositório remoto. A auditoria considera a árvore recebida, não o
histórico Git, permissões, checks remotos ou disponibilidade atual de URLs externas.

Nenhum arquivo foi excluído ou movido por esta entrega. As ações de limpeza abaixo
são recomendações para uma branch posterior, com confirmação do proprietário.

## Resultado direto

O excesso está principalmente na mistura de **pacotes históricos, guias de uma
arquitetura anterior e a aplicação Astro vigente**. Os READMEs de kits e estudos
não devem ser tratados como descartáveis apenas por terem o mesmo nome.

| Indicador da árvore recebida | Quantidade |
| --- | ---: |
| Arquivos no ZIP, sem contar diretórios | 218 |
| Arquivos Markdown (`.md`/`.mdx`) | 46 |
| Arquivos cujo nome começa com `README` | 24 |
| READMEs na raiz | 9 |
| README principal vigente na raiz | 1 |
| READMEs históricos na raiz | 8 |
| READMEs em `content/` legado | 14 |
| README em `projects/` legado | 1 |
| Documentos Markdown de qualquer nome na raiz | 18 |
| Grupos de arquivos binariamente idênticos | 36 |
| Arquivos envolvidos nesses grupos | 73 |
| Cópias excedentes, conservando uma por grupo | 37 |
| Volume potencialmente redundante, sem compressão | 5,88 MiB |

As contagens são da baseline **antes deste pacote**. O pacote adiciona o case
Prisma e este relatório; não adiciona outro arquivo com nome README. Os 5,88 MiB
não são uma autorização para remoção: há cópias com destinos funcionais e alguns
artefatos precisam ser preservados ou migrados antes de deduplicar.

## Fonte vigente confirmada por inspeção

- `src/`: páginas, layouts, componentes, conteúdo e dados do Astro.
- `public/`: assets e scripts copiados para a publicação estática.
- `src/content.config.ts`: contrato e loaders de `src/content/projects/` e `src/content/labs/`.
- `astro.config.mjs`: build estático, site e prefixo de rotas.
- `package.json` e `package-lock.json`: versões e instalação reproduzível.
- `.github/workflows/validate.yml` e `deploy.yml`: audit/check/build e publicação.
- `scripts/audit.mjs`: único script de auditoria chamado pelo fluxo npm atual.

A raiz antiga não é copiada integralmente para `dist/` pela configuração recebida.
Por outro lado, **todo arquivo de `public/` é elegível a publicação**, mesmo quando
não existe referência interna a ele.

## O que mudou desde a auditoria de setembro

O inventário `docs/audits/2026-09-27-repository-inventory.md` deve permanecer como
histórico da sua baseline, mas não descreve todos os riscos atuais:

| Pendência do registro antigo | Situação no ZIP recebido |
| --- | --- |
| Lockfile ausente | `package-lock.json` presente |
| Dependências diretas em `latest` | Astro 7.3.5, @astrojs/check 0.9.10 e TypeScript 6.0.3 fixados |
| Instalação por `npm install` nos workflows | Ambos usam `npm ci --no-audit --no-fund` |
| Node não explicitado de forma reproduzível | Engine e workflows usam Node 24 |
| “13 documentos históricos” | A lista antiga contém 12 itens; não usar aquele total sem recontagem |

A instalação reproduzível está configurada; isso não comprova que todos os
pacotes estavam disponíveis ou que o build foi executado nesta auditoria.

## Classificação dos 24 READMEs

### Manter e consolidar: principal

| Arquivo | Decisão | Risco e justificativa |
| --- | --- | --- |
| `README.md` | Manter como única entrada principal; reescrito neste pacote | Baixo risco funcional. Explica Astro, comandos reais, cases, legado, limites e links. |

O novo README não copia números de impacto de estudos antigos nem usa estatísticas
do perfil como resultados do portfólio. Banner, animação, cards e ícones são locais;
capturas do Prisma foram produzidas com dados sintéticos. Badges e stats externos
precisam ser conferidos no GitHub e têm alternativas por link.

### Arquivar: 8 READMEs históricos da raiz

Destino sugerido, **não executado**: `docs/archive/legacy-packages/`.

| Arquivo | Motivo | Risco antes da ação |
| --- | --- | --- |
| `README-APLICACAO.md` | Ordena substituir HTML/CSS/JS da raiz, fora do núcleo Astro atual | Alto risco de confundir manutenção; preservar como histórico, não aplicar |
| `README-ATUALIZACAO.md` | Pacote Nexus/Enablement e catálogo JSON anterior | Médio: contém decisões e instruções de um script legado |
| `README-BACKGROUND-FIX.md` | Registro de correção de pacote `final6-bgfix` | Baixo ao mover, se links forem atualizados |
| `README-CORRECAO.md` | Restauração de `app.js` da versão v14 anterior | Médio: não reutilizar o procedimento na aplicação atual |
| `README-FINAL3.md` | Estado intermediário e contagem antiga de 12 projetos | Baixo para arquivo histórico; alto para reutilizar como descrição atual |
| `README-FINAL4.md` | Estado intermediário do dashboard e loading | Baixo após revisar links |
| `README-FINAL5.md` | Curadoria e stack do CashFlow em uma etapa anterior | Médio: preservar decisões sem confundir o estado atual |
| `README-FINAL6.md` | Descreve catálogo com somente CashFlow | Baixo para arquivo; informação não representa o catálogo vigente |

Arquivar não reduz o número total de READMEs no Git; reduz a ambiguidade da raiz.
Se a meta for reduzir o total, consolidar esses oito em um histórico único é uma
opção posterior. Exige preservar o texto e o contexto antes de excluir originais.

### Preservar para curadoria: 14 READMEs em `content/`

Esses arquivos não são carregados pelas coleções Astro atuais, mas documentam
estudos, decisões e kits. Risco **médio/alto de perda de conteúdo** se excluídos.
Não promover seus cases ao catálogo público automaticamente.

| Arquivo | Classificação proposta |
| --- | --- |
| `content/projects/_template/README.md` | Arquivar junto ao template JSON antigo; aponta para o guia legado |
| `content/projects/ai-enablement-hub/README.md` | Preservar como estudo até decidir migração para projeto ou Lab |
| `content/projects/cashflow-intelligence/README.md` | Consolidar com a documentação canônica do CashFlow; não apagar antes de comparar |
| `content/projects/central-chamados-sla/README.md` | Preservar para migração/autorização de publicação |
| `content/projects/commercial-performance-governance/README.md` | Preservar; contém volumes apresentados como evidência real agregada e exige revisão de origem/autorização |
| `content/projects/documentation-hub/README.md` | Preservar como planejado, sem apresentar como solução implantada |
| `content/projects/html-visual-powerbi/README.md` | Comparar com FutureViz antes de consolidar; não assumir equivalência apenas pelo tema |
| `content/projects/nexus-ai/README.md` | Preservar como estudo estratégico, não produção |
| `content/projects/operations-command-center/README.md` | Preservar junto ao kit e à natureza sintética |
| `content/projects/product-360-commercial/README.md` | Preservar; revisar o que é desenho conceitual e o que possui evidência |
| `content/projects/production-performance/README.md` | Preservar junto à demo e ao kit |
| `content/projects/quick-access-hub/README.md` | Preservar; inclui métricas agregadas de adoção, com contexto e limite de causalidade |
| `content/projects/operations-command-center/powerbi-kit/README.md` | Manter com o kit enquanto ele existir; instruções idênticas ao outro kit não tornam o pacote dispensável |
| `content/projects/production-performance/powerbi-kit/README.md` | Manter com o kit enquanto ele existir; possível extração futura de um guia comum |

### Consolidar: 1 README em `projects/`

`projects/cashflow-intelligence/README.md` é uma terceira descrição do CashFlow,
com foco em Power BI/DAX, enquanto a entrada Astro vigente apresenta DataStudio.
Além disso, cita arquivos `data/fluxo_caixa.csv`, `data/dicionario_dados.csv` e
`data/cashflow-summary.json` como entregáveis; eles não existem na pasta desse
README na árvore recebida.

**Ação proposta:** verificar se documenta um protótipo anterior. Consolidar sua
narrativa na documentação do CashFlow ou arquivar com indicação explícita de
versão/stack. Risco médio: não fundir tecnologias de etapas diferentes como se
fossem a implementação vigente.

## Outros documentos que precisam de curadoria

| Grupo/arquivo | Ação proposta | Estado nesta entrega |
| --- | --- | --- |
| `ATUALIZACOES-DESTE-PACOTE.md`, `HOTFIX-CASHFLOW-NAVEGACAO.md`, `PRODUCTION-CANDIDATE.md`, `UPDATE-2026-09-25.md` | Arquivar com os oito READMEs históricos: 12 documentos históricos de raiz no total | Preservados |
| `GUIA-ADICIONAR-PROJETO.md` | Atualizar de JSON/raiz para Content Collections Astro | Atualizado no mesmo caminho, sem criar guia concorrente |
| `GUIA-ATUALIZAR-CARREIRA.md` | Corrigir `data/experience.json` para `src/data/experience.json` | Recomendação; não alterado |
| `GUIA-FORMULARIO-E-IDIOMAS.md` | Comparar com código vigente: as referências `data/i18n/` e `project.json` são do legado | Recomendação; não alterado |
| `POLITICA-DADOS-PORTFOLIO.md` | Preservar princípios; revisar exigência de `dataNature`/`disclosure` em `project.json`, inexistentes no schema atual | Recomendação; não alterado |
| `VALIDATION.md` | Manter como checklist, não prova de execução; acrescentar casos do Prisma após incorporação | Preservado |
| `docs/EVOLUCAO-DO-PORTFOLIO.md` | Manter como histórico; não usar para afirmar que todo o catálogo antigo está publicado | Preservado |
| `docs/PENDENCIAS-MANUAIS-GITHUB.md` | Revisar pendência de URL do CashFlow: o conteúdo Astro já possui URLs; acesso remoto não foi conferido | Preservado |
| `docs/TAXONOMIA-COMPETENCIAS-E-STACKS.md` | Manter como referência editorial, conferindo contrato vigente antes de mudanças | Preservado |

O README principal agora indica qual documento é vigente e quais são históricos
ou ainda precisam de atualização. Esta entrega não apaga anotações do autor.

## Duplicações binárias verificadas

A comparação usou SHA-256 dos 218 arquivos originais. Foram encontrados **36
grupos**, envolvendo 73 arquivos e 37 cópias excedentes.

Principais agrupamentos:

- Os **21 arquivos de `assets/`** têm cópias idênticas em `public/assets/`.
  O grupo do logo também inclui `brand-mark.png` na raiz. A pasta antiga contém
  5.604.092 bytes, cerca de **5,34 MiB**, mas a limpeza precisa respeitar referências
  legadas e caminhos usados fora do site atual.
- `data/experience.json` é idêntico a `src/data/experience.json`.
- A capa CashFlow em `content/projects/cashflow-intelligence/cover.png` é idêntica
  à capa publicada em `public/projects/cashflow-intelligence/cover.png`.
- Os dois kits Power BI compartilham README e tema idênticos. Manter os kits
  autocontidos pode justificar essas duas cópias; não deduplicar sem revisar uso.
- Os kits `cashflow-intelligence/datastudio-kit/` e `looker-kit/` compartilham
  **11 arquivos idênticos**, incluindo bases, dimensões, dicionário, resumo e
  Apps Script. As duas versões de `GUIA-LOOKER-STUDIO.md` não são idênticas;
  comparar diferenças antes de escolher a pasta canônica.
- `favicon.ico` da raiz não é cópia binária de `public/assets/brand/favicon-32.png`.
  Formatos diferentes não devem ser chamados de duplicação exata; o favicon usado
  pelo Astro é o PNG referenciado no BaseLayout.

## Candidatos à exclusão ou arquivamento técnico — não executado

| Grupo | Evidência de uso atual | Proposta | Risco |
| --- | --- | --- | --- |
| `app.js`, `styles.css`, `index.html` e páginas HTML de raiz | Não importados pelo núcleo Astro recebido | Arquivar/excluir só após comparar baseline e preservar histórico | Médio |
| `carreira/`, `contato/`, `labs/`, `projeto/`, `projetos/`, `sobre/`, `skills/` de raiz | Contrapartes atuais em `src/pages/`; `skills/` é página HTML legada, não uma Skill de agente | Mesmo lote das páginas legadas | Médio |
| `assets/` de raiz e `brand-mark.png` solto | Cópias exatas presentes em `public/assets/` | Candidato forte à remoção após revisar referências internas/externas | Médio |
| `.nojekyll` e `favicon.ico` de raiz | Não chamados pela configuração de build atual | Remoção pequena e opcional após homologação | Baixo, com verificação de URLs diretas |
| `content/`, `data/`, `schemas/`, `projects/` de raiz | Fora dos loaders Astro, mas contêm material autoral e artefatos | Preservar primeiro; migrar ou arquivar, sem exclusão em bloco | Alto |
| `apply-update.mjs` e cinco scripts legados além de `audit.mjs` | Não chamados por package.json/workflows atuais | Arquivar com instruções de sua versão; revisar usos manuais antes | Médio |

Os cinco scripts legados dentro de `scripts/` são `apply-cashflow-update.py`,
`build-projects.mjs`, `check-content.mjs`, `project-lib.mjs` e
`validate-projects.mjs`. “Não chamado pelo CI” não equivale a “nunca usado”.

### Assets de `public/` sem referência interna encontrada

Na baseline, foram identificados **15 candidatos**:

- `public/assets/brand/apple-touch-icon.png`;
- `public/assets/brand/kaique-character.png`;
- as seis imagens estáticas `character-approved.webp`, `character-blink.webp`,
  `character-look.webp`, `character-neutral.webp`, `character-smile.webp` e
  `character-wave.webp` em `public/assets/character/`;
- `public/assets/loading/origami-approved.mp4`;
- os seis arquivos em `public/assets/brand/source/`.

Foram examinados fonte Astro, CSS, script público e conteúdo das coleções.
Referências construídas por terceiros ou links diretos externos não fazem parte
desse exame. Não excluir o vídeo `origami-bird-transparent.webm`, o loop do
personagem, seu poster, o favicon, o logo, o currículo ou a foto Sobre: esses
recursos possuem referências vigentes.

Proposta: separar fontes de criação dos assets servidos, mantendo arquivos
necessários à autoria fora de `public/` quando não precisam ser publicados.
Antes de remover, conferir URLs diretas e revisar o layout com cache limpo.

## Achado visual preexistente para confirmar no build final

Na prévia estrutural móvel, o botão de menu abre e fecha corretamente, mas aparece
sem um símbolo visível. O `Header.astro` recebido usa dois elementos `span`; o CSS
recebido define dimensões para SVGs de menu, mas não contém regra de desenho desses
spans. Isso já está na baseline e não foi introduzido pelo case Prisma.

Não foi alterado automaticamente: mudanças em componentes ficam fora deste pacote
orientado a conteúdo/documentação. Conferir no Astro compilado e, se confirmado,
corrigir por alteração direcionada para SVG no botão, preservando dimensões,
`aria-label`, estado `aria-expanded` e comportamento atual. O teste funcional do
menu não substitui essa verificação visual. Risco baixo para uma correção isolada,
mas exige preview e checks próprios.

## Plano de limpeza recomendado

1. Preservar um tag/release estável e este ZIP.
2. Concluir a inclusão do Prisma e o novo README em uma branch própria.
3. Após homologação, abrir uma branch **separada** de limpeza documental.
4. Arquivar os 12 documentos históricos de raiz, preservando o texto e atualizando links.
5. Corrigir os guias restantes e o trecho legado da política de dados.
6. Comparar as três documentações CashFlow e os dois kits DataStudio/Looker.
7. Migrar ou arquivar o conteúdo legado antes de qualquer exclusão em massa.
8. Só então remover duplicações técnicas confirmadas em lotes pequenos.
9. Executar audit/check/build, revisar desktop/notebook/celular e temas, abrir PR e homologar.

A primeira redução desejada é **uma raiz clara, com um README principal**, não
uma meta arbitrária de apagar todos os documentos chamados README.

## Alterações efetivas desta entrega

- Inclusão do case Prisma em `src/content/projects/prisma-central.md`.
- Capa e duas capturas reais da demo sintética, renderizadas localmente.
- README principal reescrito no padrão visual aprovado, com assets locais.
- Guia de inclusão atualizado para Astro, no mesmo arquivo existente.
- Este relatório versionável.

Sem mudanças em componentes, layouts, estilos globais, schema, dependências,
lockfile ou workflows. Sem exclusões/movimentações. `featured: false` preserva
a Home; `publish: true` prepara a entrada no catálogo após o build/deploy.

## Evidências de validação e bloqueios

- Auditoria npm mínima executada e aprovada após adicionar a capa.
- YAML do novo case e referências de assets conferidos localmente: três entradas de projeto, 12 referências locais do README e oito quadros de GIF conferidos.
- Capturas reais do Prisma obtidas do build sintético Python em loopback.
- Assets autorais do README renderizados e inspecionados.
- Prévia estrutural local do catálogo/case utiliza os componentes, CSS e script
  vigentes como referência. Foram testados 12 estados (catálogo/case × três larguras × dois temas), incluindo busca, filtros, vazio, menu e tema. **Não é compilação Astro nem prova da rota de produção.** O achado visual do menu móvel está descrito separadamente acima.
- `npm ci --offline` falhou com `ENOTCACHED`: pacote `zwitch-2.0.4.tgz` ausente no
  cache. Não foram alteradas dependências para contornar o bloqueio.
- Check/build Astro completos, renderização final do Astro, CI remoto, links
  externos, formulário e deploy **não foram validados nesta preparação**.
- Stats/badges externos não foram simulados por números ou capturas inventadas.

**Gate de publicação:** aprovação visual, checks remotos verdes no PR, merge e
homologação do deploy, nessa ordem. Se houver mudança na main desde o ZIP,
revisar sobre a base atualizada antes de aplicar arquivos completos.
