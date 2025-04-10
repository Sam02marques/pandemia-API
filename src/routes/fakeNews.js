import express from 'express';
import { get_news } from '../controllers/fakeNews.Controller.js';


const router = express.Router();

router.get('/', get_news);

export default router;