# Front-end do Catálogo de Livros

Aplicação web desenvolvida com **React** e **Vite** para consultar e exibir os livros fornecidos pela API Flask deste repositório.

A tela permite iniciar a consulta, visualizar os livros com título, autor e ano de publicação, retornar ao início e receber mensagens quando a API estiver indisponível ou não houver livros cadastrados.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- API Flask

## Pré-requisitos

- Node.js e npm instalados;
- Python instalado para executar a API;
- dependências do backend instaladas conforme o [README principal](../README.MD).

## Como executar

O front-end depende da API Flask. Execute o backend e o front-end em terminais separados.

### 1. Inicie a API Flask

Na pasta raiz do repositório:

```bash
python -m venv venv
```

Ative o ambiente virtual:

**Windows (Prompt de Comando):**

```cmd
venv\Scripts\activate
```

**Linux ou macOS:**

```bash
source venv/bin/activate
```

Instale as dependências e inicie a API:

```bash
pip install -r requirements.txt
python app.py
```

A API ficará disponível em `http://127.0.0.1:5000`.

### 2. Inicie o front-end

Em outro terminal, acesse a pasta do front-end:

```bash
cd frontend-livros
npm ci
npm run dev
```

Abra no navegador o endereço informado pelo Vite, geralmente `http://localhost:5173`.

## Como funciona a consulta

Ao clicar em **Buscar Livros**, a aplicação envia uma solicitação HTTP GET para `/api/livros`. Durante o desenvolvimento, o Vite encaminha essa solicitação para a rota `/livros` da API Flask em `http://127.0.0.1:5000`.

A API retorna os livros no formato:

```json
{
  "livros": [
    {
      "id": 1,
      "titulo": "Dom Casmurro",
      "autor": "Machado de Assis",
      "ano": 1899
    }
  ]
}
```

Se a API não estiver em execução ou a resposta não tiver o formato esperado, a interface apresenta uma mensagem de erro. Se a consulta for concluída sem livros, a tela informa que o catálogo está vazio.

## Comandos disponíveis

Execute estes comandos na pasta `frontend-livros`:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Gera os arquivos de produção na pasta `dist`. |
| `npm run preview` | Disponibiliza uma prévia local da versão de produção. |
| `npm run lint` | Analisa os arquivos com ESLint. |

## Estrutura do diretório

```text
frontend-livros/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/
    ├── App.jsx       # Interface e consulta à API
    ├── App.css       # Estilos da tela
    ├── index.css     # Estilos globais
    └── main.jsx      # Inicialização do React
```
