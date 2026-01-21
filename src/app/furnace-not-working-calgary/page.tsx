import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: "Furnace Not Working in Calgary - Emergency Repair Services",
  description: "Emergency furnace repair in Calgary. Connect with local furnace technicians available 24/7 when your furnace won't start or keep running.",
}

export default function FurnaceNotWorkingCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
        
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Furnace Not Working in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            Your furnace will not start or keep running. We get you connected with local Calgary furnace repair.
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
              <span>Make sure your thermostat is set to heat and above current temperature</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Check that your furnace power switch is on</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Look at your circuit breaker panel and reset the furnace breaker if tripped</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Replace your furnace filter if it looks clogged</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Listen for any sounds when the furnace tries to start</span>
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why This Happens Here
          </h2>
          <p className="text-base text-gray-700">
            Furnace problems happen throughout Calgary's heating season. Dirty filters restrict airflow and cause overheating shutdowns. Failed limit switches prevent operation. Worn bearings in blower motors create noise and failure. Control boards fail from power surges. Gas valves stick or fail. Thermocouples wear out on older units.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why You Need to Act Fast
          </h2>
          <p className="text-base text-gray-700">
            A furnace that stops during Calgary winter creates an urgent situation. Indoor temperatures drop steadily. Plumbing freezes when temperatures stay below zero. Your home becomes uncomfortable and unsafe. The sooner a technician diagnoses the problem, the sooner you have heat restored.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            What Happens Next
          </h2>
          <p className="text-base text-gray-700">
            A technician inspects your furnace and tests components. They identify why it is not starting or running properly. They replace failed parts or repair control issues. They verify proper operation and safety before finishing. Emergency furnace services stock common parts for faster repairs.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm text-gray-500">
            We dispatch furnace repair help across Calgary. From Acadia to Arbour Lake, from Whitehorn to Woodlands.
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
