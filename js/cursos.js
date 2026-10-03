import { cursos } from "../dados/listagen-cursos.js";

export function listarCursos(usuario) {
  return new Promise((resolve, reject) => {
    
    //aqui é verificaddo se o email do professor daquele curso é igual ao email do usuario que foi passado como parametro 
    const cursosDoUsuario = cursos.filter(
      (curso) => curso.emailProfessor === usuario.email
    );

    
    if (cursosDoUsuario.length > 0) {
      //Se o tamanho for maior que zero a Promise é resolvida com sucesso e retorna o array contendo a lista de cursos encontrados.
      resolve(cursosDoUsuario);
    } else {
      reject("Não há cursos cadastrados para esse usuário");
    }
  });
}