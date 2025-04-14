export class Pandemia { // CLASSE PANDEMIA
  constructor(id, nomePandemia, periodo, sintomas, descricao, regiao, transmissao) {
    this.id = id;
    this.nomePandemia = nomePandemia;
    this.periodo = periodo;
    this.sintomas = sintomas;
    this.descricao = descricao;
    this.regiao = regiao;
    this.transmissao = transmissao;
  }
}
  
  // Lista de pandemias
export const pandemias = [
    new Pandemia(1, "Peste de Atenas", "430-427 a.C", "febre alta, dores no peito, vômitos, pústulas na pele e convulsões", "Surto epidêmico ocorrido em Atenas durante a Guerra do Peloponeso. Causou a morte de até 35% da população da cidade", "Grécia Antiga", "provavelmente por vias respiratórias ou contato com fluidos corporais"),
  
    new Pandemia(2, "Peste Antonina", "166 d.C", "varíola ou sarampo", "Epidemia que assolou o Império Romano durante o reinado de Marco Aurélio. Estima-se que tenha matado cerca de 5 milhões de pessoas, incluindo soldados e civis", "Roma", "varíola ou sarampo, doenças virais que se transmitem por vias respiratórias, gotículas de saliva e contato próximo com pessoas infectadas. A propagação foi facilitada pelos soldados romanos que retornavam das campanhas militares no Oriente."),
  
    new Pandemia(3, "Peste Negra", "1347-1353", "Dores no corpo, inchaço nos gânglios linfáticos, manchas escuras na pele, perda de apetite, náuseas e confusão mental", "Uma das pandemias mais devastadoras da história. Matou entre 75 a 200 milhões de pessoas", "Europa e Ásia", "pulgas de ratos e também de pessoa pra pessoa via peste pneumônica"),
  
    new Pandemia(4, "Gripe Espanhola", "1918-1919", "Febre, tosse, coriza, dores de cabeça e pneumonia", "Pandemia causada pelo vírus H1N1. Matou entre 50 a 100 milhões de pessoas", "Global", "Via respiratória, gotículas expelidas"),
  
    new Pandemia(5, "Varíola", "430 a.C. até erradicação em 1980", "Febre, dores no corpo, vômitos, erupções cutâneas", "Doença viral que matou centenas de milhões. Erradicada em 1980", "Global", "Contato direto entre pessoas"),
  
    new Pandemia(6, "Cólera", "Desde 1817", "Diarreia intensa, cólicas e enjoo", "Infecção bacteriana associada à ingestão de água ou alimentos contaminados", "África, Ásia e regiões com saneamento precário", "Ingestão de água ou alimentos contaminados"),
  
    new Pandemia(7, "Gripe Asiática", "1957-1958", "Febre, tosse, fadiga", "Causada pelo vírus H2N2, matou cerca de 2 milhões", "Global", "Gotículas respiratórias"),
  
    new Pandemia(8, "Gripe de Hong Kong", "1968-1970", "Febre, dor de garganta, dores no corpo", "Vírus H3N2, matou cerca de 1 milhão", "Global", "Gotículas respiratórias"),
  
    new Pandemia(9, "HIV/AIDS", "Desde 1981", "Imunidade comprometida, infecções oportunistas", "Causada pelo vírus HIV, já matou cerca de 30 milhões", "Global", "Sexo desprotegido, sangue contaminado"),
  
    new Pandemia(10, "Ebola", "1976 até hoje", "Febre alta, vômitos, hemorragias", "Vírus altamente letal com surtos frequentes", "África Ocidental e Central", "Contato com sangue ou fluidos"),
  
    new Pandemia(11, "Gripe Suína (H1N1)", "2009-2010", "Febre, tosse, dor de garganta", "Nova cepa do H1N1, matou centenas de milhares", "Global", "Gotículas e superfícies contaminadas"),
  
    new Pandemia(12, "COVID-19", "2019 até o presente", "Febre, tosse seca, perda de olfato", "Causada pelo coronavírus SARS-CoV-2, levou a lockdowns globais", "Global", "Gotículas, superfícies e transmissão aérea"),
  
    new Pandemia(13, "Gripe Russa", "1889-1890", "Febre, dores musculares, fadiga", "Primeira pandemia moderna de gripe registrada", "Europa, Ásia e América do Norte", "Gotículas e contato direto"),
  
    new Pandemia(14, "Febre Amarela", "Surtos entre os séculos XVII e XX", "Febre alta, icterícia, dores musculares", "Transmitida por mosquitos, causou várias epidemias", "América do Sul, América Central, África", "Picada do mosquito Aedes aegypti"),
  
    new Pandemia(15, "SARS", "2002-2003", "Febre alta, tosse seca, dificuldade respiratória", "Causada pelo coronavírus SARS-CoV-1, com letalidade de 10%", "Ásia, Canadá", "Contato próximo e gotículas"),
  
    new Pandemia(16, "MERS", "Desde 2012", "Febre, tosse, pneumonia grave", "Causada pelo MERS-CoV, mais letal que o SARS", "Oriente Médio, Coreia do Sul", "Contato com camelos infectados"),
  
    new Pandemia(17, "Gripe Russa (1977)", "1977-1978", "Febre, dor de cabeça, tosse", "Reemergência do H1N1 semelhante ao da Gripe Espanhola", "URSS, China e outros países", "Gotículas respiratórias")
  ];
  