import 'dotenv/config';

export default [
  {
    testTitle: "deve retornar 200 e um token quando o admin informar e-mail e senha corretos",
    dadosUsuario: {
      emailUsuario: process.env.ADMIN_EMAIL,
      senhaUsuario: process.env.ADMIN_SENHA
    },
    statusCodeEsperado: 200,
    mensagemErroEsperada: null
  },
  {
    testTitle: "deve retornar 200 e um token quando um usuário informar e-mail e senha corretos",
    dadosUsuario: {
      emailUsuario: "ana.souza@example.com",
      senhaUsuario: "123456"
    },
    statusCodeEsperado: 200,
    mensagemErroEsperada: null
  },
  {
    testTitle: "deve retornar 401 quando a senha informada for inválida",
    dadosUsuario: {
      emailUsuario: process.env.ADMIN_EMAIL,
      senhaUsuario: "senhaIncorreta"
    },
    statusCodeEsperado: 401,
    mensagemErroEsperada: "E-mail ou senha inválidos."
  }
];