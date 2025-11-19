export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-playfair text-gray-800">Privacy Policy</h1>
        <div className="prose max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            At Morii by the Sea, we are committed to protecting your privacy and ensuring the security of your personal
            information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you make a reservation, contact us, or
            subscribe to our newsletter.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide, maintain, and improve our services, process reservations, and
            communicate with you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at privacy@moriibythesea.com
          </p>
        </div>
      </div>
    </div>
  )
}
