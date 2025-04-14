import express from "express";
import { get_pandemia, get_pandemia_id } from "../controllers/pandemias.Controller.js"; // IMPORTA AS FUNÇÕES PARA OBTER PANDEMIA E PANDEMIA POR ID

const router = express.Router(); // CRIA UM NOVO OBJETO DE ROUTER DO EXPRESS

// ROTA GET PARA LISTAR TODAS AS PANDEMIAS
router.get('/', get_pandemia);

// ROTA GET PARA OBTER UMA PANDEMIA ESPECÍFICA PELO ID
router.get('/:id', get_pandemia_id); 

export default router; // EXPORTA O ROUTER PARA SER USADO EM OUTROS ARQUIVOS
