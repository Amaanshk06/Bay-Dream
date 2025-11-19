"use client"

import { useEffect, useState } from "react"
import PropertyCard from "@/components/PropertyCard"

export default function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([])

  useEffect(() => {
    fetch("/data/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((e) => console.error("Failed to load properties:", e))
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold">Our Properties</h1>
          <p className="text-gray-600">Choose the perfect stay for your Goa getaway</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
