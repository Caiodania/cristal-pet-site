import { motion } from 'framer-motion'
import { FaFacebookF, FaHeart, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import SectionAccent from './SectionAccent'
import TiltedOutline from './TiltedOutline'
import InstagramEmbed from './InstagramEmbed'
import { DEPOIMENTOS } from '../data/depoimentos'
import {
  FACEBOOK_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_LINK_FEEDBACK,
} from '../data/site'

// Inclinação e deslocamento do contorno magenta de cada card, alternados para
// os vídeos não ficarem "carimbados" iguais.
const OUTLINES = [
  { rotate: -2.5, x: 12 },
  { rotate: 2, x: -12 },
  { rotate: -2, x: 12 },
  { rotate: 2.5, x: -12 },
]

function Feedback() {
  // `overflow-x-clip` corta as bolhas decorativas que extrapolam a lateral
  // sem criar um contexto de rolagem.
  return (
    <section id="feedback" className="relative bg-cream py-20 md:py-28 overflow-x-clip">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12 md:mb-16"
        >
          <SectionAccent className="mx-auto mb-2" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <span className="text-magenta">Feedback dos </span>
            <span className="text-dark">clientes</span>
          </h2>
          <p className="font-body text-dark/70 text-lg mt-4 max-w-xl mx-auto">
            Fotos e vídeos enviados por quem já recebeu a Cristal Pet Móvel em
            casa.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <img
            src="/img/bolhas.webp"
            alt=""
            aria-hidden="true"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute left-1/2 top-1/2 w-[36rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-50 lg:w-[60rem]"
          />
          <img
            src="/img/patinhas.png"
            alt=""
            aria-hidden="true"
            width={34}
            height={44}
            loading="lazy"
            className="absolute -top-6 left-1 w-7 h-auto -rotate-12 lg:-left-4"
          />
          <img
            src="/img/patinhas.png"
            alt=""
            aria-hidden="true"
            width={34}
            height={44}
            loading="lazy"
            className="absolute -bottom-7 right-1 w-8 h-auto rotate-[18deg] lg:-right-4"
          />

          {/*
            Abaixo de 1024px os vídeos ficam empilhados e centralizados; em
            1024–1279px, dois por linha; a partir de 1280px, os quatro lado a
            lado. Cada card fornece o raio e a sombra, e o iframe do Instagram
            ocupa a largura toda.
          */}
          <div className="relative grid gap-12 justify-items-center lg:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-6">
            {DEPOIMENTOS.map(({ id, permalink, description }, index) => {
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

        {/* Chamada de engajamento para as redes sociais, abaixo dos vídeos. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 md:mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-9 overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-magenta via-teal to-magenta"
            />
            <p className="font-heading font-black text-magenta text-2xl sm:text-3xl inline-flex items-center gap-2">
              <FaHeart className="text-teal text-xl" aria-hidden="true" />
              Siga-nos nas redes sociais!
            </p>
            <p className="font-body text-dark/70 text-[15px] sm:text-base leading-relaxed mt-3 max-w-xl mx-auto">
              Curta, comente e compartilhe: cada interação ajuda mais AUmigos a
              conhecerem o cuidado Low Stress. Por lá você acompanha novos
              atendimentos, bastidores da unidade móvel e dicas para o seu pet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition"
              >
                <FaInstagram className="text-lg" />@{INSTAGRAM_HANDLE}
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition"
              >
                <FaFacebookF className="text-base" />
                Facebook
              </a>
            </div>
          </div>

          <p className="font-body text-dark/70 mt-8">
            Já foi atendido pela Cristal Pet?{' '}
            <a
              href={WHATSAPP_LINK_FEEDBACK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-magenta underline underline-offset-4 decoration-magenta/40 hover:decoration-magenta transition-colors"
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Envie o vídeo do seu pet pelo WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Feedback
