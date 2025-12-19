import Link from 'next/link';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 ${
        featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {featured && (
            <div className="mb-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </div>
          )}
          {service.orEnhanced && (
            <div className="mb-2 inline-block rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white mr-2">
              OR-Enhanced
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {service.name}
        </h3>
        <p className="mt-2 text-lg font-medium text-blue-600 dark:text-blue-400">
          {service.price}
        </p>
      </div>

      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        {service.tagline}
      </p>

      <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-500">
        {service.description}
      </p>

      {service.details.mathematicalMethods && service.details.mathematicalMethods.length > 0 && (
        <div className="mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:from-zinc-800 dark:to-zinc-900">
          <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Mathematical Methods:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.details.mathematicalMethods.map((method, idx) => (
              <span
                key={idx}
                className="inline-block rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Who is it for?
          </h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            {service.details.who.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {service.details.pricing && (
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
            <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Pricing:
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {service.details.pricing.basic}
            </p>
            {service.details.pricing.pro && (
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {service.details.pricing.pro}
              </p>
            )}
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500 italic">
              Contact us for detailed pricing information
            </p>
          </div>
        )}
      </div>

      <Link
        href={`/services#${service.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Learn More →
      </Link>
    </div>
  );
}
