import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Stephen's Solutions
            </h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Operations Research Strategist. Transform your messy spreadsheets into mathematical certainty. Stop running your business on "vibes" and start making data-driven decisions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Services</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#data-mirror" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  The Data Mirror
                </Link>
              </li>
              <li>
                <Link href="/services#ai-audit" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  AI Audit & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Stephen's Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

