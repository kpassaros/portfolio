# Portfólio — Kaíque Passaros

Central multipágina de Dados, BI, Automação e Transformação Digital.

## Arquitetura
- Páginas institucionais independentes
- Catálogo único e dinâmico de projetos
- Cards expansíveis
- Página genérica de detalhes
- Projetos definidos em JSON
- Validação automática antes do deploy
- Power BI Online ou dashboard HTML incorporado

## Adicionar projetos
Consulte [`GUIA-ADICIONAR-PROJETO.md`](GUIA-ADICIONAR-PROJETO.md).

## Validar
```bash
node scripts/validate-projects.mjs
node scripts/build-projects.mjs
```

## Versão consolidada
- Rede interativa de dados
- Loader de pipeline
- PT/EN
- Personagem 3D animado
- Formspree assíncrono
- Carreira e skills por JSON
- Projetos futuros com status


## Revisão v12 — narrativa e experiência

- Dark mode aplicado antes da primeira pintura, sem flash branco.
- Preferência de tema persistente e botão com um único ícone contextual.
- Navbar fixa com estado visual de scroll.
- Loader exibido em toda entrada na home e sincronizado com a mídia principal.
- Personagem animado em WebM/MP4, com poster, fallback e suporte a movimento reduzido.
- Hero com superfície translúcida para proteger a legibilidade.
- Página Sobre com foto, trajetória, método, valores e interesses pessoais.
- Citação em card azul translúcido, sem órbita ou partículas decorativas.
- Botões dos cards padronizados e alinhados.
- Validação realizada em 1366×768, 1024×768 e 390×844, em PT/EN e light/dark.


## Revisão v13 — loader neural e camada de leitura

- Loader exclusivo da home reconstruído como experiência de tela cheia.
- Rede crescente conecta dados, BI, APIs, automação, processos e IA.
- Loader acompanha a preparação do vídeo, possui progresso e limite de espera.
- Camada azul global protege a leitura sem bloquear a rede interativa.
- Na home, a camada surge em transição após o loader; nas demais páginas é imediata.
- Hero reorganizado como uma seção única, com topo e base alinhados nas duas colunas.
- Card principal e posicionamento usam azul translúcido com blur mínimo.
- Rede neural permanece visível e responde ao cursor e ao clique.


## Revisão v14 — loader de rede pura

- Loader da home reduzido à formação visual da rede neural, sem textos, siglas ou chips.
- Nós surgem no centro, expandem pela viewport e recebem pulsos contínuos.
- Faixa horizontal de vidro faz a passagem para a rede permanente da home.
- Navbar, hero, vídeo, posicionamento e demais seções aparecem gradualmente.
- Vídeo recortado para exibir somente a saudação, o retorno à posição neutra e uma pausa estática antes do loop.
- WebM e MP4 otimizados permanecem disponíveis para compatibilidade.
