import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Burning Smell From Electrical in Calgary - Emergency Help',
  description: 'Emergency help for burning electrical smell in Calgary. Connect with licensed emergency electricians available 24/7.',
}

export default function BurningSmellElectricalCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-12">
        
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Burning Smell From Electrical in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            A burning smell from outlets, switches, or your electrical panel means immediate danger. We get you connected with Calgary electricians who respond fast.
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
              <span>Shut off power at your main breaker if you can safely reach it</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Unplug everything from outlets near the burning smell</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Do not use outlets or switches that smell like burning</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Do not touch anything that feels hot</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Leave your home if smoke is visible</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why This Happens Here
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Burning electrical smells signal serious problems. Overloaded circuits overheat wiring behind walls. Loose connections create arcing and heat. Faulty breakers fail to trip when they should. Backstabbed outlets common in 1980s Calgary homes work loose and burn. Aluminum wiring oxidizes and overheats. Old knob and tube wiring in heritage homes breaks down.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why You Need to Act Fast
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Burning electrical components start house fires. The smell is your warning before visible flames. Wiring burns inside walls where you cannot see it. Fires spread through wall cavities quickly. Every minute increases fire risk. Only a licensed electrician can safely identify and fix the cause.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Happens Next
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            An electrician locates the source of the burning smell. They inspect wiring, connections, outlets, switches, and panels. They identify overheated or damaged components. They make emergency repairs to eliminate the fire hazard. They test everything to ensure safety. They may need to expose wiring inside walls.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Where We Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We dispatch electricians across Calgary. From Falconridge to Fairview, from Tuscany to Thorncliffe.
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
