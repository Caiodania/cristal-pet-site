import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'

const CITIES = ['Indaiatuba', 'Campinas', 'Valinhos', 'Vinhedo']

const CITY_PHOTOS = [
  'https://placehold.co/120x120/FAF9F5/C82D91?text=Indaiatuba',
  'https://placehold.co/120x120/FAF9F5/C82D91?text=Campinas',
  'https://placehold.co/120x120/FAF9F5/C82D91?text=Valinhos',
  'https://placehold.co/120x120/FAF9F5/C82D91?text=Vinhedo',
]

function CoverageArea() {
  return (
    <section className="relative bg-magenta pt-24 pb-20 md:pt-32 md:pb-28">
      <WaveDivider color="text-cream" flip />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          className="font-body text-white/85 text-lg mt-4"
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
              className="inline-flex items-center gap-2 bg-white/15 text-white font-body font-semibold px-4 py-2 rounded-full text-sm"
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
          <div className="flex -space-x-4">
            {CITY_PHOTOS.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`Cidade atendida ${index + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white object-cover"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <p className="font-body text-white/85 text-lg">
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
