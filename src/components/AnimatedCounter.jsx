import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({
  target,
  suffix = '',
  duration = 1.6,
  numberClassName = '',
  suffixClassName = '',
}) {
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
      setValue(Math.round(progress * target))
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
      <span className={numberClassName}>{value.toLocaleString('pt-BR')}</span>
      {suffix && <span className={`ml-1 ${suffixClassName}`}>{suffix}</span>}
    </span>
  )
}

export default AnimatedCounter
