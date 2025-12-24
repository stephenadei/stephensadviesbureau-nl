import { Service, getRelatedServices } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

interface RelatedServicesProps {
  currentService: Service;
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const related = getRelatedServices(currentService, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Related Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            You might also be interested in these services
          </p>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
          {related.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-base font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

