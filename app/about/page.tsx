"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Heart, Home, Wifi, Car, Waves } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image src="/images/about-hero1.jpg" alt="About Bay Dream" fill className="object-cover opacity-60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            About Bay Dream
          </h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Two Homes. One Unforgettable Goan Experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bay Dream brings together two thoughtfully crafted homes in North Goa — each designed to offer
                comfort, warmth, privacy, and the true essence of tropical living.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Breezona is a cozy, tropical 1BHK with its own private pool — perfect for couples, solo travellers,
                and digital nomads looking for a peaceful escape. Casa Da Solares is a spacious 2BHK family home
                with a private garden, ideal for friends, groups, and longer stays.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a focus on comfort, thoughtful design, and a warm hosting experience, Bay Dream creates stays
                that feel like home — where every moment is slow, calm, and truly Goan.
              </p>
            </div>
            <div className="slide-in-right">
              <Image
                src="/images/villa-pool1.jpg"
                alt="Bay Dream Overview"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">Our Stays</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you're seeking peaceful tropical charm or spacious family comfort, our two Bay Dream homes
            offer the perfect Goan experience — thoughtfully designed and fully equipped for a memorable stay.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Casa Da Solares (2BHK)", desc: "A spacious family-friendly home with a private garden and full kitchen." },
              { icon: Heart, title: "Designed With Love", desc: "Warm interiors, cozy decor, and handcrafted details for a home-like feel." },
              { icon: Waves, title: "Breezona (1BHK)", desc: "A tropical-themed hideaway with a private pool — perfect for couples & solo trips." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">Amenities & Access</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Both our homes offer everything needed for a peaceful and comfortable stay — from modern essentials to thoughtful touches.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected effortlessly throughout your stay." },
              { icon: Car, title: "Free Parking", desc: "Secure parking spaces provided at both properties." },
              { icon: Waves, title: "Private / Shared Pools", desc: "Breezona has a private pool. Casa Da Solares guests enjoy peaceful outdoor spaces." },
              { icon: Home, title: "Fully Equipped Spaces", desc: "Kitchens, essentials, and comfort-first amenities." },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Guidelines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">Stay Guidelines</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bay Dream properties offer a peaceful environment for all guests.  
            <br /><br />
            Breezona and Casa Da Solares both operate as self-serviced homes with daily housekeeping between 10 AM and 6 PM. Towels and linens are refreshed every 3 nights to support eco-friendly practices.
            <br /><br />
            Please avoid loud music after 9 PM, refrain from smoking indoors, and limit visitors for privacy and safety.  
            A refundable security deposit may be required during check-in.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Stay with Bay Dream
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience comfort, privacy, and tropical charm — choose from our two beautifully designed homes in North Goa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
              Book Your Stay
            </Button>
            <Link href="/properties">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg bg-transparent"
              >
                View Our Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
