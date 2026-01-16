import type { Metadata } from 'next'
import Link from 'next/link'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Emergency Help in Calgary - 24/7 Home Emergency Services',
  description: 'Connect with emergency plumbing, heating, electrical, and restoration services in Calgary. Available 24/7 for flooding, fire damage, no heat, and more.',
}

const emergencyCategories = [
  {
    title: 'Water and Flood Damage',
    items: [
      { label: 'Water damage restoration', href: '/water-damage-calgary' },
      { label: 'Basement flooding', href: '/basement-flooding-calgary' },
      { label: 'Burst pipes', href: '/burst-pipe-calgary' },
      { label: 'Sewer backup', href: '/sewer-backup-calgary' },
    ],
  },
  {
    title: 'Fire and Mold',
    items: [
      { label: 'Fire and smoke damage', href: '/fire-damage-calgary' },
      { label: 'Mold removal', href: '/mold-removal-calgary' },
    ],
  },
  {
    title: 'Heating Problems',
    items: [
      { label: 'Furnace stopped working', href: '/no-heat-calgary' },
      { label: "Furnace won't start", href: '/furnace-not-working-calgary' },
    ],
  },
  {
    title: 'Electrical Problems',
    items: [
      { label: 'Sparks or power problems', href: '/emergency-electrician-calgary' },
      { label: 'Burning smell from outlets', href: '/burning-smell-electrical-calgary' },
    ],
  },
]

export default function EmergencyHelpCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Emergency Help in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Local contractors. Available now. We dispatch across Calgary.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>
      </div>

      <div className="cta-sticky">
        <PhoneButton />
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <section className="py-6 sm:py-10">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5">
            Select Your Emergency
          </h2>

          <div className="space-y-3">
            {emergencyCategories.map((category) => (
              <div 
                key={category.title}
                className="border border-gray-200 rounded p-4 sm:p-5 bg-white"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className="text-gray-900 hover:text-emerald-700 py-1 inline-flex items-center gap-1 transition-colors"
                      >
                        <span className="underline underline-offset-2">{item.label}</span>
                        <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-4 sm:py-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Serving all Calgary communities. From Bowness to Bonavista.
          </p>
        </section>

        <div className="py-6 sm:py-8 border-t border-gray-200 hidden sm:block">
          <PhoneButton />
        </div>
      </div>
    </main>
  )
}
