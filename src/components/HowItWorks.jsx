import { motion } from 'framer-motion'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import SectionAccent from './SectionAccent'

const STEPS = [
  {
    number: '01',
    title: 'Agendamento Fácil',
    description:
      'Entre em contato pelo nosso WhatsApp ou telefone. Vamos encontrar o melhor dia e horário na nossa agenda para atender você.',
    image: 'https://placehold.co/200x200/FAF9F5/C82D91?text=01',
  },
  {
    number: '02',
    title: 'Chegamos até você',
    description:
      'Nossa unidade móvel, totalmente equipada com água aquecida e tudo o que seu pet precisa, estaciona na sua residência no horário combinado.',
    image: 'https://placehold.co/200x200/FAF9F5/C82D91?text=02',
  },
  {
    number: '03',
    title: 'Cuidado Exclusivo e Seguro',
    description:
      'Realizamos todo o procedimento (banho, tosa, etc.) dentro da nossa van, com a atenção 100% voltada para o seu AUmigo.',
    image: 'https://placehold.co/200x200/FAF9F5/C82D91?text=03',
  },
  {
    number: '04',
    title: 'Seu Pet feliz e cheiroso',
    description:
      'Ao final, entregamos seu pet limpo, cheiroso e, o mais importante, tranquilo e feliz, sem que ele precise sair do conforto do seu lar.',
    image: 'https://placehold.co/200x200/FAF9F5/C82D91?text=04',
  },
]

function HowItWorks() {
  return (
    <section className="relative bg-teal pt-24 pb-28 md:pt-32 md:pb-36">
      <WaveDivider color="text-cream" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <SectionAccent className="mx-auto mb-2" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-magenta">Cuidado premium em </span>
            <span className="text-dark">4 passos</span>
            <span className="text-magenta"> simples</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-8 md:gap-10"
        >
          {STEPS.map(({ number, title, description, image }, index) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="bg-white/95 rounded-2xl shadow-lg p-6 flex items-center gap-5"
            >
              <img
                src={image}
                alt={`Passo ${number}`}
                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border-4 border-magenta/30 shrink-0 ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}
              />
              <div>
                <span className="font-heading font-extrabold text-magenta text-sm">
                  Passo {number}
                </span>
                <h3 className="font-heading font-extrabold text-lg text-dark mt-1 mb-2">
                  {title}
                </h3>
                <p className="font-body text-dark/70 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <WaveDivider color="text-cream" />
    </section>
  )
}

export default HowItWorks
