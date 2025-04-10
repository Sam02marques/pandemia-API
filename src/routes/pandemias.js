import express from "express";
import { get_pandemia, get_pandemia_id } from "../controllers/pandemias.Controller.js";

const router = express.Router();


router.get('/', get_pandemia);
router.get('/:id', get_pandemia_id);


export default router;