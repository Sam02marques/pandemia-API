import { pandemias } from '../model/pandemias.model.js'; // IMPORTA OS DADOS DAS PANDEMIAS DO MODELO

// ROTA GET PARA LISTAR TODAS AS PANDEMIAS
export const get_pandemia = (_, res) => {
  try {
    res.json(pandemias); // RETORNA A LISTA COMPLETA DAS PANDEMIAS EM FORMATO JSON
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar pandemias' }); // CASO OCORRA UM ERRO, RETORNA O CÓDIGO 500 E A MENSAGEM DE ERRO
  }
};

// ROTA GET DINÂMICA PARA OBTER UMA PANDEMIA POR ID
export const get_pandemia_id = (req, res) => {
    const id = parseInt(req.params.id); // OBTÉM O ID PASSADO NA URL COMO PARÂMETRO E O CONVERTE PARA UM NÚMERO INTEIRO
    const pandemia = pandemias.find(pandemia => pandemia.id === id); // PROCURA A PANDEMIA NA LISTA PELO ID

    if (pandemia) {
      res.send(pandemia); // SE ENCONTRAR A PANDEMIA, RETORNA ELA EM FORMATO JSON
    } else {
      res.status(404).send({ erro: 'Pandemia não encontrada' }); // SE NÃO ENCONTRAR, RETORNA UM ERRO 404 E UMA MENSAGEM
    }
};
