import express from 'express'; // IMPORTA O EXPRESS PARA CRIAR AS ROTAS
import { get_vacina } from '../controllers/vacinas.Controller.js'; // IMPORTA A FUNÇÃO PARA OBTER TODAS AS VACINAS
import { get_vacina_id } from '../controllers/vacinas.Controller.js'; // IMPORTA A FUNÇÃO PARA OBTER VACINA POR ID
import { find_vacinas_by_name } from '../controllers/vacinas.Controller.js'; // IMPORTA A FUNÇÃO PARA OBTER NOMES DAS VACINAS

const router = express.Router(); // CRIA UM NOVO OBJETO DE ROUTER DO EXPRESS

// ROTA GET PARA LISTAR TODAS AS VACINAS
router.get('/', get_vacina);

// ROTA GET PARA LISTAR SOMENTE OS NOMES DAS VACINAS
router.get('/names', find_vacinas_by_name);

// ROTA GET PARA OBTER UMA VACINA ESPECÍFICA PELO ID
router.get('/:id', get_vacina_id);

export default router; // EXPORTA O ROUTER PARA SER USADO EM OUTROS ARQUIVOS
