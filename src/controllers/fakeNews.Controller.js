import { fake_news } from "../model/FakeNews.model.js";

export const get_news = (_, res)=>{
    res.json(fake_news);
};

