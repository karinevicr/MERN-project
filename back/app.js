import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Servidor está pronto");
});


app.listen(1234, () => {
  connectDB();
  console.log('O servidor está em http://localhost:1234');
});


