export default function PhoneButton({ className = '' }: { className?: string }) {
  const phoneNumber = '(403) 536-6897'
  const phoneLink = 'tel:+14035366897'
  
  return (
    <a 
      href={phoneLink}
      className={`cta-primary ${className}`}
    >
      <span className="block text-sm font-normal opacity-90 mb-0.5">Calgary Emergency Line</span>
      <span className="block text-xl sm:text-2xl font-bold tracking-tight">{phoneNumber}</span>
    </a>
  )
}
