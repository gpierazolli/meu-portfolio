
import { Link } from "react-router-dom";
import { experiencias } from "../data/portfolio";
import "../styles/PaginasInternas.css";

export default function Experiencias() {
  return (
    <main className="pagina-interna">
      <Link to="/" className="voltar">← Voltar ao início</Link>
      <p className="eyebrow">MINHA TRAJETÓRIA</p>
      <h1>Experiências & formação<span>.</span></h1>
      <p>Minha jornada de aprendizado e desenvolvimento.</p>

      <div className="pastas-grid">
        {experiencias.map((item) => (
          <Link
            className="pasta-card"
            to={`/experiencias/${item.id}`}
            key={item.id}
          >
            <div className="pasta-icone">📁</div>
            <h2>{item.titulo}</h2>
            <p>{item.local} | {item.periodo}</p>
            <span>Ver detalhes ↗</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
