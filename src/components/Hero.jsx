import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import WaveDivider from './WaveDivider'
import { WHATSAPP_LINK_AGENDAR } from '../data/site'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-teal overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48"
    >
      {/*
        Foto dos pets como ilustração de fundo do bloco de texto.
        Fica fora do bloco animado de propósito: `mix-blend-multiply` precisa
        compor direto com o verde-água da seção, e um elemento com opacity
        animada (ou z-index) criaria um stacking context que isola a mistura.
        O multiply faz o fundo branco da foto sumir dentro do verde sem
        precisar recortar a imagem.
      */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto h-full px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative">
            {/*
              Ampliada e sangrando pela esquerda: o corte descarta as margens
              brancas vazias da foto (o conteúdo vive entre 12% e 88% da
              largura) e joga a massa dos pets — concentrada na parte de baixo
              da imagem — atrás dos parágrafos, deixando o título magenta livre.

              No desktop ancora na base da coluna de texto. No mobile o layout
              empilha e esta célula passa a ter a altura inteira da seção, então
              ancorar na base jogaria a foto em cima do cão do hero; por isso
              ali ela é posicionada pelo topo, ficando atrás do texto e parando
              antes da foto principal.
            */}
            <img
              src="/img/hero-pets-fundo.jpg"
              alt=""
              width={1492}
              height={643}
              loading="eager"
              fetchPriority="low"
              decoding="async"
              className="absolute top-[39%] bottom-auto left-[-22%] w-[150%] h-auto max-w-none opacity-[0.18] mix-blend-multiply md:top-auto md:bottom-[4%] md:left-[-26%] md:w-[140%] lg:w-[150%] xl:w-[172%]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <span className="font-body font-bold text-magenta uppercase tracking-wide text-sm">
            Banho e Tosa Móvel
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-dark mt-2">
            Conforto, segurança e zero estresse,{' '}
            <span className="text-magenta font-extrabold">na porta da sua casa.</span>
          </h1>

          <p className="font-body font-normal text-dark/80 text-lg mt-6 max-w-md mx-auto md:mx-0">
            O cuidado premium que seu melhor amigo merece. O Banho e Tosa
            Móvel que Transforma o Cuidado do seu Pet.
          </p>

          <p className="font-body font-bold text-dark text-lg mt-4 max-w-md mx-auto md:mx-0">
            Atendemos Indaiatuba, Campinas, Valinhos e Vinhedo.
          </p>

          <a
            href={WHATSAPP_LINK_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-magenta text-white font-body font-semibold text-lg px-8 py-4 rounded-full mt-8 shadow-lg hover:brightness-110 hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            Agendar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end md:self-end md:-mb-32"
        >
          <div className="absolute top-2 left-2 sm:-top-4 sm:left-0 w-16 h-16 rounded-full bg-white/25 hidden sm:block" />
          <div className="absolute top-16 right-0 w-10 h-10 rounded-full bg-magenta/30 hidden sm:block" />

          <img
            src="/img/hero-pet.webp"
            alt="Cão sorridente cercado por bolhas de sabão após o banho na unidade móvel"
            width={900}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative w-64 sm:w-80 md:w-full max-w-md h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <WaveDivider color="text-magenta" />
    </section>
  )
}

export default Hero
