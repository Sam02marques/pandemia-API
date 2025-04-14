import { fake_news } from "../model/FakeNews.model.js";

export const get_news = (_, res) => {
    res.json(fake_news);
};

// ROTA GET PARA FILTRAR AS NOTICIAS FALSAS
export const find_news_by_false = (_, res) => {
    try{ const mentiras = fake_news.map(noticia => noticia.mentira);
    res.json(mentiras);
    } catch (erro) {
        res.status(404).json({ message: "Nenhuma notícia falsa encontrada!" });
    }
};
