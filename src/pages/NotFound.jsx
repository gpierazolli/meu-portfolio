import { Link } from 'react-router-dom'
import '../styles/PaginasInternas.css'

export default function NotFound() {
  return (
    <main className="pagina-interna">
      <Link to="/" className="voltar">← Voltar ao início</Link>
      <p className="eyebrow">404</p>
      <h1>Página não encontrada<span>.</span></h1>
      <p>O endereço que você tentou acessar não existe.</p>
    </main>
  )
}
