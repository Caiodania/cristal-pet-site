import { motion } from 'framer-motion'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import SectionAccent from './SectionAccent'
import TiltedOutline from './TiltedOutline'
import InstagramEmbed from './InstagramEmbed'
import { FILHOTES_VIDEOS } from '../data/filhotes'
import { WHATSAPP_LINK_FILHOTE } from '../data/site'

// Pontos derivados das promessas que o site já faz (Low Stress, sem gaiolas,
// água aquecida, atendimento exclusivo), aplicadas ao primeiro banho.
const HIGHLIGHTS = [
  'Primeiro contato sem pressa, sem gaiolas e sem outros animais por perto',
  'Sons, equipamentos e água aquecida apresentados aos poucos, no ritmo dele',
  'Adaptação gradual para que o banho vire um momento tranquilo pelo resto da vida',
]

const OUTLINES = [
  { rotate: -2.5, x: 12 },
  { rotate: 2.5, x: -12 },
]

function Puppies() {
  return (
    <section id="filhotes" className="relative bg-teal py-20 md:py-28 overflow-x-clip">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-5 xl:gap-14 xl:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center xl:text-left xl:col-span-2"
          >
            <SectionAccent className="mx-auto xl:mx-0 mb-2" />
            <span className="font-body font-bold text-white/90 uppercase tracking-wide text-sm">
              Especialidade Cristal Pet
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-2">
              <span className="text-magenta">Somos especializados em </span>
              <span className="text-dark">Filhotes</span>
              <span className="text-magenta"> e na adaptação deles ao </span>
              <span className="text-dark">Banho e Tosa</span>
            </h2>
            <p className="font-body text-white/90 text-lg mt-6 max-w-lg mx-auto xl:mx-0">
              O primeiro banho define como o seu filhote vai encarar o cuidado
              pelo resto da vida. Por isso, com o método Low Stress, tudo
              acontece no tempo dele — com paciência, carinho e sem estresse.
            </p>

            <ul className="mt-6 space-y-3 max-w-lg mx-auto xl:mx-0 text-left">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-white text-[15px] leading-relaxed"
                >
                  <FaCheckCircle className="text-magenta text-lg mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK_FILHOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold px-8 py-4 rounded-full mt-8 shadow-lg hover:brightness-110 hover:scale-105 transition"
            >
              <FaWhatsapp className="text-xl" />
              Agendar o primeiro banho
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative xl:col-span-3"
          >
            <img
              src="/img/bolhas.webp"
              alt=""
              aria-hidden="true"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute left-1/2 top-1/2 w-[32rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70 lg:w-[48rem]"
            />
            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -top-6 left-1 w-7 h-auto -rotate-12"
            />
            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -bottom-7 right-1 w-8 h-auto rotate-[18deg]"
            />

            {/* Dois reels lado a lado a partir de 640px; empilhados no celular. */}
            <div className="relative grid gap-10 justify-items-center sm:grid-cols-2 sm:gap-6 lg:gap-8">
              {FILHOTES_VIDEOS.map(({ id, permalink, description }, index) => {
                const outline = OUTLINES[index % OUTLINES.length]
                return (
                  <motion.div
                    key={id}
                    variants={fadeUp}
                    className="relative w-full max-w-[540px] rounded-3xl"
                  >
                    <TiltedOutline rotate={outline.rotate} x={outline.x} y={14} />
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                      <InstagramEmbed permalink={permalink} description={description} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Puppies
