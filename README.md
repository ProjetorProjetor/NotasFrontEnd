Projeto iniciado a partir da Template do Vite. Podem haver resquícios dela.

1º commit(Arthur): Projeto criado.

2º commit(Arthur): Interface básica criada, junto com funções básicas como:
- Navegação de páginas (Inicio para Aluno, Aluno para Inicio/EditarNotas)
- Modificação de notas 
- Salvar as notas modificadas (temporariamente)

3º commit(Arthur): Mudanças leves na estilização da interface, a mais grave sendo na página Aluno
- A pagina Aluno agora mostra a média final, destacando se ele foi Aprovado ou Reprovado, mudando a cor de acordo
- Os valores agora são limitados de 0 a 10, com 1 número após a vírgula somente

4º commit(Arthur): Implementação do backend. Arquivos adaptados para esse propósito.
- Arquivo alunos.json agora é salvo no repositório back end do trabalho
- Adaptações feitas com node para que o .json seja atualizado dinamicamente e salve após atualização de página/servidor desligado.

Como Inicializar:
1. Abra o repositório NotasBackEnd
2. Va no terminal e execute o comando "node server.js", inicializando o servidor que mantém as notas
3. Abra o repositório NotasFrontEnd
4. No terminal, use "cd notas-alunos" para entrar na pasta notas-alunos 
5. Use "npm run dev" para iniciar a parte front-end do trabalho