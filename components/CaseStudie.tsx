// app/components/CaseStudie.tsx
export default function CaseStudie() {
  return (
    <section
  id="case-studies"
  className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
>
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    {/* Section header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
        Case Studies
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        It did not start with services. It did started with a system.
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Our work is built from real founder pain: scattered content, inconsistent branding,
        and “starting from zero” every week.  
        These case studies show how we turn chaos into a repeatable workflow — without forcing you
        into a corporate process.
      </p>
    </div>

    {/* Case cards */}
    <div className="mt-14 grid gap-8 lg:grid-cols-3">
      {/* Case 1 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 01 • From chaos to clarity
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          A founder had ideas everywhere — but no structure.
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          We built a simple “content pillar” system and reusable templates so weekly content
          stopped feeling like a daily emergency.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Defined 3 to 5 content pillars that match real customer intent
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Created reusable post templates (not one-off designs)
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Built a weekly workflow that fits real life
          </li>
        </ul>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Less stress, more consistency
          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Talk with us →
          </a>
        </div>
      </article>

      {/* Case 2 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 02 • Content that sells without selling
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          A food business needed growth — but did not want “hard sales posts.”
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          We designed story-first content: education + identity + product sets.
          The brand felt more premium — and conversion became natural.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Built content around culture, ingredients, and daily-life use cases
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Turned products into “sets” people understand instantly
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Created a repeatable “post → intent → action” flow
          </li>
        </ul>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Stronger brand trust
          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Talk with us →
          </a>
        </div>
      </article>

      {/* Case 3 (Soft hint to internal platform, no STM name) */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Case 03 • Built from within
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          We built an internal studio system — before offering it to others.
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          Instead of selling a “marketing package,” we created a studio workflow to solve
          our own problems first — then adapted it for founders who want the same clarity.
        </p>

        <div className="mt-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
          <p className="text-sm text-gray-700 dark:text-gray-200 leading-7">
            <span className="font-semibold">Key idea:</span> We don’t build systems in slides.
            We build them in real life, test them under pressure, and only share what works.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: A workflow that scales calmly
          </span>
          <a
            href="#story"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Read the story →
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

  );
}