import { Link, useParams } from "react-router-dom";
import { experiencias } from "../data/portfolio";
import "../styles/PaginasInternas.css";

export default function ExperienciaDetalhe() {
  const { id } = useParams();
  const item = experiencias.find((exp) => exp.id === id);

  if (!item) {
    return (
      <main className="pagina-interna">
        <Link to="/experiencias" className="voltar">← Voltar às experiências</Link>
        <h1>Experiência não encontrada<span>.</span></h1>
      </main>
    );
  }

  return (
    <main className="pagina-interna">
      <Link to="/experiencias" className="voltar">
        ← Voltar às experiências
      </Link>
      <div className="detalhe-pasta experiencia-detalhe">
        <img className="detalhe-imagem experiencia-imagem" src={item.imagem} alt={item.local} />
        <p className="eyebrow">{item.categoria}</p>
        <h1>{item.titulo}</h1>
        <h2>{item.local}</h2>
        <p>{item.periodo}</p>
        {item.descricao && <p>{item.descricao}</p>}
        <h2>Detalhes</h2>
        <p>{item.detalhes}</p>
        <h2>Aprendizados</h2>
        <p>{item.aprendizado}</p>
      </div>
    </main>
  );
}
