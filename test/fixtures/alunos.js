export default[
  {
    "testTittle": "Validar que o aluno Pedro é o cadastrado quando informado informações válidas",
    "dadosAluno": {
      "nome": "Pedro Matos",
      "email": "pedro.matos123@example.com",
      "matricula": "P123456",
      "senha": "123456"
    },
    "statusCodeEsperado": 201,
    "mensagemErroEsperada": null,
  },

  {
    "testTittle": "Validar que retorna erro ao tentar cadastrar um aluno já cadastrado",
    "dadosAluno": {
      "nome": "Pedro Matos",
      "email": "pedro.matos123@example.com",
      "matricula": "P123456",
      "senha": "123456"
    },
    "statusCodeEsperado": 409,
    "mensagemErroEsperada": "Já existe um aluno cadastrado com essa matrícula ou e-mail.",
  },

    {
    "testTittle": "Validar que retorna erro quando informado informações inválidas",
    "dadosAluno": {
      "nome": "Augusto Monteiro",
      "email": null,
      "matricula": null,
      "senha": "123456"
    },
    "statusCodeEsperado": 400,
    "mensagemErroEsperada": 'Os campos "nome", "email", "matricula" e "senha" são obrigatórios.',
  }
]