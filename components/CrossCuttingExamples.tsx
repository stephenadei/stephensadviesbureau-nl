import { crossCuttingExamples } from '@/lib/methodology';

export default function CrossCuttingExamples() {
  return (
    <section className="rounded-2xl border-2 border-zinc-300 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">
      <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Cross-Cutting Real-World Examples
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {crossCuttingExamples.map((example, idx) => (
          <div
            key={idx}
            className="rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-sm dark:bg-zinc-800"
          >
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {example.title}
            </h3>
            <ul className="space-y-2">
              {example.domains.map((domain, domainIdx) => (
                <li
                  key={domainIdx}
                  className="flex items-start text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mr-2 mt-1 text-blue-500">○</span>
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

