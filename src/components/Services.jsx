import { motion } from 'framer-motion'
import { FaBone } from 'react-icons/fa6'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'

// O ícone de cada card é o de cor oposta à do fundo, como no site original:
// card teal recebe ícone magenta e card magenta recebe ícone teal.
const SERVICES = [
  {
    icon: '/img/icone-banho.webp',
    iconAlt: 'Ilustração de um cão coberto de espuma dentro da banheira',
    title: 'Banho Terapêutico e Higienização',
    description:
      'Banhos relaxantes com produtos de alta qualidade, respeitando a pele e a pelagem do seu pet.',
    bg: 'bg-teal',
    titleColor: 'text-magenta',
  },
  {
    icon: '/img/icone-tosa.webp',
    iconAlt: 'Ilustração de um cão com tesoura e pente de tosa',
    title: 'Tosa Higiênica e da Raça',
    description:
      'Cortes precisos realizados por profissionais experientes, seguindo o padrão da raça ou a sua preferência.',
    bg: 'bg-magenta',
    titleColor: 'text-teal',
  },
  {
    icon: '/img/icone-hidratacao.webp',
    iconAlt: 'Ilustração de um cão sendo secado e escovado após a hidratação',
    title: 'Hidratação e Cuidados Especiais',
    description:
      'Tratamentos que recuperam o brilho e a maciez dos pelos, garantindo um visual incrível e saudável.',
    bg: 'bg-teal',
    titleColor: 'text-magenta',
  },
]

function Services() {
  return (
    <section id="servicos" className="relative bg-cream pt-8 pb-24 md:pb-32">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-dark">Nossos </span>
            <span className="text-magenta">serviços</span>
          </h2>
          <p className="font-body text-dark/70 text-lg mt-4 max-w-xl mx-auto">
            Tudo que seu pet precisa em um único atendimento, sem sair de casa.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map(({ icon, iconAlt, title, description, bg, titleColor }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`${bg} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-white`}
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
              <h3 className={`font-heading font-black text-xl mb-2 ${titleColor}`}>
                {title}
              </h3>
              <p className="font-body text-white/85 text-[15px] leading-relaxed">
                {description}
              </p>
              <FaBone className="text-2xl text-white/50 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Onda na cor da próxima seção (Filhotes, teal). */}
      <WaveDivider color="text-teal" />
    </section>
  )
}

export default Services
