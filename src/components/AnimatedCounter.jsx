import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = null
    let frameId

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {value.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
