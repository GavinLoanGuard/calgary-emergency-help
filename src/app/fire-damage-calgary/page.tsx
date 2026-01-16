import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Fire and Smoke Damage Restoration in Calgary - Emergency Services',
  description: 'Emergency fire and smoke damage restoration in Calgary. Connect with local restoration services available 24/7.',
}

export default function FireDamageCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
        
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Fire and Smoke Damage in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            After the fire department leaves, restoration needs to start. We get you connected with Calgary fire damage teams.
          </p>
          
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
        </div>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Do This First
          </h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Do not enter until the fire department clears the structure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Contact your insurance company to open a claim</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Document damage with photos and video before anything is moved</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Do not attempt to clean soot or smoke damage yourself</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Keep the HVAC system off to prevent spreading soot</span>
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why Fast Response Matters
          </h2>
          <p className="text-base text-gray-700">
            Smoke and soot cause permanent damage within hours. Soot is acidic and etches into surfaces. Smoke odor penetrates deeper every day. Metal fixtures start to corrode. Upholstery and fabrics yellow and stain. The longer you wait, the more belongings become unsalvageable. Professional restoration within 24-48 hours saves the most.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            What Happens Next
          </h2>
          <p className="text-base text-gray-700">
            A restoration team secures the property with board-up and tarping if needed. They assess structural damage and safety. They remove debris and damaged materials. They clean soot from salvageable surfaces using specialized equipment. They use ozone and thermal fogging to eliminate smoke odor. They work with your insurance adjuster throughout the process.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Types of Fire Damage We Help With
          </h2>
          <p className="text-base text-gray-700">
            Kitchen fires, electrical fires, furnace malfunctions, garage fires, and smoke damage from nearby fires. Even small fires leave soot and odor that require professional cleaning. Restoration companies handle everything from minor smoke damage to complete rebuilds.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm text-gray-500">
            We dispatch fire damage restoration throughout Calgary. From Altadore to Abbeydale, from Scenic Acres to Sundance.
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
