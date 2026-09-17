import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import AnimatedCounter from './AnimatedCounter'
import SectionAccent from './SectionAccent'
import TiltedOutline from './TiltedOutline'
import { STATS } from '../data/stats'

const PILLARS = [
  {
    icon: '/img/icone-missao.webp',
    iconAlt: 'Ilustração de um alvo com uma flecha no centro',
    title: 'Missão',
    body: 'Proporcionar o serviço de banho e tosa mais seguro, confortável e conveniente do mercado, tratando cada pet com a dignidade e o carinho que ele merece, através do nosso método Low Stress.',
  },
  {
    icon: '/img/icone-visao.webp',
    iconAlt: 'Ilustração de uma pessoa no alto de uma montanha olhando por um telescópio',
    title: 'Visão',
    body: 'Ser a marca referência e a primeira escolha em cuidado pet móvel no Brasil, expandindo nossa qualidade através de uma rede de franqueados apaixonados.',
  },
]

const VALUES = [
  'Bem-estar animal acima de tudo.',
  'Excelência e Qualidade em cada detalhe.',
  'Comodidade e Segurança para o cliente.',
  'Confiança e Transparência.',
  'Inovação constante.',
]

// Borda magenta em dois cantos opostos, como nos cards do site original.
function CornerBorders() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-magenta rounded-tl-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-magenta rounded-br-2xl"
      />
    </>
  )
}

function About() {
  return (
    <section id="sobre" className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <motion.div
            variants={fadeUp}
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
              className="absolute inset-0 w-full h-full object-contain scale-110 opacity-70 pointer-events-none"
            />

            {/*
              Montagem com fotos reais da galeria: a unidade móvel à esquerda
              (altura toda) e dois pets atendidos à direita, em molduras brancas
              inclinadas. Substitui a colagem antiga, que trazia a equipe.
            */}
            <div className="relative grid grid-cols-5 gap-3 sm:gap-4 py-3">
              <img
                src="/img/galeria/g10.webp"
                alt="Interior da unidade móvel Cristal Pet com mesa de tosa, secador e caixa de secagem"
                width={640}
                height={930}
                loading="lazy"
                decoding="async"
                className="col-span-3 row-span-2 h-full w-full object-cover rounded-3xl border-4 border-white shadow-xl -rotate-2"
              />
              <img
                src="/img/galeria/g02.webp"
                alt="Cocker spaniel dourado com gravata natalina após a tosa"
                width={640}
                height={853}
                loading="lazy"
                decoding="async"
                className="col-span-2 w-full aspect-[4/5] object-cover rounded-3xl border-4 border-white shadow-xl rotate-3"
              />
              <img
                src="/img/galeria/g04.webp"
                alt="Cão caramelo e branco com gravata borboleta vermelha ao lado de uma casinha decorada"
                width={640}
                height={927}
                loading="lazy"
                decoding="async"
                className="col-span-2 w-full aspect-[4/5] object-cover object-top rounded-3xl border-4 border-white shadow-xl -rotate-3"
              />
            </div>

            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -top-3 left-4 w-6 h-auto -rotate-12"
            />
            <img
              src="/img/patinhas.png"
              alt=""
              aria-hidden="true"
              width={34}
              height={44}
              loading="lazy"
              className="absolute -bottom-4 right-6 w-7 h-auto rotate-[18deg]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="text-center md:text-left"
          >
            <SectionAccent className="mx-auto md:mx-0 mb-2" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-magenta">9 anos de </span>
              <span className="text-teal">paixão</span>
              <span className="text-magenta"> e cuidado Pet</span>
            </h2>

            <p className="font-body text-dark/70 text-lg mt-6 max-w-lg mx-auto md:mx-0">
              A Cristal Pet Móvel nasceu em 2017 do sonho de Alexandre Moraes
              de{' '}
              <span className="font-bold text-dark">
                revolucionar a experiência de banho e tosa para os pets e seus
                tutores.
              </span>
            </p>
            <p className="font-body text-dark/70 text-lg mt-4 max-w-lg mx-auto md:mx-0">
              Incomodado com o estresse e a ansiedade que muitos animais
              sentiam em ambientes agitados e impessoais, ele decidiu criar um
              serviço que unisse{' '}
              <span className="font-bold text-dark">
                excelência técnica, conveniência e, acima de tudo, um profundo
                respeito pelo bem-estar animal.
              </span>
            </p>
            <p className="font-body text-dark/70 text-lg mt-4 max-w-lg mx-auto md:mx-0">
              Começamos com uma van e um grande propósito:{' '}
              <span className="font-bold text-dark">
                levar um cuidado de altíssima qualidade diretamente para a
                casa dos nossos clientes.
              </span>{' '}
              Hoje, com mais de 90.000 atendimentos realizados e o
              reconhecimento de{' '}
              <span className="font-bold text-dark">
                Melhor Banho e Tosa de Indaiatuba por três anos consecutivos
              </span>
              , nosso propósito se fortaleceu.
            </p>
            <p className="font-body text-dark/70 text-lg mt-4 max-w-lg mx-auto md:mx-0">
              O sucesso foi tanto que expandimos nosso modelo de negócio
              através de franquias, permitindo que mais 'AUmigos' em
              Campinas, Valinhos e Vinhedo também possam desfrutar do nosso
              cuidado exclusivo. Cada pet que atendemos é tratado como único,
              com a paciência e o carinho que ele merece.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-20"
        >
          {PILLARS.map(({ icon, iconAlt, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <CornerBorders />
              <img
                src={icon}
                alt={iconAlt}
                width={250}
                height={250}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="font-heading font-black text-xl text-magenta mb-3">
                {title}
              </h3>
              <p className="font-body text-dark/70 text-[15px] leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <CornerBorders />
            <img
              src="/img/icone-valores.webp"
              alt="Ilustração de uma mão segurando um diamante"
              width={250}
              height={250}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <h3 className="font-heading font-black text-xl text-magenta mb-3">
              Valores
            </h3>
            <ul className="space-y-2">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="flex items-start justify-center gap-2 font-body text-dark/70 text-[15px]"
                >
                  <FaCheckCircle className="text-teal mt-0.5 shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-3 gap-8 md:gap-10 mt-20"
        >
          {STATS.map(({ id, icon, iconAlt, target, suffix, label }, index) => (
            <motion.div
              key={id}
              variants={fadeUp}
              className="relative rounded-2xl"
            >
              <TiltedOutline rotate={index % 2 === 0 ? -3 : 3} x={index % 2 === 0 ? -12 : 12} y={12} />
              <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center">
                <img
                  src={icon}
                  alt={iconAlt}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 object-contain mx-auto mb-3"
                />
                <p className="font-heading font-black text-4xl sm:text-5xl">
                  <AnimatedCounter
                    target={target}
                    suffix={suffix}
                    numberClassName="text-teal"
                    suffixClassName="text-magenta"
                  />
                </p>
                <p className="font-body font-semibold text-magenta text-[15px] mt-2">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
