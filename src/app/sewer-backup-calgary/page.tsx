import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Sewer Backup in Calgary - Emergency Plumbing Services',
  description: 'Emergency help for sewer backup in Calgary. Connect with local emergency plumbing and remediation services available 24/7.',
}

export default function SewerBackupCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
        
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Sewer Backup in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            Sewage backing up into your home is a health emergency. We get you connected with Calgary plumbers who handle sewer backups.
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
              <span>Stop using all water in your home immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Do not flush toilets or run faucets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Keep children and pets away from affected areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Do not try to clean sewage yourself</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Open windows if possible for ventilation</span>
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why This Happens Here
          </h2>
          <p className="text-base text-gray-700">
            Sewer backups happen when the line between your home and the city main gets blocked or fails. Tree roots infiltrate older clay pipes. Grease and debris build up over years. Aging pipes in older Calgary neighborhoods collapse. Heavy rain overwhelms combined sewer systems. Main line blockages affect multiple homes.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why You Need to Act Fast
          </h2>
          <p className="text-base text-gray-700">
            Sewage contains dangerous bacteria and pathogens. It spreads contamination through your home. It soaks into floors, walls, and belongings. The smell becomes embedded in materials. Health risks increase with exposure time. Professional cleanup and disinfection are required.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            What Happens Next
          </h2>
          <p className="text-base text-gray-700">
            A plumber uses cameras to locate the blockage or break. They use augering or hydro-jetting to clear the line. If the pipe is collapsed or badly damaged, they may recommend repair or replacement. They coordinate with remediation teams who clean and disinfect affected areas.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm text-gray-500">
            We dispatch sewer backup services in all Calgary areas. From Marlborough to Mount Royal, from Forest Lawn to Hounsfield Heights.
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
