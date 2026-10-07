---
kind: project
title: Prisma Central
projectType: Projeto de Dados & Engenharia
summary: Três fontes sintéticas, um pipeline reproduzível e uma leitura rastreável de qualidade cadastral e conciliação.
year: 2026
status: Publicado
featured: false
publish: true
cover: projects/prisma-central/cover.webp
technologies: [Python, SQLite, API REST, JSONL, HTML, CSS, JavaScript, GitHub Actions, GitHub Pages]
problem: Cadastros em ERP, CRM e Omnichannel usam IDs, estruturas e referências diferentes. Compará-los sem preservar a origem pode ocultar conflitos, tratar ausência como zero e confundir contato coincidente com identidade confirmada.
role: Concepção da demonstração, desenho dos contratos e cenários sintéticos, construção do pipeline Python, regras de validação e conciliação, interface, documentação e publicação orientada por testes.
solution: Gerador determinístico, API HTTP local somente leitura, extração paginada e snapshots JSONL com manifesto e SHA-256. O painel apresenta referências, candidatos, conflitos e evidências; a demo pública consome apenas os resultados sintéticos preparados no build.
results:
  - Três fontes sintéticas com IDs próprios e cadastro Core como referência
  - Quatro cenários reproduzíveis de disponibilidade das fontes
  - Snapshots JSONL com manifesto e verificação de integridade SHA-256
  - Busca, filtros, paginação e evidências no painel de conciliação
  - Página Engenharia de Dados com sete etapas e exemplos rastreáveis
  - Demo estática publicada separadamente, sem API operacional pública
architecture: [Geração sintética e SQLite, API HTTP em loopback, Extração paginada, JSONL e manifesto, Validação e normalização, Conciliação com evidências, Artefato estático e painel]
embeds:
  - type: image
    title: Prisma Central — captura local da demonstração sintética no tema Aurora
    fallback: projects/prisma-central/aurora.webp
  - type: image
    title: Prisma Central — captura local da demonstração sintética no tema Nocturne
    fallback: projects/prisma-central/nocturne.webp
links:
  - label: Explorar demonstração
    url: https://kpassaros.github.io/prisma-central/
    primary: true
  - label: Ver código no GitHub
    url: https://github.com/kpassaros/prisma-central
    primary: false
  - label: Entender o pipeline
    url: https://kpassaros.github.io/prisma-central/#Engenharia%20de%20Dados
    primary: false
---

## Do registro à evidência

O Prisma Central nasceu de uma pergunta: **como comparar o mesmo universo cadastral em fontes diferentes sem apagar o contexto de cada uma?**

A resposta passa pela engenharia antes da visualização. O pipeline Python gera bases fictícias, valida relações, disponibiliza uma API local e extrai cópias paginadas. Os snapshots preservam IDs de origem, disponibilidade e evidências. A conciliação diferencia referência explícita, contato candidato, conflito e situação não avaliável.

O universo padrão parte de **120 cadastros Core**, com geração determinística por seed. Os cenários cobrem todas as fontes disponíveis e a ausência individual de CRM, ERP Core ou Omnichannel. Ausência não é apresentada como um resultado de zero registros.

## O que é execução — e o que é demonstração

A geração, a API em loopback, a extração, a validação e a conciliação são executadas pelo pipeline Python durante a preparação do artefato. O site público é estático: busca, filtros e navegação trabalham no navegador sobre os resultados já preparados. Ele não chama APIs operacionais, não mantém banco remoto e não recebe bases reais dos visitantes.

As capturas acima foram obtidas localmente da demonstração sintética. A publicação da demo e do favicon foi confirmada pelo autor; as imagens não são comprovantes do deploy remoto.

## Limites que fazem parte da solução

- **Telefone ou e-mail coincidente não confirma identidade.** É uma evidência candidata, não autorização para unir cadastros ou escrever em sistemas.
- **Dados inteiramente sintéticos.** Não há clientes reais, credenciais ou endpoints privados no case.
- **Sem promessa de sincronização ao vivo.** O navegador consulta um artefato preparado; alterações de navegação são descartadas ao recarregar.
- **Sem coleta de uploads.** O painel não é um ponto de entrada para bases operacionais.
- **Checkpoint persistente e autenticação multiusuário não são entregas desta demo.** Desenhos operacionais não devem ser confundidos com recursos implementados.
- **Prisma é o nome do projeto, não o Prisma ORM.** A persistência demonstrativa é SQLite.

## Aprendizado principal

Uma interface clara depende de contratos e regras igualmente claros. Preservar origem, distinguir ausência de resultado vazio e explicar a correspondência é mais útil do que apresentar uma união de registros como certeza.

O código e a demo permanecem no repositório independente `prisma-central`. Esta página apresenta o case; não duplica o backend, os snapshots ou o deploy da aplicação dentro do portfólio.
