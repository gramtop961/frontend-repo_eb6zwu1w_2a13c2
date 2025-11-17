import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">it.student</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-md border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white py-2">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
