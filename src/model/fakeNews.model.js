export class FakeNews{
  constructor(id, mentira, verdade){
    this.id = id;
    this.mentira = mentira;
    this.verdade = verdade;
  }
}

export const fake_news = [
  new FakeNews(1, "Beber álcool mata o coronavírus.", "O álcool ingerido não mata o vírus no corpo. Pode causar problemas de saúde e intoxicação."),

  new FakeNews(2, "Vacinas causam autismo.", "Diversos estudos científicos já provaram que não há relação entre vacinas e autismo."),
  
  new FakeNews(3, "5G espalha o coronavírus.", "O vírus é transmitido por gotículas respiratórias. 5G não tem nenhuma relação com transmissão de doenças."),
  
  new FakeNews(4, "Tomar ivermectina previne a COVID-19.", "A ivermectina não tem eficácia comprovada contra o coronavírus e não deve ser usada sem orientação médica."),
  
  new FakeNews(5, "Quem já teve COVID-19 está 100% imune.", "A reinfecção é possível, especialmente com novas variantes. A vacinação continua sendo necessária."),
  
  new FakeNews(6, "Chá de limão com alho cura o coronavírus.", "Não existe cura caseira comprovada. Esses chás podem aliviar sintomas, mas não combatem o vírus."),
  
  new FakeNews(7, "Máscaras causam intoxicação por CO2.", "O uso de máscaras não bloqueia a respiração nem causa acúmulo perigoso de CO2."),
  
  new FakeNews(8, "A vacina da COVID-19 altera o DNA.", "Vacinas de mRNA não alteram o DNA humano. Elas apenas instruem o corpo a produzir defesa contra o vírus."),
  
  new FakeNews(9, "O vírus foi criado em laboratório para controle populacional.", "Não há provas concretas que sustentem essa teoria conspiratória. A maioria dos cientistas apoia a origem natural."),
  
  new FakeNews(10, "COVID-19 é só uma gripezinha.", "A COVID-19 pode causar complicações graves e já matou milhões de pessoas no mundo todo."),
  
  new FakeNews(11, "Vacinas contra COVID-19 contêm chip para controle da população.", "Não há nenhum chip ou tecnologia de rastreamento nas vacinas. Essa teoria é infundada."),
  
  new FakeNews(12, "Água com limão em jejum elimina o coronavírus do corpo.", "Não existe evidência científica de que isso tenha qualquer efeito sobre o vírus."),
  
  new FakeNews(13, "Bill Gates planejou a pandemia para lucrar com vacinas.", "Não há qualquer prova disso. A Fundação Gates investe em saúde pública global há décadas."),
  
  new FakeNews(14, "COVID-19 não afeta jovens.", "Embora os idosos estejam mais vulneráveis, jovens também podem ter complicações graves e morrer."),
  
  new FakeNews(15, "O coronavírus morre em climas quentes.", "O vírus se espalhou em países tropicais e quentes, mostrando que temperatura não impede a contaminação.")
];