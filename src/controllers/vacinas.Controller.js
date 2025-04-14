// IMPORTA O OBJETO 'vacinas' DO ARQUIVO 'vacinas.model.js' QUE CONTÉM OS DADOS DAS VACINAS
import {vacinas} from '../model/vacinas.model.js'

// FUNÇÃO QUE RETORNA TODAS AS VACINAS DISPONÍVEIS
// ESSA FUNÇÃO NÃO REQUER PARÂMETROS E SIMPLESMENTE ENVIA O OBJETO 'vacinas' COMO RESPOSTA EM FORMATO JSON
export const get_vacina = (_, res) =>{
    res.json(vacinas);
};

// FUNÇÃO QUE RETORNA UMA VACINA ESPECÍFICA BASEADA NO ID FORNECIDO
// O ID É EXTRAÍDO DOS PARÂMETROS DA REQUISIÇÃO (req.params.id)
// A FUNÇÃO PROCURA UMA VACINA NO ARRAY 'vacinas' QUE TENHA O MESMO ID
// SE ENCONTRAR, ENVIA A VACINA COMO RESPOSTA; CASO CONTRÁRIO, RETORNA UM ERRO 404
export const get_vacina_id = (req, res) => {
    const id = parseInt(req.params.id); // CONVERTE O ID PARA UM NÚMERO INTEIRO
    const vacina = vacinas.find(p => p.id === id); // PROCURA A VACINA PELO ID
  
    if (vacina) {
      res.send(vacina); // ENVIA A VACINA ENCONTRADA
    } else {
      res.status(404).send({ erro: 'Vacina não localizada' }); // RETORNA ERRO 404 SE NÃO ENCONTRAR
    }
};

// FUNÇÃO QUE RETORNA UMA LISTA COM OS NOMES DE TODAS AS VACINAS
// UTILIZA O MÉTODO 'map' PARA EXTRAIR SOMENTE OS NOMES DO ARRAY 'vacinas'
// SE EXISTIREM NOMES, ENVIA A LISTA COMO RESPOSTA EM FORMATO JSON
// SE NÃO EXISTIREM VACINAS, RETORNA UM ERRO 404
// EM CASO DE ERRO INESPERADO, RETORNA UM ERRO 500 COM UMA MENSAGEM DE FALHA
export const find_vacinas_by_name = (_, res) => {
    try{ 
        const nomes = vacinas.map(vacina => vacina.nome); // CRIA UM ARRAY COM OS NOMES DAS VACINAS
        if (nomes.length > 0) {
            res.json(nomes); // ENVIA A LISTA DE NOMES COMO RESPOSTA
        }else {
            res.status(404).json({message: "Nenhuma vacina encontrada"}); // RETORNA ERRO 404 SE NÃO HOUVER NOMES
        }
    }catch (erro) {
        console.log(erro); // LOGA O ERRO NO CONSOLE PARA DEPURAÇÃO
        res.status(500).json({ message: "Erro ao listar os nomes das vacinas" }); // RETORNA ERRO 500 EM CASO DE FALHA
    }
};
