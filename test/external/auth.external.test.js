import request from 'supertest';
import { expect } from 'chai';
import { api } from '../helpers/api.js';
import { loginAdmin, loginUsuario } from '../helpers/auth.js';
import 'dotenv/config';

describe('POST /api/auth/login', () => {

  it('deve retornar 200 e um token quando o admin informar e-mail e senha corretos', async () => {
    const respostaLogin = await loginAdmin();

    expect(respostaLogin.status).to.equal(200);
    expect(respostaLogin.body).to.have.property('token');
  });

    it('deve retornar 401 quando a senha informada for inválida', async () => {
    const respostaLogin = await loginUsuario(process.env.ADMIN_EMAIL, 'senha incorreta');
    
    expect(respostaLogin.status).to.equal(401);
    expect(respostaLogin.body.error).to.equal('E-mail ou senha inválidos.');
  });

});