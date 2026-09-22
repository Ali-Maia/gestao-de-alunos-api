import { api } from './api.js';
import { comTokenAdmin } from './auth.js';

export async function cadastrarDisciplina(nome, codigo, cargaHoraria){
const tokenAdmin = await comTokenAdmin()

  const cadastrarDisciplinaResposta = await api()
  .post('/api/admin/disciplinas')
  .set('Content-Type', 'application/json')
  .set('Authorization', tokenAdmin)
  .send({
    nome: nome,
    codigo: codigo,
    cargaHoraria: cargaHoraria
  });

  return cadastrarDisciplinaResposta;
}

export async function matricularAlunoNaDisciplina(alunoId, disciplinaId) {
  const tokenAdmin = await comTokenAdmin()

  const matriculaAlunoresposta = await api()
  .post(`/api/admin/disciplinas/${disciplinaId}/matriculas`)
  .set('Content-Type', 'application/json')
  .set('Authorization', tokenAdmin)
  .send({
    alunoId:alunoId
  });

  return matriculaAlunoresposta;
}