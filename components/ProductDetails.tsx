import { Service } from '@/lib/services';

interface ProductDetailsProps {
  service: Service;
}

export default function ProductDetails({ service }: ProductDetailsProps) {
  return (
    <div className="space-y-12">
      {/* Who is it for */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Who is this for?
        </h2>
        <ul className="space-y-4">
          {service.details.who.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Deliverables */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          What you'll get
        </h2>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <ul className="space-y-4">
            {service.details.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

