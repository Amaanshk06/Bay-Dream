"use client"

import Image from "next/image"
import { useState, useMemo } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visibleCount, setVisibleCount] = useState(8)

  const categories = [
    { id: "all", name: "All" },
    { id: "Rooms", name: "Rooms" },
    { id: "Hall", name: "Hall" },
    { id: "dining", name: "Dining" },
    { id: "balcony", name: "Balcony" },
    { id: "pool", name: "Pool" },
  ]

  const images = [
    { id: 1, src: "/images/rooms3.jpg", category: "Rooms" },
    { id: 2, src: "/images/rooms-hero1.jpg", category: "Rooms" },
    { id: 3, src: "/images/rooms1.jpg", category: "Rooms" },
    { id: 4, src: "/images/rooms2.jpg", category: "Rooms" },
    { id: 5, src: "/images/rooms4.jpg", category: "Rooms" },
    { id: 6, src: "/images/halls1.jpg", category: "Hall" },
    { id: 7, src: "/images/halls2.jpg", category: "Hall" },
    { id: 8, src: "/images/halls3.jpg", category: "Hall" },
    { id: 9, src: "/images/halls4.jpg", category: "Hall" },
    { id: 10, src: "/images/halls5.jpg", category: "Hall" },
    { id: 11, src: "/images/halls6.jpg", category: "Hall" },
    { id: 12, src: "/images/halls7.jpg", category: "Hall" },
    { id: 13, src: "/images/din1.jpg", category: "dining" },
    { id: 14, src: "/images/din2.jpg", category: "dining" },
    { id: 15, src: "/images/din3.jpg", category: "dining" },
    { id: 16, src: "/images/bal1.jpg", category: "balcony" },
    { id: 17, src: "/images/bal2.jpg", category: "balcony" },
    { id: 18, src: "/images/bath1.jpg", category: "bathroom" },
    { id: 19, src: "/images/pools1.jpg", category: "pool" },
    { id: 20, src: "/images/pools2.jpg", category: "pool" },
    { id: 21, src: "/images/villa-pool1.jpg", category: "pool" },
    { id: 22, src: "/images/resort-overview1.jpg", category: "pool" },
    { id: 23, src: "/images/gym2.jpg", category: "all" },
    { id: 24, src: "/images/kitchen2.jpg", category: "pool" },
    { id: 25, src: "/images/entry1.jpg", category: "pool" },
  ]

  const filteredImages = useMemo(
    () => (selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)),
    [selectedCategory]
  )

  const visibleImages = filteredImages.slice(0, visibleCount)

  // ✅ Tiny base64 blur placeholder (1 KB)
  const blurData =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAkGBxISEhISEhIWFRUVFRUVFRUVFRUVFRUWFxUXFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFysdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQYDBAcCAf/EADcQAAEDAgQDBgUEAwAAAAAAAAEAAgMEEQUSITFBEyJRYRQygaGxwfAHFEJScpLR8RUzcv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACIRAQEAAgICAgMBAAAAAAAAAAABAhEDITESQVEEImFxsf/aAAwDAQACEQMRAD8A+3iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/gallery-hero1.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
            quality={60}
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">Gallery</h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the beauty of Breezona
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "golden-gradient text-white"
                    : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                }`}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setVisibleCount(8)
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={400}
                  height={300}
                  loading="lazy"
                  quality={40}
                  placeholder="blur"
                  blurDataURL={blurData}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
            ))}
          </div>

          {visibleCount < filteredImages.length && (
            <div className="text-center mt-10">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-full"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </Button>
            <Image
              src={selectedImage}
              alt=""
              width={1200}
              height={800}
              loading="lazy"
              quality={60}
              placeholder="blur"
              blurDataURL={blurData}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">Experience It Yourself</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            These images only capture a glimpse of the magic. Come and create your own memories at Morii by the Sea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
