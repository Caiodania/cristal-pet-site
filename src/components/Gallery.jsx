import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FiZoomIn } from 'react-icons/fi'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'
import SectionAccent from './SectionAccent'
import { GALERIA } from '../data/galeria'

const SLIDES = GALERIA.map(({ slug, alt, fullWidth, fullHeight }) => ({
  src: `/img/galeria/${slug}-full.webp`,
  alt,
  width: fullWidth,
  height: fullHeight,
}))

function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section id="galeria" className="relative bg-cream py-20 md:py-28">
      <div className="max-w-7xl 2xl:max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <SectionAccent className="mx-auto mb-2" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-magenta">Nossa </span>
            <span className="text-dark">galeria</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="columns-2 sm:columns-3 lg:columns-4 gap-4"
        >
          {GALERIA.map(({ slug, alt, width, height }, photoIndex) => (
            <motion.button
              key={slug}
              type="button"
              variants={fadeUp}
              onClick={() => setIndex(photoIndex)}
              aria-label={`Ampliar foto: ${alt}`}
              className="group relative mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta"
            >
              <img
                src={`/img/galeria/${slug}.webp`}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={SLIDES}
      />
    </section>
  )
}

export default Gallery
