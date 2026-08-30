import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Palette, MessageSquare, Mail, BarChart } from "lucide-react"

export default function BusinessToolkit() {
  const services = [
    {
      title: "Facebook & Google Ads Generator",
      desc: "Social Content Generator for Meta AD.in Thai & English.",
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Automation Tools for Thai SMEs",
      desc: "Automate small but time-consuming tasks in your daily workflow.",
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "AI Customer Reply Assistant",
      desc: "Automatically reply to customer messages and handle orders 24/7.",
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
    {
      title: "Custom Solutions",
      desc: "Tailored AI tools to fit your unique business needs.",
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
    }
  ]

  return (
    <section className="bg-white dark:bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          🚀 AI + Business Toolkit
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
