# API de Consulta de Livros

## Objetivo

Esta API foi desenvolvida em Python com Flask para disponibilizar os dados livros em formato JSON. A consulta é realizada pela rota `/livros`, utilizando o método HTTP GET.

## Tecnologias utilizadas

- Python
- Flask

## Estrutura

```text
frontend-livros/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## Instalação das dependências

Abra o Prompt de Comando na pasta do projeto e execute:

```cmd
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Execução da aplicação

Com o ambiente virtual ativado, execute:

```cmd
python app.py
```


## Rota disponível

Método: GET
Endereço: http://127.0.0.1:5000/livros

## Exemplo de resposta

```
{
  "livros": [
    {
      "id": 1,
      "titulo": "Dom Casmurro",
      "autor": "Machado de Assis",
      "ano": 1899
    },
    {
      "id": 2,
      "titulo": "O Cortiço",
      "autor": "Aluísio Azevedo",
      "ano": 1890
    },
    {
      "id": 3,
      "titulo": "A Hora da Estrela",
      "autor": "Clarice Lispector",
      "ano": 1977
    }
  ]
}
```