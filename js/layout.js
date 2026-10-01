//função para gerenciar o controle de acesso e renderizar a estrutura visual comum nesse caso o cabeçlho e menu em todas as paginas com exceção do login
export function renderLayout() {
  const usuarioSalvo = sessionStorage.getItem("usuarioLogado");
  if (!usuarioSalvo) {//essa condição verifica se existe um usuario salvo na sessionStorage, se não o location.href encaminha para a pagina de login
    window.location.href = "../login/login.html";
    return;
  }
  const usuario = JSON.parse(usuarioSalvo);
  document.getElementById("cabecalho").innerHTML = `
    <span class="nome-sistema">AVA-EDUCA+</span>
    <span class="nome-usuario">${usuario.nome}</span>
  `;

  document.getElementById("menu-lateral").innerHTML = `
    <button id="btn-dashboard">Dashboard</button>
    <button id="btn-cursos" disabled>Cursos</button>
    <button id="btn-cadastro">Cadastro de Alunos</button>
    <button id="btn-sair">Sair</button>
  `;

  document.getElementById("btn-dashboard").addEventListener("click", () => {
    window.location.href = "../dashboard/dashboard.html";
  });

  document.getElementById("btn-cadastro").addEventListener("click", () => {
    window.location.href = "../cadastro-aluno/cadastro-aluno.html";
  });

  document.getElementById("btn-sair").addEventListener("click", () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "../login/login.html";
  });

  return usuario;
}