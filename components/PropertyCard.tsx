"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type ImageItem = { src: string; alt?: string }
type Property = {
  slug: string
  name: string
  type: string
  shortDescription: string
  images: ImageItem[]
  bookingUrl?: string
}

export function fireBookNowAnalytics(propertySlug: string) {
  // Fire analytics event (project dataLayer or fallback)
  try {
    if (typeof window !== "undefined") {
      const payload = { event: "book_now_click", property: propertySlug }
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push(payload)
      } else if ((window as any).gtag) {
        // example for gtag (not required)
        ;(window as any).gtag("event", "book_now_click", { property: propertySlug })
      } else {
        // fallback logging
        console.log("analytics:", payload)
      }
    }
  } catch (e) {
    // swallow errors; do not block redirect
    console.error(e)
  }
}

export default function PropertyCard({ property }: { property: Property }) {
  const image = property.images && property.images[0]

  const onBookNow = (e: React.MouseEvent) => {
    e.preventDefault()
    fireBookNowAnalytics(property.slug)

    // If bookingUrl present, redirect to that in same tab (preserve current query string)
    const bookingUrl = property.bookingUrl || ""
    const currentSearch = typeof window !== "undefined" ? window.location.search : ""
    if (bookingUrl && bookingUrl.trim() !== "") {
      // Attempt to preserve UTM / search params
      const hasQuery = bookingUrl.includes("?")
      const finalUrl = bookingUrl + (currentSearch && !hasQuery ? currentSearch : "")
      window.location.href = finalUrl
      return
    }

    // Fallback to #contact on property page (if on details page) or /contact
    if (typeof window !== "undefined") {
      // If we're on the property details route, jump to #contact
      if (window.location.pathname.startsWith("/properties/")) {
        if (window.location.hash !== "#contact") {
          window.location.hash = "#contact"
        }
      } else {
        window.location.href = "/contact"
      }
    }
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
      <CardContent className="p-0">
        <div className="w-full h-56 relative rounded-t-lg overflow-hidden">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt || property.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : null}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{property.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{property.type}</p>
          <p className="text-gray-700 mb-6">{property.shortDescription}</p>

          <div className="flex gap-3">
            <Link href={`/properties/${property.slug}`}>
              <Button className="px-6 py-2 rounded-full border-amber-600 text-amber-600 bg-white hover:bg-gray-100">
                View
              </Button>
            </Link>

            <button
              onClick={onBookNow}
              aria-label={`Book ${property.name}`}
              className="px-6 py-2 rounded-full text-white golden-gradient hover:opacity-90"
            >
              Book Now
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
