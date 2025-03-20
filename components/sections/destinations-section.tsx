"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type Destination = {
  id: number
  name: string
  location: string
  description: string
  image: string
  price: string
}

export function DestinationsSection() {
  const [activeDestination, setActiveDestination] = useState(0)

  const destinations: Destination[] = [
    {
      id: 1,
      name: "Santorini",
      location: "Greece",
      description:
        "Experience the breathtaking views of white-washed buildings against the deep blue Aegean Sea. Explore ancient ruins, relax on volcanic beaches, and witness the most spectacular sunsets.",
      image: "/images/santorini.jpg",
      price: "From $1,299",
    },
    {
      id: 2,
      name: "Kyoto",
      location: "Japan",
      description:
        "Immerse yourself in Japanese culture with ancient temples, traditional tea houses, and stunning cherry blossoms. Explore bamboo forests and historic districts in this cultural gem.",
      image: "/images/kyoto.jpg",
      price: "From $1,499",
    },
    {
      id: 3,
      name: "Machu Picchu",
      location: "Peru",
      description:
        "Trek through the Andes to discover the lost city of the Incas. Marvel at the ancient engineering and breathtaking mountain views in this UNESCO World Heritage site.",
      image: "/images/machu-picchu.jpg",
      price: "From $1,899",
    },
    {
      id: 4,
      name: "Bali",
      location: "Indonesia",
      description:
        "Find your balance in this spiritual paradise. From lush rice terraces to sacred temples and pristine beaches, Bali offers a perfect blend of relaxation and adventure.",
      image: "/images/bali.jpg",
      price: "From $1,099",
    },
  ]

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="wait">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeDestination === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:flex-row md:items-stretch md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex w-full flex-col justify-center md:mb-0 md:w-1/2 md:pr-8"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Popular Destinations</h2>
          <p className="mb-8 max-w-xl text-lg text-gray-200">
            Explore our handpicked selection of the world's most breathtaking destinations. Each location offers unique
            experiences and unforgettable memories.
          </p>

          <div className="flex flex-wrap gap-3">
            {destinations.map((destination, index) => (
              <Button
                key={destination.id}
                variant={activeDestination === index ? "default" : "outline"}
                className={`mb-2 mr-2 ${activeDestination === index ? "bg-primary text-primary-foreground" : "border-white/70 text-white hover:bg-white/10"}`}
                onClick={() => setActiveDestination(index)}
              >
                {destination.name}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={destinations[activeDestination].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
              <h3 className="mb-1 text-3xl font-bold text-white">{destinations[activeDestination].name}</h3>
              <p className="mb-4 text-xl text-primary">{destinations[activeDestination].location}</p>
              <p className="mb-6 text-gray-200">{destinations[activeDestination].description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-white">{destinations[activeDestination].price}</span>
                <Button>Book Now</Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

