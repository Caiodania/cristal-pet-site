import { motion } from 'framer-motion'
import { fadeUp, fadeUpContainer, viewportOnce } from '../lib/motion'

// Pets reais da galeria reunidos em volta da logo, como um retrato de família.
// A partir de 1024px formam um arco em fileira única (os das pontas menores e
// mais baixos, os do meio maiores e encostados na logo); abaixo disso ficam em
// duas fileiras de quatro sob a logo. O selo da logo tem shrink-0 para não ser
// esmagado pelo flex. Os recortes quadrados ficam em public/img/pets/.
const LEFT = [
  {
    src: '/img/pets/pet-g08.webp',
    alt: 'Golden retriever com bandana vermelha',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20',
    shift: 'lg:translate-y-8',
    tilt: '-rotate-6',
  },
  {
    src: '/img/pets/pet-g03.webp',
    alt: 'Lulu da pomerânia branco com laço vermelho',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24',
    shift: 'lg:translate-y-3',
    tilt: 'rotate-3',
  },
  {
    src: '/img/pets/pet-g01.webp',
    alt: 'Shih tzu branco com laço vermelho',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28',
    shift: 'lg:-translate-y-2',
    tilt: '-rotate-3',
  },
  {
    src: '/img/pets/pet-g05.webp',
    alt: 'Lulu da pomerânia creme sorrindo com gravata branca',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24',
    shift: 'lg:translate-y-4',
    tilt: 'rotate-6',
    hug: 'lg:-mr-4 xl:-mr-6 z-10',
  },
]

const RIGHT = [
  {
    src: '/img/pets/pet-g07.webp',
    alt: 'Cão branco com gorro de Papai Noel e gravata verde',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24',
    shift: 'lg:translate-y-4',
    tilt: '-rotate-6',
    hug: 'lg:-ml-4 xl:-ml-6 z-10',
  },
  {
    src: '/img/pets/pet-g02.webp',
    alt: 'Cocker spaniel dourado com gravata natalina',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28',
    shift: 'lg:-translate-y-2',
    tilt: 'rotate-3',
  },
  {
    src: '/img/pets/pet-g09.webp',
    alt: 'Filhote de golden retriever com enfeite de cabeça',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24',
    shift: 'lg:translate-y-3',
    tilt: '-rotate-3',
  },
  {
    src: '/img/pets/pet-g04.webp',
    alt: 'Cão caramelo e branco com gravata borboleta vermelha',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20',
    shift: 'lg:translate-y-8',
    tilt: 'rotate-6',
  },
]

function Pet({ src, alt, size, shift, tilt, hug = '' }) {
  return (
    <motion.img
      variants={fadeUp}
      src={src}
      alt={alt}
      width={360}
      height={360}
      loading="lazy"
      decoding="async"
      className={`relative shrink-0 rounded-full object-cover border-4 border-white shadow-lg bg-white ${size} ${shift} ${tilt} ${hug} transition-transform duration-300 hover:scale-110 hover:rotate-0`}
    />
  )
}

function PetFamily() {
  return (
    <motion.div
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mx-auto max-w-6xl"
    >
      <img
        src="/img/bolhas.webp"
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[28rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40 lg:w-[44rem]"
      />
      <img
        src="/img/patinhas.png"
        alt=""
        aria-hidden="true"
        width={34}
        height={44}
        loading="lazy"
        className="absolute -top-2 left-2 w-6 h-auto -rotate-12 md:left-10"
      />
      <img
        src="/img/patinhas.png"
        alt=""
        aria-hidden="true"
        width={34}
        height={44}
        loading="lazy"
        className="absolute -bottom-4 right-2 w-7 h-auto rotate-[18deg] md:right-10"
      />

      <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-2 xl:gap-3">
        <div className="order-2 flex items-center justify-center gap-2 lg:order-1 lg:gap-2 xl:gap-3">
          {LEFT.map((pet) => (
            <Pet key={pet.src} {...pet} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="order-1 relative shrink-0 rounded-full bg-white p-4 shadow-xl ring-8 ring-teal/15 lg:order-2 lg:p-5 xl:p-6"
        >
          <img
            src="/img/logo-cristal-pet.webp"
            alt="Cristal Pet Móvel - banho e tosa móvel"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-28 h-auto md:w-32 lg:w-32 xl:w-44"
          />
        </motion.div>

        <div className="order-3 flex items-center justify-center gap-2 lg:gap-2 xl:gap-3">
          {RIGHT.map((pet) => (
            <Pet key={pet.src} {...pet} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default PetFamily
