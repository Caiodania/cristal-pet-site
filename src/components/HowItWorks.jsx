import { motion } from 'framer-motion'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import SectionAccent from './SectionAccent'
import TiltedOutline from './TiltedOutline'

const STEPS = [
  {
    number: '01',
    title: 'Agendamento Fácil',
    description:
      'Entre em contato pelo nosso WhatsApp ou telefone. Vamos encontrar o melhor dia e horário na nossa agenda para atender você.',
    image: '/img/passo-1-agendamento.webp',
    imageAlt: 'Mão segurando um celular com o WhatsApp aberto para agendar o atendimento',
  },
  {
    number: '02',
    title: 'Chegamos até você',
    description:
      'Nossa unidade móvel, totalmente equipada com água aquecida e tudo o que seu pet precisa, estaciona na sua residência no horário combinado.',
    image: '/img/passo-2-van-cristal-pet.webp',
    imageAlt: 'Interior da van de atendimento da Cristal Pet, com mesa de tosa, secador e caixa de secagem',
  },
  {
    number: '03',
    title: 'Cuidado Exclusivo e Seguro',
    description:
      'Realizamos todo o procedimento (banho, tosa, etc.) dentro da nossa van, com a atenção 100% voltada para o seu AUmigo.',
    image: '/img/passo-3-banho-tosa.webp',
    imageAlt: 'Corgi tomando banho com espuma, sorrindo durante o atendimento',
  },
  {
    number: '04',
    title: 'Seu Pet feliz e cheiroso',
    description:
      'Ao final, entregamos seu pet limpo, cheiroso e, o mais importante, tranquilo e feliz, sem que ele precise sair do conforto do seu lar.',
    image: '/img/passo-4-pet-feliz.webp',
    imageAlt: 'Cão maltês branco com laço vermelho, limpo e feliz após o banho e tosa',
  },
]

function HowItWorks() {
  return (
    <section className="relative bg-teal pt-24 pb-28 md:pt-32 md:pb-36">
      <WaveDivider color="text-cream" flip />

      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-14"
        >
          {STEPS.map(({ number, title, description, image, imageAlt }, index) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              <div className="relative rounded-2xl shrink-0">
                <TiltedOutline
                  rotate={index % 2 === 0 ? -5 : 5}
                  x={index % 2 === 0 ? -10 : 10}
                  y={10}
                />
                <img
                  src={image}
                  alt={imageAlt}
                  width={563}
                  height={563}
                  loading="lazy"
                  decoding="async"
                  className="relative w-32 h-32 md:w-36 md:h-36 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="pt-1">
                <span className="font-heading font-black text-magenta text-sm uppercase tracking-wide">
                  Passo {number}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-1 mb-2">
                  {title}
                </h3>
                <p className="font-body text-white/90 text-[15px] leading-relaxed">
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
