# Pandemia API

Uma API REST que fornece informações sobre pandemias globais ao longo da história, incluindo dados sobre seus sintomas, impactos, formas de transmissão, notícias falsas relacionadas e vacinas importantes.

## Sobre o Projeto

Esta API foi desenvolvida como um projeto educativo para disponibilizar informações confiáveis sobre pandemias históricas e recentes. A API oferece acesso a dados como sintomas, descrições, regiões afetadas, formas de transmissão, número de mortos, medidas preventivas, além de esclarecer desinformações comuns e fornecer dados sobre vacinas.

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript

## Instalação

Para executar esta API em seu ambiente local, siga estas etapas:

1. Clone o repositório:
```
git clone https://github.com/Sam02marques/pandemia-API.git
```

2. Acesse o diretório do projeto:
```
cd pandemia-API
```

3. Instale as dependências:
```
npm install
```

4. Inicie o servidor:
```
npm start
```

O servidor será iniciado na porta 3000 por padrão.

## Endpoints Disponíveis

### 1. Pandemias

#### Obter Lista de Todas as Pandemias

Retorna informações sobre todas as pandemias cadastradas na API.

```
GET /pandemias
```

Exemplo de resposta:
```json
[
  {
    "id": 1,
    "nomePandemia": "Peste de Atenas",
    "periodo": "430-427 a.C",
    "sintomas": "febre alta, dores no peito, vômitos, pústulas na pele e convulsões",
    "descricao": "Surto epidêmico ocorrido em Atenas durante a Guerra do Peloponeso. Causou a morte de até 35% da população da cidade",
    "regiao": "Grécia Antiga",
    "transmissao": "provavelmente por vias respiratórias ou contato com fluidos corporais",
    "numeroMortos": "Aproximadamente 75.000 a 100.000 pessoas",
    "prevencoes": [
      "Isolamento social", 
      "Uso de ervas medicinais", 
      "Rituais religiosos (na época)", 
      "Distanciamento de doentes"
    ]
  },
  {
    "id": 2,
    "nomePandemia": "Peste Antonina",
    "periodo": "166 d.C",
    "sintomas": "varíola ou sarampo",
    "descricao": "Epidemia que assolou o Império Romano durante o reinado de Marco Aurélio.",
    // outros campos...
  }
]
```

#### Obter Detalhes de uma Pandemia Específica

Retorna informações detalhadas sobre uma pandemia específica pelo seu ID.

```
GET /pandemias/:id
```

Parâmetros:
- `id`: Identificador único da pandemia

Exemplo de requisição:
```
GET /pandemias/1
```

Exemplo de resposta:
```json
{
  "id": 1,
  "nomePandemia": "Peste de Atenas",
  "periodo": "430-427 a.C",
  "sintomas": "febre alta, dores no peito, vômitos, pústulas na pele e convulsões",
  "descricao": "Surto epidêmico ocorrido em Atenas durante a Guerra do Peloponeso. Causou a morte de até 35% da população da cidade",
  "regiao": "Grécia Antiga",
  "transmissao": "provavelmente por vias respiratórias ou contato com fluidos corporais",
  "numeroMortos": "Aproximadamente 75.000 a 100.000 pessoas",
  "prevencoes": [
    "Isolamento social", 
    "Uso de ervas medicinais", 
    "Rituais religiosos (na época)", 
    "Distanciamento de doentes"
  ]
}
```

### 3. Notícias Falsas (Fake News)

#### Obter Todas as Notícias Falsas e suas Correções

Retorna todas as informações falsas catalogadas e suas respectivas correções.

```
GET /fakeNews
```

Exemplo de resposta:
```json
[
  {
    "id": 1,
    "mentira": "Beber álcool mata o coronavírus.",
    "verdade": "O álcool ingerido não mata o vírus no corpo. Pode causar problemas de saúde e intoxicação."
  },
  {
    "id": 2,
    "mentira": "Chá de limão com bicarbonato cura COVID-19",
    "verdade": "Não existe evidência científica que comprove que o chá de limão com bicarbonato tenha qualquer efeito contra o coronavírus."
  }
]
```

#### Obter Notícias Falsas

Retorna todas as notícias falsas.

```
GET /fakeNews/mentira
```

Parâmetros:
- `mentira`: parâmetro da notícia falsa


```

Exemplo de resposta:
```json
{
  
  "Beber álcool mata o coronavírus.",
  "Vacinas causam autismo.",
  "5G espalha o coronavírus.",
  "Tomar ivermectina previne a COVID-19.",
  "Quem já teve COVID-19 está 100% imune.",
  "Chá de limão com alho cura o coronavírus.",
  "Máscaras causam intoxicação por CO2.",
  "A vacina da COVID-19 altera o DNA.",
  "O vírus foi criado em laboratório para controle populacional.",
  "COVID-19 é só uma gripezinha.",
  "Vacinas contra COVID-19 contêm chip para controle da população.",
  "Água com limão em jejum elimina o coronavírus do corpo.",
  "Bill Gates planejou a pandemia para lucrar com vacinas.",
  "COVID-19 não afeta jovens.",
  "O coronavírus morre em climas quentes."

}
```

### 4. Vacinas

#### Obter Todas as Vacinas

Retorna informações sobre todas as vacinas cadastradas.

```
GET /vacinas
```

Exemplo de resposta:
```json
[
  {
    "id": 1,
    "nome": "BCG",
    "doenca": "Tuberculose",
    "ano_criacao": 1921,
    "doses": "Dose única",
    "via_administracao": "Intradérmica"
  },
  {
    "id": 2,
    "nome": "Coronavac",
    "doenca": "COVID-19",
    "ano_criacao": 2020,
    "doses": "2 doses",
    "via_administracao": "Intramuscular"
  }
]
```

#### Obter Vacina por ID

Retorna informações detalhadas sobre uma vacina específica.

```
GET /vacinas/:id
```

Parâmetros:
- `id`: Identificador único da vacina

Exemplo de requisição:
```
GET /vacinas/1
```

Exemplo de resposta:
```json
{
  "id": 1,
  "nome": "BCG",
  "doenca": "Tuberculose",
  "ano_criacao": 1921,
  "doses": "Dose única",
  "via_administracao": "Intradérmica"
}
```

#### Obter Nomes de Todas as Vacinas

Retorna apenas os nomes de todas as vacinas disponíveis.

```
GET /vacinas/names
```

Exemplo de resposta:
```json
[
  "BCG",
  "Coronavac",
  "Pfizer-BioNTech",
  "AstraZeneca/Oxford"
]
```

## Uso em Aplicações Front-end

Para utilizar esta API em uma aplicação front-end, você pode fazer requisições aos endpoints disponíveis utilizando fetch ou axios.

Exemplo com fetch:
```javascript
fetch('http://localhost:3000/pandemias')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.

## Autor

Samuel Marques - [GitHub](https://github.com/Sam02marques)
