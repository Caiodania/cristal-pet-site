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

function Feedback() {
  // Com um único depoimento o texto fica centralizado ao lado do card. Com
  // vários, ele gruda no topo da tela enquanto a coluna de vídeos rola.
  const hasMany = DEPOIMENTOS.length > 1

  // `overflow-x-clip` (e não `overflow-hidden`) corta as bolhas que extrapolam
  // a lateral sem criar um contexto de rolagem — o que quebraria o `sticky`
  // da coluna de texto.
  return (
    <section id="feedback" className="relative bg-cream py-20 md:py-28 overflow-x-clip">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-14 lg:gap-20 ${hasMany ? 'lg:items-start' : 'lg:items-center'}`}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={`text-center lg:text-left ${hasMany ? 'lg:sticky lg:top-28' : ''}`}
          >
            <SectionAccent className="mx-auto lg:mx-0 mb-2" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-magenta">Feedback dos </span>
              <span className="text-dark">clientes</span>
            </h2>
            <p className="font-body text-dark/70 text-lg mt-4 max-w-xl mx-auto lg:mx-0">
              Fotos e vídeos enviados por quem já recebeu a Cristal Pet Móvel em
              casa.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={WHATSAPP_LINK_FEEDBACK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition"
              >
                <FaWhatsapp className="text-lg" />
                Envie o vídeo do seu pet
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-magenta text-magenta font-body font-semibold px-6 py-3 rounded-full hover:bg-magenta hover:text-white transition"
              >
                <FaInstagram className="text-lg" />@{INSTAGRAM_HANDLE}
              </a>
            </div>

            {/* Chamada de engajamento para as redes sociais. */}
            <div className="mt-8 relative bg-white rounded-2xl shadow-lg p-6 sm:p-7 text-center lg:text-left overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-magenta to-teal"
              />
              <p className="font-heading font-black text-magenta text-xl sm:text-2xl inline-flex items-center gap-2">
                <FaHeart className="text-teal text-lg" aria-hidden="true" />
                Siga-nos nas redes sociais!
              </p>
              <p className="font-body text-dark/70 text-[15px] leading-relaxed mt-2">
                Curta, comente e compartilhe: cada interação ajuda mais AUmigos a
                conhecerem o cuidado Low Stress. Por lá você acompanha novos
                atendimentos, bastidores da unidade móvel e dicas para o seu pet.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow hover:brightness-110 hover:scale-105 transition"
                >
                  <FaInstagram className="text-lg" />
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow hover:brightness-110 hover:scale-105 transition"
                >
                  <FaFacebookF className="text-base" />
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <img
              src="/img/bolhas.webp"
              alt=""
              aria-hidden="true"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain scale-125 opacity-60 pointer-events-none"
            />
            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -top-5 -left-2 w-7 h-auto -rotate-12"
            />
            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -bottom-6 -right-3 w-8 h-auto rotate-[18deg]"
            />

            <div className="relative space-y-12">
              {DEPOIMENTOS.map(({ id, permalink, description }, index) => (
                <motion.div key={id} variants={fadeUp} className="relative rounded-3xl">
                  <TiltedOutline
                    rotate={index % 2 === 0 ? -2.5 : 2.5}
                    x={index % 2 === 0 ? 14 : -14}
                    y={14}
                  />
                  {/*
                    Sem padding interno: o card fornece o raio e a sombra, e o
                    iframe do Instagram (largura mínima de 326px) ocupa a
                    largura toda, sem ser cortado em telas estreitas.
                  */}
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                    <InstagramEmbed permalink={permalink} description={description} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
