import type { Metadata } from 'next'
import PhoneButton from '../components/PhoneButton'

export const metadata: Metadata = {
  title: 'Emergency Electrician in Calgary - 24/7 Electrical Services',
  description: 'Emergency electrician services in Calgary. Connect with licensed electricians available 24/7 for electrical emergencies.',
}

export default function EmergencyElectricianCalgary() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-10">
        
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available Now
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Emergency Electrician in Calgary
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
            Electrical problems can be dangerous. We get you connected with licensed Calgary electricians available now.
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
              <span>Do not touch anything that is sparking or smoking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Turn off power at the breaker if you can reach it safely</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Unplug devices near the problem if it is safe to do so</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Move flammable items away from electrical issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
              <span>Evacuate if you smell smoke or see flames</span>
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why This Happens Here
          </h2>
          <p className="text-base text-gray-700">
            Electrical emergencies happen in homes across Calgary. Overloaded circuits trip repeatedly or overheat. Aluminum wiring in older homes creates fire risks. Faulty outlets spark or burn. Panel breakers fail. Weather damage affects exterior connections. Rodents chew through wiring in attics and walls. DIY electrical work creates hazards.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Why You Need to Act Fast
          </h2>
          <p className="text-base text-gray-700">
            Electrical problems can start fires. They can cause shocks or electrocution. They can damage expensive appliances and electronics. Small issues escalate into major hazards. Licensed electricians identify hidden dangers. Quick response prevents property damage and protects your family.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            What Happens Next
          </h2>
          <p className="text-base text-gray-700">
            A licensed electrician assesses the problem safely. They identify the cause and extent of the issue. They make repairs to restore safety. They test circuits and connections thoroughly. They explain what happened and how to prevent future problems. Emergency electricians carry tools and materials for common repairs.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm text-gray-500">
            We dispatch electricians throughout Calgary. From Dover to Dalhousie, from Brentwood to Bonavista.
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
