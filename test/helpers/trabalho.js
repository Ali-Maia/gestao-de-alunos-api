import { api } from "./api.js";
import { getToken } from "./auth.js";

export async function cadastrarTrabalho(alunoId, usuarioEmail, usuarioSenha, disciplinaId, titulo, descricao) {
  const tokenUsuario = await getToken(usuarioEmail, usuarioSenha);

  const cadastrarTrabalhoResposta = await api()
  .post(`/api/alunos/${alunoId}`/trabalhos)
  .set('Content-Type', 'application/json')
  .set('Authorization', tokenUsuario)
  .send({
    alunoId: alunoId,
    disciplinaId: disciplinaId,
    titulo: titulo,
    descricao: descricao
  });

  return cadastrarTrabalhoResposta;
}