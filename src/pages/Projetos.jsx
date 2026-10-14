
import { Link } from "react-router-dom";
import { projetos } from "../data/portfolio";
import "../styles/PaginasInternas.css";

export default function Projetos() {
  return (
    <main className="pagina-interna">
      <Link to="/" className="voltar">← Voltar ao início</Link>
      <p className="eyebrow">MEU PORTFÓLIO</p>
      <h1>Meus projetos<span>.</span></h1>
      <p>Ideias, experimentos e soluções que desenvolvi.</p>

      <div className="pastas-grid">
        {projetos.map((projeto) => (
          <Link
            className="pasta-card"
            to={`/projetos/${projeto.id}`}
            key={projeto.id}
          >
            <div className="pasta-icone">📁</div>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.categoria}</p>
            <span>Ver detalhes ↗</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
