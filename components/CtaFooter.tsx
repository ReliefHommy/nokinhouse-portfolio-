export default function CtaFooter() {
  return (
    <section className="bg-indigo-400 dark:bg-black py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Not sure what your next step should be?
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg leading-8 text-gray-300">
          You do not need another package or promise.
          <br className="hidden sm:block" />
          Sometimes, you just need clarity — and a system that fits real life.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:nokinhouse.service@gmail.com"
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition"
          >
            Start a conversation
          </a>

          <a
            href="#story"
            className="rounded-full border border-gray-500 px-8 py-3 text-base font-semibold text-gray-200 hover:bg-indigo-500 transition"
          >
            Read the founder story
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-sm text-gray-200">
          No sales pitch. No pressure. Just an honest conversation.
        </p>
      </div>
    </section>
  )
}
