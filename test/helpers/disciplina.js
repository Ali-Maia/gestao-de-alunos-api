import request from 'supertest';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export async function cadastrarDisciplina(nome, codigo, cargaHoraria, token){
  const cadastrarDisciplinaResposta = await request(baseUrl)
  .post('/api/admin/disciplinas')
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${token}`)
  .send({
    nome: nome,
    codigo: codigo,
    cargaHoraria: cargaHoraria
  });

  return cadastrarDisciplinaResposta;
}

export async function matricularAlunoNaDisciplina(alunoId, disciplinaId, token) {
  const matriculaAlunoresposta = await request(baseUrl)
  .post(`/api/admin/disciplinas/${disciplinaId}/matriculas`)
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${token}`)
  .send({
    alunoId:alunoId
  });

  return matriculaAlunoresposta;
}