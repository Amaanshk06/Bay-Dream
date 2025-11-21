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
            bg-[#b48834]
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
              text-white
              px-8
              py-1
              text-lg
              w-[90%]
              max-w-[500px]
            "
          >
            Book Now
          </button>
        </div>
      )}
      {/* WhatsApp Floating Button (left side) */}
<a
  href="https://wa.me/918830249088"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed 
    bottom-16 
    right-4
    bg-green-500
    text-white
    w-14
    h-14
    rounded-full
    shadow-xl
    flex
    items-center
    justify-center
    hover:bg-green-600
    transition-all
    duration-300
    z-50
  "
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-message-circle"
  >
    <path d="m3 21 1.9-5.7a8 8 0 1 1 3.8 3.8z" />
  </svg>
</a>

    </>
  )
}
