import { expect } from 'chai';
import { comTokenAdmin } from '../helpers/auth.js';
import { cadastroAluno } from '../helpers/aluno.js';
import { novoAluno } from '../factories/alunosFactory.js';

describe('Alunos', () => {

  let aleatorio;
  let novoAlunoCadastrado;

  beforeEach(async() => {
    aleatorio = Date.now();
    novoAlunoCadastrado = novoAluno();
  });
    it('deve cadastrar um aluno quando ele informa dados válidos', async() => {
      const nomeEsperado = novoAlunoCadastrado.nome
      const emailEsperado = novoAlunoCadastrado.email;
      const matriculaEsperada = novoAlunoCadastrado.matricula;
      const senhaEsperada = novoAlunoCadastrado.senha;

      const cadastroAlunoResposta1 = await cadastroAluno(nomeEsperado, emailEsperado, matriculaEsperada, senhaEsperada);

        expect(cadastroAlunoResposta1.status).to.equal(201);
        expect(cadastroAlunoResposta1.body.nome).to.equal(nomeEsperado);
        expect(cadastroAlunoResposta1.body.email).to.equal(emailEsperado);
        expect(cadastroAlunoResposta1.body.matricula).to.equal(matriculaEsperada);

    });

    it('deve apresentar erro ao cadastrar um aluno já existente na plataforma', async() => {
      const nomeEsperado = 'Ana Souza';
      const emailEsperado = 'ana.souza@example.com';
      const matriculaEsperada = '2024001';

      const cadastroAlunoResposta = await cadastroAluno(nomeEsperado, emailEsperado, matriculaEsperada, '123456');

      expect(cadastroAlunoResposta.status).to.equal(409);
    });

});