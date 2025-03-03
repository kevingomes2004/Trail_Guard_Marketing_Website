import Image from "next/image"

const teamMembers = [
  { name: "Kevin Gomes", role: "Frontend Developer", image: "/Profile_pic.png" },
  { name: "Thisula Mahahaththa", role: "Project Leader", image: "/Thisula Portrait .jpg" },
  { name: "Dinuka Nimesh", role: "Frontend Developer", image: "/Dinuka_pic.png" },
  { name: "Akindu", role: "Backend Developer", image: "/placeholder.svg" },
  { name: "Jithnuka Athurugiriya", role: "Frontend Developer", image: "/Jithnuka_pic.png" },
  { name: "Lakshitha Vithanaarachchi", role: "Backend Developer", image: "/Lakshitha_pic.png" },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
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

