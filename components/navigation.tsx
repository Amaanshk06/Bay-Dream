"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/rooms", label: "Rooms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* === ROUNDED LOGO === */}
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md overflow-hidden ">
            <Image
              src="/images/breezona-logo1.png"
              alt="Breezona Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* === DESKTOP NAVIGATION === */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 hover:scale-105 ${
                pathname === item.href
                  ? "text-amber-600 border-b-2 border-amber-600"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* === BOOK NOW BUTTON === */}
        <Button className="hidden md:block golden-gradient text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105">
          BOOK NOW
        </Button>

        {/* === MOBILE MENU BUTTON === */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* === MOBILE MENU === */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === item.href ? "text-amber-600" : "text-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full golden-gradient text-white py-2 rounded-full mt-4">BOOK NOW</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
