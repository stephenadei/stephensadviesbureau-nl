import { MathDomain } from '@/lib/methodology';
import Link from 'next/link';

interface MethodologyDomainProps {
  domain: MathDomain;
}

// Map domain IDs to relevant service IDs
const domainToServices: Record<number, string[]> = {
  1: ['profit-clarity', 'data-mirror-or', 'algorithm-auditor'], // Linear Algebra
  2: ['system-optimizer', 'profit-clarity'], // Optimization Theory
  3: ['predictive-engine', 'system-optimizer'], // Stochastic Processes
  4: ['system-optimizer'], // Graph Theory
  5: ['system-optimizer'], // Game Theory
  6: ['system-optimizer', 'predictive-engine'], // Dynamic Programming
  7: ['algorithm-auditor'], // Real and Functional Analysis
  8: ['system-optimizer'], // Discrete Mathematics
  9: ['predictive-engine', 'system-optimizer'], // Numerical Analysis
  10: ['predictive-engine', 'profit-clarity'], // Statistical Analysis
  11: ['algorithm-auditor'], // Information Theory
  12: ['system-optimizer'] // Topology
};

export default function MethodologyDomain({ domain }: MethodologyDomainProps) {
  // Use blue/indigo gradient colors matching the site theme
  const borderColors = [
    'border-blue-500',
    'border-blue-600',
    'border-indigo-500',
    'border-indigo-600',
    'border-blue-400',
    'border-indigo-400',
    'border-blue-700',
    'border-indigo-700',
    'border-blue-500',
    'border-indigo-500',
    'border-blue-600',
    'border-indigo-600'
  ];

  const textColors = [
    'text-blue-600',
    'text-blue-700',
    'text-indigo-600',
    'text-indigo-700',
    'text-blue-500',
    'text-indigo-500',
    'text-blue-700',
    'text-indigo-700',
    'text-blue-600',
    'text-indigo-600',
    'text-blue-700',
    'text-indigo-700'
  ];

  const bgGradients = [
    'bg-gradient-to-br from-blue-50 to-blue-100',
    'bg-gradient-to-br from-blue-100 to-indigo-50',
    'bg-gradient-to-br from-indigo-50 to-indigo-100',
    'bg-gradient-to-br from-indigo-100 to-blue-50',
    'bg-gradient-to-br from-blue-50 to-indigo-50',
    'bg-gradient-to-br from-indigo-50 to-blue-100',
    'bg-gradient-to-br from-blue-100 to-indigo-100',
    'bg-gradient-to-br from-indigo-100 to-blue-50',
    'bg-gradient-to-br from-blue-50 to-indigo-100',
    'bg-gradient-to-br from-indigo-50 to-blue-50',
    'bg-gradient-to-br from-blue-100 to-indigo-50',
    'bg-gradient-to-br from-indigo-100 to-blue-100'
  ];

  const borderColor = borderColors[(domain.id - 1) % borderColors.length];
  const textColor = textColors[(domain.id - 1) % textColors.length];
  const bgGradient = bgGradients[(domain.id - 1) % bgGradients.length];
  const relatedServices = domainToServices[domain.id] || [];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 ${borderColor} bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:bg-zinc-900 ${bgGradient} dark:from-zinc-800 dark:to-zinc-900`}
    >
      <div className={`mb-4 border-b-2 ${borderColor} pb-3`}>
        <div className={`text-xl font-bold ${textColor} dark:text-blue-400`}>
          {domain.id}. {domain.title}
        </div>
        <div className="mt-2 text-sm italic text-zinc-600 dark:text-zinc-400">
          {domain.foundation}
        </div>
      </div>

      <div className="space-y-4">
        {domain.categories.map((category, idx) => (
          <div key={idx}>
            <div className={`mb-2 flex items-center text-sm font-semibold ${textColor} dark:text-blue-400`}>
              <span className="mr-2">▸</span>
              {category.title}
            </div>
            <ul className="space-y-1 pl-6">
              {category.applications.map((app, appIdx) => (
                <li
                  key={appIdx}
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mr-2 text-blue-500">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {relatedServices.length > 0 && (
        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <p className="mb-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
            See this in action:
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedServices.map((serviceId) => (
              <Link
                key={serviceId}
                href={`/services#${serviceId}`}
                className="inline-block rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
              >
                {serviceId === 'profit-clarity' && 'Profit Clarity'}
                {serviceId === 'data-mirror-or' && 'Data Mirror (OR)'}
                {serviceId === 'algorithm-auditor' && 'Algorithm Auditor'}
                {serviceId === 'predictive-engine' && 'Predictive Engine'}
                {serviceId === 'system-optimizer' && 'System Optimizer'}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
