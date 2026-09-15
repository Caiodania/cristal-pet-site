import { motion } from 'framer-motion'
import { FaBone } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'

const BENEFITS = [
  {
    icon: '/img/icone-low-stress.webp',
    iconAlt: 'Ilustração de um gato relaxado dentro de uma banheira com espuma',
    title: 'Método Low Stress',
    description:
      'Nosso atendimento é 100% focado no bem-estar do seu pet. Sem gaiolas e com um ambiente tranquilo para reduzir a ansiedade.',
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
      'Eleitos pelo segundo ano consecutivo o melhor banho e tosa de Indaiatuba. Uma garantia de excelência e confiança.',
  },
]

function BenefitsCards() {
  return (
    <section className="relative bg-magenta pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {BENEFITS.map(({ icon, iconAlt, title, description }, index) => (
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
              <p className="font-body text-dark/70 text-sm leading-relaxed">
                {description}
              </p>
              <FaBone className="text-2xl text-magenta/40 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <WaveDivider color="text-cream" />
    </section>
  )
}

export default BenefitsCards
