# Guia — adicionar um novo projeto

## Regra principal
Você nunca precisa editar as páginas HTML. Cada projeto vive em uma pasta própria dentro de `content/projects/`.

## 1. Duplique o template
Copie `content/projects/_template` e renomeie usando letras minúsculas, números e hífens. Exemplo: `central-chamados-ti`.

## 2. Preencha o project.json
O campo `id` deve ser exatamente igual ao nome da pasta. Preencha título, categoria, resumo, problema, papel, solução, resultados, tecnologias e capa.

## 3. Adicione a capa
Coloque `cover.png` na pasta do projeto. Recomendação: 1200 × 675 px, sem dados confidenciais.

## 4. Escolha a demonstração

### Power BI Online
Use `mode: powerbi-online` e coloque a URL pública em `embedUrl`. Use somente dados públicos ou sintéticos.

### Dashboard HTML no GitHub
Use `mode: github-html` e `embedPath: content/projects/SEU-ID/dashboard/index.html`. Coloque o dashboard nessa pasta.

### Aplicação externa
Use `mode: webapp`, preencha `embedUrl` e `externalUrl`. Alguns sites bloqueiam iframe; mantenha um link externo.

### Sem demonstração
Use `mode: none`. A página ainda mostrará problema, papel, solução, resultados e links.

## 5. Arquivo PBIX
O GitHub não executa `.pbix`. Você pode armazená-lo em `files/` e informar `pbixDownload`, ou publicar o relatório no Power BI Online. Para migrar de HTML para Power BI Online, altere apenas `demo.mode` e `demo.embedUrl`.

## 6. Validar localmente
Com Node.js instalado, execute:

```bash
node scripts/validate-projects.mjs
node scripts/build-projects.mjs
```

## 7. Commit
Envie a pasta do projeto e use uma mensagem como `Adiciona projeto Central de Chamados de TI`. O GitHub Actions valida antes de publicar. Se houver erro, a versão anterior continua no ar.

## Checklist
- [ ] ID igual ao nome da pasta
- [ ] Capa adicionada
- [ ] Categoria e status preenchidos
- [ ] Problema, papel e solução descritos
- [ ] Resultados e tecnologias preenchidos
- [ ] Demonstração testada
- [ ] Links testados
- [ ] Sem dados pessoais, credenciais ou informações confidenciais
