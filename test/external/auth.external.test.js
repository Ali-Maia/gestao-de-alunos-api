import request from 'supertest';
import { expect } from 'chai';
import { api } from '../helpers/api.js';
import { loginAdmin, loginUsuario } from '../helpers/auth.js';
import 'dotenv/config';
import login from "../fixtures/auth.js";

describe('POST /api/auth/login', () => {

  for (const caso of login){
    it(caso.testTitle, async () => {
      const credenciaisUsuario = caso.dadosUsuario;

      const respostaLogin = await loginUsuario(credenciaisUsuario.emailUsuario, credenciaisUsuario.senhaUsuario);

      expect(respostaLogin.status).to.equal(caso.statusCodeEsperado);

      if(caso.statusCodeEsperado === 200){
        expect(respostaLogin.body).to.have.property('token');
      };
      if (caso.statusCodeEsperado >= 400 && caso.statusCodeEsperado < 500) {
        expect(respostaLogin.body.error).to.equal(caso.mensagemErroEsperada);
      }
    });
  }

});