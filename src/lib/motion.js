export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export const viewportOnce = { once: true, amount: 0.2 }
