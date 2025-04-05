const pandemias = require('../data/pandemias.json');

const get_pandemia = (_, res) =>{
    res.json(pandemias);
};

// Rota GET dinâmica por ID
const get_pandemia_id = (req, res) => {
    const id = parseInt(req.params.id);
    const pandemia = pandemias.find(p => p.id === id);
  
    if (pandemia) {
      res.send(pandemia);
    } else {
      res.status(404).send({ erro: 'Pandemia não encontrada' });
    }
  };


module.exports = {
    get_pandemia,
    get_pandemia_id
};

