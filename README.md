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
