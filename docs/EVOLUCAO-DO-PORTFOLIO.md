# Evolução do Portfólio — registro para o case final

Este documento preserva decisões, problemas encontrados, análises, correções e tecnologias utilizadas. O case público da construção do portfólio só será criado depois da conclusão dos demais projetos.

## Princípios

- Dados demonstrativos sempre fictícios.
- Resultados reais somente agregados, contextualizados e anonimizados.
- Cases devem permitir análise: filtros, indicadores, gráficos, tabelas e exploração.
- Conteúdo mantido por JSON e bases sintéticas reproduzíveis.
- A experiência precisa funcionar em desktop, notebook, mobile, light e dark mode.

## Evolução funcional

1. MVP do CashFlow Intelligence e arquitetura multipágina.
2. Catálogo dinâmico de projetos por JSON.
3. Página de detalhe, demonstrações incorporadas e documentação de manutenção.
4. Temas, idiomas, formulário assíncrono e personagem 3D.
5. Rede neural interativa e loader de pipeline.
6. Modal de projetos e correção de cards expansíveis.
7. Separação entre cases aplicados, estudos de caso e Labs.
8. Inclusão de projetos históricos anonimizados.
9. Revisão para notebook: navbar, rodapé, cards, modal e Labs.
10. Revisão de taxonomia e início dos cases analíticos realmente interativos.

## Problemas identificados e soluções

- Cards com alturas diferentes: grid com linhas uniformes e conteúdo flexível.
- Modal fora da viewport: ancoragem fixa, rolagem interna e ação final separada.
- Iframes com largura padrão de 300 px: largura e altura responsivas explícitas.
- Navbar congestionada: identidade compacta, breakpoint para menu e controles em SVG.
- Light mode excessivamente claro: base cinza e conexões com contraste maior.
- Rede neural pouco evidente: grafo persistente, múltiplos pulsos e interação por cursor/clique.
- Classificação incorreta de JSON e REST API: criação do grupo Integração & formatos.
- Demos estáticas: dashboards derivados de CSV com filtros, gráficos clicáveis, KPIs e tabelas.

## Stack empregada no portfólio

### Linguagens, consultas e marcação

- JavaScript
- HTML
- CSS
- Python
- JSON Schema

### Ferramentas e plataforma

- Git
- GitHub
- GitHub Pages
- Visual Studio Code
- Playwright
- FFmpeg
- Pillow

### Engenharia e arquitetura

- Catálogo orientado por JSON
- Validação automática
- Componentes reutilizáveis
- Design responsivo
- Progressive enhancement
- Acessibilidade e prefers-reduced-motion
- Dados sintéticos e anonimização

### Produto e processo

- Levantamento de requisitos
- Análise de problemas
- Priorização e roadmap
- QA visual e funcional
- Documentação técnica
- Storytelling de cases
- Building in public

## Fases de conteúdo analítico

### Fase 1 — concluída

- Central de Chamados & SLA
- Operations Command Center
- Production Performance Intelligence
- Data & BI Documentation Hub

### Fase 2 — próxima

- Commercial Performance & Data Governance
- Product 360° & Commercial Publishing
- Quick Access Hub — aprofundamento de uso
- HTML Visual Components — biblioteca ampliada

### Fase final

- Case: Construção e evolução do Portfólio de Dados & BI
- Arquitetura, decisões, versões, problemas, QA, documentação e resultados.

## Revisão v12 — experiência, narrativa e estabilidade visual

- Dark mode definido como padrão antes da primeira pintura.
- Preferência de tema preservada sem flash branco entre páginas.
- Navbar fixada ao topo, com estado de scroll, vidro e hierarquia refinada.
- Botão de tema corrigido para exibir somente um ícone.
- Loader da home exibido em todas as entradas e sincronizado com a mídia principal.
- Personagem substituído por vídeo WebM/MP4 otimizado em loop, com poster e fallback.
- Hero recebeu superfície translúcida para proteger a leitura da rede neural.
- Separador reposicionado com respiro após o card de posicionamento.
- Ações dos cards receberam dimensões e alinhamento idênticos.
- Página Sobre reconstruída com origem, trajetória, método, valores, hobbies e foto.
- Card de princípio simplificado, sem órbita ou partículas, com azul translúcido.

## Revisão v13 — loader neural e proteção de leitura

- Loader da home transformado em experiência de tela cheia.
- Rede neural cresce do centro e conecta dados, BI, APIs, automação, processos e IA.
- Status e barra de progresso acompanham a preparação da experiência.
- Loader continua sincronizado ao vídeo, com limite para conexões lentas.
- Camada azul global protege a leitura sem bloquear os pulsos ou interações do background.
- Na home, a camada aparece em transição após a saída do loader; nas demais páginas é imediata.
- Hero alinhado como uma única seção: card principal e coluna vídeo/posicionamento compartilham topo e base.
- Superfícies verdes substituídas por azul translúcido com blur reduzido.

## Revisão v14 — rede pura e transição de vidro

- Removidos textos, siglas, chips, progresso e elementos editoriais do loader.
- Loader passou a exibir somente a formação orgânica da rede neural e seus pulsos.
- Nós nascem no centro e se expandem até preencher a viewport.
- Faixa horizontal de vidro faz a passagem entre a rede do loader e a rede permanente da home.
- Navbar, hero, vídeo, posicionamento e seções aparecem gradualmente.
- Vídeo foi recortado para remover movimentos laterais iniciais: personagem cumprimenta, retorna à posição neutra e permanece parado antes do loop.
