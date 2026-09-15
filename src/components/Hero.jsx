import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import WaveDivider from './WaveDivider'
import { WHATSAPP_LINK_AGENDAR } from '../data/site'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-teal overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-8 md:gap-12">
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
            href={WHATSAPP_LINK_AGENDAR}
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
          className="relative flex justify-center md:justify-end md:self-end md:-mb-32"
        >
          <div className="absolute top-2 left-2 sm:-top-4 sm:left-0 w-16 h-16 rounded-full bg-white/25 hidden sm:block" />
          <div className="absolute top-16 right-0 w-10 h-10 rounded-full bg-magenta/30 hidden sm:block" />

          <img
            src="/img/hero-pet.webp"
            alt="Cão sorridente cercado por bolhas de sabão após o banho na unidade móvel"
            width={900}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative w-64 sm:w-80 md:w-full max-w-md h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <WaveDivider color="text-magenta" />
    </section>
  )
}

export default Hero
