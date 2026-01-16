import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'No Heat in Calgary - Emergency Furnace Services',
  description: 'Emergency help when your furnace stops working in Calgary. Connect with local heating emergency services available 24/7.',
}

export default function NoHeatCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-12">
        
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            No Heat in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Your furnace stopped and your home is getting cold. We get you connected with Calgary heating services that respond fast.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Try This First
          </h2>
          <ul className="space-y-2 text-base sm:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Check if your thermostat is set correctly and has power</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Replace thermostat batteries if it is battery-powered</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Check your furnace breaker and reset if needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Look at your furnace for any error codes or blinking lights</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Check if your furnace filter is extremely dirty</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why This Happens Here
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Furnaces fail when Calgary needs them most. Ignition systems stop working during extreme cold. Blower motors wear out after years of use. Flame sensors get dirty and shut down the system. Cracked heat exchangers force a shutdown. Pilot lights go out on older furnaces. Frozen condensate lines block drainage.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why You Need to Act Fast
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Calgary winter temperatures drop dangerously low. Your home loses heat quickly. Pipes can freeze and burst within hours. Your family faces health risks from cold exposure. Older people and young children are especially vulnerable. Frozen pipes create expensive secondary damage.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Happens Next
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            A local heating technician diagnoses why your furnace stopped. They carry common parts and can often fix the problem during the first visit. If parts need to be ordered, they may set up temporary heating. They test the system thoroughly before leaving. Most heating services operate through the night.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Where We Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We dispatch heating help throughout Calgary. From Pineridge to Parkland, from Killarney to Kincora.
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
