import { fake_news } from "../model/FakeNews.model.js"; // IMPORTA OS DADOS DAS NOTÍCIAS FALSAS DO MODELO

// ROTA GET PARA LISTAR TODAS AS NOTÍCIAS
export const get_news = (_, res) => {
    res.json(fake_news); // RETORNA A LISTA COMPLETA DAS NOTÍCIAS FALSAS EM FORMATO JSON
};

// ROTA GET PARA FILTRAR AS NOTÍCIAS FALSAS
export const find_news_by_false = (_, res) => {
    try {
        const mentiras = fake_news.map(noticia => noticia.mentira); // CRIA UMA LISTA COM TODAS AS "MENTIRAS" DAS NOTÍCIAS
        res.json(mentiras); // RETORNA ESSA LISTA EM FORMATO JSON
    } catch (erro) {
        res.status(404).json({ message: "Nenhuma notícia falsa encontrada!" }); // SE OCORRER UM ERRO, RETORNA O CÓDIGO 404 E UMA MENSAGEM DE ERRO
    }
};
