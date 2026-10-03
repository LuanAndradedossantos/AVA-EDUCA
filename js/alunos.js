import { alunos } from "../dados/listagen-alunos.js";

//essa função serve para cadastrar um novo aluno adicionando um id automaticamente
export function cadastrarAluno(aluno) {
  return new Promise((resolve, reject) => {
    try {
      const novoId =
      // Por meio deste ternário, o .length verifica se existem alunos na lista. O .map() extrai apenas os IDs de todos os alunos, e o spread (...) espalha esses números para que o Math.max encontre o maior ID existente. Por fim, soma-se 1 para o novo cadastro, ou define 1 caso a lista esteja vazia.
        alunos.length > 0 ? Math.max(...alunos.map((a) => a.id)) + 1 : 1;

        // Aqui será gerado o objeto do novo aluno através da variável alunoComId, criando um novo objeto com a propriedade id (recebendo o valor da variável novoId) mais todas as informações que foram preenchidas no formulário.
      const alunoComId = { id: novoId, ...aluno };
      //com o metodo push vou inserir o novo aluno com id no final da lista de alunos que foi importada inicialmente
      alunos.push(alunoComId);
      resolve("Aluno cadastrado com sucesso!");
    } catch (erro) {
      reject("Erro ao cadastrar o aluno");
    }
  });
}