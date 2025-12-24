import { Service } from '@/lib/services';
import Link from 'next/link';

interface ProductMethodsProps {
  service: Service;
}

export default function ProductMethods({ service }: ProductMethodsProps) {
  if (!service.details.mathematicalMethods || service.details.mathematicalMethods.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 dark:border-indigo-800 dark:from-zinc-800 dark:to-zinc-900">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Mathematical Methods
      </h2>
      <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
        This service leverages advanced Operations Research and mathematical techniques to provide 
        mathematical certainty, not guesswork.
      </p>
      
      <div className="mb-6 flex flex-wrap gap-3">
        {service.details.mathematicalMethods.map((method, idx) => (
          <span
            key={idx}
            className="inline-block rounded-lg bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
          >
            {method}
          </span>
        ))}
      </div>

      <Link
        href="/methodology"
        className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
      >
        Learn more about our mathematical framework →
      </Link>
    </section>
  );
}

