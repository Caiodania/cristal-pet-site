import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

const EMBED_SCRIPT_SRC = 'https://www.instagram.com/embed.js'

// O script do Instagram substitui o conteúdo do blockquote pelo iframe do post.
// Ele pesa alguns cem KB, então só é baixado quando o embed chega perto da tela.
function loadEmbedScript() {
  if (window.instgrm?.Embeds) return Promise.resolve()

  const existing = document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener('load', resolve, { once: true })
    })
  }

  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = EMBED_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', resolve, { once: true })
    document.body.appendChild(script)
  })
}

function InstagramEmbed({ permalink, description }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '300px' })

  useEffect(() => {
    if (!isInView) return

    let active = true
    loadEmbedScript().then(() => {
      if (active) window.instgrm?.Embeds?.process()
    })

    return () => {
      active = false
    }
  }, [isInView])

  return (
    <div ref={ref} className="w-full">
      {/*
        Sem `data-instgrm-captioned`: o embed mostra só o cabeçalho, o vídeo e
        as ações, escondendo a legenda com hashtags que deixava o card longo
        e poluído.
      */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 0,
          margin: 0,
          maxWidth: 540,
          minWidth: 0,
          padding: 0,
          width: '100%',
        }}
      >
        {/* Placeholder com altura próxima do embed final, para a página não pular. */}
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[420px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-cream to-white px-6 py-16 text-center no-underline"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-magenta/10">
            <FaInstagram className="text-3xl text-magenta" />
          </span>
          <span className="font-body font-semibold text-dark">{description}</span>
          <span className="font-body text-sm font-semibold text-magenta">Ver no Instagram</span>
        </a>
      </blockquote>
    </div>
  )
}

export default InstagramEmbed
