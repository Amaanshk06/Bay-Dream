"use client"

import { useEffect, useState, use } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  /*
      ALL HOOKS MUST BE AT TOP (FIX FOR REACT)
  */
  const [property, setProperty] = useState<any | null>(null)

  // Load more state
  const [visibleCount, setVisibleCount] = useState(6)
  const loadMore = () => setVisibleCount(prev => prev + 6)

  /*
      AUTO GALLERY FILE LOADER
  */
  const extraGalleryImages: any[] = []
  for (let i = 1; i <= 19; i++) {
    extraGalleryImages.push({
      src: `/properties/${slug}/gallery/${i}.jpg`,
    })
  }

  const galleryImages = [
    ...(property?.images || []),
    ...extraGalleryImages,
  ]

  const visibleImages = galleryImages.slice(0, visibleCount)

  /*
      FETCH PROPERTY DATA
  */
  useEffect(() => {
    fetch("/data/properties.json")
      .then((r) => r.json())
      .then((all) => {
        const found = all.find((p: any) => p.slug === slug)
        setProperty(found || null)
      })
  }, [slug])

  /*
      LOADING STATE
  */
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading property...</p>
      </div>
    )
  }

  /*
      PAGE START
  */

  return (
    <>
      <main className="pt-0 pb-16">

        {/*=
            HERO SECTION
       === */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {property.images?.map((img: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[450px] md:h-[650px]">
                  <Image
                    src={img.src}
                    alt={property.name}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="100vw"
                  />

                  {/* Hero Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>

                  {/* Hero Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold drop-shadow-xl">
                      {property.name}
                    </h1>

                    <p className="text-white text-lg md:text-xl mt-3 opacity-90">
                      {property.type}
                    </p>

                    <p className="text-white max-w-2xl text-base md:text-lg mt-6 leading-relaxed opacity-90">
                      {property.shortDescription}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/*=
            PAGE CONTENT
       === */}
        <div className="container mx-auto px-4 space-y-24 mt-20">

          {/* HIGHLIGHTS */}
          {property.highlights && (
            <section className="text-center">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Highlights
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
                {property.highlights.map((h: string, i: number) => (
                  <div
                    key={i}
                    className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ABOUT SECTION */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-gray-900">
              About This Stay
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed whitespace-pre-line">
              {property.longDescription}
            </p>
          </section>

          {/* AMENITIES */}
          {property.amenities && (
            <section>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
                  Amenities That Make You Feel at Home
                </h2>

                <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                  Designed for comfort and tranquility — enjoy premium amenities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14">
                {property.amenities.map((item: string, i: number) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#D4A762] flex items-center justify-center mb-4 shadow-md">
                      <span className="text-white text-4xl">★</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900">{item}</h3>

                    <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xs">
                      Enjoy premium comfort & convenience.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/*=
              GALLERY WITH LOAD MORE
         === */}
          <section className="text-center">
            <h2 className="text-4xl font-playfair font-bold text-gray-900">
              Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
              {visibleImages.map((img: any, i: number) => (
                <div key={i} className="relative h-[450px]  rounded-xl overflow-hidden shadow">
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw,
                           (max-width: 1200px) 33vw,
                           25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/blur-placeholder.jpg"
                  />
                </div>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            {visibleCount < galleryImages.length && (
              <div className="mt-10">
                <button
                  onClick={loadMore}
                  className="px-8 py-3 rounded-full golden-gradient text-white text-lg shadow-md hover:shadow-lg transition"
                >
                  Load More
                </button>
              </div>
            )}
          </section>

          {/* LOCATION */}
          {property.location?.mapUrl && (
            <section className="text-center">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Location
              </h2>

              <a
                href={property.location.mapUrl}
                target="_blank"
                className="inline-block mt-6 text-[#D4A762] font-semibold text-lg underline"
              >
                View on Google Maps →
              </a>
            </section>
          )}

          {/* HOUSE RULES */}
          {property.houseRules && (
            <section className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                House Rules
              </h2>

              <ul className="mt-6 text-gray-700 space-y-3 text-lg">
                {property.houseRules.map((rule: string, i: number) => (
                  <li key={i}>• {rule}</li>
                ))}
              </ul>
            </section>
          )}

          {/* BOOK NOW BUTTON */}
          <div className="text-center mt-16">
            <button className="px-10 py-4 rounded-full golden-gradient text-white text-xl shadow-md hover:shadow-lg transition">
              Book Now
            </button>
          </div>

          {/* FOOTER CTA */}
          <div className="text-center py-20">
            <h3 className="text-4xl font-playfair font-bold mb-4">
              Ready to Book Your Stay?
            </h3>

            <p className="text-gray-600 text-lg mb-8">
              Contact us or press the button below to reserve your getaway.
            </p>

            <button className="px-10 py-4 rounded-full bg-black text-white text-xl shadow-md hover:bg-gray-900 transition">
              Contact Us
            </button>
          </div>

        </div>
      </main>
    </>
  )
}
