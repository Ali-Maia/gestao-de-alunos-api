import { expect } from "chai";
import { cadastroAluno, deletarAluno } from "../helpers/aluno.js";
import { cadastrarDisciplina, matricularAlunoNaDisciplina,deletarDisciplina } from "../helpers/disciplina.js";
import { cadastrarTrabalho, deletarTrabalho } from "../helpers/trabalho.js";
import entregaTrabalho from "../fixtures/entregaTrabalhos.js";

describe('POST /api/alunos/{alunoId}/trabalhos', () => {
  
  for (const caso of entregaTrabalho){
    it(caso.testTittle, async() => {
      const aluno = caso.dadosAluno;
      const senhaUsuarioEnvioTrabalho = aluno.senhaIncorreta ?? aluno.senha;
      const emailUsuarioEnvioTrabalho = aluno.emailOutroAluno ?? aluno.email;
      const disciplina = caso.dadosDisciplina;
      const trabalho = caso.dadosTrabalho;

      const respostaCadastroAluno = await cadastroAluno(aluno.nome, aluno.email, aluno.matricula, aluno.senha);
      const alunoId = respostaCadastroAluno.body.id;

      const respostaCadastroDisciplina = await cadastrarDisciplina(disciplina.nome, disciplina.codigo, disciplina.cargaHoraria);
      const disciplinaId = respostaCadastroDisciplina.body.id;

      const respostaMatricularAlunoNaDisciplina = await matricularAlunoNaDisciplina(alunoId, disciplinaId);

      const respostaCadastrarTrabalho = await cadastrarTrabalho(alunoId, emailUsuarioEnvioTrabalho, senhaUsuarioEnvioTrabalho, disciplinaId, trabalho.titulo, trabalho.descricao);

      expect(respostaCadastrarTrabalho.status).to.equal(caso.statusCodeEsperado);

      if (caso.statusCodeEsperado == 201) {
        expect(respostaCadastrarTrabalho.body.titulo).to.equal(trabalho.titulo);
        expect(respostaCadastrarTrabalho.body.descricao).to.equal(trabalho.descricao);
        expect(respostaCadastrarTrabalho.body.alunoId).to.equal(alunoId);
        expect(respostaCadastrarTrabalho.body.disciplinaId).to.equal(disciplinaId);
      };
      if (caso.statusCodeEsperado >= 400 && caso.statusCodeEsperado < 500) {
        expect(respostaCadastrarTrabalho.body.error).to.equal(caso.mensagemErroEsperada);
      };
    });
  }
});

