"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Basic GPS tracking", "Emergency SOS", "Weather updates", "Community access"],
  },
  {
    name: "Explorer",
    price: "$4.99/month",
    popular: true,
    features: [
      "Advanced GPS tracking",
      "Offline maps",
      "Trail recommendations",
      "Group tracking",
      "Voice navigation",
      "24/7 support",
    ],
  },
  {
    name: "Pro",
    price: "$9.99/month",
    features: [
      "All Explorer features",
      "Custom routes",
      "Advanced statistics",
      "Priority support",
      "Equipment tracking",
      "Training resources",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Adventure Plan</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? "border-green-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </span>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-3xl font-bold mt-2">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-6 ${plan.popular ? "bg-green-700 hover:bg-green-800" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

