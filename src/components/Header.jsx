import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK_AGENDAR } from '../data/site'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Faq', href: '#faq' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Cristal Pet Móvel - página inicial">
          <img
            src="/img/logo-cristal-pet.webp"
            alt="Cristal Pet Móvel - banho e tosa móvel"
            width={500}
            height={500}
            className="h-12 md:h-16 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-semibold text-dark hover:text-magenta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK_AGENDAR}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition"
        >
          <FaWhatsapp className="text-lg" />
          Agendar
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="lg:hidden text-dark text-2xl"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-cream border-t border-dark/10"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body font-semibold text-dark hover:text-magenta transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-magenta text-white font-body font-semibold px-5 py-2.5 rounded-full"
              >
                <FaWhatsapp className="text-lg" />
                Agendar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
