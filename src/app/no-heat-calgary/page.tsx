import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'No Heat in Calgary - Emergency Furnace Services',
  description: 'Emergency help when your furnace stops working in Calgary. Connect with local heating emergency services available 24/7.',
}

export default function NoHeatCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
        
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            No Heat in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            Your furnace stopped and your home is getting cold. We get you connected with Calgary heating services that respond fast.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Try This First
          </h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Check if your thermostat is set correctly and has power</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Replace thermostat batteries if it is battery-powered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Check your furnace breaker and reset if needed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Look at your furnace for any error codes or blinking lights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Check if your furnace filter is extremely dirty</span>
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why This Happens Here
          </h2>
          <p className="text-base text-gray-700">
            Furnaces fail when Calgary needs them most. Ignition systems stop working during extreme cold. Blower motors wear out after years of use. Flame sensors get dirty and shut down the system. Cracked heat exchangers force a shutdown. Pilot lights go out on older furnaces. Frozen condensate lines block drainage.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why You Need to Act Fast
          </h2>
          <p className="text-base text-gray-700">
            Calgary winter temperatures drop dangerously low. Your home loses heat quickly. Pipes can freeze and burst within hours. Your family faces health risks from cold exposure. Older people and young children are especially vulnerable. Frozen pipes create expensive secondary damage.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            What Happens Next
          </h2>
          <p className="text-base text-gray-700">
            A local heating technician diagnoses why your furnace stopped. They carry common parts and can often fix the problem during the first visit. If parts need to be ordered, they may set up temporary heating. They test the system thoroughly before leaving. Most heating services operate through the night.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm text-gray-500">
            We dispatch heating help throughout Calgary. From Pineridge to Parkland, from Killarney to Kincora.
          </p>
        </section>

        <div className="hidden sm:block">
          <PhoneButton />
        </div>
      </div>

      <div className="cta-sticky">
        <PhoneButton />
      </div>
    </main>
  )
}
