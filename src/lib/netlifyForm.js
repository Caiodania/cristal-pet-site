// Envio de formulários Netlify a partir de uma SPA.
//
// O bot do Netlify lê o HTML estático gerado no build, por isso cada formulário
// também existe em versão oculta no index.html. Em runtime o React envia os
// dados por POST na raiz do site, no formato urlencoded que o Netlify espera.

export function encode(data) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value ?? '')}`)
    .join('&')
}

export async function submitNetlifyForm(formName, values) {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...values }),
  })

  if (!response.ok) {
    throw new Error(`Falha no envio do formulário (${response.status})`)
  }
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
