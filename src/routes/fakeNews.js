import express from 'express'; // IMPORTA O EXPRESS PARA CRIAR AS ROTAS
import { get_news } from '../controllers/fakeNews.Controller.js'; // IMPORTA A FUNÇÃO PARA OBTER TODAS AS NOTÍCIAS
import { find_news_by_false } from '../controllers/fakeNews.Controller.js'; // IMPORTA A FUNÇÃO PARA FILTRAR AS NOTÍCIAS FALSAS

const router = express.Router(); // CRIA UM NOVO OBJETO DE ROUTER DO EXPRESS

// ROTA GET PARA LISTAR TODAS AS NOTÍCIAS
router.get('/', get_news);

// ROTA GET PARA FILTRAR AS NOTÍCIAS FALSAS (AQUI SERÁ FILTRADO PELO PARAMETRO "mentira")
router.get('/:mentira', find_news_by_false); 

export default router; // EXPORTA O ROUTER PARA SER USADO EM OUTROS ARQUIVOS
