import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { fadeUp, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import { submitNetlifyForm, EMAIL_PATTERN } from '../lib/netlifyForm'
import { OPENING_HOURS, PHONES } from '../data/site'

// TODO: colar link real do perfil de LinkedIn
const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/cristalpetmovel', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/cristal.moraes.1232/', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const [MAIN_PHONE] = PHONES

function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) {
      setError('Informe o seu e-mail.')
      setStatus('idle')
      return
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setError('Informe um e-mail válido.')
      setStatus('idle')
      return
    }

    setError('')
    setStatus('loading')
    try {
      await submitNetlifyForm('newsletter', { email: trimmed })
      setEmail('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Não preencha este campo:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="flex gap-2 justify-center sm:justify-start">
        <label htmlFor="newsletter-email" className="sr-only">
          Seu e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}
          placeholder="Seu e-mail"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-erro' : undefined}
          className={`min-w-0 flex-1 rounded-full px-4 py-2.5 font-body text-dark bg-white placeholder:text-dark/50 focus:outline-none focus:ring-2 ${
            error ? 'ring-2 ring-red-400 focus:ring-red-500' : 'focus:ring-magenta'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-magenta text-white font-body font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando…' : 'Inscrever'}
        </button>
      </div>

      <div aria-live="polite">
        {error && (
          <p id="newsletter-erro" className="font-body text-white text-sm mt-2 font-semibold">
            {error}
          </p>
        )}
        {status === 'success' && (
          <p className="font-body text-white text-sm mt-2 font-semibold">
            Inscrição confirmada! Obrigado por acompanhar a Cristal Pet.
          </p>
        )}
        {status === 'error' && (
          <p className="font-body text-white text-sm mt-2 font-semibold">
            Não foi possível inscrever agora. Tente novamente em instantes.
          </p>
        )}
      </div>
    </form>
  )
}

function Footer() {
  return (
    <footer className="relative">
      <div className="relative bg-cream pt-16 pb-24 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="px-4"
        >
          <img
            src="/img/logo-cristal-pet.webp"
            alt="Cristal Pet Móvel - banho e tosa móvel"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
            className="h-24 md:h-28 w-auto mx-auto"
          />
          <p className="font-body text-dark/70 mt-3">
            Sua pet shop móvel de confiança.
          </p>
        </motion.div>

        <WaveDivider color="text-teal" />
      </div>

      <div className="bg-teal pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-10 text-center sm:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-4">
              Siga-nos
            </h3>
            <div className="flex justify-center sm:justify-start gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border-2 border-magenta flex items-center justify-center text-magenta hover:bg-white/15 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-2">
              Atendimento
            </h3>
            {OPENING_HOURS.map((line) => (
              <p key={line} className="font-body font-semibold text-white">
                {line}
              </p>
            ))}
            <a
              href={MAIN_PHONE.href}
              className="inline-flex items-center gap-2 font-body font-semibold text-white text-xl mt-3"
            >
              <FaPhoneAlt />
              {MAIN_PHONE.label}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading font-extrabold text-magenta text-lg mb-4">
              Inscreva-se
            </h3>
            <Newsletter />
          </motion.div>
        </div>
      </div>

      {/* pb extra no mobile para que o botão flutuante de WhatsApp não cubra o texto */}
      <div className="bg-magenta pt-3 pb-24 sm:py-3">
        <p className="font-body text-white/90 text-sm text-center px-4">
          Copyright © 2026 – Cristal Pet todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
