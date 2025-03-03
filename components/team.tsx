import Image from "next/image"

const teamMembers = [
  { name: "Kevin Gomes", role: "Frontend Developer", image: "/Profile_pic.png?height=400&width=400" },
  { name: "Thisula", role: "Project Leader", image: "/placeholder.svg?height=400&width=400" },
  { name: "Dinuka", role: "UX Designer", image: "/placeholder.svg?height=400&width=400" },
  { name: "Akindu", role: "Marketing Director", image: "/placeholder.svg?height=400&width=400" },
  { name: "Jithnuka", role: "Outdoor Expert", image: "/placeholder.svg?height=400&width=400" },
  { name: "Lakshitha", role: "Customer Support Lead", image: "/placeholder.svg?height=400&width=400" },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

