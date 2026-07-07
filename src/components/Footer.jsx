import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { fadeUp, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'

// TODO: colar link real do perfil de LinkedIn
const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/cristalpetmovel', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/cristal.moraes.1232/', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

function Footer() {
  return (
    <footer className="relative">
      <div className="relative bg-cream pt-16 pb-24 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-heading font-extrabold text-2xl md:text-3xl text-teal">
            Cristal <span className="text-magenta">Pet</span>
          </p>
          <p className="font-body text-dark/70 mt-2">
            Sua pet shop móvel de confiança.
          </p>
        </motion.div>

        <WaveDivider color="text-teal" />
      </div>

      <div className="bg-teal pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-10 text-center sm:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-4">
              Siga-nos
            </h3>
            <div className="flex justify-center sm:justify-start gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border-2 border-magenta flex items-center justify-center text-magenta hover:bg-white/15 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-4">
              Atendimento 24/7
            </h3>
            <a
              href="tel:+5519971548471"
              className="inline-flex items-center gap-2 font-body font-semibold text-white text-xl"
            >
              <FaPhoneAlt />
              (19) 97154-8471
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-4">
              Inscreva-se
            </h3>
            <form className="flex gap-2 justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="min-w-0 flex-1 rounded-full px-4 py-2.5 font-body text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-magenta"
              />
              <button
                type="submit"
                className="bg-magenta text-white font-body font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition shrink-0"
              >
                Inscrever
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="bg-magenta py-3">
        <p className="font-body text-white/90 text-sm text-center">
          Copyright © 2026 – Cristal Pet todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
