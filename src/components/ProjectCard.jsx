import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

function Placeholder({ project }) {
  return <img className="project-image" src={project.image} alt={`Imagem do projeto ${project.title}`} />
}
export default function ProjectCard({ project }) {
  return <article className={`project-card project-${project.color}`}>
    <div className="project-card-top"><span>/{project.number}</span><span className="project-type">{project.type}</span></div>
    <Placeholder project={project} />
    <div className="project-card-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-card-links"><Link to={`/projetos/${project.id}`}><ArrowUpRight size={17} /> Ver detalhes</Link><span>CASE / {project.number}</span></div>
    </div>
  </article>
}
