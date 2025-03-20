"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Star, Filter, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"

const experiences = [
  {
    id: 1,
    title: "Santorini Sunset Cruise",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=2574&auto=format&fit=crop",
    price: "$89",
    rating: 4.9,
    duration: "3 hours",
    category: "Cruises",
    description:
      "Sail along the caldera cliffs of Santorini and witness one of the most spectacular sunsets in the world.",
  },
  {
    id: 2,
    title: "Bali Temple & Rice Terrace Tour",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2671&auto=format&fit=crop",
    price: "$65",
    rating: 4.7,
    duration: "Full day",
    category: "Cultural",
    description: "Explore Bali's most sacred temples and the stunning Tegallalang rice terraces on this guided tour.",
  },
  {
    id: 3,
    title: "Kyoto Tea Ceremony",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2536&auto=format&fit=crop",
    price: "$45",
    rating: 4.8,
    duration: "2 hours",
    category: "Cultural",
    description: "Experience the ancient art of Japanese tea ceremony in an authentic setting with a tea master.",
  },
  {
    id: 4,
    title: "Machu Picchu Guided Tour",
    location: "Cusco, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2670&auto=format&fit=crop",
    price: "$120",
    rating: 4.9,
    duration: "Full day",
    category: "Adventure",
    description:
      "Discover the mysteries of the ancient Incan citadel with an expert guide explaining its history and significance.",
  },
  {
    id: 5,
    title: "Iceland Northern Lights Hunt",
    location: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2670&auto=format&fit=crop",
    price: "$95",
    rating: 4.8,
    duration: "4 hours",
    category: "Nature",
    description: "Chase the elusive aurora borealis with expert guides who know the best viewing locations.",
  },
  {
    id: 6,
    title: "Venice Gondola Ride",
    location: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2670&auto=format&fit=crop",
    price: "$75",
    rating: 4.7,
    duration: "45 minutes",
    category: "Cruises",
    description: "Glide through the romantic canals of Venice on a traditional gondola with a serenading gondolier.",
  },
  {
    id: 7,
    title: "Great Barrier Reef Diving",
    location: "Queensland, Australia",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop",
    price: "$150",
    rating: 4.9,
    duration: "Full day",
    category: "Adventure",
    description:
      "Dive into the world's largest coral reef system and discover incredible marine life with certified instructors.",
  },
  {
    id: 8,
    title: "Moroccan Desert Safari",
    location: "Marrakech, Morocco",
    image:
      "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$110",
    rating: 4.8,
    duration: "2 days",
    category: "Adventure",
    description:
      "Ride camels through the Sahara Desert, spend a night in a traditional Berber camp, and stargaze under the desert sky.",
  },
  {
    id: 9,
    title: "New York City Food Tour",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2670&auto=format&fit=crop",
    price: "$85",
    rating: 4.6,
    duration: "3 hours",
    category: "Food",
    description:
      "Sample diverse cuisines from around the world in New York's most iconic neighborhoods with a local food expert.",
  },
  {
    id: 10,
    title: "Tokyo Sushi Making Class",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop",
    price: "$75",
    rating: 4.7,
    duration: "2 hours",
    category: "Food",
    description: "Learn to make authentic sushi from a professional chef in the heart of Tokyo.",
  },
  {
    id: 11,
    title: "Paris Wine Tasting",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2670&auto=format&fit=crop",
    price: "$90",
    rating: 4.8,
    duration: "3 hours",
    category: "Food",
    description: "Sample exquisite French wines paired with cheese and charcuterie in a historic Parisian cellar.",
  },
  {
    id: 12,
    title: "Swiss Alps Paragliding",
    location: "Interlaken, Switzerland",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2670&auto=format&fit=crop",
    price: "$180",
    rating: 4.9,
    duration: "1.5 hours",
    category: "Adventure",
    description:
      "Soar over the breathtaking Swiss Alps with a tandem paragliding flight guided by certified professionals.",
  },
]

const categories = ["All", "Adventure", "Cultural", "Food", "Nature", "Cruises"]
const durations = ["All", "1-2 hours", "Half day", "Full day", "Multi-day"]

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDuration, setSelectedDuration] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredExperiences = experiences.filter((experience) => {
    // Filter by category
    if (selectedCategory !== "All" && experience.category !== selectedCategory) {
      return false
    }

    // Filter by duration
    if (selectedDuration !== "All") {
      if (
        selectedDuration === "1-2 hours" &&
        !["1 hour", "1.5 hours", "2 hours", "45 minutes"].includes(experience.duration)
      ) {
        return false
      }
      if (
        selectedDuration === "Half day" &&
        experience.duration !== "Half day" &&
        experience.duration !== "4 hours" &&
        experience.duration !== "3 hours"
      ) {
        return false
      }
      if (selectedDuration === "Full day" && experience.duration !== "Full day") {
        return false
      }
      if (selectedDuration === "Multi-day" && !experience.duration.includes("days")) {
        return false
      }
    }

    // Filter by search query
    if (
      searchQuery &&
      !experience.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !experience.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Unforgettable Experiences"
        subtitle="Discover unique activities and tours handpicked by our travel experts to make your journey truly special"
        backgroundImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2942&auto=format&fit=crop"
        gradientColors="from-purple-900/80 to-indigo-600/80"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search experiences..."
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
              <div className="grid gap-6 md:grid-cols-2">
                <div>
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
                  <h3 className="mb-3 text-lg font-medium">Duration</h3>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((duration) => (
                      <Button
                        key={duration}
                        variant={selectedDuration === duration ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDuration(duration)}
                        className="text-sm"
                      >
                        {duration}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredExperiences.map((experience) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute right-3 top-3 flex space-x-2">
                      <Badge className="bg-primary text-white">{experience.category}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/90 text-black hover:bg-white font-medium">
                          {experience.duration}
                        </Badge>
                        <div className="flex items-center text-white">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{experience.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{experience.title}</h3>
                    <div className="mb-4 flex items-center text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <p className="mb-4 text-gray-600 line-clamp-2">{experience.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">
                        {experience.price}
                        <span className="text-sm font-normal text-gray-500"> / person</span>
                      </div>
                      <Button size="sm" className="font-semibold shadow-sm bg-primary text-white hover:bg-primary/90">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="mt-12 text-center">
              <h3 className="mb-2 text-xl font-medium">No experiences found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedDuration("All")
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

