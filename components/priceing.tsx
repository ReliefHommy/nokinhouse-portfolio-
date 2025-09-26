import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$250",
      features: [
        "1-page website",
        "Facebook page setup",
        "1 month of AI Auto-Posts",
      ],
    },
    {
      name: "Growth",
      price: "$500",
      features: [
        "3–4 page website (menu/products)",
        "Facebook setup + cover design",
        "1 month of AI Auto-Posts",
        "Google Business Profile setup",
      ],
    },
    {
      name: "Premium",
      price: "$750",
      features: [
        "Up to 5-page website",
        "Facebook + campaign ad design",
        "1 month of AI Auto-Posts",
        "Google Business Profile + SEO basics",
        "Basic analytics dashboard",
      ],
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          🌟 Service Packages
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          One-time payment. Simple, transparent, and ready to grow your business.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="mt-2 text-3xl font-extrabold text-indigo-600">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300">✅ {feature}</li>
                  ))}
                </ul>
                <Button className="w-full mt-6 rounded-full">Choose {plan.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
