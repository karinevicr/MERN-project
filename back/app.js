import express from 'express';
import dotenev from 'dotenv';

dotenev.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Servidor está pronto");
});

console.log(process.env.MONGO_URI);

app.listen(1234, () => {
  console.log('O servidor está em http://localhost:1234');
});


