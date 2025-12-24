import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Ready to transform your data chaos into clear insights? Let's talk about how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Initial Consultation
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    We'll schedule a call to understand your business, your data challenges, and what you want to achieve.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Custom Proposal
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Based on our conversation, I'll create a tailored proposal with clear deliverables and pricing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-lg font-semibold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Let's Build
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Once approved, we'll get started transforming your data into actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

