import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PerformanceMetrics } from "@/components/performance-metrics"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Wanderlust | Discover Your Next Adventure",
  description: "Explore breathtaking destinations around the world with our immersive travel experiences.",
  generator: "v0.dev",
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pravatar.cc" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2574&auto=format&fit=crop"
          as="image"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <PerformanceMetrics />
      </body>
    </html>
  )
}



import './globals.css'   