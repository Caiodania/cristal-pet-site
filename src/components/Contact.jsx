import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegClock,
} from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import { submitNetlifyForm, EMAIL_PATTERN } from '../lib/netlifyForm'
import TiltedOutline from './TiltedOutline'
import { ADDRESS, EMAIL, OPENING_HOURS, PHONES } from '../data/site'

// TODO: colar link real do perfil de LinkedIn
const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/cristalpetmovel', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/cristal.moraes.1232/', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const CONTACT_CARDS = [
  {
    icon: FaPhoneAlt,
    title: 'Telefone',
    lines: PHONES.map(({ label, href }) => ({ text: label, href })),
  },
  { icon: FaMapMarkerAlt, title: 'Endereço', lines: [{ text: ADDRESS }] },
  { icon: FaEnvelope, title: 'E-mail', lines: [{ text: EMAIL, href: `mailto:${EMAIL}` }] },
  {
    icon: FaRegClock,
    title: 'Horário de Atendimento',
    lines: OPENING_HOURS.map((text) => ({ text })),
  },
]

const EMPTY_FORM = { nome: '', email: '', mensagem: '' }

function validate({ nome, email, mensagem }) {
  const errors = {}
  if (!nome.trim()) errors.nome = 'Informe o seu nome.'
  if (!email.trim()) errors.email = 'Informe o seu e-mail.'
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Informe um e-mail válido.'
  if (!mensagem.trim()) errors.mensagem = 'Escreva a sua mensagem.'
  return errors
}

function Contact() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('loading')
    try {
      await submitNetlifyForm('contato', values)
      setValues(EMPTY_FORM)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full rounded-full px-5 py-3 font-body text-dark bg-white placeholder:text-dark/50 focus:outline-none focus:ring-2 ${
      errors[field] ? 'ring-2 ring-red-300 focus:ring-red-400' : 'focus:ring-teal'
    }`

  return (
    <section id="contato" className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="hidden md:flex bg-white rounded-3xl shadow-xl overflow-hidden items-center justify-center p-6"
          >
            <img
              src="/img/contato-cao-cachecol.webp"
              alt="Cão grifon de Bruxelas usando um cachecol vermelho de tricô"
              width={857}
              height={822}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="bg-magenta rounded-3xl shadow-xl p-8 sm:p-10"
          >
            <h2 className="font-heading font-extrabold text-3xl text-white mb-4">
              Fale <span className="text-teal">Conosco</span>
            </h2>

            <p className="font-body text-white/90 mb-6">
              Fale Conosco e Agende o Dia de Beleza e relaxamento do seu Pet
            </p>

            <form
              name="contato"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contato" />
              <p className="hidden">
                <label>
                  Não preencha este campo:{' '}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label htmlFor="contato-nome" className="sr-only">
                  Nome
                </label>
                <input
                  id="contato-nome"
                  type="text"
                  name="nome"
                  value={values.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                  required
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? 'contato-nome-erro' : undefined}
                  className={inputClass('nome')}
                />
                {errors.nome && (
                  <p id="contato-nome-erro" className="font-body text-white text-sm mt-1.5 pl-5">
                    {errors.nome}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contato-email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="contato-email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contato-email-erro' : undefined}
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p id="contato-email-erro" className="font-body text-white text-sm mt-1.5 pl-5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contato-mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="contato-mensagem"
                  name="mensagem"
                  value={values.mensagem}
                  onChange={handleChange}
                  placeholder="Mensagem"
                  rows={4}
                  required
                  aria-invalid={Boolean(errors.mensagem)}
                  aria-describedby={errors.mensagem ? 'contato-mensagem-erro' : undefined}
                  className={`w-full rounded-2xl px-5 py-3 font-body text-dark bg-white placeholder:text-dark/50 resize-none focus:outline-none focus:ring-2 ${
                    errors.mensagem ? 'ring-2 ring-red-300 focus:ring-red-400' : 'focus:ring-teal'
                  }`}
                />
                {errors.mensagem && (
                  <p id="contato-mensagem-erro" className="font-body text-white text-sm mt-1.5 pl-5">
                    {errors.mensagem}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-teal text-white font-body font-semibold py-3 rounded-full hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar'}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="font-body font-semibold text-white bg-teal rounded-2xl px-5 py-3 text-sm">
                    Mensagem enviada! Em breve entraremos em contato com você.
                  </p>
                )}
                {status === 'error' && (
                  <p className="font-body font-semibold text-magenta bg-white rounded-2xl px-5 py-3 text-sm">
                    Não foi possível enviar agora. Tente novamente ou fale com a
                    gente pelo WhatsApp.
                  </p>
                )}
              </div>
            </form>

            <div className="flex items-center justify-center gap-4 mt-8">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 mt-20"
        >
          {CONTACT_CARDS.map(({ icon: Icon, title, lines }, index) => (
            <motion.div key={title} variants={fadeUp} className="relative rounded-2xl">
              <TiltedOutline
                rotate={index % 2 === 0 ? -3 : 3}
                x={index % 2 === 0 ? -10 : 10}
                y={10}
              />
              <div className="relative h-full bg-white rounded-2xl shadow-lg p-6 text-center">
                <Icon className="text-2xl xl:text-3xl text-magenta mx-auto mb-3" />
                <h3 className="font-heading font-extrabold text-dark mb-1">{title}</h3>
                {lines.map(({ text, href }) => (
                  <p key={text} className="font-body text-dark/70 text-base">
                    {href ? (
                      <a href={href} className="hover:text-magenta transition-colors">
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
