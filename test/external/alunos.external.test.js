import { expect } from "chai";
import { comTokenAdmin } from "../helpers/auth.js";
import { cadastroAluno, deletarAluno } from "../helpers/aluno.js";
import alunos from '../fixtures/alunos.js'
import { api } from "../helpers/api.js";

describe('POST /api/admin/alunos', () => {

  for (const caso of alunos){
    it(caso.testTittle, async () => {
      const aluno = caso.dadosAluno

      const respostaCadastroAluno = await cadastroAluno(aluno.nome, aluno.email, aluno.matricula, aluno.senha);

      expect(respostaCadastroAluno.status).to.equal(caso.statusCodeEsperado);

      if (caso.statusCodeEsperado == 201) {
        expect(respostaCadastroAluno.body.nome).to.equal(aluno.nome);
        expect(respostaCadastroAluno.body.email).to.equal(aluno.email);
        expect(respostaCadastroAluno.body.matricula).to.equal(aluno.matricula);
      };
      if (caso.statusCodeEsperado >= 400 && caso.statusCodeEsperado < 500) {
        expect(respostaCadastroAluno.body.error).to.equal(caso.mensagemErroEsperada);
      };
    });
  };
});

