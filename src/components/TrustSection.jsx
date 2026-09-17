import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

function TrustSection() {
  return (
    <section className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex justify-center md:justify-start"
        >
          {/* A foto já vem recortada no blob pêssego com o contorno magenta. */}
          <img
            src="/img/trajetoria-corgi.webp"
            alt="Corgi sorridente recortado sobre uma forma orgânica cor de pêssego"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="relative z-10 w-full max-w-sm md:max-w-md h-auto"
          />
          <img
            src="/img/patinhas.png"
            alt=""
            aria-hidden="true"
            width={34}
            height={44}
            loading="lazy"
            className="absolute -top-2 right-6 w-6 h-auto rotate-12 opacity-80 hidden sm:block"
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
            9 anos de experiência e mais de 90.000 atendimentos
            realizados.
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-3">
            <span className="text-magenta">Uma </span>
            <span className="text-teal">Trajetória de Confiança</span>{' '}
            <span className="text-magenta">e Milhares de Patinhas Felizes</span>
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
