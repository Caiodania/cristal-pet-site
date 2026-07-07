function WaveDivider({ color = 'text-cream', flip = false, className = '' }) {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-none ${flip ? 'top-0 -translate-y-full rotate-180' : 'bottom-0 translate-y-px'} ${color} ${className}`}
    >
      <svg
        className="w-full h-16 md:h-24"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default WaveDivider
