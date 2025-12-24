'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Stephen's Solutions
          </Link>
          <div className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Services
            </Link>
            <Link
              href="/methodology"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Methodology
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 md:block"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-zinc-200 py-4 dark:border-zinc-800 md:hidden">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-base font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-base font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/methodology"
                className="block text-base font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Methodology
              </Link>
              <Link
                href="/contact"
                className="block text-base font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white transition-colors hover:bg-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
