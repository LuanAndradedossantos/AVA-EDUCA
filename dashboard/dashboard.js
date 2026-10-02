import { renderLayout } from "../js/layout.js";
import { listarCursos } from "../js/cursos.js";

const usuario = renderLayout();

const listaCursos = document.getElementById("lista-cursos");

// Verifica se o usuário está logado antes de listar os cursos
if (usuario) {
  
  listarCursos(usuario)
  //quando a busca termina com sucesso o .then recebe a lista de dados retornada
    .then((cursos) => {
      //O .map() é usado para percorrer o array de cursos e gerar um bloco de código HTML para cada curso encontrado. Cada bloco de código HTML é armazenado em um array chamado cardsHtml.
      const cardsHtml = cursos.map ((curso) => `
            <div class="card-curso">
              <h3>${curso.nomeCurso}</h3>
              <p><strong>Início:</strong> ${curso.dataInicio}</p>
              <p><strong>Fim:</strong> ${curso.dataFim}</p>
            </div>
            `
        )
        //O .join("") serve para limpar as vírgulas que o Array geraria por padrão e unir todos os cards em um único bloco de código HTML limpo. 
        .join("");

      listaCursos.innerHTML = cardsHtml;
    })
    //essa mensagem está no arquivo de cursos
    .catch((mensagem) => {
      listaCursos.innerHTML = `<p>${mensagem}</p>`;
    });
}