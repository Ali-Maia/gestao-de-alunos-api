import { api } from './api.js';
import { comTokenAdmin } from './auth.js';

export async function cadastroAluno(nome, email, matricula, senha){
  const tokenAdmin = await comTokenAdmin();
  const cadastroAlunoResposta = await api()
  .post('/api/admin/alunos')
  .set('Content-Type', 'application/json')
  .set('Authorization', tokenAdmin)
  .send({
    nome: nome,
    email: email,
    matricula: matricula,
    senha: senha
  });

  return cadastroAlunoResposta;
}

export async function deletarAluno(alunoId) {
  const tokenAdmin = await comTokenAdmin();
  const deletarAlunoResposta = await api()
  .delete(`/api/admin/alunos/${alunoId}`)
  .set('Authorization', tokenAdmin);
}