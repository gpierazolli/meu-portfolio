import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Cpu,
  Github, Linkedin, Mail, Send, Terminal, FileText, Instagram
} from 'lucide-react'
import Layout from './components/Layout.jsx'
import Footer from './components/Footer.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { Routes, Route } from "react-router-dom";
import Projetos from "./pages/Projetos.jsx";
import Experiencias from "./pages/Experiencias.jsx";
import ProjetoDetalhe from "./pages/ProjetoDetalhe.jsx";
import ExperienciaDetalhe from "./pages/ExperienciaDetalhe.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Link } from "react-router-dom"; 

const projects = [
  { id: 'projeto-01', number: '01', title: 'Sintoniza', type: 'TRABALHO ACADÊMICO EM GRUPO', description: 'Plataforma que conecta artistas independentes a estabelecimentos e organizadores de eventos.', tags: ['HTML', 'CSS', 'JavaScript'], color: 'aqua', image: '/images/projeto-sintoniza.jpeg', link: '#' },
  { id: 'projeto-02', number: '02', title: 'Perniloco', type: 'TRABALHO ACADÊMICO EM GRUPO', description: 'Jogo desenvolvido em Python com mecânicas de movimentação e elementos gráficos.', tags: ['Python', 'Pygame'], color: 'pink', image: '/images/projeto-perniloco.png', link: '#' },
  { id: 'projeto-03', number: '03', title: 'NextRead', type: 'TRABALHO ACADÊMICO INDIVIDUAL', description: 'Plataforma para descobrir livros, organizar favoritos e registrar experiências de leitura.', tags: ['HTML', 'CSS', 'JavaScript'], color: 'blue', image: '/images/projeto-nextread.png', link: '#' },
]
const experiences = [
  { date: '2026 — 2030', title: 'Engenharia de Software', place: 'PUC Minas', image: '/images/puc-minas.png', detail: 'Cursando — 2º semestre', kind: 'education', color: 'pink' },
  { date: 'DEZ/2025 — JUL/2026', title: 'Freelancer', place: 'Quintal da Lagoa', image: '/images/quintal-da-lagoa.png', detail: 'Experiência profissional', kind: 'work', color: 'blue' },
  { date: '2025', title: 'Engenharia Química', place: 'CEFET-MG', image: '/images/cefet-contagem.png', detail: '2 semestres cursados', kind: 'education', color: 'lavender' },
  { date: 'CONCLUÍDO EM 2024', title: 'Ensino Médio', place: 'Elite Master', image: '/images/elite-master.png', detail: 'Formação concluída', kind: 'education', color: 'aqua' },
]
const technologies = [
  ['HTML5', 'html'], ['CSS3', 'css'], ['JavaScript', 'js'], ['Python', 'py'],
  ['Java', 'java'], ['C', 'c'], ['VS Code', 'vscode'], ['GitHub', 'github'], ['Git', 'git']
]

function SectionTicker({ children, tone = 'blue' }) {
  return <div className={`ticker ticker-${tone}`} aria-hidden="true"><div>{Array.from({ length: 20 }, (_, i) => <span key={i}>{children}<b>✳</b></span>)}</div></div>
}


function Placeholder({ className = '', src = '/images/minha-imagem.jpeg', alt = 'Foto de Gabriela Pierazolli' }) {
  return <img src={src} alt={alt} className={className}/>
}


function HomeHero() {
  return <section className="hero graph-paper" id="inicio">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" />• PORTFÓLIO •</p>
      <h1>Olá<span className="pink-dot">!!!</span><br />Eu sou <em>Gabriela Pierazolli</em>,<br /><span className="hero-role">Engenheira de Software em formação.</span></h1>
      <p className="hero-subtitle">Projetar • Criar • Transformar</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projetos">Conheça meus projetos <ArrowRight size={17} /></a>
        <a className="text-link" href="#sobre">Um pouco sobre mim <ArrowDown size={15} /></a>
      </div>
    </div>
    <div className="hero-art" aria-hidden="true">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="hero-avatar"><Placeholder src="/images/imagem-inicial.png" alt="Ilustração de apresentação do portfólio" /></div>
      <div className="code-sticker sticker-one"><Code2 size={19} /><span>const future = 'brilhante';</span></div>
      <div className="code-sticker sticker-two"><Terminal size={18} /><span>Olá, mundo!</span></div>
      <div className="floating-symbol symbol-braces"><Braces size={31} /></div>
      <div className="floating-symbol symbol-cpu"><Cpu size={27} /></div>
      <span className="spark spark-one">✳</span><span className="spark spark-two">✦</span>
    </div>
    <div className="hero-bottom-note"><span>ROLE PARA DESCOBRIR <ArrowDown size={14} /></span></div>
  </section>
}

