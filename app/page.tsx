"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Star, Wifi, Car, Coffee, Waves } from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import PropertyCard from "@/components/PropertyCard"
import { InstagramSection } from "@/components/instagram-section"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [properties, setProperties] = useState<any[]>([])

  useEffect(() => {
    // fetch local json
    fetch("/data/properties.json")
      .then((r) => r.json())
      .then((d) => setProperties(d.slice(0, 2)))
      .catch(() => setProperties([]))
  }, [])

  if (!properties.length) return null

  const amenities = [
    {
      icon: Waves,
      title: "Private Pool",
      description: "Relax in your own tropical pool surrounded by palms.",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with seamless, high-speed internet.",
    },
    {
      icon: Coffee,
      title: "Fully Equipped Kitchen",
      description: "Modern kitchen setup with essentials for self-cooking.",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Dedicated on-site parking for peace of mind.",
    },
    {
      icon: Star,
      title: "Cozy Balcony",
      description: "Sip your coffee and enjoy serene palm-lined views.",
    },
    {
      icon: Waves,
      title: "Air Conditioning",
      description: "Cool comfort throughout your stay, day or night.",
    },
    {
      icon: Coffee,
      title: "Smart TV & Entertainment",
      description: "Relax with Netflix or music in cozy comfort.",
    },
    {
      icon: Wifi,
      title: "Daily Housekeeping",
      description: "Clean, fresh, and well-maintained every single day.",
    },
  ]
  return (
    <div className="min-h-screen">
      {/* Hero Section (Bay Dream Updated) */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/hero-beach1.jpg"
            alt="Casa Da Solares Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto  pt-12 md:pt-0 ">

          <h1
            className={`text-5xl md:text-7xl sm:mb-18 font-bold mb-6 font-playfair ${isVisible ? "slide-up" : "opacity-0"
              }`}
          >
            Bay Dream <span className="font-semibold text-3xl md:text-3xl">by Anand Group of Companies</span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 font-light ${isVisible ? "slide-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.2s" }}
          >
            Two homes, One unforgettable stay in Goa.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "slide-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.4s" }}
          >
            {/* Explore */}
            <Link href="/properties">
              <Button
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
              >
                Explore Properties
              </Button>
            </Link>

            {/* Book Now (Bay Dream logic) */}
            <Button
              onClick={() => {
                try {
                  // Fire Bay Dream analytics event
                  if (typeof window !== "undefined") {
                    if ((window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: "book_now_click",
                        property: "homepage",
                      })
                    }
                  }
                } catch (e) {
                  console.warn("Analytics error:", e)
                }

                // Booking fallback → /contact
                if (typeof window !== "undefined") {
                  window.location.href = "/contact"
                }
              }}
              className="golden-gradient text-white px-8 py-3 rounded-full text-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">Explore our properties</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((p: any) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/properties">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
            {/* Amenities Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">
                Amenities That Make You Feel at Home
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed for comfort and tranquility, Breezona blends tropical charm with modern convenience — everything you need for a perfect Goan escape.
              </p>
            </div>

            {/* Swiper Slider (No Pagination) */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-6"
            >
              {amenities.map((amenity, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center group transition-transform duration-300">
                    <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                      <amenity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 max-w-[250px] mx-auto">
                      {amenity.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </AnimatedSection>
      {/* Welcome Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideInLeft" delay={200}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">
                    Welcome to Bay Dream
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Tucked away just 15 minutes from Candolim Beach, Breezona is a beautifully designed 2BHK that blends boho charm with tropical serenity. With its soothing green tones, natural wood accents, and cozy minimal décor, this space invites you to unwind, breathe easy, and soak in Goa’s relaxed energy.
                  </p>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-full bg-transparent"
                    >
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideInRight" delay={400}>
                <div>
                  <Image
                    src="/images/resort-overview1.jpg"
                    alt="Resort Overview"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl hover-lift"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Accommodations Preview */}
      {/* <AnimatedSection animation="fadeInUp">
        <section className="py-20 golden-gradient">
          <div className="container mx-auto px-4">
            {/* ===== Section Header ===== */}
            {/* <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
                Our Stay — The 2BHK Retreat
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Discover your calm tropical escape — a beautifully designed 2BHK with soothing interiors, a private pool, and peaceful vibes near Candolim Beach.
              </p>
            </div>  */}

            {/* ===== 1BHK Card with Image Slider ===== */}
            {/* <div className="max-w-4xl mx-auto">
              <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 hover-lift hover-glow">
                <CardContent className="p-0"> */}
                  {/* Swiper Image Slider */}
                  {/* <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full h-80 rounded-t-lg"
                  >
                    {[
                      "/images/rooms1.jpg",
                      "/images/rooms2.jpg",
                      "/images/rooms3.jpg",
                    ].map((src, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={src}
                          alt={`Breezona 1BHK Room ${index + 1}`}
                          width={800}
                          height={500}
                          className="w-full h-80 object-cover rounded-t-lg"
                          priority={index === 0}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </CardContent>
              </Card>
            </div> */}

            {/* ===== Bottom Button ===== */}
            {/* <div className="text-center mt-12">
              <Link href="/rooms">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                  View All Rooms
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* Testimonials Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-800">
                What Our Guests Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from travelers who’ve experienced Breezona — your calm tropical hideaway in Goa.
              </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={50}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              className="pb-6"
            >
              {[
                {
                  name: "Aarav Mehta",
                  location: "Pune",
                  rating: 5,
                  comment:
                    "Our stay at Breezona was absolutely wonderful! The interiors are calm and cozy, and the private pool was the highlight of our trip.",
                },
                {
                  name: "Emily Carter",
                  location: "Bangalore",
                  rating: 5,
                  comment:
                    "Beautifully designed 1BHK — the vibe was so peaceful and tropical. The kitchen and WiFi made our workation perfect!",
                },
                {
                  name: "Karan Singh",
                  location: "Delhi",
                  rating: 5,
                  comment:
                    "The attention to detail at Breezona is amazing. Super clean, elegant interiors, and the pool area was just perfect for evening chill time.",
                },
                {
                  name: "Sofia Martinez",
                  location: "Hyderabad",
                  rating: 5,
                  comment:
                    "Loved everything about Breezona — the decor, the location, and the comfort. Definitely one of the best stays we’ve had in Goa!",
                },
                {
                  name: "Ananya Sharma",
                  location: "Mumbai",
                  rating: 5,
                  comment:
                    "The place is as stunning as the pictures! Loved the balcony views and peaceful surroundings. We’ll surely be back!",
                },
              ].map((review, index) => (
                <SwiperSlide key={index}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover-lift h-full">
                    <CardContent className="p-6 flex flex-col justify-between min-h-[230px] md:min-h-[260px] lg:min-h-[280px]">
                      {/* Top Section */}
                      <div>
                        <div className="flex mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          “{review.comment}”
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <p className="font-bold text-gray-800">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA */}
      {/* <AnimatedSection animation="fadeInUp">
        <section className="py-20 golden-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
              Escape to Breezona — Your Private Tropical Haven
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover comfort and calm in our 1BHK retreat with a private pool, lush surroundings, and the peaceful rhythm of Goa just minutes from Candolim Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                Book Your Stay
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection> */}
    </div>
  )
}
