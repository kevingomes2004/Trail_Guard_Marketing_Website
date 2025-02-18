"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo image - update the src path based on your image location */}
          <Image
            src="/logo.png"  // Place your logo in public folder
            alt="TrailGuard Logo"
            width={32}  // Adjust size as needed
            height={32}  // Adjust size as needed
            className="h-8 w-8"  // This ensures consistent size with your existing SVG
          />
          <span className="font-bold text-xl">TrailGuard</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#community" className="text-gray-600 hover:text-gray-900">
            Community
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Button variant="default" className="bg-green-700 hover:bg-green-800">
            Get Started
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="#features" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link href="#community" onClick={() => setIsOpen(false)}>
                Community
              </Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Button variant="default" className="bg-green-700 hover:bg-green-800">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}