import { Service } from '@/lib/services';
import Link from 'next/link';

interface ProductPricingProps {
  service: Service;
}

export default function ProductPricing({ service }: ProductPricingProps) {
  return (
    <section className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-blue-800 dark:from-zinc-800 dark:to-zinc-900">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        Pricing
      </h2>
      
      <div className="mb-6">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-base font-semibold text-white">
            {service.price}
          </span>
        </div>
        
        {service.details.pricing && (
          <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
            {service.details.pricing.basic && (
              <p className="text-base">{service.details.pricing.basic}</p>
            )}
            {service.details.pricing.pro && (
              <p className="text-base">{service.details.pricing.pro}</p>
            )}
          </div>
        )}
        
        <p className="mt-4 text-sm italic text-zinc-600 dark:text-zinc-400">
          Contact us for detailed pricing information tailored to your specific needs.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Get Started
        </Link>
        <Link
          href="/contact"
          className="flex-1 rounded-lg border-2 border-blue-600 px-6 py-3 text-center text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
        >
          Schedule a Call
        </Link>
      </div>
    </section>
  );
}

