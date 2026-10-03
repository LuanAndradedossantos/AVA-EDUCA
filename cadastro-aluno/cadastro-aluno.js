import { renderLayout } from "../js/layout.js";
import { Aluno } from "../js/Aluno.js";
import { cadastrarAluno } from "../js/alunos.js";

renderLayout();

const inputCep = document.getElementById("cep");

inputCep.addEventListener("blur", () => {
  const cep = inputCep.value.split("")
  //.filter vai filtrar o array de caracteres que foi fornecido pela variavel inputCep através do .split("")
  .filter((caractere) => caractere >= "0" && caractere <= "9")
  //.join(""): Junta os elementos do array em uma única string novamente.
  .join("");

  if (cep.length !== 8) {
    //se o a quantidade de carcteres/elementos for diferente de 8 então o return; interrompe a execução  (; 
    return;
  }
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
//Quando o servidor do ViaCEP responde ao pedido, a Promise do fetch() é resolvida e o primeiro .then() é executado automaticamente, recebendo um objeto de resposta. json() Converte o texto no formato JSON para um Objeto JavaScript manipulável o .json tambem retorna uma promise.
    .then((resposta) => resposta.json())
    //aqui os dados ja estão convertidos
    .then((dados) => {
      // a API as vezes retorna um JSON contendo { "erro": true } Se essa propriedade existir, avisa o usuário e encerra
      if (dados.erro) {
        window.alert("CEP não encontrado.");
        return;
      }
// o .value aqui serve para alterar(escrever) o conteudo de elemento input
      document.getElementById("cidade").value = dados.localidade;
      document.getElementById("estado").value = dados.uf;
      document.getElementById("logradouro").value = dados.logradouro;
      document.getElementById("bairro").value = dados.bairro;
    })
    //se algo der errado com o retorno das promises o .catch é acionado ex:.A Promise ser rejeitada ou ocorrer um erro de código dentro do .then
    .catch(() => {
      window.alert("Erro ao buscar o CEP. verifique sua conexão."); 
    });
});

const form = document.getElementById("form-aluno");
const mensagemAluno = document.getElementById("mensagem-aluno");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const dataNascimentoTexto = document.getElementById("dataNascimento").value;

  //A biblioteca moment converte a string em uma data real usando o formato DD/MM/YYYY e o parametro true ativa o modo estrito de validação
  const dataNascimento = moment(dataNascimentoTexto, "DD/MM/YYYY", true);

  
  if (!dataNascimento.isValid()) {
    mostrarMensagem("Data de nascimento inválida. Use o formato DD/MM/AAAA.", "erro");
    return;
  }

  
  const dataMinima = moment("01/01/1900", "DD/MM/YYYY");
  const hoje = moment();

  if (dataNascimento.isBefore(dataMinima) || dataNascimento.isAfter(hoje)) {
    mostrarMensagem("A data de nascimento deve ser maior que 01/01/1900 e menor que hoje.", "erro");
    return;
  }

  
  if (nome.length < 4 || nome.length > 80) {
    mostrarMensagem("O nome deve ter entre 4 e 80 caracteres.", "erro");
    return;
  }

  
  const aluno = new Aluno({
    nome,
    genero: document.getElementById("genero").value,
    // Usei o .format para converter a data validada de acordo com o formato dos dados ja cadastrados de alunos
    dataNascimento: dataNascimento.format("YYYY-MM-DD"),
    cpf: document.getElementById("cpf").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    cep: document.getElementById("cep").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    logradouro: document.getElementById("logradouro").value,
    numero: document.getElementById("numero").value,
    complemento: document.getElementById("complemento").value,
    bairro: document.getElementById("bairro").value
  });

  cadastrarAluno(aluno)
    .then((mensagem) => {

      mostrarMensagem(mensagem, "sucesso");
      form.reset(); 
    })
    .catch((mensagem) => {
      mostrarMensagem(mensagem, "erro");
    });
});


function mostrarMensagem(texto, tipo) {
  mensagemAluno.textContent = texto;
  
  mensagemAluno.className = tipo; 
}