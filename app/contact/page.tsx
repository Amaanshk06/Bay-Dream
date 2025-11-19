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
            alt="Contact Breezona"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">Contact Breezona</h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            We’re here to make your Goan getaway effortless
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-gray-800">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 golden-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Flat no 102, Casa de Amora Apartment,
                      <br />
                      Pilern, Goa 403114, India
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
                    <h3 className="font-semibold text-gray-800 mb-1">Guest Assistance Hours</h3>
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

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
                <div className="flex gap-4">

                  {/* WhatsApp Button */}
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      window.open("https://wa.me/918830249088", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>

                  {/* Call Button */}
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
                  <h2 className="text-2xl font-bold mb-6 font-playfair text-gray-800">Send us a Message</h2>

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
                      <Input id="guests" type="number" min="1" max="3" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" className="mt-1" placeholder="Booking Inquiry, General Question, etc." />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        className="mt-1"
                        rows={5}
                        placeholder="Tell us about your travel dates, special requests, or any questions..."
                      />
                    </div>

                    <Button type="submit" className="w-full golden-gradient text-white py-3 text-lg hover:opacity-90">
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
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-800">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located just 15 minutes from Candolim Beach, Goa
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Breezona,+Flat+no+102,+Casa+de+Amora+Apartment,+Pilern,+Goa+403114&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Location Label */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg text-center">
              <p className="font-semibold text-gray-800">Breezona</p>
              <p className="text-sm text-gray-600">
                Flat no 102, Casa de Amora Apartment, Pilern, Goa 403114
              </p>
            </div>
          </div>

          {/* Get Directions Button */}
          <div className="text-center mt-8">
            <Button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=Breezona,+Flat+no+102,+Casa+de+Amora+Apartment,+Pilern,+Goa+403114",
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


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common queries about staying at Breezona</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What time is check-in and check-out?",
                answer:
                  "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be arranged on request.",
              },
              {
                question: "Is parking available?",
                answer: "Yes, Breezona offers complimentary dedicated parking inside the gated complex.",
              },
              {
                question: "Do you provide housekeeping?",
                answer:
                  "Yes, daily housekeeping is provided between 10 AM and 6 PM. Fresh towels and linens are replaced every 3 nights.",
              },
              {
                question: "Is the apartment pet-friendly?",
                answer:
                  "We currently do not allow pets to maintain the calm environment for all guests.",
              },
              {
                question: "How far is Breezona from the beach?",
                answer:
                  "Breezona is just 15 minutes away from Candolim Beach and a short drive from other popular North Goa spots.",
              },
              {
                question: "What amenities are available?",
                answer:
                  "Guests have access to the swimming pool, gym, WiFi, parking, and a fully equipped kitchen.",
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
            Ready to Escape to Breezona?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to book your serene 1BHK stay with pool — your tropical hideaway near Candolim awaits.
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
