import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [consultaRealizada, setConsultaRealizada] = useState(false);

  function voltarParaInicio() {
    setLivros([]);
    setErro("");
    setConsultaRealizada(false);
  }

  async function buscarLivros() {
    setCarregando(true);
    setErro("");
    setConsultaRealizada(false);

    try{
      const response = await fetch ("/api/livros");

      if (!response.ok) {
        throw new Error ('A API retornou o status HTTP ${response.status}.');
      }
      
      const dados = await response.json();

      if (!Array.isArray(dados.livros)) {
        throw new Error("O formato da resposta da API é inválido.");
      }

      setLivros(dados.livros);
      setConsultaRealizada(true);
    } catch (error) {
      setLivros([]);
      setErro("Não foi possível buscar os livros. Verifique se a API Flask está em execução.");
      console.error("Erro ao consultar a API:", error);
    } finally {
      setCarregando(false);
    }
  }

return (
    <main className="pagina">
      <section className="painel">
        <header className="cabecalho">
          <span className="etiqueta">BIBLIOTECA DIGITAL</span>
          <h1>Catálogo de Livros</h1>
          <p>Consulte os livros disponíveis na API da livraria.</p>
        </header>

        <div className="acoes">
          <button
            type="button"
            className="botao-buscar"
            title='Clique para consultar os livros disponíveis na API.'
            onClick={buscarLivros}
            disabled={carregando}
          >
            {carregando ? "Buscando..." : "Buscar Livros"}
          </button>
        </div>

        {carregando && (
          <p className="mensagem carregando" role="status">
            Carregando livros...
          </p>
        )}

        {erro && (
          <p className="mensagem erro" role="alert">
            {erro}
          </p>
        )}

        {!carregando && !erro && consultaRealizada && livros.length === 0 && (
          <p className="mensagem vazio">
            A API não retornou livros cadastrados.
          </p>
        )}

        {!carregando && !erro && livros.length > 0 && (
          <section className="resultado" aria-live="polite">
            <div className="resultado-cabecalho">
              <h2>Livros encontrados</h2>
              <span className="contador">
                {livros.length} {livros.length === 1 ? "livro" : "livros"}
              </span>
            </div>

            <div className="lista-livros">
              {livros.map((livro) => (
                <article className="livro" key={livro.id}>
                  <div className="livro-id">#{livro.id}</div>
                  <div className="livro-dados">
                    <h3>{livro.titulo}</h3>
                    <p><strong>Autor:</strong> {livro.autor}</p>
                    <p><strong>Ano:</strong> {livro.ano}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className='acoes'>
            <button
            type='button'
            className='botao-voltar'
            title='Clique para voltar ao início.'
            onClick={voltarParaInicio}
            >
              Voltar ao início
            </button>
            </div>

          </section>
        )}

        {!carregando && !erro && !consultaRealizada && (
          <p className="orientacao">
            Clique em <strong>Buscar Livros</strong> para consultar o catálogo.
          </p>
        )}
      </section>

      <footer className="rodape">
        Programação — Web Coding · React + API Flask
      </footer>
    </main>
  );
}

export default App;