function About() {
  return <section id="sobre" className="section-block about-section">
    <SectionTicker tone="aqua">SOBRE MIM</SectionTicker>
    <div className="section-inner about-grid">
      <div className="about-visual">
        <div className="about-image-frame"><Placeholder src="/images/minha-imagem.jpg" /></div>
        <span className="handwritten-note"> women in stem <span>↗</span></span>
        <div className="mini-code-card"><span className="window-dots">● ● ●</span><code>git commit -m<br />"aprendendo sempre"</code></div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">UM POUCO SOBRE MIM</p>
        <h2>Curiosa por natureza.<br /><span className="highlight-text">Desenvolvedora por paixão.</span></h2>
        <p>Meu nome é Gabriela Pinheiro Pierazolli, sou uma desenvolvedora em formação, apaixonada por tecnologia e pela possibilidade de transformar ideias em soluções digitais.</p>
        <p>Estou sempre em busca de novos conhecimentos e oportunidades para explorar o desenvolvimento de software, aprimorar minhas habilidades e experimentar diferentes tecnologias.</p>
        <p>Gosto de encarar desafios como oportunidades de aprendizado e de criar projetos que unam criatividade, funcionalidade e propósito.</p>
        <p className="about-extra">Tenho inglês em nível intermediário e estou aprendendo italiano, atualmente em nível básico. Acredito que aprender novos idiomas também é uma forma de ampliar horizontes e criar novas oportunidades</p>
        <a className="button button-dark" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a>
      </div>
    </div>
  </section>
}

function Projects({ expanded = false }) {
  const shown = expanded ? projects : projects.slice(0, 3)
  return <section id="projetos" className="section-block projects-section">
    <SectionTicker tone="blue">PROJETOS</SectionTicker>
    <div className="section-inner">
      <div className="section-heading">
        <div><p className="eyebrow">COLOCANDO IDEIAS EM PRÁTICA</p><h2>Algumas coisas que <span className="highlight-text">já construí.</span></h2></div>
      </div>
      <div className="projects-grid">{shown.map(project => <ProjectCard key={project.number} project={project} />)}</div>
      {!expanded && <div className="section-footer"><p>Este espaço vai crescer junto com meus próximos projetos.</p>
      <Link className="button button-primary" to="/projetos"> Ver mais projetos <ArrowRight size={17} /> </Link> </div>}
    </div>
  </section>
}


function Experience() {
  return <section id="experiencia" className="section-block experience-section">
    <SectionTicker tone="pink">EXPERIÊNCIAS & FORMAÇÃO</SectionTicker>
    <div className="section-inner">
      <div className="section-heading"><div><p className="eyebrow">MINHA JORNADA ATÉ AQUI</p><h2>Aprendizados que me <span className="highlight-text">trouxeram até aqui.</span></h2></div></div>
      <div className="timeline-grid">{experiences.map((item, i) => <article className={`timeline-card card-${item.color}`} key={item.title}>
        <div className="timeline-top"><span className="timeline-number">0{i + 1}</span><span className="timeline-kind">{item.kind === 'work' ? 'EXPERIÊNCIA' : 'FORMAÇÃO'}</span></div>
        <Placeholder className="timeline-image" src={item.image} alt={item.place} />
        <p className="timeline-date">{item.date}</p><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p className="timeline-detail">{item.detail}</p>
      </article>)}</div>
      <div className="section-footer experience-footer"><p>Trajetória em construção, e tem espaço para muito mais. </p>
      <Link className="button button-primary" to="/experiencias"> Ver mais experiências <ArrowRight size={17} /> </Link></div>
    </div>
  </section>
}

