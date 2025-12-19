import { notFound } from 'next/navigation';
import { getServiceById } from '@/lib/services';
import ProductHero from '@/components/ProductHero';
import ProductDetails from '@/components/ProductDetails';
import ProductPricing from '@/components/ProductPricing';
import ProductMethods from '@/components/ProductMethods';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { services } = await import('@/lib/services');
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: 'Service Not Found - Stephen\'s Solutions',
    };
  }

  return {
    title: `${service.name} - Stephen's Solutions`,
    description: `${service.tagline}. ${service.description}`,
    openGraph: {
      title: `${service.name} - Stephen's Solutions`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <ProductHero service={service} />

      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ProductDetails service={service} />
          </div>
        </div>
      </div>

      {service.details.mathematicalMethods && service.details.mathematicalMethods.length > 0 && (
        <div className="py-12 bg-zinc-50 dark:bg-zinc-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ProductMethods service={service} />
            </div>
          </div>
        </div>
      )}

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ProductPricing service={service} />
          </div>
        </div>
      </div>

      <RelatedServices currentService={service} />

      {/* Final CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how {service.name} can solve your business challenges.
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
                View All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

