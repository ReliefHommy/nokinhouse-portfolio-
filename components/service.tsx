import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Palette, MessageSquare, Mail, BarChart } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "AI Auto-Posts",
      desc: "Save time with automated weekly posts in Thai & English.",
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Canva Templates",
      desc: "Ready-to-edit designs for promos, menus, and ads.",
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Review Reply Helper",
      desc: "Instant, professional replies to Google & Facebook reviews.",
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Campaign Assistant",
      desc: "Generate seasonal emails and newsletters in minutes.",
      icon: <Mail className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Upgrade Path",
      desc: "Grow into SaaS: ordering, inventory, HR, and more.",
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          🚀 AI + Design Toolkit
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Tools that make your business smarter, faster, and easier to run.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition">
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
