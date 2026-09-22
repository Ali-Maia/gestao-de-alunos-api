import mongoose from 'mongoose';

before(async () => {
  if (mongoose.connection.readyState === 0) {
    // Tenta usar a variável de ambiente do CI primeiro; se não existir, usa a local
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gestao-de-alunos';
    
    await mongoose.connect(mongoUri);
    console.log(`Conexão global estabelecida em: ${mongoUri}`);
  }
});

after(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
    console.log('Conexão global com o banco de dados encerrada.');
  }
});