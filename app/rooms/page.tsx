"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BedDouble, Waves, Wifi, Car, Coffee, Droplets, Wind, Dumbbell } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function RoomsPage() {
  const images = [
    "/images/rooms1.jpg",
    "/images/rooms2.jpg",
    "/images/rooms3.jpg",
    "/images/halls1.jpg",
    "/images/halls2.jpg",
    "/images/kitchen1.jpg",
    "/images/din1.jpg",
    "/images/din3.jpg",
    "/images/bal1.jpg",
    "/images/gym2.jpg",
    "/images/bath1.jpg",
    "/images/pools2.jpg",
    "/images/pools1.jpg",
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/rooms-hero1.jpg"
            alt="Breezona 1BHK"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            Breezona 1BHK with Pool
          </h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Your Calm Tropical Hideaway Near Candolim
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-6"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-72 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <Image src={img} alt={`Breezona image ${index + 1}`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Book Now Button directly after gallery */}
          <div className="text-center mt-12">
            <Button className="golden-gradient text-white text-lg px-10 py-4 rounded-full hover:opacity-90">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center md:text-left">
          <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6 text-center">
            Experience Breezona: Your Serene 1BHK Retreat in Goa
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Tucked away just 15 minutes from Candolim Beach, Breezona is a beautifully designed 1BHK that blends boho charm with tropical serenity. 
            With soothing green tones, wooden textures, and cozy minimal décor, this peaceful retreat invites you to relax and soak in Goa’s easygoing energy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Perfect for couples, solo travelers, or anyone seeking a stylish stay with calm vibes. Enjoy your morning coffee on the balcony, 
            unwind in the living room, or take a refreshing dip in the pool — Breezona is your private Goan paradise.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Inside the Apartment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>🌿 Fully equipped kitchen – refrigerator, microwave, hob & cookware</li>
                <li>🛏️ Serene bedroom with king-sized bed and premium linens</li>
                <li>🛋️ Elegant living room with smart TV and dining space</li>
                <li>🚿 Modern bathroom with high-end fittings</li>
                <li>🌸 Balcony with palm views</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guest Access</h3>
              <ul className="text-gray-600 space-y-2">
                <li>🏊‍♀️ Common swimming pool</li>
                <li>💪 Gym and fitness area</li>
                <li>⚡ 100% power backup</li>
                <li>📶 High-speed WiFi</li>
                <li>🅿️ Dedicated free parking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid (Now Card Style) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-gray-800">
            Amenities You’ll Love
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Swimming Pool" },
              { icon: Wifi, title: "High-Speed WiFi" },
              { icon: Car, title: "Free Parking" },
              { icon: BedDouble, title: "King Bed" },
              { icon: Coffee, title: "Fully Equipped Kitchen" },
              { icon: Droplets, title: "Modern Bathroom" },
              { icon: Wind, title: "Private Balcony" },
              { icon: Dumbbell, title: "Gym Access" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 golden-gradient text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Ready to Book Your Stay at Breezona?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience your private 1BHK retreat — where tropical calm meets coastal charm. 
            Just minutes from Candolim Beach, designed for peace, comfort, and style.
          </p>
          <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  )
}
