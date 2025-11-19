"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Award,
  Wifi,
  Car,
  Coffee,
  Waves,
  Sun,
  Home,
} from "lucide-react"

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription submitted")
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-24 h-12">
                <img
                  src="/images/breezona-logo1.png"
                  alt="Breezona Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Welcome to Breezona — your calm tropical hideaway in Goa. 
              A beautifully designed 1BHK retreat with a private pool, cozy interiors, 
              and tranquil vibes just 15 minutes from Candolim Beach.
            </p>

            {/* <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-amber-600 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-amber-600 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-amber-600 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-amber-600 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Breezona" },
                { href: "/rooms", label: "Our Stay" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities & Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Amenities</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Waves className="w-4 h-4 text-amber-400" />
                <span>Private Pool</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Fully Equipped Kitchen</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Wifi className="w-4 h-4 text-amber-400" />
                <span>High-Speed WiFi</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Free Parking</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Home className="w-4 h-4 text-amber-400" />
                <span>Daily Housekeeping</span>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Stay Connected</h3>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Flat no 102, Casa de Amora Apartment,Pilern, Goa 403114,India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 8830249088</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>baydreamdev.llp@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe for exclusive offers, seasonal discounts, and Breezona updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
                  required
                />
                <Button type="submit" className="golden-gradient text-white hover:opacity-90 px-4">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-white">Recognition</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "Top-Rated Airbnb Stay - Goa 2024",
                "Guest Favorite 2024",
                "Tropical Luxury Recognition Award",
                "Exceptional Cleanliness & Comfort",
              ].map((award, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-sm">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 Breezona. All rights reserved.</div>
            <div className="text-gray-400 text-sm">Designed & Developed by Amaan Shaikh</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
