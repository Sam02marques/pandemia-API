const express = require('express');
const app = express();
const rota_pandemia = require('./routes/pandemias');
const porta = 5000;
app.use(express.json());

app.use('/pandemias', rota_pandemia);

app.listen(porta, () =>{
    console.log(`http://localhost:${porta}/pandemias/5`)
});