"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function BookingBar({
  propertySlug,
  bookingUrl,
  propertyName,
}: {
  propertySlug: string
  bookingUrl?: string
  propertyName?: string
}) {
  const fireAnalytics = () => {
    try {
      if ((window as any).dataLayer) {
        ;(window as any).dataLayer.push({ event: "book_now_click", property: propertySlug })
      } else {
        console.log("analytics:", { event: "book_now_click", property: propertySlug })
      }
    } catch (e) {
      console.error(e)
    }
  }

  const onBook = (e: React.MouseEvent) => {
    e.preventDefault()
    fireAnalytics()

    const url = bookingUrl || ""
    const currentSearch = window.location.search || ""
    if (url && url.trim() !== "") {
      const hasQuery = url.includes("?")
      window.location.href = url + (currentSearch && !hasQuery ? currentSearch : "")
      return
    }

    if (window.location.pathname.startsWith("/properties/")) {
      if (window.location.hash !== "#contact") window.location.hash = "#contact"
    } else {
      window.location.href = "/contact"
    }
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0  sm:sticky sm:top-24 z-50"
      aria-hidden={false}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center gap-4">
        <div>
          <p className="text-sm text-white/90">Ready to book?</p>
          <p className="text-lg font-bold text-white">{propertyName || "Request booking"}</p>
        </div>

        <div>
          <button
            onClick={onBook}
            className="px-6 py-3 rounded-full golden-gradient text-white text-lg"
            aria-label={`Book ${propertyName || "property"}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
