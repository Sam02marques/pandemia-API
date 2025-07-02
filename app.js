// IMPORTA O EXPRESS PARA CRIAR O SERVIDOR
import express from "express";
import cors from 'cors';

// IMPORTA AS ROTAS DE CADA RECURSO (PANDEMIA, FAKE NEWS E VACINAS)
import rota_pandemia from './src/routes/pandemias.js';
import rota_news from './src/routes/fakeNews.js';
import rota_vacina from './src/routes/vacinas.js';

const app = express(); // CRIA A INSTÂNCIA DO SERVIDOR EXPRESS
const porta = 5000; // DEFINE A PORTA EM QUE O SERVIDOR VAI ESCUTAR AS REQUISIÇÕES

app.use(cors()); // USA O CORS ANTES DE TODAS AS ROTAS
app.use(express.json()); // HABILITA O MIDDLEWARE PARA PARSER O CORPO DAS REQUISIÇÕES EM JSON (QUANDO FOR USADO MÉTODO POST SERÁ BASTANTE ÚTIL)

// REGISTRA AS ROTAS PARA CADA TIPO DE RECURSO
app.use('/pandemias', rota_pandemia);
app.use('/fakeNews', rota_news);
app.use('/vacinas', rota_vacina);


// INICIA O SERVIDOR E ESCUTA NA PORTA DEFINIDA
app.listen(porta, () =>{
    console.log(`http://localhost:${porta}`); // LOGA A URL DE ACESSO DO SERVIDOR
});
