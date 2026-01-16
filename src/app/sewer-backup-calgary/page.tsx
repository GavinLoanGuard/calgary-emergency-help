import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Sewer Backup in Calgary - Emergency Plumbing Services',
  description: 'Emergency help for sewer backup in Calgary. Connect with local emergency plumbing and remediation services available 24/7.',
}

export default function SewerBackupCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-12">
        
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Sewer Backup in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Sewage backing up into your home is a health emergency. We get you connected with Calgary plumbers who handle sewer backups.
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
              <span>Stop using all water in your home immediately</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Do not flush toilets or run faucets</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Keep children and pets away from affected areas</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Do not try to clean sewage yourself</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>Open windows if possible for ventilation</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why This Happens Here
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Sewer backups happen when the line between your home and the city main gets blocked or fails. Tree roots infiltrate older clay pipes. Grease and debris build up over years. Aging pipes in older Calgary neighborhoods collapse. Heavy rain overwhelms combined sewer systems. Main line blockages affect multiple homes.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why You Need to Act Fast
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Sewage contains dangerous bacteria and pathogens. It spreads contamination through your home. It soaks into floors, walls, and belongings. The smell becomes embedded in materials. Health risks increase with exposure time. Professional cleanup and disinfection are required.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Happens Next
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            A plumber uses cameras to locate the blockage or break. They use augering or hydro-jetting to clear the line. If the pipe is collapsed or badly damaged, they may recommend repair or replacement. They coordinate with remediation teams who clean and disinfect affected areas.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            Where We Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We dispatch sewer backup services in all Calgary areas. From Marlborough to Mount Royal, from Forest Lawn to Hounsfield Heights.
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
