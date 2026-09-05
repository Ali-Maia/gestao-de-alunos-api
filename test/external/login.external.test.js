import request from 'supertest';
import { expect } from 'chai';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

describe('Login', () => {
    it('deve retornar 200 quando o usuário e senha forem corretos', async() => {
      const loginResposta = await request(baseUrl)
        .post('/api/auth/login')
        .set('Content-Tyepe', 'application/json')
        .send({
          email: 'admin@escola.com',
          senha: 'admin123'
        });

      expect(loginResposta.status).to.equal(200);

    });
});