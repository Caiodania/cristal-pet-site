import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'
import WaveDivider from './WaveDivider'
import SectionAccent from './SectionAccent'

function CtaBanner() {
  return (
    <section className="relative">
      <WaveDivider color="text-cream" flip />

      <div className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="/img/cta-gatinhos.webp"
          alt="Dois gatinhos ragdoll brincando com bolinhas coloridas"
          width={1600}
          height={867}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/80" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <SectionAccent className="mx-auto mb-4" />

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <span className="text-magenta">Pronto para Proporcionar a </span>
            <span className="text-teal">Melhor</span>
            <span className="text-magenta"> Experiência</span>
            <span className="text-dark"> para o seu </span>
            <span className="text-magenta">Pet</span>
          </h2>

          <p className="font-body text-dark/70 text-lg mt-6 max-w-xl mx-auto">
            Diga adeus ao estresse dos pet shops convencionais. Agende agora e
            descubra por que somos a escolha número 1 de quem ama seus
            animais.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-8 py-4 rounded-full mt-8 shadow-lg hover:brightness-110 hover:scale-105 transition"
          >
            Clique aqui
          </a>
        </motion.div>
      </div>

      <WaveDivider color="text-cream" />
    </section>
  )
}

export default CtaBanner
