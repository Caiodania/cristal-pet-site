import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import SectionAccent from './SectionAccent'
import { OPENING_HOURS_SENTENCE } from '../data/site'

const QUESTIONS = [
  {
    question: 'Como funciona o agendamento?',
    answer:
      'O agendamento é feito direto pelo WhatsApp. Você entra em contato, informa a cidade, o serviço desejado e a raça do seu pet, e a gente confirma o melhor dia e horário para o atendimento. ' +
      `Nosso atendimento é ${OPENING_HOURS_SENTENCE}.`,
  },
  {
    question: 'Quais cidades vocês atendem?',
    answer:
      'Atendemos atualmente Indaiatuba, Campinas, Valinhos e Vinhedo. Se você mora em outra região, fale com a gente pelo WhatsApp — estamos sempre avaliando novas áreas de cobertura.',
  },
  {
    question: 'Como funciona o atendimento da unidade móvel?',
    answer:
      'Nossa van totalmente equipada vai até a porta da sua casa. O banho e a tosa acontecem dentro do veículo, sem a necessidade de levar o seu pet até uma loja física. Para o atendimento, precisamos apenas de um ponto de água e de uma tomada 220 volts próximos ao local onde a van vai estacionar.',
  },
  {
    question: 'Preciso estar em casa durante o atendimento?',
    answer:
      'Recomendamos que o tutor esteja em casa ou por perto durante o serviço, principalmente no momento da entrega do pet ao final do atendimento.',
  },
  {
    question: 'Quais serviços vocês oferecem?',
    answer:
      'Trabalhamos com banho, tosa, hidratação, corte de unha e escovação de dente, adaptados às necessidades de cada pet. Fale com a gente para saber qual o serviço ideal para o seu companheiro.',
  },
  {
    question: 'Quanto tempo dura o atendimento?',
    answer:
      'O tempo varia de acordo com a raça, o tipo de pelagem e o serviço escolhido. Em geral, o atendimento completo leva entre 40 minutos e 1 hora e meia.',
  },
  {
    question: 'Posso remarcar ou cancelar meu horário?',
    answer:
      'Sim! Basta entrar em contato pelo WhatsApp com pelo menos 24 horas de antecedência para reagendar ou cancelar o seu horário sem problemas.',
  },
  {
    question: 'Como entro em contato com a Cristal Pet?',
    answer:
      'Você pode falar com a gente pelo WhatsApp (19) 97154-8471. ' +
      `Atendemos ${OPENING_HOURS_SENTENCE}.`,
  },
  {
    question: 'Minha cidade não está na lista de atendimento, e agora?',
    answer:
      'Mesmo assim, entre em contato! Estamos sempre expandindo nossa área de cobertura e talvez já estejamos chegando perto de você.',
  },
  {
    question: 'Onde fica a sede da Cristal Pet?',
    answer:
      'Nossa base fica na Rua México, 311, em Indaiatuba - SP, de onde saem nossas unidades móveis para atender você na sua casa.',
  },
]

const COLUMN_A = QUESTIONS.slice(0, 5)
const COLUMN_B = QUESTIONS.slice(5, 10)

function FaqColumn({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-4"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <motion.div
            key={item.question}
            variants={fadeUp}
            className={`rounded-2xl shadow-md overflow-hidden ${isOpen ? 'bg-teal' : 'bg-white'}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-heading font-bold text-base md:text-lg ${isOpen ? 'text-white' : 'text-magenta'}`}
            >
              {item.question}
              <FiChevronDown
                className={`text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 font-body text-white/90 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function FAQ() {
  return (
    <section id="faq" className="relative bg-cream pt-20 pb-8 md:pt-28 md:pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <SectionAccent className="mx-auto mb-2" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-magenta">Perguntas </span>
            <span className="text-teal">frequentes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <FaqColumn items={COLUMN_A} />
          <FaqColumn items={COLUMN_B} />
        </div>
      </div>
    </section>
  )
}

export default FAQ
