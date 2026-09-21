import { api } from '../helpers/api.js';
import { expect } from 'chai';
import 'dotenv/config';

const admin_email = process.env.ADMIN_EMAIL;
const admin_senha = process.env.ADMIN_SENHA;

describe('Login', () => {
    it('deve retornar 200 quando o usuário e senha forem corretos', async() => {
      const loginResposta = await api()
        .post('/api/auth/login')
        .set('Content-Tyepe', 'application/json')
        .send({
          email: admin_email,
          senha: admin_senha
        });

      expect(loginResposta.status).to.equal(200);

    });
});