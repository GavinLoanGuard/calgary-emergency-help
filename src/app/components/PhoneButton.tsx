export default function PhoneButton({ className = '' }: { className?: string }) {
  const phoneNumber = '(403) XXX-XXXX'
  const phoneLink = 'tel:+14035551234'
  
  return (
    <a 
      href={phoneLink}
      className={`block w-full sm:inline-block sm:w-auto bg-gray-900 text-white font-semibold text-center text-lg sm:text-xl px-6 py-4 sm:px-10 sm:py-5 rounded-sm hover:bg-gray-800 active:bg-gray-950 transition-colors ${className}`}
    >
      {phoneNumber}
    </a>
  )
}
