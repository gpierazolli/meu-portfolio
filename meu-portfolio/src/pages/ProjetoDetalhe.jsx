
import { Link, useParams } from "react-router-dom";
import { projetos } from "../data/portfolio";
import "../styles/PaginasInternas.css";

export default function ProjetoDetalhe() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === id);

  if (!projeto) return (
    <main className="pagina-interna">
      <Link to="/projetos" className="voltar">← Voltar aos projetos</Link>
      <h1>Projeto não encontrado<span>.</span></h1>
    </main>
  );

  return (
    <main className="pagina-interna">
      <Link to="/projetos" className="voltar">
        ← Voltar aos projetos
      </Link>
      <div className="detalhe-pasta">
        <img className="detalhe-imagem" src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} />
        <p className="eyebrow">{projeto.categoria}</p>
        <h1>{projeto.titulo}</h1>
        <p>{projeto.descricao}</p>
        <h2>Minha Contribuição</h2>
        <p>{projeto.detalhes}</p>
        <h2>Tecnologias utilizadas</h2>
        <div className="tags">
          {projeto.tecnologias.map((tec) => (
            <span key={tec}>{tec}</span>
          ))}
        </div>
        <h2>Link GitHub</h2>
        <p>{projeto.link}</p>
      </div>
    </main>
  );
}
