"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
  trip: string
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "Our family trip to Japan was flawlessly organized. Every detail was considered, from the ryokan stays to the private tours of temples. It was the perfect balance of cultural immersion and relaxation.",
      trip: "Cultural Tour of Japan",
    },
    {
      id: 2,
      name: "Marco Rossi",
      location: "Milan, Italy",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "The African safari exceeded all expectations. Our guide was incredibly knowledgeable, and the accommodations were luxurious yet authentic. Watching the Great Migration was a life-changing experience.",
      trip: "Kenyan Safari Adventure",
    },
    {
      id: 3,
      name: "Emma Chen",
      location: "Sydney, Australia",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "As solo travelers, safety was my priority. Not only did I feel secure throughout my South American journey, but the local experiences arranged were genuine and off the beaten path. Truly unforgettable!",
      trip: "South America Explorer",
    },
    {
      id: 4,
      name: "David & Lisa Thompson",
      location: "Toronto, Canada",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "Our honeymoon in the Maldives was absolute perfection. The overwater bungalow, private dinners on the beach, and surprise sunset cruise made it magical. Worth every penny for these memories.",
      trip: "Maldives Luxury Retreat",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Traveler Stories</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Hear from our clients about their extraordinary journeys and memorable experiences with us.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 0.9,
                display: activeIndex === index ? "block" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-md md:p-12"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative mb-8">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/30" />
                <p className="text-lg italic text-white">{testimonial.text}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white">
                  {testimonial.trip}
                </div>
                <div className="text-sm text-white/70">Verified Traveler</div>
              </div>
            </motion.div>
          ))}

          <div className="mt-8 flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-white/30 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/30"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-white/30 text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

