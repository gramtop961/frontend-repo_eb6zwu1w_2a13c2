import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="bg-[#0a0a0f] border-t border-white/10 text-white/60 text-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} it.student — Crafted with React, Tailwind and a touch of neon.</p>
          <a href="/test" className="hover:text-white">System</a>
        </div>
      </footer>
    </div>
  )
}

export default App
