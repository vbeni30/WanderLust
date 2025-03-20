"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, Globe } from "lucide-react"

export function AboutSection() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "120+", label: "Destinations" },
    { value: "50k+", label: "Happy Travelers" },
    { value: "100%", label: "Satisfaction Rate" },
  ]

  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sustainable Travel",
      description: "We prioritize eco-friendly practices and support local communities in all our travel operations.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Your safety is our top priority with comprehensive risk assessments and emergency protocols.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Service",
      description: "We tailor each journey to your preferences, ensuring a unique and memorable experience.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description:
        "We partner only with the best local providers to guarantee exceptional quality in all our services.",
    },
  ]

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800/80" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
            Our Story
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Crafting Unforgettable Travel Experiences Since 2008
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Founded by passionate travelers with a vision to transform how people experience the world, Wanderlust has
            grown from a small boutique agency to a leading travel company with a global presence.
          </p>
          <p className="mb-8 text-lg text-white/80">
            Our journey began with a simple belief: travel should be transformative, authentic, and responsible. Today,
            we continue to craft journeys that connect travelers with the heart and soul of each destination.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
            Our Values
          </div>
          <h3 className="mb-8 text-3xl font-bold text-white">What Sets Us Apart</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  {value.icon}
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">{value.title}</h4>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className="flex -space-x-4">
              <img
                className="h-12 w-12 rounded-full border-2 border-background"
                src="/placeholder.svg?height=100&width=100"
                alt="Team member"
              />
              <img
                className="h-12 w-12 rounded-full border-2 border-background"
                src="/placeholder.svg?height=100&width=100"
                alt="Team member"
              />
              <img
                className="h-12 w-12 rounded-full border-2 border-background"
                src="/placeholder.svg?height=100&width=100"
                alt="Team member"
              />
            </div>
            <div className="text-sm text-white/80">
              Meet our team of passionate travel experts with over 50 years of combined experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

