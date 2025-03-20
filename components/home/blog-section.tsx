"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { useLazyLoad } from "@/lib/hooks/use-lazy-load"

const blogPosts = [
  {
    title: "10 Hidden Gems in Santorini",
    excerpt: "Discover the secret spots that most tourists miss on this popular Greek island.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2940&auto=format&fit=crop",
    category: "Destinations",
    date: "May 15, 2023",
  },
  {
    title: "A Foodie's Guide to Kyoto",
    excerpt:
      "From street food to Michelin-starred restaurants, explore the culinary delights of Japan's cultural capital.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2925&auto=format&fit=crop",
    category: "Food & Drink",
    date: "June 3, 2023",
  },
  {
    title: "Sustainable Travel: Eco-Friendly Tips",
    excerpt: "How to minimize your environmental impact while still enjoying unforgettable travel experiences.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop",
    category: "Travel Tips",
    date: "July 22, 2023",
  },
]

export default function BlogSection() {
  const { ref, isLoaded } = useLazyLoad()

  if (!isLoaded) {
    return <div ref={ref} className="min-h-[400px] bg-white" />
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Travel Inspiration</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover travel tips, destination guides, and stories to inspire your next adventure.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm text-gray-500">{post.date}</div>
                <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary text-primary hover:bg-primary/10"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

