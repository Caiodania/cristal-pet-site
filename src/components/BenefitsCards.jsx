import { motion } from 'framer-motion'
import { GiTrophyCup } from 'react-icons/gi'
import { FaBone, FaBath, FaHandsHelping } from 'react-icons/fa'
import { FaVanShuttle } from 'react-icons/fa6'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'

const BENEFITS = [
  {
    icon: FaBath,
    title: 'Método Low Stress',
    description:
      'Nosso atendimento é 100% focado no bem-estar do seu pet. Sem gaiolas e com um ambiente tranquilo para reduzir a ansiedade.',
  },
  {
    icon: FaVanShuttle,
    title: 'Comodidade Total',
    description:
      'Nós vamos até você! Chega de estresse com deslocamento. Seu pet é cuidado no conforto e segurança do ambiente que ele já conhece.',
  },
  {
    icon: FaHandsHelping,
    title: 'Atendimento Exclusivo',
    description:
      'O horário é inteiramente dedicado ao seu AUmigo, sem a presença ou o barulho de outros animais. Atenção e carinho do início ao fim.',
  },
  {
    icon: GiTrophyCup,
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
          {BENEFITS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center ${index % 2 === 0 ? 'md:-rotate-2' : 'md:rotate-2'} hover:rotate-0 transition-transform`}
            >
              <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                <Icon className="text-3xl text-teal" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-dark mb-2">
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
