"use client"

import { useEffect, useState, use } from "react"
import Image from "next/image"
import BookingBar from "@/components/BookingBar"

export default function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)   // ✅ FIX: unwrap params using use()

  const [property, setProperty] = useState<any | null>(null)

  useEffect(() => {
    fetch("/data/properties.json")
      .then((r) => r.json())
      .then((all) => {
        const found = all.find((p: any) => p.slug === slug)  // use slug
        setProperty(found || null)
      })
      .catch((e) => console.error("Failed to load property:", e))
  }, [slug])

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading property...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
        
        {/* Left/Main */}
        <div className="lg:col-span-2 space-y-6">
          <div className="w-full h-96 relative rounded-lg overflow-hidden">
            <Image
              src={property.images?.[0]?.src}
              alt={property.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-playfair font-bold mb-2">{property.name}</h1>
            <p className="text-gray-600 mb-4">{property.type}</p>
            <p className="text-gray-700">{property.longDescription}</p>
          </div>

          <section id="contact" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Contact & Booking</h2>
            <p className="text-gray-600">
              Use the Book Now button to start your booking request.
            </p>
          </section>
        </div>

        {/* Sidebar Booking */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingBar
              propertySlug={property.slug}
              bookingUrl={property.bookingUrl}
              propertyName={property.name}
            />
          </div>
        </aside>

      </div>
    </div>
  )
}
