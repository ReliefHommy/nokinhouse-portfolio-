import { ArrowUpRight, Play, Sparkles, Workflow, HeartHandshake } from "lucide-react"
import Image from "next/image"

export default function FounderStorySection() {
  return (
    <section
      id="story"
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Founder story
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            It did not start as an agency.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Nok in House began as a personal solution to a real problem:
            doing everything alone — with ideas everywhere, but no structure that fits real life.
          </p>
        </div>

        {/* Main story layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Story card */}
          <div className="lg:col-span-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              The moment I realized what I actually needed
            </h3>

            <div className="mt-6 space-y-5 text-gray-700 dark:text-gray-200 leading-7">
              <p>
                I was not lacking motivation. I wasn’t lacking ideas.
                <span className="font-semibold"> I was lacking a system.</span>
              </p>
              <p>
                Content felt like an endless loop: create → post → repeat — always from zero.
                Branding felt inconsistent. Workflow felt heavy.
                And the more I tried to “grow,” the more I felt burned out.
              </p>
              <p>
                So I stopped trying to “market harder.”
                I started designing a structure that makes growth calm:
                <span className="font-semibold"> content pillars, reusable templates, and a repeatable weekly flow.</span>
              </p>
              <p>
                That became the foundation of Nok in House —
                not as a service menu, but as a way to build businesses sustainably.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-8 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6">
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-7">
                <span className="font-semibold">What we build:</span> systems that reduce decision fatigue,
                protect your time, and turn scattered effort into consistent progress.
              </p>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition"
              >
                See the case studies
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                Talk with us
              </a>
            </div>
          </div>

          {/* Right: 3 principles + future video placeholder */}
          <div className="lg:col-span-5 grid gap-8">
            {/* Principles */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                How Nok in House thinks
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                    <Workflow className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      System first
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      We build workflows that you can maintain — not campaigns you’ll abandon.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                    <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Story sells softly
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      We design content that builds trust — so conversion becomes natural.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                    <HeartHandshake className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Human pace
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      Calm growth beats hustle. Sustainable always wins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Vlog placeholder */}
            <a
              href="#follow"
              className="group rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8 text-center hover:shadow-md transition"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <Play className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="mt-4 text-base font-bold text-gray-900 dark:text-white">
                Founder Vlog (coming soon)
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-7">
                This story will become short videos — behind the scenes, weekly progress, and what I’m learning.
              </p>
              <p className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Follow & get updates <ArrowUpRight className="inline h-4 w-4" />
              </p>
            </a>
          </div>
        </div>


      </div>
    </section>
  )
}
