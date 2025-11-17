import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0f] text-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m an IT student obsessed with visual polish and performance. I prototype fast, ship iteratively, and bring motion to the forefront without sacrificing accessibility.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
            <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">React + Tailwind</li>
            <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">Framer Motion</li>
            <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">Spline 3D</li>
            <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">Figma to Code</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
            <div className="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 blur-2xl" />
            <div className="relative">
              <p className="text-sm text-white/80 leading-relaxed">
                My niche: motion-rich, cyberpunk UI with just enough restraint to feel professional. I love magnetic buttons, glassmorphism, and neon gradients.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Currently exploring WebGL shaders and performance patterns for complex animation at 60fps.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
