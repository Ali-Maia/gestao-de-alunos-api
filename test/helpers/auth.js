import request from 'supertest';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export async function getToken(email, senha) {
  const loginResposta = await request(baseUrl)
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          email: email,
          senha: senha
        });
  return loginResposta.body.token;
}