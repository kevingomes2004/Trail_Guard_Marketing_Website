import { MapPin, AlertTriangle, Map, Cloud, Users, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Stay on track with precise location tracking and offline maps",
  },
  {
    icon: AlertTriangle,
    title: "Emergency SOS",
    description: "One-tap emergency alerts with location sharing",
  },
  {
    icon: Map,
    title: "Trail Navigation",
    description: "Access thousands of verified trails and routes",
  },
  {
    icon: Cloud,
    title: "Weather Alerts",
    description: "Real-time weather updates and warnings",
  },
  {
    icon: Users,
    title: "Group Tracking System",
    description: "The app includes an alarm system that tracks the proximity of each group member",
  },
  {
    icon: ShieldCheck,
    title: "AI Plant Identification",
    description: " AI powered camera that enables users to identify plants",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Essential Features for Every Adventure</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

