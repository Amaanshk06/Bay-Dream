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
  title: "Bay Dream-Curated holiday homes in Goa by Anand Group of Companies",
  description:
    "Two curated homes in Goa:Breezona (1BHK) and Casa Da Solares (2BHK). Book with Bay Dream.",
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
