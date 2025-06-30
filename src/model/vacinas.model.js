export class Vacina { // CLASSE VACINA COM PARÂMETROS
  constructor(id, nome, doenca, ano_criacao, doses, via_administracao){
    this.id = id;
    this.nome = nome;
    this.doenca = doenca;
    this.ano_criacao = ano_criacao;
    this.doses = doses;
    this.via_administracao = via_administracao;
  }
}

export const vacinas = [ // INSTÂNCIA DA CLASSE GERANDO NOVOS DADOS DE VACINAS
  new Vacina(1, "BCG", "Tuberculose", 1921, "Dose única", "Intradérmica"),

  new Vacina(2, "Vacina contra a Poliomielite (VIP/VOP)", "Poliomielite", 1955, "Múltiplas doses", "Oral ou intramuscular"),
  
  new Vacina(3, "Vacina Tríplice Viral", "Sarampo, Caxumba e Rubéola", 1971, "2 doses", "Subcutânea"),
  
  new Vacina(4, "Vacina Hepatite B", "Hepatite B", 1981, "3 doses", "Intramuscular"),
  
  new Vacina(5, "Vacina contra HPV", "Papilomavírus Humano", 2006, "2 ou 3 doses, conforme idade", "Intramuscular"),
  
  new Vacina(6, "Vacina contra COVID-19 (Pfizer-BioNTech)", "COVID-19", 2020, "2 doses + reforços", "Intramuscular"),
  
  new Vacina(7, "Vacina contra COVID-19 (CoronaVac)", "COVID-19", 2020, "2 doses + reforços", "Intramuscular"),
  
  new Vacina(8, "Vacina contra Febre Amarela", "Febre Amarela", 1937, "Dose única (com reforço em casos específicos)", "Subcutânea"),
  
  new Vacina(9, "Vacina DTP", "Difteria, Tétano e Coqueluche", 1940, "3 doses + reforços", "Intramuscular"),
  
  new Vacina(10, "Vacina contra Influenza", "Gripe Influenza", 1945, "Anual", "Intramuscular")
];