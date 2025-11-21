"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/rooms-hero1.jpg"
            alt="Bay Dream Privacy Policy"
            fill
            className="object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Your privacy matters to us at Bay Dream
          </p>
        </div>
      </section>

      {/* PRIVACY CONTENT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700 space-y-12">

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy explains how <strong>Bay Dream by Anand Group of Companies</strong> 
              (“we”, “our”, or “us”) collects, uses, stores, and protects your personal information. 
              This applies to all visitors, guests, and users of our website and services, 
              including those booking stays at <strong>Breezona</strong> and 
              <strong> Casa Da Solares</strong>.
            </p>
          </div>

          {/* DATA WE COLLECT */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>

            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Identity Information:</strong> Name, email address, phone number.</li>
              <li><strong>Booking Details:</strong> Check-in/check-out dates, number of guests.</li>
              <li><strong>Communication Data:</strong> Messages sent via WhatsApp, contact forms, email.</li>
              <li><strong>Technical Data:</strong> IP address, device information, browser type, cookies.</li>
              <li><strong>Payment Information:</strong> Handled securely through third-party processors (we do not store card details).</li>
            </ul>
          </div>

          {/* HOW WE USE DATA */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">3. How We Use Your Information</h2>

            <p className="mb-4">We use your data to:</p>

            <ul className="space-y-2 list-disc pl-6">
              <li>Process bookings and reservations</li>
              <li>Respond to your messages and inquiries</li>
              <li>Provide customer support and guest assistance</li>
              <li>Improve website functionality and user experience</li>
              <li>Send booking confirmations and updates</li>
              <li>Maintain security and prevent fraudulent activity</li>
            </ul>
          </div>

          {/* LEGAL BASIS */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">4. Legal Basis for Processing</h2>
            <p className="leading-relaxed">
              We process your data based on:
            </p>

            <ul className="space-y-2 list-disc pl-6 mt-2">
              <li><strong>Contractual necessity</strong> (booking a property)</li>
              <li><strong>Legitimate interests</strong> (service improvement, security)</li>
              <li><strong>Your consent</strong> (newsletter, WhatsApp communication)</li>
            </ul>
          </div>

          {/* COOKIES */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">5. Cookies & Tracking Technologies</h2>
            <p className="leading-relaxed">
              We use cookies to enhance browsing experience, analyze website performance, 
              and remember your preferences. You may disable cookies through your browser at any time.
            </p>
          </div>

          {/* DATA SHARING */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">6. Sharing Your Information</h2>
            <p className="leading-relaxed mb-4">We do NOT sell your personal information. We may share data only with:</p>

            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Trusted service providers</strong> (hosting, analytics, payment gateways)</li>
              <li><strong>Government authorities</strong> if required by law</li>
              <li><strong>Security tools</strong> to prevent fraud or misuse</li>
            </ul>
          </div>

          {/* DATA STORAGE */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your information only for as long as necessary for booking, legal, 
              or operational purposes. Communication logs may be kept for internal support review.
            </p>
          </div>

          {/* YOUR RIGHTS */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">8. Your Rights</h2>

            <ul className="space-y-2 list-disc pl-6">
              <li>Right to access your data</li>
              <li>Right to request corrections</li>
              <li>Right to request deletion</li>
              <li>Right to withdraw consent</li>
            </ul>

            <p className="mt-4">
              To exercise these rights, contact us at:  
              <strong> baydreamdev.llp@gmail.com</strong>
            </p>
          </div>

          {/* SECURITY */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">9. Data Security</h2>
            <p className="leading-relaxed">
              We implement strong security practices, encrypted hosting, 
              and restricted data access to protect your information.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">10. Contact Us</h2>

            <p className="leading-relaxed">
              For privacy concerns or data-related queries, reach us at:
            </p>

            <p className="mt-4 font-semibold text-gray-800">
              baydreamdev.llp@gmail.com  
              <br />
              Flat No 102, Casa De Amora Apartment,  
              Pilern, Goa 403114, India
            </p>
          </div>

        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 golden-gradient text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Need help with your booking?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team anytime — we're here to help!
          </p>

          <Button
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us
          </Button>
        </div>
      </section>

    </div>
  )
}
