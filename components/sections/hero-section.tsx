"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Discover the World <br />
          <span className="text-primary">Your Way</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl"
        >
          Unforgettable journeys tailored to your dreams. Experience the extraordinary with our curated travel
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Button size="lg" className="min-w-[180px] text-lg">
            Explore Destinations
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px] border-white text-lg text-white">
            Plan Your Trip
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 transform"
        >
          <div className="flex items-center text-sm font-medium text-white">
            <span>Scroll to explore</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

