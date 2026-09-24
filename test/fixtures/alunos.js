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
  }
]