import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTION_IDS = ['inicio', 'sobre', 'projetos', 'experiencia', 'tecnologias', 'contato']
const links = [
  ['inicio', 'Início'], ['sobre', 'Sobre'], ['projetos', 'Projetos'],
  ['experiencia', 'Experiências'], ['tecnologias', 'Tecnologias'], ['contato', 'Contato']
]

const translations = {
  'Início':'Home','Sobre':'About','Projetos':'Projects','Experiências':'Experience','Tecnologias':'Technologies','Contato':'Contact',
  'PORTFÓLIO':'PORTFOLIO','Olá':'Hello','Eu sou':'I am','Engenheira de Software em formação.':'Software Engineering student.','Projetar • Criar • Transformar':'Design • Create • Transform',
  'Conheça meus projetos':'Explore my projects','Um pouco sobre mim':'A little about me','SOBRE MIM':'ABOUT ME','UM POUCO SOBRE MIM':'A LITTLE ABOUT ME',
  'Curiosa por natureza.':'Curious by nature.','Desenvolvedora por paixão.':'Developer by passion.','Vamos conversar':'Let’s talk',
  'PROJETOS':'PROJECTS','COLOCANDO IDEIAS EM PRÁTICA':'PUTTING IDEAS INTO PRACTICE','Algumas coisas que':'Some things I have','já construí.':'already built.','Ver mais projetos':'See more projects',
  'EXPERIÊNCIAS & FORMAÇÃO':'EXPERIENCE & EDUCATION','MINHA JORNADA ATÉ AQUI':'MY JOURNEY SO FAR','Ver mais experiências':'See more experience',
  'TECNOLOGIAS & FERRAMENTAS':'TECHNOLOGIES & TOOLS','MINHA CAIXA DE FERRAMENTAS':'MY TOOLBOX','Aprendendo. Testando.':'Learning. Testing.','Construindo.':'Building.',
  'CONTATO':'CONTACT','VAMOS CRIAR ALGO JUNTOS?':'SHALL WE CREATE SOMETHING TOGETHER?','Uma boa ideia começa com':'A good idea starts with','uma conversa.':'a conversation.',
  'Meus projetos':'My projects','Experiências & formação':'Experience & education','Minha trajetória':'My journey','Ver detalhes ↗':'View details ↗','← Voltar ao início':'← Back to home','← Voltar aos projetos':'← Back to projects','← Voltar às experiências':'← Back to experience',
  'Minha Contribuição':'My Contribution','Tecnologias utilizadas':'Technologies used','Detalhes':'Details','Trabalho acadêmico em grupo':'Academic group project','Trabalho acadêmico individual':'Individual academic project',
  'Seu nome':'Your name','Seu e-mail':'Your email','Sua mensagem':'Your message','Preparar mensagem':'Prepare email','Me manda um e-mail?':'Send me an email?','Ver currículo':'View resume',
  'Olá, mundo!':'Hello, world!','MEU PORTFÓLIO':'MY PORTFOLIO','MINHA TRAJETÓRIA':'MY JOURNEY','Ideias, experimentos e soluções que desenvolvi.':'Ideas, experiments and solutions I built.','Minha jornada de aprendizado e desenvolvimento.':'My learning and growth journey.','Projeto não encontrado.':'Project not found.','Experiência não encontrada.':'Experience not found.','Página não encontrada.':'Page not found.','Formação':'Education','Experiência profissional':'Professional experience',
  'FORMAÇÃO':'EDUCATION','EXPERIÊNCIA':'EXPERIENCE','Voltar ao topo':'Back to top'
}

// Traduções ordenadas uma única vez (as chaves maiores têm prioridade).
const sortedTranslations = Object.entries(translations).sort((a, b) => b[0].length - a[0].length)
const placeholderTranslations = {
  'Como posso te chamar?': 'What should I call you?',
  'voce@exemplo.com': 'you@example.com',
  'Digite sua mensagem aqui...': 'Type your message here...',
}

function translateText(text) {
  let value = text
  for (const [pt, en] of sortedTranslations) value = value.replaceAll(pt, en)
  return value
}

// lastWritten guarda o último valor que NÓS escrevemos em cada nó de texto.
// Se o valor atual for diferente, o React atualizou o nó e o valor novo vira o "original" em português.
const originalTexts = new WeakMap()
const lastWritten = new WeakMap()

function translateDocument(language) {
  document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let node
  while ((node = walker.nextNode())) {
    const current = node.nodeValue
    if (current !== lastWritten.get(node)) originalTexts.set(node, current)
    const original = originalTexts.get(node)
    const target = language === 'en' ? translateText(original) : original
    if (current !== target) node.nodeValue = target
    lastWritten.set(node, target)
  }
  document.querySelectorAll('[placeholder]').forEach(el => {
    if (!el.dataset.ptPlaceholder) el.dataset.ptPlaceholder = el.placeholder
    const pt = el.dataset.ptPlaceholder
    const target = language === 'en' ? (placeholderTranslations[pt] || pt) : pt
    if (el.placeholder !== target) el.placeholder = target
  })
}

function readLanguage() {
  try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt' } catch { return 'pt' }
}

export default function Navbar({ menuOpen, setMenuOpen }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [language, setLanguage] = useState(readLanguage)
  const [active, setActive] = useState('inicio')

  // Tradução: o observer é desligado enquanto escrevemos, para não disparar a si mesmo em loop.
  useEffect(() => {
    const observer = new MutationObserver(run)
    const watch = () => observer.observe(document.body, { childList: true, subtree: true, characterData: true })
    function run() {
      observer.disconnect()
      translateDocument(language)
      watch()
    }
    run()
    return () => observer.disconnect()
  }, [language])

  // Destaca no menu a seção visível (só na home).
  useEffect(() => {
    if (!isHome) return
    setActive('inicio')
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .15, .35, .6] })
    SECTION_IDS.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [isHome])

  function changeLanguage(next) {
    try { localStorage.setItem('portfolio-language', next) } catch { /* armazenamento indisponível */ }
    setLanguage(next)
  }

  return <header className="site-header">
    <div className="header-accent" />
    <nav className="navbar" aria-label="Navegação principal">
      <Link className="brand" to="/#inicio" aria-label="Gabriela Pierazolli, início" onClick={() => setMenuOpen(false)}><span>g</span>pp<small>PORTFÓLIO</small></Link>
      <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <div className={`nav-content ${menuOpen ? 'nav-open' : ''}`}>
        <div className="nav-links">{links.map(([id, label]) => <Link key={id} to={`/#${id}`} className={isHome && active === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</Link>)}</div>
        <div className="language-switch" aria-label="Idioma"><button className={language === 'pt' ? 'language-active' : ''} onClick={() => changeLanguage('pt')} aria-label="Português" title="Português">🇧🇷</button><span /><button className={language === 'en' ? 'language-active' : ''} onClick={() => changeLanguage('en')} aria-label="English" title="English">🇺🇸</button></div>
      </div>
    </nav>
  </header>
}
