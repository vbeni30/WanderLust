"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLazyLoad } from "@/lib/hooks/use-lazy-load"

interface TestimonialsSectionProps {
  testimonials: Array<{
    id: number
    name: string
    avatar: string
    location: string
    text: string
    rating: number
    destination: string
  }>
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { ref, isLoaded } = useLazyLoad()

  if (!isLoaded) {
    return <div ref={ref} className="min-h-[400px] bg-gray-100" />
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Traveler Stories</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Hear what our customers have to say about their unforgettable journeys with Wanderlust.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-gray-600">"{testimonial.text}"</p>
                <div className="mt-auto text-sm text-gray-500">Trip to {testimonial.destination}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/10">
              Read More Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

