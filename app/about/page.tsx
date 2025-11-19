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
          <Image src="/images/about-hero1.jpg" alt="About Breezona" fill className="object-cover opacity-60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            About Breezona
          </h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Your Calm Tropical Hideaway Near Candolim
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
                Welcome to Breezona – your calm tropical hideaway in North Goa. Tucked away just 15 minutes from Candolim Beach, Breezona is a beautifully designed 1BHK that blends boho charm with tropical serenity.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With soothing green tones, natural wood accents, and cozy minimal décor, our space invites you to unwind, breathe easy, and soak in Goa’s relaxed energy. Whether you’re a couple, a solo traveler, or a digital nomad — Breezona offers the perfect mix of comfort and style.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Come, let Breezona be your slice of paradise in Goa — where tropical calm meets coastal charm.
              </p>
            </div>
            <div className="slide-in-right">
              <Image
                src="/images/villa-pool1.jpg"
                alt="Breezona Overview"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">The Space</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Step into a bright living area with a cozy couch, soft lighting, and touches of greenery that make you feel instantly at home.
            Sip your morning coffee on the balcony overlooking tall palms, or unwind with a glass of wine as the Goan breeze drifts in.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Fully Equipped Kitchen", desc: "Includes refrigerator, microwave, cookware, hob & chimney." },
              { icon: Heart, title: "Serene Bedroom", desc: "King-sized bed, premium linens, and cozy minimal décor." },
              { icon: Waves, title: "Private Pool", desc: "Take a refreshing dip and enjoy tropical calm." },
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
            Guests have access to everything needed for a relaxing stay — from comfort essentials to thoughtful touches.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected effortlessly during your getaway." },
              { icon: Car, title: "Free Parking", desc: "Dedicated parking space inside the gated complex." },
              { icon: Waves, title: "Swimming Pool", desc: "Access to a serene shared pool for guests." },
              { icon: Home, title: "Gym Access", desc: "Stay active during your stay with a modern fitness area." },
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
            Breezona is part of a gated community with a few more properties. Guests have access to the entire flat, the swimming pool, gym, and a dedicated parking space.  
            <br /><br />
            This is a self-serviced apartment, with daily housekeeping provided between 10 AM and 6 PM. Towels and linens are replenished every 3 nights to conserve water.  
            <br /><br />
            Kindly refrain from smoking indoors or playing loud music after 9 PM.  
            Outside visitors are not allowed for your safety and privacy.  
            A refundable security deposit of ₹5000 is collected at check-in.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Welcome to Your Goan Oasis
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience peace, style, and comfort in the heart of Goa — stay at Breezona, your calm tropical getaway near Candolim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
              Book Your Stay
            </Button>
            <Link href="/rooms">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg bg-transparent"
              >
                View Our Space
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
