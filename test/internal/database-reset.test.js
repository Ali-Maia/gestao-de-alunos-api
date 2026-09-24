import { expect } from 'chai';
import { resetDatabase } from '../../src/database/seed.js';
import Administrador from '../../src/models/admin.model.js';

describe('resetDatabase', () => {
  it('deve limpar o banco e reaplicar os dados padrão do seed', async () => {
    await resetDatabase();

    const totalAdministradores = await Administrador.countDocuments();
    expect(totalAdministradores).to.equal(1);
  });
});
