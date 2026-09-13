# Central de Portfólio — MVP

Portal estático, responsivo e pronto para GitHub Pages.

## Publicar hoje
1. Crie um repositório público no GitHub.
2. Envie todo o conteúdo desta pasta para a branch `main`.
3. Em **Settings → Pages**, selecione **GitHub Actions**.
4. Aguarde o workflow `Deploy portfolio to Pages`.

## Novo projeto
Inclua um objeto em `data/projects.json`, crie a pasta em `projects/` e adicione os arquivos em `assets/projects/`. O portal monta os cards automaticamente.

## Próxima evolução
Sincronizar uma Google Planilha com `data/projects.json`. Preserve o JSON no GitHub como cache/versionamento para não tornar o site dependente da disponibilidade da planilha.

## Interações adicionadas
- Alternância claro/escuro com persistência local
- Partículas reativas ao ponteiro: afastam no movimento e atraem ao pressionar
- Cards com brilho, grade e animações no hover/foco
- Ícones sociais em SVG nativo
- Respeito a `prefers-reduced-motion`

Antes de divulgar, substitua os links genéricos do GitHub e LinkedIn no `index.html`.

## Identidade visual
- `assets/brand/brand-mark.png`: símbolo principal com transparência
- `assets/brand/kaique-character.png`: personagem usado no hero
- `assets/brand/favicon-32.png`: favicon do navegador
- `assets/brand/apple-touch-icon.png`: atalho para dispositivos móveis

Os arquivos de origem enviados pelo autor permanecem em `assets/brand/source/`.

## Refinamento de interface
- Corrigido contraste do filtro ativo no modo escuro
- Removido feixe que seguia o ponteiro nos cards
- Adicionado destaque fixo e sutil no rodapé do card durante hover ou foco
- Link do GitHub atualizado para `https://github.com/kpassaros`
