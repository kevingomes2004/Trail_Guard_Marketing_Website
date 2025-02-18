import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Community />
      <Pricing />
      <Footer />
    </main>
  )
}

