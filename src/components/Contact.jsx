import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'

// TODO: colar link real do perfil de LinkedIn
const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/cristalpetmovel', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/cristal.moraes.1232/', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const CONTACT_CARDS = [
  { icon: FaPhoneAlt, title: 'Telefone', value: '(19) 97154-8471 e (19) 99904-1704' },
  { icon: FaMapMarkerAlt, title: 'Endereço', value: 'Rua México, 311, Indaiatuba - SP (Escritório Central / Garagem)' },
  { icon: FaEnvelope, title: 'E-mail', value: 'cristalpetmovel@gmail.com' },
]

function Contact() {
  return (
    <section id="contato" className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="hidden md:block"
          >
            <img
              src="https://placehold.co/600x700/4BC0AF/FAF9F5?text=Foto+do+Pet"
              alt="Pet da Cristal Pet"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
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

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-full px-5 py-3 font-body text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-full px-5 py-3 font-body text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full rounded-2xl px-5 py-3 font-body text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-teal resize-none"
              />
              <button
                type="submit"
                className="w-full bg-teal text-white font-body font-semibold py-3 rounded-full hover:brightness-110 transition"
              >
                Enviar
              </button>
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
          className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-16"
        >
          {CONTACT_CARDS.map(({ icon: Icon, title, value }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`bg-white rounded-2xl border-2 border-magenta/30 shadow-lg p-6 text-center ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
            >
              <Icon className="text-2xl text-magenta mx-auto mb-3" />
              <h3 className="font-heading font-extrabold text-dark mb-1">
                {title}
              </h3>
              <p className="font-body text-dark/70 text-sm">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
