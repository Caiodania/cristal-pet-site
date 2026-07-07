import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import WaveDivider from './WaveDivider'

const WHATSAPP_LINK = 'https://wa.me/5519971548471?text=Ol%C3%A1!%20Quero%20agendar%20um%20banho%20para%20meu%20pet.'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-teal overflow-hidden pt-28 pb-32 md:pt-36 md:pb-48"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <span className="font-body font-bold text-magenta uppercase tracking-wide text-sm">
            Banho e Tosa Móvel
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-dark mt-2">
            Conforto, segurança e zero estresse,{' '}
            <span className="text-magenta font-extrabold">na porta da sua casa.</span>
          </h1>

          <p className="font-body font-normal text-dark/80 text-lg mt-6 max-w-md mx-auto md:mx-0">
            O cuidado premium que seu melhor amigo merece. O Banho e Tosa
            Móvel que Transforma o Cuidado do seu Pet.
          </p>

          <p className="font-body font-bold text-dark text-lg mt-4 max-w-md mx-auto md:mx-0">
            Atendemos Indaiatuba, Campinas, Valinhos e Vinhedo.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold text-lg px-8 py-4 rounded-full mt-8 shadow-lg hover:brightness-110 hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            Agendar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute -top-6 -left-4 w-16 h-16 rounded-full bg-white/30 hidden sm:block" />
          <div className="absolute top-10 -right-2 w-10 h-10 rounded-full bg-magenta/40" />
          <div className="absolute -bottom-4 left-8 w-8 h-8 rounded-full bg-white/40 hidden sm:block" />

          <img
            src="https://placehold.co/500x500/FAF9F5/282828?text=Foto+do+Pet"
            alt="Pet feliz após o banho"
            className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-full border-8 border-white/30"
          />
        </motion.div>
      </div>

      <WaveDivider color="text-magenta" />
    </section>
  )
}

export default Hero
