import { expect } from 'chai';
import { getToken } from '../helpers/auth.js';
import { cadastroAluno } from '../helpers/aluno.js';

describe('Alunos', () => {

  let token;
  let aleatorio;

  beforeEach(async() => {
    aleatorio = Date.now();
    token = await getToken('admin@escola.com', 'admin123');
  });
    it('deve cadastrar um aluno quando ele informa dados válidos', async() => {
      const nomeEsperado = `Aluno Teste ${aleatorio}`;
      const emailEsperado = `aluno.teste.${aleatorio}@exemplo.com`;
      const matriculaEsperada = `${aleatorio}`;

      const cadastroAlunoResposta1 = await cadastroAluno(nomeEsperado, emailEsperado, matriculaEsperada, '123456', token);

        expect(cadastroAlunoResposta1.status).to.equal(201);
        expect(cadastroAlunoResposta1.body.nome).to.equal(nomeEsperado);
        expect(cadastroAlunoResposta1.body.email).to.equal(emailEsperado);
        expect(cadastroAlunoResposta1.body.matricula).to.equal(matriculaEsperada);

    });

    it('deve apresentar erro ao cadastrar um aluno já existente na plataforma', async() => {
      const nomeEsperado = 'Ana Souza';
      const emailEsperado = 'ana.souza@example.com';
      const matriculaEsperada = '2024001';

      const cadastroAlunoResposta = await cadastroAluno(nomeEsperado, emailEsperado, matriculaEsperada, '123456', token);

      expect(cadastroAlunoResposta.status).to.equal(409);
    });

});