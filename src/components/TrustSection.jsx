import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

function TrustSection() {
  return (
    <section className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex justify-center md:justify-start"
        >
          <div className="absolute -top-6 -left-6 w-56 h-56 md:w-72 md:h-72 rounded-full bg-teal/10" />
          <div className="absolute -bottom-6 right-6 w-40 h-40 rounded-full border-4 border-magenta/30" />
          <img
            src="https://placehold.co/480x480/4BC0AF/FAF9F5?text=Foto+do+Pet"
            alt="Pet atendido pela Cristal Pet"
            className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="text-center md:text-left"
        >
          <span className="font-body font-semibold text-magenta uppercase tracking-wide text-sm">
            Quase 8 anos de experiência e mais de 60.000 atendimentos
            realizados.
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-3">
            <span className="text-dark">Uma </span>
            <span className="text-teal">Trajetória de</span>{' '}
            <span className="text-magenta">Confiança e Milhares de Patinhas Felizes</span>
          </h2>

          <p className="font-body text-dark/70 text-lg mt-6 max-w-lg mx-auto md:mx-0">
            A confiança que você procura está aqui. Somos referência em
            cuidado pet na região, um reconhecimento conquistado em cada
            serviço prestado. Nosso compromisso é com a saúde e a felicidade
            do seu animal de estimação.
          </p>

          <a
            href="#servicos"
            className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold px-8 py-4 rounded-full mt-8 shadow-lg hover:brightness-110 hover:scale-105 transition"
          >
            Conheça nossos serviços
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
