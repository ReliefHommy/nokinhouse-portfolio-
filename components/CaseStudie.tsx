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
       The AI Product Businees tools, built for Asian businesses in Europe.
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Digital Tools <span className="text-indigo-400 dark:text-indigo-400">for Asian Businesses in Europe.</span>
      </h2>
   
    </div>

    {/* Case cards */}
    <div className="mt-14 grid gap-8 lg:grid-cols-3">
      {/* Case 1 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
           Tool 01 • Turn your products into a clean, searchable online catalogue in minutes.

        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          Ai Catalogue Builder
        </h3>
        <p className="mt-4 text-indigo-600 dark:text-indigo-400 leading-7">
         Upload products via CSV / Excel (fast bulk import)
          - Auto-generate product titles & descriptions with AI
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Ready for future order integration
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Auto-generate product titles & descriptions with AI
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Image + price + category management
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Simple admin dashboard for updates
          </li>
        </ul>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result:Shareable storefront link (no website needed)
          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Request Early Access →
          </a>
        </div>
      </article>

      {/* Case 2 */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
           Tool 02 • Automatically reply to customer messages and handle orders 24/7.
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          AI Customer Reply Assistant
        </h3>
        <p className="mt-4 text-indigo-600 dark:text-indigo-400 leading-7">
          AI replies to Facebook / chat messages
          - Answer FAQs, provide product info, and handle orders automatically
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Understands product questions and pricing
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Turned products into “sets” people understand instantly
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
           Auto-suggest products from your catalogue

          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          Handles simple order requests


          </li>
        </ul>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Reduces manual messaging time

          </span>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Request Early Access →
          </a>
        </div>
      </article>

      {/* Case 3 (Soft hint to internal platform, no STM name) */}
      <article className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition">
        <p className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Tool 03 • Convert conversations into structured orders without manual work.
        </p>
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          Smart Order & Cart System.
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
         We created a system workflow Turn chat messages into order summaries
          - Generate shareable cart links for easy checkout (no website needed).
        </p>

        <div className="mt-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
          <p className="text-sm text-gray-700 dark:text-gray-200 leading-7">
            <span className="font-semibold">Key idea:</span> Add/remove items dynamically
              based on customer messages, then generate a cart link for checkout.Designed for small sellers (no complex setup)

          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Result: Export orders to Google Sheets / CSV

          </span>
          <a
            href="#story"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
             Request Early Access →
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

  );
}