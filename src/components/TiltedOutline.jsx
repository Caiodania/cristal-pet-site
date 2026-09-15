// Contorno magenta deslocado e inclinado que aparece atrás dos cards e das fotos
// do site original. Deve ser usado dentro de um container `relative` e antes do
// conteúdo, para que o card pintado fique por cima e só as bordas apareçam.
function TiltedOutline({ rotate = -3, x = 10, y = 10, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border-[3px] border-magenta ${className}`}
      style={{ transform: `rotate(${rotate}deg) translate(${x}px, ${y}px)` }}
    />
  )
}

export default TiltedOutline
