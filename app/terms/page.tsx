"use client"

import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] mt-[-80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/images/gallery-hero1.jpg"
            alt="Terms & Conditions"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair slide-up">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl font-light slide-up" style={{ animationDelay: "0.2s" }}>
            Please read our terms before booking your stay
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-8">
            Guest Terms & Conditions
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Booking & Payment</h3>
              <p>
                All bookings are confirmed only after full or partial payment as specified during the reservation.
                Rates may vary based on season, weekends, or holidays. Prices are subject to change at any time
                without prior notice until a booking is confirmed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Check-in & Check-out</h3>
              <p>
                Check-in time is <strong>2:00 PM</strong> and check-out time is <strong>11:00 AM</strong>.
                Early check-in or late check-out may be available at an additional cost and is subject to availability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. House Rules</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>No loud music after 9 PM.</li>
                <li>Smoking is strictly prohibited inside the apartment.</li>
                <li>No outside visitors are allowed inside the property.</li>
                <li>Please maintain cleanliness and respect the property.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Security Deposit</h3>
              <p>
                A refundable security deposit of <strong>₹5000</strong> is collected at check-in.
                Deductions may apply for damages, missing items, or misconduct.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Guest Responsibilities</h3>
              <p>
                Guests are responsible for their personal belongings. The management is not liable for loss,
                theft, or damage of personal property. 
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">6. Cancellation Policy</h3>
              <p>
                Cancellations made within 7 days of check-in are non-refundable.
                For earlier cancellations, partial refunds may apply as per booking policy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">7. Damage to Property</h3>
              <p>
                Any damage caused by the guest or their party must be compensated. 
                This includes furniture, appliances, linens, and any other property assets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">8. Pool/Gym Usage</h3>
              <p>
                Pool and gym are shared amenities. Timings must be respected. 
                Guests must follow all safety guidelines; children must be supervised at all times.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">9. Personal Safety</h3>
              <p>
                Guests are responsible for their own safety inside and around the property.
                The management is not responsible for accidents caused due to negligence or misuse of amenities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">10. Acceptance of Terms</h3>
              <p>
                By completing a booking, guests agree to comply with all terms and conditions listed on this page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 golden-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Have Questions About These Terms?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us if you need clarity about bookings, policies, or house rules.
          </p>
          <Button
            onClick={() => (window.location.href = "/contact")}
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
