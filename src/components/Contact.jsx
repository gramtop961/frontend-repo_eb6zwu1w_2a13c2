import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    // No backend storage needed for simple portfolio contact demo
    alert(`Thanks ${data.name}! I will reply at ${data.email}.`)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0f] text-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        </div>
        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Name" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
          <input type="email" name="email" placeholder="Email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
          <textarea name="message" placeholder="Your message" rows="5" className="md:col-span-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-black font-semibold hover:from-fuchsia-400 hover:to-cyan-400">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
