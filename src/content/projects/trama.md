---
kind: project
title: Trama
projectType: Produto Digital & Conhecimento
summary: Um portal de estudo e consulta que conecta trilhas de tecnologia, exemplos explicados e referências oficiais — da primeira ideia à aplicação.
year: 2026
status: Publicado
featured: false
publish: true
cover: projects/trama/desktop-dark.webp
locale: pt-BR
technologies: [HTML, CSS, JavaScript, Python, JSON, SVG, GitHub Actions, GitHub Pages]
problem: Estudar uma ferramenta e encontrar a referência certa para uma dúvida prática costumam ser experiências desconectadas. Copiar uma sintaxe sem compreender intenção, resultado, contexto e limites pode produzir uma solução aparentemente correta, mas inadequada ao ambiente.
role: Concepção do produto, organização das trilhas e referências, identidade visual, interface responsiva, gerador estático, validações, documentação e publicação do portal.
solution: Um portal estático com dois caminhos complementares — estudar por trilhas e consultar referências. O conteúdo em JSON alimenta um gerador Python que produz páginas, navegação e contagens; a interface em HTML, CSS e JavaScript oferece busca, filtros, exemplos explicados e código copiável com fontes oficiais.
results:
  - 20 trilhas de tecnologia, 44 aulas iniciais e 76 referências na versão apresentada
  - Dois caminhos de navegação complementares — estudo orientado e consulta rápida
  - Busca, filtros, realce de sintaxe e cópia de exemplos com contexto
  - Interface responsiva, temas claro e escuro e navegação lateral recolhível
  - Conteúdo separado da interface, com geração de páginas e contagens a partir de JSON
  - Portal publicado no GitHub Pages, sem necessidade de cadastro para estudar ou consultar
architecture:
  - Catálogo, aulas e referências em JSON
  - Geração estática com Python
  - Páginas HTML, CSS e JavaScript
  - Validações e build no GitHub Actions
  - Publicação no GitHub Pages
embeds:
  - type: image
    title: Trama — captura local da página inicial no tema claro, com a preferência de analytics recusada
    fallback: projects/trama/desktop-light.webp
  - type: image
    title: Trama — captura local da página inicial no tema escuro, com a preferência de analytics recusada
    fallback: projects/trama/desktop-dark.webp
links:
  - label: Explorar a Trama
    url: https://kpassaros.github.io/trama/
    primary: true
  - label: Ver código no GitHub
    url: https://github.com/kpassaros/trama
    primary: false
---

## Aprender e consultar no mesmo lugar

A Trama nasceu de uma necessidade prática: **construir base em uma ferramenta e, depois, encontrar uma referência útil quando surgir uma dúvida no trabalho ou no estudo.**

O portal conecta essas duas jornadas. As trilhas organizam objetivos, pré-requisitos, exemplos e revisões. As consultas rápidas explicam a intenção de uma sintaxe, o resultado esperado e os cuidados antes de aplicá-la. A documentação oficial continua sendo a referência, não algo que o projeto pretende substituir.

O catálogo apresentado reúne **20 trilhas, 44 aulas iniciais e 76 referências**, entre dados, BI, automação e desenvolvimento web. Inclui temas como SQL, Databricks, Microsoft Fabric, Power BI, Power Query, Excel, APIs e ferramentas dos ecossistemas Microsoft e Google. São conteúdos introdutórios em expansão, não currículos completos ou formações certificadas.

## Conteúdo antes de complexidade

A escolha por uma arquitetura estática mantém a publicação simples e separa o trabalho editorial da interface. Catálogo, aulas e referências ficam em arquivos JSON. O gerador Python prepara páginas, navegação e contagens a partir dessa fonte.

No site publicado, o navegador executa busca, filtros e interações em JavaScript. Não há servidor de aplicação ou banco remoto necessário para consultar o material, nem execução dos exemplos contra ferramentas e dados dos visitantes. O Python participa da geração do site, não de um backend público.

O repositório da Trama permanece independente do portfólio. Este case apresenta o problema, as decisões e as entregas; o portal e seu ciclo de publicação continuam no projeto original.

## Uma experiência para voltar quando precisar

A interface combina navegação lateral, consulta por intenção, blocos de código com realce de sintaxe e cópia, temas claro e escuro e adaptação ao celular. A identidade Petróleo + Íris conecta marca e produto sem competir com a leitura.

O objetivo não é apenas facilitar a cópia: é ajudar a entender **por que usar o exemplo, o que esperar dele e quando não aplicá-lo sem adaptação**.

As imagens deste case são capturas locais do código da versão publicada, com a preferência de analytics recusada e o aviso já fechado. Elas ilustram a interface; não comprovam recebimento de eventos pelo GA4 nem substituem a conferência do deploy remoto.

## Limites que fazem parte da proposta

- **Conteúdo inicial e em expansão.** As trilhas não substituem documentação oficial, treinamento certificado ou validação no ambiente de uso.
- **Sem cadastro ou progresso individual.** O portal não oferece contas, acompanhamento de conclusão ou armazenamento de anotações dos visitantes.
- **Exemplos didáticos.** Dados, versões, dialetos, permissões e riscos precisam ser conferidos antes de adaptar qualquer exemplo para produção.
- **Entregas, não métricas de impacto.** As contagens descrevem o catálogo apresentado; não são números de visitantes, aprendizado comprovado ou resultado profissional.
- **Validações com escopo definido.** Os testes documentados não constituem auditoria integral de segurança, acessibilidade ou compatibilidade com todas as ferramentas abordadas.
- **Privacidade documentada no portal.** Ausência de cadastro não significa ausência de dados técnicos; os serviços e controles devem ser consultados na política da própria Trama.

## Aprendizado principal

Um projeto de conhecimento precisa de mais do que uma interface agradável: precisa de uma estrutura de conteúdo sustentável e de limites claros. Separar conteúdo de apresentação, explicar os exemplos e preservar as fontes torna a evolução do portal mais consistente.

A Trama é um projeto pessoal de **Kaíque Passaros**, construído para conectar estudo, consulta e aplicação com contexto.
