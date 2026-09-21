import { api } from "../helpers/api";
import { expect } from 'chai';
import { comTokenAdmin } from "../helpers/auth";
import { novoAluno } from "../factories/alunosFactory";
import { novaDisciplina } from "../factories/disciplinaFactory";
import testesDeMatriculas from '../fixtures/matriculas.js';

describe('Matricula de Aluno em Disciplina', () => {
    testesDeMatriculas.forEach(testesDeMatricula => {
      it.only(testesDeMatricula.testTitle, async)
    });
});