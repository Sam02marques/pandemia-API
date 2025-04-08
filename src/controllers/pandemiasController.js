import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let pandemias;

try {
  const data = await readFile(join(__dirname, '../model/pandemias.json'), 'utf-8');
  pandemias = JSON.parse(data);
} catch (err) {
  console.error('Erro ao ler o JSON:', err);
  pandemias = [];
}

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


export {get_pandemia, get_pandemia_id};

