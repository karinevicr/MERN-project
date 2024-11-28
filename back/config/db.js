import mongoose from "mongoose";
import dotenev from 'dotenv';

dotenev.config();

export const connectDB = async () => { // a função é assincrona, ela vai esperar a conexão ser feita para continuar
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { // a função await vai fazer o codigo esperar a função async funcionar antes de rodar
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); //
  }
}
