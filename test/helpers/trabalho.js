import { api } from "./api.js";
import { comTokenAdmin, getToken } from "./auth.js";

export async function cadastrarTrabalho(alunoId, usuarioEmail, usuarioSenha, disciplinaId, titulo, descricao) {
  const tokenUsuario = await getToken(usuarioEmail, usuarioSenha);

  const cadastrarTrabalhoResposta = await api()
  .post(`/api/alunos/${alunoId}/trabalhos`)
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${tokenUsuario}`)
  .send({
    alunoId: alunoId,
    disciplinaId: disciplinaId,
    titulo: titulo,
    descricao: descricao
  });

  return cadastrarTrabalhoResposta;
}

export async function deletarTrabalho(trabalhoId) {
  const tokenAdmin = comTokenAdmin();

  const deletarTrabalhoResposta = await api()
  .delete(`/api/admin/trabalhos/${trabalhoId}`)
  .set('Authorization', tokenAdmin)
};