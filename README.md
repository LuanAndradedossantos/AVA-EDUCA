# AVA-EDUCA+

## Descrição do Projeto

O AVA-EDUCA+ é um protótipo de sistema web para centralizar as informações
acadêmicas de uma empresa de educação profissional. Atualmente, os dados de
cursos e alunos estão espalhados em diferentes planilhas e sistemas,
dificultando o acompanhamento pela equipe pedagógica.

Este projeto resolve esse problema oferecendo:
- Login de professores/usuários do sistema
- Um Dashboard com os cursos que cada usuário leciona
- Um formulário de cadastro de novos alunos, com busca automática de
  endereço via CEP


## Técnicas e Tecnologias Utilizadas

- **HTML5** semântico (header, main, nav, section, footer)
- **CSS3**: Flexbox, CSS Grid e Media Queries para responsividade
- **JavaScript (ES6+)**:
  - Módulos (import/export)
  - Classes e Programação Orientada a Objetos
  - Promises (resolve/reject)
  - Arrow Functions e métodos de array (map, filter, find)
  - Manipulação de DOM e eventos
  - sessionStorage para persistência de sessão
  - Fetch API para consumo de API externa
- **Bibliotecas externas via CDN**:
  - [moment.js](https://momentjs.com/) — validação de datas
- **APIs externas**:
  - [ViaCEP](https://viacep.com.br/) — busca de endereço por CEP
- **Versionamento**: Git e GitHub, com fluxo de branches (main, develop,
  feature branches)
- **Gerenciamento de tarefas**: Trello (Kanban)

## 📁 Estrutura do Projeto

\`\`\`
ava-educa/
├── login/              → Tela de login
├── dashboard/           → Tela principal com cursos do usuário
├── cadastro-aluno/      → Formulário de cadastro de alunos
├── css/                 → Estilos globais (cabeçalho, menu, grid)
├── js/                  → Lógica de negócio (auth, cursos, alunos, layout)
├── dados/                → Listagens simuladas (usuários, cursos, alunos)
├── assets/              → Imagens e ícones
├── index.html            → Ponto de entrada, redireciona para o login
└── package.json          → Configuração de módulos ES6
\`\`\`

## ▶️ Como Executar

1. Clone o repositório:
   \`\`\`
   git clone https://github.com/LuanAndradedossantos/AVA-EDUCA.git
   \`\`\`
2. Abra a pasta no VS Code.
3. Instale a extensão Live Server.
4. Clique com o botão direito no arquivo \`index.html\` e selecione
   **"Open with Live Server"**.
   > Importante: o projeto usa módulos JavaScript (import/export), que não
   > funcionam ao abrir o arquivo diretamente (duplo clique). É necessário
   > rodar por um servidor local, como o Live Server.

### Usuários de teste

| E-mail | Senha |
|---|---|
| ana.silva@edutech.com | 123456 |
| carlos.santos@edutech.com | 654321 |
| mariana.costa@edutech.com | edu2026 |

> A Mariana não possui cursos cadastrados — use este login para testar a
> mensagem de "nenhum curso encontrado" no Dashboard.

## 🔧 Melhorias Futuras

- Colocar os dados em um back-end real (banco de dados), já que atualmente
  os cadastros somem ao recarregar a página
- Implementar a recuperação de senha
- Adicionar edição e exclusão de alunos
- Ativar a funcionalidade de Cursos no menu lateral