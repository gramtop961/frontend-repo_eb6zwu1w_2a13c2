import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] overflow-hidden bg-[#0a0a0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0a0a0f]/60 to-[#0a0a0f] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <p className="text-fuchsia-300/90 text-sm uppercase tracking-[0.2em] mb-4">IT student • Frontend Engineering • UI Experiments</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Building spicy, cyberpunk-flavored interfaces
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">that actually ship</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-xl">
            I blend practical engineering with bold motion design. Scroll to see compact projects, micro-interactions, and tasty code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-400 hover:to-cyan-400 text-black font-semibold">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
