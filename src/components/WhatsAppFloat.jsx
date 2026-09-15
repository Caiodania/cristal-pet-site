import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK_AGENDAR } from '../data/site'

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK_AGENDAR}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform"
    >
      <span
        aria-hidden="true"
        className="cp-pulse-ring absolute inset-0 rounded-full bg-[#25D366]"
      />
      <FaWhatsapp className="relative text-3xl sm:text-4xl" />
    </a>
  )
}

export default WhatsAppFloat
