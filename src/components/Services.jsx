import { motion } from 'framer-motion'
import { GiWaterDrop, GiScissors, GiSparkles } from 'react-icons/gi'
import { FaBone } from 'react-icons/fa6'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'

const SERVICES = [
  {
    icon: GiWaterDrop,
    title: 'Banho Terapêutico e Higienização',
    description:
      'Banhos relaxantes com produtos de alta qualidade, respeitando a pele e a pelagem do seu pet.',
    bg: 'bg-teal',
  },
  {
    icon: GiScissors,
    title: 'Tosa Higiênica e da Raça',
    description:
      'Cortes precisos realizados por profissionais experientes, seguindo o padrão da raça ou a sua preferência.',
    bg: 'bg-magenta',
  },
  {
    icon: GiSparkles,
    title: 'Hidratação e Cuidados Especiais',
    description:
      'Tratamentos que recuperam o brilho e a maciez dos pelos, garantindo um visual incrível e saudável.',
    bg: 'bg-teal',
  },
]

function Services() {
  return (
    <section id="servicos" className="relative bg-cream pt-8 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          {/* TODO: colar texto original aqui — título e subtítulo da seção de serviços */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-dark">Nossos </span>
            <span className="text-magenta">serviços</span>
          </h2>
          <p className="font-body text-dark/70 text-lg mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, tudo que seu pet precisa em um único
            atendimento.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map(({ icon: Icon, title, description, bg }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`${bg} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white`}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <Icon className="text-3xl text-white" />
              </div>
              <h3 className="font-heading font-extrabold text-xl mb-2">
                {title}
              </h3>
              <p className="font-body text-white/85 text-sm leading-relaxed">
                {description}
              </p>
              <FaBone className="text-2xl text-white/50 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
