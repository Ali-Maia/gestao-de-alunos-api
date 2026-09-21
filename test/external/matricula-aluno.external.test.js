import { api } from '../helpers/api.js';
import { expect } from 'chai';
import { comTokenAdmin } from '../helpers/auth.js';
import { cadastrarDisciplina, matricularAlunoNaDisciplina } from '../helpers/disciplina.js';
import { cadastroAluno } from '../helpers/aluno.js';
import { novoAluno } from '../factories/alunosFactory.js';
import { novaDisciplina } from '../factories/disciplinaFactory.js';

describe('Matricula', () => {

  let dadosAluno;
  let aluno;
  let dadosDisciplina;
  let disciplina;

  beforeEach(async() => {
    
    dadosAluno = novoAluno();
    aluno = await cadastroAluno(dadosAluno.nome, dadosAluno.email, dadosAluno.matricula, dadosAluno.senha);
    dadosDisciplina = novaDisciplina();
    disciplina = await cadastrarDisciplina(dadosDisciplina.nome, dadosDisciplina.codigo, dadosDisciplina.cargaHoraria);
  });

    it('deve matricular um aluno em uma disciplina quando informar dados válidos', async() => {
      
      const matricularAluno = await matricularAlunoNaDisciplina(aluno.body.id, disciplina.body.id);

      expect(matricularAluno.status).to.equal(201);
      expect(matricularAluno.body.alunoId).to.equal(aluno.body.id);
      expect(matricularAluno.body.disciplinaId).to.equal(disciplina.body.id);
    });

    it('deve listar um aluno matriculado em uma disciplina quando informar dados válidos', async() => {
      const tokenAdmin = await comTokenAdmin();

      await matricularAlunoNaDisciplina(aluno.body.id, disciplina.body.id);

      const listarAlunosResposta = await api()
      .get(`/api/admin/disciplinas/${disciplina.body.id}/alunos`)
      .set('Authorization', tokenAdmin)
    
      expect(listarAlunosResposta.status).to.equal(200);
      expect(listarAlunosResposta.body).to.be.an('array').that.is.not.empty;
      expect(listarAlunosResposta.body[0].id).to.equal(aluno.body.id);
      expect(listarAlunosResposta.body[0].nome).to.equal(aluno.body.nome);
    
    });
});