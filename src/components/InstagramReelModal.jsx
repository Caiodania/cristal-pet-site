import { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const INSTAGRAM_ORIGIN = 'https://www.instagram.com'
// Altura inicial aproximada de um reel incorporado com ~380px de largura;
// o Instagram envia a altura exata por postMessage assim que o embed renderiza.
const DEFAULT_HEIGHT = 760

// O estado "aberto" vive no React: Esc e clique no backdrop chamam onClose e o
// efeito abaixo fecha o <dialog>. O evento `close` nativo fica só como
// sincronização (ex.: gesto de voltar no celular via closedby="any").
function InstagramReelModal({ open, onClose, embedUrl, title }) {
  const dialogRef = useRef(null)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
    // Ao fechar, volta ao estado inicial para o spinner aparecer na próxima abertura.
    if (!open) setLoaded(false)
  }, [open])

  // Trava o scroll da página enquanto o vídeo está aberto.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // O embed do Instagram avisa a altura real com {type:'MEASURE', details:{height}}.
  useEffect(() => {
    if (!open) return
    const handleMessage = (event) => {
      if (event.origin !== INSTAGRAM_ORIGIN) return
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
        if (data?.type === 'MEASURE' && Number(data.details?.height) > 0) {
          setHeight(Number(data.details.height))
        }
      } catch {
        // mensagens de outros scripts do Instagram não são JSON; ignorar
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [open])

  // Clique no backdrop: o alvo é o próprio <dialog> (o conteúdo é filho dele).
  // Também serve de fallback para navegadores sem `closedby` (Safari).
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose()
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Escape') return
    event.preventDefault()
    onClose()
  }

  const handleNativeClose = () => {
    if (open) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby="reel-low-stress-titulo"
      onClose={handleNativeClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      className="cp-modal m-auto w-[min(92vw,400px)] max-w-none max-h-[92vh] p-0 border-0 bg-transparent backdrop:bg-dark/75 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-3 bg-magenta text-white">
          <h2
            id="reel-low-stress-titulo"
            className="font-heading font-extrabold text-base inline-flex items-center gap-2 min-w-0"
          >
            <FaInstagram className="text-lg shrink-0" />
            <span className="truncate">{title}</span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="relative overflow-y-auto overscroll-contain bg-white">
          {open && (
            <>
              {!loaded && (
                <div
                  className="absolute inset-x-0 top-0 flex flex-col items-center justify-center gap-3 bg-white text-dark/60 font-body text-sm"
                  style={{ height }}
                  aria-live="polite"
                >
                  <span className="w-10 h-10 rounded-full border-4 border-teal/30 border-t-teal animate-spin" />
                  Carregando vídeo…
                </div>
              )}
              <iframe
                src={embedUrl}
                title={title}
                width="100%"
                height={height}
                style={{ height }}
                onLoad={() => setLoaded(true)}
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="block w-full border-0"
              />
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default InstagramReelModal
