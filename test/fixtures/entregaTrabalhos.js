export default[
  {
    "testTittle": "Validar que o aluno João pode realizar o cadastro de uma nova entrega de trabalho",
    "dadosAluno": {
      "nome": "João Lima",
      "email": "joao.lima8690@example.com",
      "matricula": "J123456",
      "senha": "1a2b3c"
    },
    "dadosDisciplina": {
      "nome": "Pensamento Computacional",
      "codigo": "PC0102",
      "cargaHoraria": 60 
    },
    "dadosTrabalho": {
      "titulo": "Lista de Exercícios 01",
      "descricao": "Resolução dos exercícios 01 ao 10." 
    },
    "statusCodeEsperado": 201,
    "mensagemErroEsperada": null,
  },
  {
    "testTittle": "Validar que retorna erro 400 ao tentar realizar o cadastro de uma nova entrega de trabalho ao informar senha incorreta",
    "dadosAluno": {
      "nome": "Augusto Lima",
      "email": "augusto.lima8690@example.com",
      "matricula": "A123456",
      "senha": "123456",
      "senhaIncorreta": "senha_incorreta",
    },
    "dadosDisciplina": {
      "nome": "Lógica e Algoritmo",
      "codigo": "LA0102",
      "cargaHoraria": 80 
    },
    "dadosTrabalho": {
      "titulo": "Lista de Exercícios 02",
      "descricao": "Resolução dos exercícios 01 ao 10." 
    },
    "statusCodeEsperado": 401,
    "mensagemErroEsperada": "Token de autenticação inválido ou expirado.",
  },
  {
  "testTittle": "Validar que retorna erro 403 ao tentar realizar o cadastro de uma nova entrega de trabalho com outro usuário",
    "dadosAluno": {
      "nome": "Raissa Monteiro",
      "email": "raissa.monteiro8690@example.com",
      "emailOutroAluno": "ana.souza@example.com",
      "matricula": "RM123456",
      "senha": "123456",
    },
    "dadosDisciplina": {
      "nome": "Automação de Testes",
      "codigo": "AT0102",
      "cargaHoraria": 90 
    },
    "dadosTrabalho": {
      "titulo": "Lista de Exercícios 03",
      "descricao": "Resolução dos exercícios 01 ao 10." 
    },
    "statusCodeEsperado": 403,
    "mensagemErroEsperada": "Você só pode acessar os seus próprios dados.",
  },
]