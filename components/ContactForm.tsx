'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your form handling service (e.g., Formspree, Resend, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
          <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-green-900 dark:text-green-100">
          Thank you for your message!
        </h3>
        <p className="mt-2 text-sm text-green-700 dark:text-green-300">
          I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
          Name *
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700"
            placeholder="Your name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
          Email *
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
          Company
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700"
            placeholder="Your company (optional)"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
          Interested In
        </label>
        <div className="mt-2">
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700"
          >
            <option value="">Select a service (optional)</option>
            <optgroup label="OR & Mathematical Services">
              <option value="algorithm-auditor">The Algorithm Auditor</option>
              <option value="predictive-engine">The Predictive Engine</option>
              <option value="system-optimizer">The System Optimizer</option>
              <option value="data-mirror-or">Data Mirror (OR Edition)</option>
            </optgroup>
            <optgroup label="Strategic Services">
              <option value="profit-clarity">The Profit Clarity Program</option>
            </optgroup>
            <optgroup label="Standard Services">
              <option value="data-mirror">The Data Mirror</option>
              <option value="ai-audit">AI Audit & Roadmap</option>
            </optgroup>
            <option value="meeting-medic">Meeting Medic</option>
            <option value="proposal-perfector">Proposal Perfector</option>
            <option value="content-machine">Content Machine</option>
            <option value="lead-hunter">Lead Hunter</option>
            <option value="support-clone">Support Clone</option>
            <option value="knowledge-brain">Knowledge Brain</option>
            <option value="admin-autopilot">Admin Auto-Pilot</option>
            <option value="cto-pocket">CTO-in-a-Pocket</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
          Message *
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700"
            placeholder="Tell me about your business and what you'd like to achieve..."
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

