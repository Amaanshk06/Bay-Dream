import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { BookNowFloat } from "@/components/whatsapp-float"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Bay Dream, by Anand Group of Compaines",
  description:
    "Welcome to Casa Da Solares by Breezona — a serene 2BHK retreat with a private pool, just 15 minutes from Candolim Beach.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} font-sans`}
      >
        <Navigation />
        {children}
        <Footer />
        <BookNowFloat />
      </body>
    </html>
  )
}
