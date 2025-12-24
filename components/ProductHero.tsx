import { Service } from '@/lib/services';
import Link from 'next/link';

interface ProductHeroProps {
  service: Service;
}

export default function ProductHero({ service }: ProductHeroProps) {
  const getTierColor = (tier: string) => {
    if (tier.includes('Premium')) return 'bg-indigo-600';
    if (tier.includes('Basic')) return 'bg-blue-600';
    if (tier.includes('Recurring')) return 'bg-green-600';
    return 'bg-zinc-600';
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/services"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            ← Back to Services
          </Link>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {service.orEnhanced && (
              <span className="inline-block rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                OR-Enhanced
              </span>
            )}
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${getTierColor(service.price)}`}>
              {service.price}
            </span>
            {service.featured && (
              <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            {service.name}
          </h1>
          
          <p className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
            {service.tagline}
          </p>
          
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {service.description}
          </p>
        </div>
      </div>
    </section>
  );
}

