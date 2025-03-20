"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Star, Filter, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"

const destinations = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    description: "Experience the breathtaking views of white-washed buildings against the deep blue Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2574&auto=format&fit=crop",
    rating: 4.9,
    price: "$1,299",
    category: "Europe",
    tags: ["Beach", "Romantic", "Island"],
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    description: "Find your balance in this spiritual paradise with lush rice terraces and pristine beaches.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    rating: 4.7,
    price: "$899",
    category: "Asia",
    tags: ["Beach", "Cultural", "Wellness"],
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    description: "Immerse yourself in Japanese culture with ancient temples and traditional gardens.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
    rating: 4.8,
    price: "$1,499",
    category: "Asia",
    tags: ["Cultural", "Historical", "City"],
  },
  {
    id: 4,
    name: "Machu Picchu",
    location: "Peru",
    description: "Trek through the Andes to discover the lost city of the Incas and breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2940&auto=format&fit=crop",
    rating: 4.9,
    price: "$1,899",
    category: "South America",
    tags: ["Adventure", "Historical", "Mountain"],
  },
  {
    id: 5,
    name: "Iceland",
    location: "Europe",
    description: "Land of fire and ice with dramatic landscapes, waterfalls, and northern lights.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2942&auto=format&fit=crop",
    rating: 4.8,
    price: "$1,699",
    category: "Europe",
    tags: ["Adventure", "Nature", "Cold"],
  },
  {
    id: 6,
    name: "Marrakech",
    location: "Morocco",
    description: "Explore the vibrant markets and ancient medinas of this colorful North African city.",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2940&auto=format&fit=crop",
    rating: 4.6,
    price: "$899",
    category: "Africa",
    tags: ["Cultural", "City", "Desert"],
  },
  {
    id: 7,
    name: "New York City",
    location: "USA",
    description: "Experience the energy of the Big Apple with its iconic skyline and diverse neighborhoods.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop",
    rating: 4.7,
    price: "$1,299",
    category: "North America",
    tags: ["City", "Urban", "Shopping"],
  },
  {
    id: 8,
    name: "Great Barrier Reef",
    location: "Australia",
    description: "Dive into the world's largest coral reef system and discover incredible marine life.",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop",
    rating: 4.9,
    price: "$1,899",
    category: "Australia",
    tags: ["Beach", "Nature", "Adventure"],
  },
  {
    id: 9,
    name: "Amalfi Coast",
    location: "Italy",
    description: "Drive along the stunning coastline with colorful villages perched on dramatic cliffs.",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=2940&auto=format&fit=crop",
    rating: 4.8,
    price: "$1,599",
    category: "Europe",
    tags: ["Beach", "Romantic", "Scenic"],
  },
  {
    id: 10,
    name: "Cape Town",
    location: "South Africa",
    description: "Where mountains meet the sea, offering stunning landscapes and diverse cultural experiences.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2942&auto=format&fit=crop",
    rating: 4.7,
    price: "$1,399",
    category: "Africa",
    tags: ["Beach", "Mountain", "City"],
  },
  {
    id: 11,
    name: "Rio de Janeiro",
    location: "Brazil",
    description: "Famous for its stunning beaches, vibrant culture, and iconic Christ the Redeemer statue.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2940&auto=format&fit=crop",
    rating: 4.6,
    price: "$1,299",
    category: "South America",
    tags: ["Beach", "City", "Cultural"],
  },
  {
    id: 12,
    name: "Bangkok",
    location: "Thailand",
    description: "A bustling city with ornate shrines, vibrant street life, and a rich cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    price: "$899",
    category: "Asia",
    tags: ["City", "Cultural", "Food"],
  },
]

const categories = ["All", "Europe", "Asia", "Africa", "North America", "South America", "Australia"]
const tags = [
  "Beach",
  "Mountain",
  "City",
  "Cultural",
  "Adventure",
  "Romantic",
  "Historical",
  "Nature",
  "Urban",
  "Wellness",
  "Food",
  "Desert",
  "Island",
  "Scenic",
  "Shopping",
  "Cold",
]

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredDestinations = destinations.filter((destination) => {
    // Filter by category
    if (selectedCategory !== "All" && destination.category !== selectedCategory) {
      return false
    }

    // Filter by tags
    if (selectedTags.length > 0 && !selectedTags.some((tag) => destination.tags.includes(tag))) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !destination.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !destination.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Explore Destinations"
        subtitle="Discover breathtaking locations around the world and start planning your next adventure"
        backgroundImage="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2942&auto=format&fit=crop"
        gradientColors="from-blue-900/80 to-indigo-600/80"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search destinations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button variant="outline" className="flex items-center" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="mr-2 h-4 w-4" />
              Filters
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="mb-3 text-lg font-medium">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer text-sm ${
                        selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : ""
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/90 text-black hover:bg-white font-medium">
                          {destination.category}
                        </Badge>
                        <div className="flex items-center text-white">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{destination.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{destination.name}</h3>
                    <div className="mb-4 flex items-center text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <p className="mb-4 text-gray-600 line-clamp-2">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">
                        {destination.price}
                        <span className="text-sm font-normal text-gray-500"> / person</span>
                      </div>
                      <Button size="sm" className="font-semibold shadow-sm bg-primary text-white hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="mt-12 text-center">
              <h3 className="mb-2 text-xl font-medium">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedTags([])
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

