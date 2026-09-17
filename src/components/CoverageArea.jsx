import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import { CITIES } from '../data/site'

function CoverageArea() {
  return (
    <section className="relative bg-magenta pt-24 pb-20 md:pt-32 md:pb-28">
      <WaveDivider color="text-cream" flip />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight"
        >
          <span className="text-white">Levamos o </span>
          <span className="text-teal">Melhor Cuidado Pet</span>
          <span className="text-white"> para Toda a Região</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="font-body text-white/85 text-lg lg:text-xl mt-4"
        >
          Atualmente, nossa frota e nossos franqueados atendem as seguintes
          cidades:
        </motion.p>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {CITIES.map((city) => (
            <motion.span
              key={city}
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/15 text-white font-body font-semibold px-4 py-2 rounded-full text-base"
            >
              <FaCheckCircle className="text-teal" />
              {city}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center mt-10"
        >
          {/* Montagem oficial com as fotos circulares sobrepostas das 4 cidades. */}
          <img
            src="/img/cidades-atendidas.webp"
            alt="Fotos aéreas de Indaiatuba, Campinas, Valinhos e Vinhedo, as cidades atendidas pela Cristal Pet"
            width={900}
            height={306}
            loading="lazy"
            decoding="async"
            className="w-full max-w-2xl h-auto"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <p className="font-body text-white/85 text-lg lg:text-xl">
            Não encontrou sua cidade na lista? Fale com a gente, talvez já
            estejamos chegando perto de você.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-8 py-4 rounded-full mt-6 shadow-lg hover:brightness-110 hover:scale-105 transition"
          >
            Clique aqui
          </a>
        </motion.div>
      </div>

      <WaveDivider color="text-cream" />
    </section>
  )
}

export default CoverageArea
