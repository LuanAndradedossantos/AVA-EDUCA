import { usuarios } from "../dados/listagen-usuarios.js";

//função com parametros de usuario e senha que retorna uma promise
export function login(usuario, senha) {
  return new Promise((resolve, reject) => {

    //a variavel usuarioEncontrado recebe o metodo .find que percorre o array usuarios afim de verificar atravez da arrow function  se o email e senha recebidos no login são iguais aos dados cadastrados no arquivo usuarios o qual foi importado da pasta dados
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === usuario && u.senha === senha);
    
      //se o resultado for verdadeiro a função resolve é retornada com os dados do usuario.
      if (usuarioEncontrado) {
        resolve({
          id: usuarioEncontrado.id,
          nome: usuarioEncontrado.nome,
          email: usuarioEncontrado.email
        });
      } else {
        reject("Dados incorretos. Por favor verificar e tentar novamente");
      }
  })
}