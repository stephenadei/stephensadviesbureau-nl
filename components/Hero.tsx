import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Operations Research Strategist
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
            I Don't Just Build Dashboards.
            <br />
            <span className="text-blue-600 dark:text-blue-400">I Find Your Lost Money</span>
            <br />
            And Show You How to Keep It.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Stop running your business on "vibes." As your Data Strategist specializing in Operations Research, 
            I use advanced mathematics to squeeze efficiency out of messy businesses. Mathematical certainty, not guesswork.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-500">
            Turning data chaos into mathematical certainty. I don't just connect wires—I understand the engine.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/services#profit-clarity"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Explore The Profit Clarity Program
            </Link>
            <Link
              href="/services#or-mathematical"
              className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100"
            >
              OR Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
