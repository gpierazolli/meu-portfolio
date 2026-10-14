import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Rola para o topo ao trocar de página, ou para a seção indicada no #hash.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    const samePage = previousPath.current === pathname
    previousPath.current = pathname
    const behavior = samePage ? 'smooth' : 'instant'
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) { el.scrollIntoView({ behavior }); return }
    }
    window.scrollTo({ top: 0, left: 0, behavior })
  }, [pathname, hash, key])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { setMenuOpen(false) }, [pathname])
  return <div className="site-shell">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <ScrollManager />
    <Outlet />
    {pathname !== '/' && <Footer />}
  </div>
}
