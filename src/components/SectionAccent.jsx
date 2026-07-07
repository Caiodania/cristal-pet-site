function SectionAccent({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 text-orange-500 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 3L4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 3L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 3L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default SectionAccent
