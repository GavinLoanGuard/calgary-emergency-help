import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Basement Flooding in Calgary - Emergency Water Removal Services',
  description: 'Emergency basement flooding help in Calgary. Connect with local water damage and flooding response services available 24/7.',
}

export default function BasementFloodingCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-12">
        
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Basement Flooding in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Water in your basement needs immediate attention. We get you connected with local Calgary flooding response.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Do This First
          </h2>
          <ul className="space-y-2 text-base sm:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Turn off power to the basement if you can reach the breaker safely</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Do not walk through standing water if outlets or appliances are submerged</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Move items off the floor if it is safe to do so</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Find the water source if possible</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Take photos for insurance before water is removed</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why This Happens Here
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Basement flooding happens in Calgary for several reasons. Rapid snow melt in spring overwhelms drainage systems. Older homes in established neighborhoods often have clay pipes that crack or collapse. Heavy summer storms can back up into floor drains. Frozen pipes burst when chinooks hit. Sump pump failures during power outages cause backups.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why You Need to Act Fast
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Water damage gets worse every hour. Drywall wicks moisture up the walls. Mold starts growing within 24 to 48 hours. Wooden framing absorbs water and weakens. Flooring buckles. The longer water sits, the more you lose and the higher your costs.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Happens Next
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            A local team assesses the source and extent of flooding. They extract standing water with pumps and vacuums. They set up fans and dehumidifiers to dry out materials. They document damage for your insurance claim. Most services operate 24/7 because flooding does not wait.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Where We Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We dispatch flooding response throughout Calgary. From Ramsay to Royal Oak, from Inglewood to Edgemont.
          </p>
        </section>

        <div className="hidden sm:block">
          <PhoneButton />
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 sm:hidden z-50">
        <PhoneButton />
      </div>
    </main>
  )
}
