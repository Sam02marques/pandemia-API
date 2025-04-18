import {pandemias} from '../model/pandemias.model.js';
/////////////
export const get_pandemia = (_, res) =>{
  try{
    res.json(pandemias);
  }catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar pandemias' });}  
};

// Rota GET dinâmica por ID
export const get_pandemia_id = (req, res) => {
    const id = parseInt(req.params.id);
    const pandemia = pandemias.find(p => p.id === id);
  
    if (pandemia) {
      res.send(pandemia);
    } else {
      res.status(404).send({ erro: 'Pandemia não encontrada' });
    }
  };




