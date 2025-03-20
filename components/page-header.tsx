"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
  gradientColors?: string
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  gradientColors = "from-blue-900/80 to-blue-600/80",
}: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors}`} />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-4xl font-bold text-white md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

