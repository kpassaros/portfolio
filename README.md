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
