import MethodologyDomain from '@/components/MethodologyDomain';
import CrossCuttingExamples from '@/components/CrossCuttingExamples';
import { mathDomains } from '@/lib/methodology';
import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Operations Research Mathematical Framework
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 italic">
              Comprehensive mapping of mathematical domains to real-world OR applications
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Every complex business problem can be broken down into mathematical foundations. 
              This framework shows how I approach data challenges using proven mathematical principles 
              from operations research.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {mathDomains.map((domain) => (
              <MethodologyDomain key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Cutting Examples */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CrossCuttingExamples />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Apply This Methodology?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how these mathematical frameworks can solve your business challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm transition-colors hover:bg-blue-50"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold leading-6 text-white"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

