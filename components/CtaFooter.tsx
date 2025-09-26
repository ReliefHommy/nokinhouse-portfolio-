export default function CtaFooter() {
  return (
    <section className="bg-indigo-600 dark:bg-indigo-700 py-16">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to grow with AI + Design?
        </h2>
        <p className="mt-4 text-lg">
          Let’s build your next step — from smart websites to full SaaS tools.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:nokinhouse.service@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-100"
          >
            Contact Us
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-white px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
