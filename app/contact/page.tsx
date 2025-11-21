"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/entry1.jpg"
            alt="Contact Bay Dream"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            Contact Bay Dream
          </h1>
          <p
            className="text-xl md:text-2xl font-light slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your gateway to Breezona & Casa Da Solares — two unforgettable stays in Goa.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-gray-800">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Flat No. 102, Casa de Amora Apartments,
                      <br />
                      Pilerne, Goa 403114, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91 8830249088
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      baydreamdev.llp@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Guest Assistance Hours
                    </h3>
                    <p className="text-gray-600">
                      Available 24/7 via WhatsApp
                      <br />
                      Check-in: 2:00 PM
                      <br />
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Quick Contact
                </h3>
                <div className="flex gap-4">
                  {/* WhatsApp */}
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      window.open("https://wa.me/918830249088", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>

                  {/* Call */}
                  <Button
                    className="flex-1 golden-gradient text-white hover:opacity-90"
                    onClick={() => (window.location.href = "tel:+918830249088")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-in-right">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 font-playfair text-gray-800">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkin">Check-in Date</Label>
                        <Input id="checkin" type="date" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="checkout">Check-out Date</Label>
                        <Input id="checkout" type="date" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input id="guests" type="number" min="1" max="6" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        className="mt-1"
                        placeholder="Booking Inquiry for Breezona or Casa Da Solares"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        className="mt-1"
                        rows={5}
                        placeholder="Tell us about your dates, property preference, or any special requests..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full golden-gradient text-white py-3 text-lg hover:opacity-90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-800">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Just 15 minutes from Candolim Beach — your gateway to both Breezona & Casa Da Solares
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Casa+de+Amora+Apartment,+Pilerne,+Goa+403114&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg text-center">
              <p className="font-semibold text-gray-800">Bay Dream</p>
              <p className="text-sm text-gray-600">
                Casa De Amora Apartments, Pilerne, Goa 403114
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Amora+Apartment,+Pilerne,+Goa+403114",
                  "_blank"
                )
              }
              className="golden-gradient text-white px-6 py-3 rounded-full hover:opacity-90"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section (Updated for Both Properties) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common queries about staying at Breezona & Casa Da Solares
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What time is check-in and check-out?",
                answer:
                  "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be arranged for both properties.",
              },
              {
                question: "Is parking available?",
                answer:
                  "Yes, free dedicated parking is available at both Breezona and Casa Da Solares.",
              },
              {
                question: "Do you provide housekeeping?",
                answer:
                  "Yes! Daily housekeeping between 10 AM and 6 PM for both properties. Fresh linens every 3 nights.",
              },
              {
                question: "How far are the homes from the beach?",
                answer:
                  "Both Breezona and Casa Da Solares are approximately 12–15 minutes from Candolim Beach.",
              },
              {
                question: "What amenities are provided?",
                answer:
                  "Both homes offer WiFi, parking, equipped kitchens, and premium comfort amenities. Breezona has a private pool; Casa Da Solares has a private garden.",
              },
              {
                question: "Do you allow pets?",
                answer:
                  "Currently, pets are not allowed at either property to maintain a peaceful environment.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Ready to Book Your Goa Stay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose between Breezona & Casa Da Solares — both offering comfort, style, and unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
              Book Now
            </Button>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "tel:+918830249088")}
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg bg-transparent"
            >
              Call Us
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
