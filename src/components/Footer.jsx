import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  function backToTop(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <footer className="site-footer"><p>© {new Date().getFullYear()} Gabriela Pinheiro Pierazolli <span>•</span> Feito com <Heart size={13} fill="currentColor" /></p><a href="#inicio" onClick={backToTop}>Voltar ao topo <ArrowUp size={14} /></a></footer>
}
