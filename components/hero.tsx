import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <Image
        src="/back.jpg" 
        alt="Mountain landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">Your Ultimate Outdoor Companion</h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Navigate confidently, stay safe, and explore the wilderness with advanced GPS tracking and emergency features.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="default" className="bg-white text-black hover:bg-gray-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            </svg>
            App Store
          </Button>
          <Button variant="default" className="bg-white text-black hover:bg-gray-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            </svg>
            Google Play
          </Button>
        </div>
      </div>
    </div>
  )
}

