// app/components/Hero.tsx
import Link from 'next/link';
export default function Hero() {
  return (
   <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Your <span className="text-indigo-600 dark:text-indigo-400">AI-Powered Growth Platform</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
          We combine design, automation, and AI to help you scale — no tech skills required.
        </p>

        {/* CTA buttons */}
         <br />
          <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:nokinhouse.service@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-100"
          >
            Contact Us
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-indigo-500 border border-white px-6 py-3 text-base font-semibold text-white hover:bg-indigo-200"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>

  );
}
