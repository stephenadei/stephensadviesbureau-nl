import ServiceCard from '@/components/ServiceCard';
import { services, quickWinServices, systemsBuilderServices, recurringServices, strategicServices, orMathematicalServices } from '@/lib/services';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From quick wins to comprehensive systems, we have solutions for every stage of your business journey.
            </p>
          </div>
        </div>
      </section>

      {/* OR & Mathematical Services */}
      <section id="or-mathematical" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Operations Research & Mathematical Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Mathematical Certainty, Not Guesswork
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I don't just connect wires—I understand the engine. These services leverage deep mathematical expertise 
              in Operations Research to solve problems that standard business logic cannot solve.
            </p>
            <p className="mt-2 text-base leading-7 text-zinc-500 dark:text-zinc-500">
              <Link href="/methodology" className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
                See the mathematical frameworks →
              </Link>
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-1">
            {orMathematicalServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Services */}
      <section id="strategic-services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Strategic Services: The Full Experience
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              For businesses ready to move from "vibes" to strategy. These packages include workshops, deep analysis, and strategic guidance—not just dashboards.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-1">
            {strategicServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Front Window Services */}
      <section id="front-window" className="py-24 bg-zinc-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Quick Entry Points
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Perfect starting points for businesses ready to get clarity. Lower investment, fast results.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-2">
            {services.filter(s => s.featured && s.category !== 'strategic-services').map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section id="quick-wins" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Quick Wins (Entry Level)
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Easy to sell, quick to implement. These packages solve immediate pain points.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
            {quickWinServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Builders */}
      <section id="systems-builders" className="py-24 bg-zinc-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Systems Builders (Mid-Range)
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Comprehensive solutions that require building and integrating tools. These transform how you work.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-2">
            {systemsBuilderServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Services */}
      <section id="recurring" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Peace of Mind (Recurring)
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Ongoing support and maintenance. Keep your systems running smoothly.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-2">
            {recurringServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secret Menu Note */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Need Something Custom?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Don't see exactly what you need? Let's talk. I can create custom solutions tailored to your business.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm transition-colors hover:bg-blue-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

