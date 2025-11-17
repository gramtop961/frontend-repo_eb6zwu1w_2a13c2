import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Cyberfolio',
    description: 'A glossy portfolio theme with Spline, glassmorphism, and magnetic hover.',
    tags: ['React', 'Tailwind', 'Spline'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Motion Lab',
    description: 'Playground of micro-interactions built with Framer Motion variants.',
    tags: ['Framer Motion', 'UI'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Shader Toys',
    description: 'Tiny GLSL experiments rendered in canvas with reactive controls.',
    tags: ['GLSL', 'Canvas'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative bg-[#0a0a0f] text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-16 top-0 h-48 bg-gradient-to-b from-fuchsia-500/10 via-violet-500/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-fuchsia-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-fuchsia-500/10 group-hover:via-violet-500/5 group-hover:to-cyan-500/10 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-16 -right-10 w-56 h-56 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
