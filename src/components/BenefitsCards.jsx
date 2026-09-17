import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBone, FaPlay } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import InstagramReelModal from './InstagramReelModal'
import { LOW_STRESS_REEL_EMBED_URL } from '../data/site'

const REEL_TITLE = 'Método Low Stress na prática'

const BENEFITS = [
  {
    icon: '/img/icone-low-stress.webp',
    iconAlt: 'Ilustração de um gato relaxado dentro de uma banheira com espuma',
    title: 'Método Low Stress',
    description:
      'Nosso atendimento é 100% focado no bem-estar do seu pet. Sem gaiolas e com um ambiente tranquilo para reduzir a ansiedade.',
    // Link discreto que abre o reel do Instagram em um modal, sem sair do site.
    video: { label: 'Clique aqui e veja o método na prática' },
  },
  {
    icon: '/img/icone-comodidade.webp',
    iconAlt: 'Ilustração da unidade móvel de banho e tosa com uma patinha desenhada na lateral',
    title: 'Comodidade Total',
    description:
      'Nós vamos até você! Chega de estresse com deslocamento. Seu pet é cuidado no conforto e segurança do ambiente que ele já conhece.',
  },
  {
    icon: '/img/icone-exclusivo.webp',
    iconAlt: 'Ilustração de uma profissional escovando um gato com carinho',
    title: 'Atendimento Exclusivo',
    description:
      'O horário é inteiramente dedicado ao seu AUmigo, sem a presença ou o barulho de outros animais. Atenção e carinho do início ao fim.',
  },
  {
    icon: '/img/icone-qualidade.webp',
    iconAlt: 'Ilustração de um frasco de shampoo pet premiado com uma estrela',
    title: 'Qualidade Premiada',
    description:
      'Eleitos pelo terceiro ano consecutivo o melhor banho e tosa de Indaiatuba. Uma garantia de excelência e confiança.',
  },
]

function BenefitsCards() {
  const [isReelOpen, setIsReelOpen] = useState(false)

  return (
    <section className="relative bg-magenta pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {BENEFITS.map(({ icon, iconAlt, title, description, video }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center ${index % 2 === 0 ? 'md:-rotate-2' : 'md:rotate-2'} hover:rotate-0 transition-transform`}
            >
              <img
                src={icon}
                alt={iconAlt}
                width={250}
                height={250}
                loading="lazy"
                decoding="async"
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="font-heading font-black text-lg text-magenta mb-2">
                {title}
              </h3>
              <p className="font-body text-dark/70 text-[15px] leading-relaxed">
                {description}
              </p>

              {video && (
                <button
                  type="button"
                  onClick={() => setIsReelOpen(true)}
                  className="mt-3 inline-flex items-center gap-1.5 font-body font-bold text-[13px] text-teal underline underline-offset-4 decoration-teal/40 hover:text-magenta hover:decoration-magenta/50 transition-colors"
                >
                  <FaPlay className="text-[9px]" aria-hidden="true" />
                  {video.label}
                </button>
              )}

              {/* mt-auto mantém o ossinho no rodapé de todos os cards da linha */}
              <div className="mt-auto pt-6">
                <FaBone className="text-2xl text-magenta/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <InstagramReelModal
        open={isReelOpen}
        onClose={() => setIsReelOpen(false)}
        embedUrl={LOW_STRESS_REEL_EMBED_URL}
        title={REEL_TITLE}
      />

      <WaveDivider color="text-cream" />
    </section>
  )
}

export default BenefitsCards