function Technologies() {
  return <section id="tecnologias" className="section-block technologies-section">
    <SectionTicker tone="blue">TECNOLOGIAS & FERRAMENTAS</SectionTicker>
    <div className="section-inner">
      <div className="section-heading"><div><p className="eyebrow">MINHA CAIXA DE FERRAMENTAS</p><h2>Aprendendo. Testando. <span className="highlight-text">Construindo.</span></h2></div></div>
      <p className="section-intro">Tecnologias com as quais estudo e experimento.</p>
      <div className="tech-grid">{technologies.map(([name, code], i) => <div className="tech-item" key={name}><div className={`tech-icon tech-${code}`}>{code === 'github' ? <Github size={31} /> : code === 'vscode' ? <Code2 size={31} /> : code === 'git' ? <Braces size={31} /> : <span>{code === 'html' ? '5' : code === 'css' ? '3' : code === 'js' ? 'JS' : code === 'py' ? 'Py' : code === 'java' ? '☕' : 'C'}</span>}</div><span>{name}</span><small>{String(i + 1).padStart(2, '0')}</small></div>)}</div>
    </div>
  </section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(e) { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = encodeURIComponent(`Contato pelo portfólio — ${data.get('name')}`); const body = encodeURIComponent(`Nome: ${data.get('name')}\nE-mail: ${data.get('email')}\n\nMensagem:\n${data.get('message')}`); window.location.href = `mailto:gabrielapierazolli@gmail.com?subject=${subject}&body=${body}`; setSent(true) }
  return <section id="contato" className="section-block contact-section graph-paper">
    <SectionTicker tone="aqua">CONTATO</SectionTicker>
    <div className="section-inner contact-grid">
      <div className="contact-copy">
        <p className="eyebrow">VAMOS CRIAR ALGO JUNTOS?</p><h2>Uma boa ideia começa com <span className="highlight-text">uma conversa.</span></h2>
        <p>Quer trocar uma ideia, falar sobre tecnologia ou conversar sobre uma oportunidade? Minha caixa de entrada está aberta.</p>
        <div className="social-grid">
          <a href="https://www.linkedin.com/in/gabrielapierazolli" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="https://github.com/gpierazolli" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://www.instagram.com/gabipierazolli/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://wa.me/5531971431230?text=Ol%C3%A1%2C%20Gabriela!%20Encontrei%20seu%20portf%C3%B3lio." target="_blank" rel="noreferrer" aria-label="WhatsApp"><Send /></a>
        </div>
        <a className="resume-link" href="/curriculo.pdf" target="_blank" rel="noreferrer"><FileText size={18} /> Ver currículo <ArrowUpRight size={15} /></a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-top"><span className="window-dots">● ● ●</span><span>nova-mensagem.txt</span></div>
        <h3>{sent ? 'Mensagem preparada! ✨' : 'Me manda um e-mail?'}</h3>
        {sent ? <div className="success-message"><Send size={25} /><p>Seu aplicativo de e-mail foi acionado com a mensagem preenchida. Se não abriu automaticamente, envie diretamente para gabrielapierazolli@gmail.com.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Escrever outra</button></div> : <>
          <label>Seu nome<input required name="name" placeholder="Como posso te chamar?" /></label>
          <label>Seu e-mail<input required type="email" name="email" placeholder="voce@exemplo.com" /></label>
          <label>Sua mensagem<textarea required name="message" rows="4" placeholder="Digite sua mensagem aqui..." /></label>
          <button className="button button-primary form-submit" type="submit">Preparar mensagem <Send size={16} /></button>
        </>}
      </form>
    </div>
    <Footer />
  </section>
}

function HomePage() {
  return <main>
    <HomeHero />
    <About />
    <Projects />
    <Experience />
    <Technologies />
    <Contact />
  </main>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/experiencias/:id" element={<ExperienciaDetalhe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
