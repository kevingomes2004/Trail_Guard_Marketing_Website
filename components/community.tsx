import Image from "next/image"

const stats = [
  { number: "1M+", label: "Active Users" },
  { number: "50K+", label: "Mapped Trails" },
  { number: "24/7", label: "Support Available" },
]

export function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-green-700">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <Image
            src="/biking.jpeg"
            alt="Adventure photo 1"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
          <Image
            src="/Camping.png"
            alt="Adventure photo 2"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
          <Image
            src="/Hiking.jpg"
            alt="Adventure photo 3"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
          <Image
            src="/photography.jpg"
            alt="Adventure photo 4"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </div>
    </section>
  )
}

