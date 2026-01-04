// app/components/SocialSection.tsx
import { ArrowUpRight, Youtube, Instagram, Linkedin, Globe, Mail } from "lucide-react"

export function SocialSection() {
  const socials = [
    {
      name: "YouTube (Founder Vlog)",
      desc: "Short updates, behind-the-scenes, and founder notes.",
      href: "https://youtube.com/@YOUR_CHANNEL",
      icon: Youtube,
    },
    {
      name: "Instagram",
      desc: "Visual stories, brand experiments, and daily progress.",
      href: "https://instagram.com/YOUR_PROFILE",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      desc: "Professional updates, case studies, and partnerships.",
      href: "https://linkedin.com/in/YOUR_PROFILE",
      icon: Linkedin,
    },
    {
      name: "Website / Portfolio",
      desc: "What we build, what we believe, and what works.",
      href: "https://nokinhouse.tech",
      icon: Globe,
    },
    {
      name: "Email",
      desc: "For collaborations and serious conversations.",
      href: "mailto:nokinhouse.service@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <section
      id="SocailSection"
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Follow the founder
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The real journey behind Nok in House-NIH?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            NIH (Nok in House) building in public — quietly, consistently, and honestly.  
            Follow along if you want to see how systems are created in real life.
          </p>
        </div>

        {/* Social cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Placeholder for future Vlog embed */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-10 text-center">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Founder Vlog (coming soon)
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              This space will be used for a short intro video — not a long text page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
