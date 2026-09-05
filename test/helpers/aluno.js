import request from 'supertest';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export async function cadastroAluno(nome, email, matricula, senha, token){
  const cadastroAlunoResposta = await request (baseUrl)
  .post('/api/admin/alunos')
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${token}`)
  .send({
    nome: nome,
    email: email,
    matricula: matricula,
    senha: senha
  });

  return cadastroAlunoResposta;
}