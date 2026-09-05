import  request  from 'supertest';
import { expect } from 'chai';
import { getToken } from '../helpers/auth.js';
import { cadastrarDisciplina, matricularAlunoNaDisciplina } from '../helpers/disciplina.js';
import { cadastroAluno } from '../helpers/aluno.js';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

describe('Matricula', () => {
  let aleatorio;
  let token;
  let aluno;
  let disciplina;

  beforeEach(async() => {
    aleatorio = Date.now();

    token = await getToken('admin@escola.com', 'admin123');
    aluno = await cadastroAluno(`Aluno Teste ${aleatorio}`, `aluno.teste.${aleatorio}@exemplo.com`,`${aleatorio}`, '123456', token);
    disciplina = await cadastrarDisciplina(`Materia Teste ${aleatorio}`, `MT${aleatorio}`, 60, token);
  });

    it('deve matricular um aluno em uma disciplina quando informar dados válidos', async() => {
      
      const matricularAluno = await matricularAlunoNaDisciplina(aluno.body.id, disciplina.body.id, token);

      expect(matricularAluno.status).to.equal(201);
      expect(matricularAluno.body.alunoId).to.equal(aluno.body.id);
      expect(matricularAluno.body.disciplinaId).to.equal(disciplina.body.id);
    });

    it('deve listar um aluno matriculado em uma disciplina quando informar dados válidos', async() => {

      const matricularAluno = await matricularAlunoNaDisciplina(aluno.body.id, disciplina.body.id, token);

      const listarAlunosResposta = await request(baseUrl)
      .get(`/api/admin/disciplinas/${disciplina.body.id}/alunos`)
      .set('Authorization', `Bearer ${token}`)
    
      expect(listarAlunosResposta.status).to.equal(200);
      expect(listarAlunosResposta.body).to.be.an('array').that.is.not.empty;
      expect(listarAlunosResposta.body[0].id).to.equal(aluno.body.id);
      expect(listarAlunosResposta.body[0].nome).to.equal(aluno.body.nome);
      expect(listarAlunosResposta.body[0].id).to.equal(aluno.body.id);
    
    });
});