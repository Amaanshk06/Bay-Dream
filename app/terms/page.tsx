export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-playfair text-gray-800">Terms of Service</h1>
        <div className="prose max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Morii by the Sea. These terms and conditions outline the rules and regulations for the use of our
            services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Booking Terms</h2>
          <p className="text-gray-600 mb-4">
            All bookings are subject to availability and confirmation. A deposit may be required to secure your
            reservation.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Cancellation Policy</h2>
          <p className="text-gray-600 mb-4">
            Cancellations must be made at least 48 hours before check-in to avoid charges. Please refer to your booking
            confirmation for specific terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Contact Information</h2>
          <p className="text-gray-600">
            For questions regarding these terms, please contact us at legal@moriibythesea.com
          </p>
        </div>
      </div>
    </div>
  )
}
