import { motion } from 'framer-motion'
import { GiPawPrint } from 'react-icons/gi'
import { FaBullseye, FaEye, FaCheckCircle, FaHeart, FaMedal, FaUsers } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import AnimatedCounter from './AnimatedCounter'
import SectionAccent from './SectionAccent'

const PILLARS = [
  {
    icon: FaBullseye,
    title: 'Missão',
    body: 'Proporcionar o serviço de banho e tosa mais seguro, confortável e conveniente do mercado, tratando cada pet com a dignidade e o carinho que ele merece, através do nosso método Low Stress.',
  },
  {
    icon: FaEye,
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

const STATS = [
  { icon: FaHeart, target: 15, suffix: ' K+', label: 'Pets felizes' },
  { icon: FaUsers, target: 9, suffix: ' K+', label: 'Clientes Felizes' },
  { icon: FaMedal, target: 8, suffix: ' +', label: 'Anos de experiência' },
]

function About() {
  return (
    <section id="sobre" className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative h-80 sm:h-96 md:h-[420px]"
          >
            <div className="absolute top-0 left-4 w-16 h-16 rounded-full bg-teal/15" />
            <div className="absolute bottom-6 right-0 w-12 h-12 rounded-full bg-magenta/15" />
            <GiPawPrint className="absolute -top-4 right-10 text-3xl text-magenta/40 rotate-12" />
            <GiPawPrint className="absolute bottom-0 left-0 text-2xl text-teal/40 -rotate-12" />

            <img
              src="https://placehold.co/320x400/4BC0AF/FAF9F5?text=Cristal+Pet"
              alt="Equipe Cristal Pet"
              className="absolute top-0 left-6 w-40 sm:w-48 h-56 sm:h-64 object-cover rounded-2xl shadow-xl -rotate-6"
            />
            <img
              src="https://placehold.co/320x400/C82D91/FAF9F5?text=Unidade+M%C3%B3vel"
              alt="Unidade móvel Cristal Pet"
              className="absolute top-10 right-0 w-36 sm:w-44 h-48 sm:h-56 object-cover rounded-2xl shadow-xl rotate-6 z-10"
            />
            <img
              src="https://placehold.co/320x400/282828/FAF9F5?text=Pet+Feliz"
              alt="Pet atendido"
              className="absolute bottom-0 left-16 sm:left-24 w-36 sm:w-44 h-44 sm:h-52 object-cover rounded-2xl shadow-xl rotate-3 z-20"
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
              <span className="text-magenta">Quase 8 anos de </span>
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
              Hoje, com quase 60.000 atendimentos realizados e o
              reconhecimento de{' '}
              <span className="font-bold text-dark">
                Melhor Banho e Tosa de Indaiatuba por dois anos consecutivos
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
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="w-14 h-14 rounded-full bg-magenta/10 flex items-center justify-center mb-5">
                <Icon className="text-2xl text-magenta" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-dark mb-3">
                {title}
              </h3>
              <p className="font-body text-dark/70 text-sm leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-5">
              <FaCheckCircle className="text-2xl text-teal" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-dark mb-3">
              Valores
            </h3>
            <ul className="space-y-2 text-left">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-2 font-body text-dark/70 text-sm">
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
          className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-16"
        >
          {STATS.map(({ icon: Icon, target, suffix, label }, index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className={`bg-white rounded-2xl border-2 border-magenta/30 shadow-lg p-8 text-center ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
            >
              <Icon className="text-3xl text-magenta mx-auto mb-3" />
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-dark">
                <AnimatedCounter target={target} suffix={suffix} />
              </p>
              <p className="font-body text-dark/70 text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
