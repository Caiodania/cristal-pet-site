// Dados de contato e atendimento usados em todo o site.
// Alterar aqui reflete no header, hero, contato, FAQ, rodapé e JSON-LD.

export const WHATSAPP_NUMBER = '5519971548471'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

export const WHATSAPP_LINK_AGENDAR = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Quero%20agendar%20um%20banho%20para%20meu%20pet.`

export const WHATSAPP_LINK_FEEDBACK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Fui atendido pela Cristal Pet e quero enviar uma foto ou vídeo do meu pet.',
)}`

export const INSTAGRAM_HANDLE = 'cristalpetmovel'

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`

export const FACEBOOK_URL = 'https://www.facebook.com/cristal.moraes.1232/'

// Reel do Instagram exibido no modal do card "Método Low Stress".
// A rota /embed/ é a versão oficial para iframe (a página normal do reel não
// permite ser incorporada).
export const LOW_STRESS_REEL_URL = 'https://www.instagram.com/reel/DOTl_ymDg28/'
export const LOW_STRESS_REEL_EMBED_URL = `${LOW_STRESS_REEL_URL}embed/`

export const PHONES = [
  { label: '(19) 97154-8471', href: 'tel:+5519971548471' },
  { label: '(19) 99904-1704', href: 'tel:+5519999041704' },
]

export const EMAIL = 'cristalpetmovel@gmail.com'

export const ADDRESS = 'Rua México, 311, Indaiatuba - SP (Escritório Central / Garagem)'

export const OPENING_HOURS = ['Seg a Sex: 8h às 17h', 'Sábado: 8h às 13h']

export const OPENING_HOURS_SENTENCE =
  'de segunda a sexta, das 8h às 17h, e aos sábados das 8h às 13h'

export const CITIES = ['Indaiatuba', 'Campinas', 'Valinhos', 'Vinhedo']
