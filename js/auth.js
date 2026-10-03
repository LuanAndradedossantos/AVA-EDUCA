import { usuarios } from "../dados/listagen-usuarios.js";

// Função que recebe o e-mail (no parâmetro usuario) e a senha, retornando uma Promise de autenticação
export function login(usuario, senha) {
  return new Promise((resolve, reject) => {

     // A variável usuarioEncontrado armazena o resultado do método .find(), que percorre o array usuarios. A arrow function verifica se o e-mail e a senha informados correspondem a algum usuário cadastrado.
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === usuario && u.senha === senha);
    
      // Se o usuário for encontrado, a função resolve é executada passando um objeto com os dados públicos do usuário.
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