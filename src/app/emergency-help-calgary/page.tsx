import type { Metadata } from 'next'
import Link from 'next/link'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Emergency Help in Calgary - 24/7 Home Emergency Services',
  description: 'Connect with emergency plumbing, heating, and electrical services in Calgary. Available 24/7 for basement flooding, no heat, burst pipes, and more.',
}

const emergencyCategories = [
  {
    title: 'Water Problems',
    items: [
      { label: 'Basement flooding', href: '/basement-flooding-calgary' },
      { label: 'Burst pipes', href: '/burst-pipe-calgary' },
      { label: 'Sewer backup', href: '/sewer-backup-calgary' },
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
      {/* Hero Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-6 sm:py-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
            Emergency Help in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Local Calgary contractors. Available now for home emergencies.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 sm:hidden z-50">
        <PhoneButton />
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Emergency Categories */}
        <section className="py-8 sm:py-12">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">
            Select Your Emergency
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {emergencyCategories.map((category) => (
              <div 
                key={category.title}
                className="border border-gray-200 rounded p-4 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className="text-gray-900 underline underline-offset-2 hover:text-gray-600 py-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-6 sm:py-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm sm:text-base">
            From Bowness to Bonavista. We dispatch across Calgary.
          </p>
        </section>

        {/* Final CTA - Desktop only */}
        <div className="py-8 sm:py-10 border-t border-gray-200 hidden sm:block">
          <PhoneButton />
        </div>
      </div>
    </main>
  )
}
