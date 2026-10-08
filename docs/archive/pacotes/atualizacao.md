# Pacote de atualização — Portfólio Dados & BI

## Conteúdo
- Nexus AI: case, capa e protótipo interativo.
- AI Enablement Hub: case, capa e protótipo interativo.
- CashFlow Looker Kit: bases bruta/tratada, dimensões, dicionário, Apps Script, perguntas e layout HTML.
- Correção mínima do loading: a mesma rede criada no loader é transferida para o background da home.

## Segurança dos impactos
- Evidências reais são descritas qualitativamente quando disponíveis.
- Números sem comprovação estão identificados como fictícios ou ilustrativos.
- Os projetos de IA não são apresentados como soluções implantadas.

## Aplicação em uma cópia local do repositório
1. Extraia este pacote fora do repositório.
2. No terminal, entre na raiz do repositório.
3. Execute: `node /CAMINHO/portfolio-update/apply-update.mjs`
4. Revise o diff: `git diff -- app.js data/projects.json content/projects`
5. Valide: `node scripts/validate-projects.mjs`
6. Gere o catálogo: `node scripts/build-projects.mjs`
7. Abra o site localmente e valide a home, os dois cases e o CashFlow.
8. Somente depois faça commit e push.

## Observações
- O script é idempotente para o catálogo: atualiza ou adiciona os dois IDs sem duplicar.
- A atualização do loading procura as funções existentes; se o arquivo mudou, ela interrompe sem sobrescrever.
- O Looker Studio ainda precisa ser publicado por você. Depois, use `project.update.template.json` para inserir as URLs.
