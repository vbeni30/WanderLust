"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Compass, Utensils, Camera, Users, Mountain, Umbrella } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Experience = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  image: string
  color: string
}

export function ExperiencesSection() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Adventure Tours",
      description:
        "Push your limits with our adrenaline-pumping adventure tours. From mountain climbing to white water rafting, experience the thrill of the outdoors with expert guides ensuring your safety.",
      icon: <Mountain className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-orange-600 to-red-600",
    },
    {
      id: 2,
      title: "Culinary Journeys",
      description:
        "Savor the authentic flavors of local cuisines around the world. Our culinary tours include cooking classes, market visits, and dining at both hidden gems and renowned restaurants.",
      icon: <Utensils className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-emerald-600 to-teal-600",
    },
    {
      id: 3,
      title: "Photography Expeditions",
      description:
        "Capture breathtaking moments with our photography-focused trips. Led by professional photographers, these expeditions take you to the most photogenic locations at the perfect time of day.",
      icon: <Camera className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 4,
      title: "Cultural Immersions",
      description:
        "Go beyond typical tourism and truly connect with local communities. Participate in traditional ceremonies, learn crafts from artisans, and gain deep insights into diverse cultures.",
      icon: <Users className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-purple-600 to-violet-600",
    },
    {
      id: 5,
      title: "Luxury Retreats",
      description:
        "Indulge in the finest accommodations and services with our luxury retreat packages. Enjoy private villas, personal butlers, spa treatments, and exclusive access to local attractions.",
      icon: <Umbrella className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-amber-600 to-yellow-600",
    },
    {
      id: 6,
      title: "Custom Journeys",
      description:
        "Create your perfect trip with our bespoke travel planning service. Our experts will design a personalized itinerary based on your interests, preferences, and travel style.",
      icon: <Compass className="h-8 w-8" />,
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-pink-600 to-rose-600",
    },
  ]

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeExperience === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${exp.image})`,
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-80`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Curated Experiences</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            We believe travel is more than just visiting places. It's about creating meaningful connections and memories
            that last a lifetime.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "flex cursor-pointer flex-col items-center rounded-xl p-4 text-center transition-all duration-300",
                activeExperience === index
                  ? "bg-white/20 backdrop-blur-md"
                  : "bg-white/5 hover:bg-white/10 backdrop-blur-sm",
              )}
              onClick={() => setActiveExperience(index)}
            >
              <div
                className={cn(
                  "mb-3 flex h-16 w-16 items-center justify-center rounded-full text-white",
                  `bg-gradient-to-r ${exp.color}`,
                )}
              >
                {exp.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{exp.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeExperience === index ? 1 : 0,
                y: activeExperience === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-md"
              style={{ display: activeExperience === index ? "block" : "none" }}
            >
              <h3 className="mb-4 text-3xl font-bold text-white">{exp.title}</h3>
              <p className="mb-6 text-lg text-white/80">{exp.description}</p>
              <Button size="lg">Explore {exp.title}</Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

