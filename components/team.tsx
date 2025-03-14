import Image from "next/image"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Kevin Gomes",
    role: "Business Analyst, UI/UX & Frontend Developer",
    image: "/Profile_pic.png",
    linkedin: "https://www.linkedin.com/in/kevin-gomes4/",
  },
  {
    name: "Thisula Mahawaththa",
    role: "QA engineer/ Project Manager",
    image: "/Thisula Portrait .jpg",
    linkedin: "https://www.linkedin.com/in/thisula-mahawatta-6208b4186/",
  },
  {
    name: "Dinuka Nimesh",
    role: "Frontend developer/ UI/UX Designer ",
    image: "/Dinuka_pic.png",
    linkedin: "https://www.linkedin.com/in/dinuka-nimesh-699098333/",
  },
  {
    name: "Akindu Bandara",
    role: "AI Specialist/Backend developer",
    image: "/Akindu_pic.jpg",
    linkedin: "https://www.linkedin.com/in/akindu-bandara",
  },
  {
    name: "Jithnuka Athurugiriya",
    role: "Frontend Developer/Software Architect",
    image: "/Jithnuka_pic.png",
    linkedin: "https://www.linkedin.com/in/jithnuka-athurugiriya-81a3981b4/",
  },
  {
    name: "Lakshitha Vithanaarachchi",
    role: "Backend developer/ DevOps engineer",
    image: "/Lakshitha_pic.png",
    linkedin: "https://www.linkedin.com/in/lakshitha-vithanaarachchi-791030301/",
  },
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
                <p className="text-gray-600 mb-4">{member.role}</p>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

