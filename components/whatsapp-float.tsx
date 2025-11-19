"use client"

import { useEffect, useState } from "react"

export function BookNowFloat() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const handleBookNow = () => {
    try {
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "book_now_click",
          property: "floating_vertical_button"
        })
      }
    } catch {}

    window.location.href = "/contact"
  }

  return (
    <>
      {/* Desktop – Vertical Rotated Button */}
      {!isMobile && (
        <button
          onClick={handleBookNow}
          className="
            fixed
            right-0
            top-[70%]
            -translate-x-[9%]
            bg-[#b48834]
            text-white
            px-12
            py-3
            shadow-xl
            rounded-tl-xl
            rounded-bl-xl
            transform
            rotate-90
            origin-right
            hover:bg-amber-700
            transition-all
            duration-300
            z-50
          "
          style={{ letterSpacing: "5px", fontWeight: 600 }}
        >
          BOOK NOW
        </button>
      )}

      {/* Mobile – Bottom Sticky */}
      {isMobile && (
        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            bg-white
            shadow-xl
            py-3
            z-50
            flex
            justify-center
          "
        >
          <button
            onClick={handleBookNow}
            className="
              golden-gradient
              text-white
              px-8
              py-3
              rounded-full
              text-lg
              w-[90%]
              max-w-[500px]
            "
          >
            Book Now
          </button>
        </div>
      )}
    </>
  )
}
