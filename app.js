// SERVIDOR RESPONSAVEL PELAS ROTAS DE PANDEMIA
import express from "express";
import rota_pandemia from './src/routes/pandemias.js';
import rota_news from './src/routes/fakeNews.js'
const app = express();
const porta = 5000;



app.use('/pandemias', rota_pandemia);
app.use('/fakeNews', rota_news)

app.listen(porta, () =>{
    console.log(`http://localhost:${porta}/pandemias`)
});

// SERVIDOR RESPONSÁVEL PELAS ROTAS DE FAKE NEWS