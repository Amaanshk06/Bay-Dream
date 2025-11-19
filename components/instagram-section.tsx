"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export function InstagramSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const instagramPosts = [
    {
      id: 1,
      image: "/images/villa-pool.jpg",
      likes: 1456,
      comments: 92,
      caption: "Golden mornings at Breezona 🌴☀️ #BreezonaGoa #TropicalEscape",
    },
    {
      id: 2,
      image: "/images/living-room.jpg",
      likes: 1678,
      comments: 101,
      caption: "Cozy corners and calm vibes — your Goan retreat awaits ✨ #BreezonaStay #GoaGetaway",
    },
    {
      id: 3,
      image: "/images/balcony-view.jpg",
      likes: 1983,
      comments: 134,
      caption: "Balcony views and breezy mornings 🌿 #Breezona #MorningCalm",
    },
    {
      id: 4,
      image: "/images/bedroom.jpg",
      likes: 1245,
      comments: 80,
      caption: "Relax, unwind, repeat. 🕊️ #TropicalTranquility #BreezonaGoa",
    },
    {
      id: 5,
      image: "/images/kitchen.jpg",
      likes: 1098,
      comments: 64,
      caption: "Cook, chill, and create memories 🍴 #BreezonaLiving #CozyVibes",
    },
    {
      id: 6,
      image: "/images/pool-evening.jpg",
      likes: 2234,
      comments: 145,
      caption: "Evenings by the pool hit differently 🌅 #GoaNights #BreezonaBliss",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800">
              Follow Breezona on Instagram
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover the calm, tropical side of Goa — from morning coffees to poolside sunsets. Follow{" "}
            <span className="font-semibold text-amber-600">@breezona</span> for your daily dose of paradise.
          </p>
          <Button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
            <Instagram className="w-5 h-5 mr-2" />
            Follow @breezona
          </Button>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!overflow-visible"
          >
            {instagramPosts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <div
                  className={`flex-shrink-0 w-80 group cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    {/* Image */}
                    <div className="relative h-64">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={`Instagram post ${post.id}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                          <div className="flex items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                              <Heart className="w-6 h-6 fill-white" />
                              <span className="font-semibold">{post.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-6 h-6" />
                              <span className="font-semibold">{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Share your Breezona moments with{" "}
            <span className="text-amber-600 font-semibold">#BreezonaGoa</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full px-6 py-3 bg-transparent"
            >
              View All Posts
            </Button>
            <Button className="bg-amber-600 text-white rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
              Tag Us in Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
