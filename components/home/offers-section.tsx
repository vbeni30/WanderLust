"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { useLazyLoad } from "@/lib/hooks/use-lazy-load"

const offers = [
  {
    title: "Summer in Santorini",
    discount: "25% OFF",
    description:
      "Experience the magic of Santorini with our exclusive summer package including flights, 5-night accommodation, and a sunset cruise.",
    price: "$1,299",
    originalPrice: "$1,699",
    expiry: "Offer ends in 7 days",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Bali Wellness Retreat",
    discount: "Free Spa Package",
    description:
      "Rejuvenate your mind and body with our wellness retreat including yoga sessions, spa treatments, and healthy cuisine.",
    price: "$1,499",
    originalPrice: "$1,899",
    expiry: "Offer ends in 14 days",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
  },
  {
    title: "Japan Cherry Blossom Tour",
    discount: "Early Bird 20% OFF",
    description:
      "Book now for next spring's cherry blossom season in Japan. Package includes guided tours in Tokyo, Kyoto, and Osaka.",
    price: "$2,399",
    originalPrice: "$2,999",
    expiry: "Book by September 30",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
  },
]

export default function OffersSection() {
  const { ref, isLoaded } = useLazyLoad()

  if (!isLoaded) {
    return <div ref={ref} className="min-h-[400px] bg-gradient-to-r from-primary/90 to-primary" />
  }

  return (
    <section className="bg-gradient-to-r from-primary/90 to-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Special Offers</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Limited-time deals and exclusive packages to make your dream vacation more affordable.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  width={400}
                  height={250}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{offer.title}</h3>
                <p className="mb-4 text-white/80">{offer.description}</p>
                <div className="mb-4 flex items-baseline">
                  <span className="text-2xl font-bold">{offer.price}</span>
                  <span className="ml-2 text-sm line-through text-white/60">{offer.originalPrice}</span>
                  <span className="ml-auto text-xs text-white/60">{offer.expiry}</span>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">Book Now</Button>
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
            className="border-2 border-white text-white hover:bg-white/20 bg-white/10"
          >
            View All Offers
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

