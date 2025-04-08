// SERVIDOR RESPONSAVEL PELAS ROTAS DE PANDEMIA
import express from "express";
import rota_pandemia from './src/routes/pandemias.js';

const app = express();
const porta = 5000;

app.use(express.json());

app.use('/pandemias', rota_pandemia);

app.listen(porta, () =>{
    console.log(`http://localhost:${porta}/pandemias`)
});

// SERVIDOR RESPONSÁVEL PELAS ROTAS DE FAKE NEWS