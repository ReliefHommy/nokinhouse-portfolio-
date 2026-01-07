// app/components/Founder.tsx

import Image from "next/image"

export default function Founder() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: Image / Visual block */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm dark:border-gray-800/70 dark:bg-gray-900">
              {/* Image area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                {/* ✅ Replace src with your own image later (Canva export placed in /public) */}
                <Image
                  src="/nokblue_4.png"
                  alt="Nok in House studio"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Soft overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
              </div>


              {/* Small caption (optional) */}
              <div className="p-5 sm:p-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Calm, system-first branding & content workflow for founders building abroad.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Text block */}
          <div className="order-1 lg:order-2">


            {/* Headline */}
        <div className="mx-auto max-w-3xl text-left">

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
           A founder had ideas everywhere — but no structure.
          </h2>

        </div>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            I was not lacking motivation. I was not lacking ideas. I was lacking a system.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#case-studies"
                className="inline-flex justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition"
              >
                My Story
              </a>

              <a
                href="mailto:nokinhouse.service@gmail.com"
                className="inline-flex justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-800 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                Talk with me
              </a>
            </div>

            {/* Tiny trust line */}
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              No pressure. No sales pitch. Just clarity and systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}