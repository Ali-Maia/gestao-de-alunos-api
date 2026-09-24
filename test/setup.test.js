import mongoose from 'mongoose';
import { resetDatabase } from '../src/database/seed.js';

before(async () => {
  if (mongoose.connection.readyState === 0) {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gestao-de-alunos-test';
    await mongoose.connect(mongoUri);
    console.log(`Conexão global estabelecida em: ${mongoUri}`);
  }

  await resetDatabase();
  console.log('Banco de dados de testes restaurado para o estado inicial padrão.');
});

after(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
    console.log('Conexão global com o banco de dados encerrada.');
  }
});