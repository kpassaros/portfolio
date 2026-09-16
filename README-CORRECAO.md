# Correção do background — restauração v14

Este pacote restaura somente o `app.js` original do arquivo `portfolio-loader-rede-pura-v14.zip`.

Com isso, o loading e o background de todas as páginas voltam exatamente ao comportamento anterior à atualização unificada.

## Aplicação

Copie `app.js` para a raiz do repositório e substitua o arquivo atual.

Nenhum conteúdo, projeto, JSON, imagem, estilo ou página precisa ser removido.

Depois valide:

```bash
node --check app.js
node scripts/validate-projects.mjs
node scripts/build-projects.mjs
```
