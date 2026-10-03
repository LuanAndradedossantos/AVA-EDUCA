import { login } from "../js/auth.js";

const form = document.getElementById("form-login");
const mensagemErro = document.getElementById("mensagem-erro");
const linkEsqueciSenha = document.getElementById("esqueci-senha");

form.addEventListener("submit", (eventoSub) => {
  //evento.preventDefault() Impede a ação padrão do navegador de recarregar a página ao enviar o formulário.
  eventoSub.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  login(email, senha)
    .then((usuario) => {
      //JSON.stringify Converte o objeto JS do usuário em uma string, formato obrigatório para salvar dados no sessionStorage .setItem inclui a string na sessionStorage
      sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
//location.href redireciona a navegação do usuário para a página de painel/dashboard.
      window.location.href = "../dashboard/dashboard.html";
    })
    .catch((mensagem) => {
      //essa mensagem está no arquivo de autenticação
      mensagemErro.textContent = mensagem;
    });
});

linkEsqueciSenha.addEventListener("click", (eventoClick) => {
  eventoClick.preventDefault();
  window.alert("Funcionalidade em construção.");
});