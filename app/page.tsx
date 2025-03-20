"use client"

import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Users,
  Star,
  X,
  Heart,
  Share2,
  Info,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Tag,
  Mail,
  Compass,
  Pause,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { useLazyLoad } from "@/lib/hooks/use-lazy-load"

// Dynamically import heavy components
const Tabs = dynamic(
  () =>
    import("@/components/ui/tabs").then((mod) => ({
      default: mod.Tabs,
    })),
  { ssr: false },
)
const TabsContent = dynamic(
  () =>
    import("@/components/ui/tabs").then((mod) => ({
      default: mod.TabsContent,
    })),
  { ssr: false },
)
const TabsList = dynamic(
  () =>
    import("@/components/ui/tabs").then((mod) => ({
      default: mod.TabsList,
    })),
  { ssr: false },
)
const TabsTrigger = dynamic(
  () =>
    import("@/components/ui/tabs").then((mod) => ({
      default: mod.TabsTrigger,
    })),
  { ssr: false },
)
const ScrollArea = dynamic(
  () =>
    import("@/components/ui/scroll-area").then((mod) => ({
      default: mod.ScrollArea,
    })),
  { ssr: false },
)
const Avatar = dynamic(
  () =>
    import("@/components/ui/avatar").then((mod) => ({
      default: mod.Avatar,
    })),
  { ssr: false },
)
const AvatarFallback = dynamic(
  () =>
    import("@/components/ui/avatar").then((mod) => ({
      default: mod.AvatarFallback,
    })),
  { ssr: false },
)
const AvatarImage = dynamic(
  () =>
    import("@/components/ui/avatar").then((mod) => ({
      default: mod.AvatarImage,
    })),
  { ssr: false },
)
const Drawer = dynamic(
  () =>
    import("@/components/ui/drawer").then((mod) => ({
      default: mod.Drawer,
    })),
  { ssr: false, loading: () => <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" /> },
)
const DrawerContent = dynamic(
  () =>
    import("@/components/ui/drawer").then((mod) => ({
      default: mod.DrawerContent,
    })),
  { ssr: false },
)

// Lazy load below-the-fold sections
const TestimonialsSection = lazy(() => import("@/components/home/testimonials-section"))
const BlogSection = lazy(() => import("@/components/home/blog-section"))
const OffersSection = lazy(() => import("@/components/home/offers-section"))
const NewsletterSection = lazy(() => import("@/components/home/newsletter-section"))

// Find and fix the buttons that are still appearing white by adding proper background colors and contrast

// Fix the button visibility issue by ensuring they have proper contrast and are visible without hover
// Update all experience card images to match their titles

// 1. First, let's update the experiences array with better matching images
const experiences = [
  {
    id: 1,
    title: "Santorini Sunset Cruise",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=2574&auto=format&fit=crop",
    price: "$89",
    rating: 4.9,
    duration: "3 hours",
  },
  {
    id: 2,
    title: "Bali Temple & Rice Terrace Tour",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2671&auto=format&fit=crop",
    price: "$65",
    rating: 4.7,
    duration: "Full day",
  },
  {
    id: 3,
    title: "Kyoto Tea Ceremony",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2536&auto=format&fit=crop",
    price: "$45",
    rating: 4.8,
    duration: "2 hours",
  },
  {
    id: 4,
    title: "Machu Picchu Guided Tour",
    location: "Cusco, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2670&auto=format&fit=crop",
    price: "$120",
    rating: 4.9,
    duration: "Full day",
  },
  {
    id: 5,
    title: "Iceland Northern Lights Hunt",
    location: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2670&auto=format&fit=crop",
    price: "$95",
    rating: 4.8,
    duration: "4 hours",
  },
  {
    id: 6,
    title: "Venice Gondola Ride",
    location: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2670&auto=format&fit=crop",
    price: "$75",
    rating: 4.7,
    duration: "45 minutes",
  },
  {
    id: 7,
    title: "Great Barrier Reef Diving",
    location: "Queensland, Australia",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop",
    price: "$150",
    rating: 4.9,
    duration: "Full day",
  },
  {
    id: 8,
    title: "Moroccan Desert Safari",
    location: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1548965594-11f5b7c51d05?q=80&w=2670&auto=format&fit=crop",
    price: "$110",
    rating: 4.8,
    duration: "2 days",
  },
  {
    id: 9,
    title: "New York City Food Tour",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2670&auto=format&fit=crop",
    price: "$85",
    rating: 4.6,
    duration: "3 hours",
  },
]

const destinations = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    description: "Experience the breathtaking views of white-washed buildings against the deep blue Aegean Sea.",
    longDescription:
      "Santorini is a volcanic island in the Cyclades group of the Greek islands. It is famous for its dramatic views, stunning sunsets, white-washed houses, and its very own active volcano. Explore the narrow streets of Oia, relax on the unique black and red beaches, or sample the local wine at one of the many vineyards.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2574&auto=format&fit=crop",
    color: "from-blue-900/80 to-blue-600/80",
    rating: 4.9,
    price: "$1,299",
    activities: ["Island Hopping", "Wine Tasting", "Sunset Cruise", "Volcano Tour"],
    weather: "Sunny, 25°C",
    bestTime: "April to October",
    currency: "Euro (€)",
    language: "Greek",
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    description: "Find your balance in this spiritual paradise with lush rice terraces and pristine beaches.",
    longDescription:
      "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    color: "from-green-900/80 to-emerald-600/80",
    rating: 4.7,
    price: "$899",
    activities: ["Surfing", "Temple Visit", "Rice Terrace Trek", "Spa Retreat"],
    weather: "Tropical, 29°C",
    bestTime: "May to September",
    currency: "Indonesian Rupiah (Rp)",
    language: "Indonesian",
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    description: "Immerse yourself in Japanese culture with ancient temples and traditional gardens.",
    longDescription:
      "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
    color: "from-rose-900/80 to-red-600/80",
    rating: 4.8,
    price: "$1,499",
    activities: ["Temple Tours", "Tea Ceremony", "Bamboo Forest Walk", "Geisha District"],
    weather: "Temperate, 22°C",
    bestTime: "March to May and October to November",
    currency: "Japanese Yen (¥)",
    language: "Japanese",
  },
  {
    id: 4,
    name: "Machu Picchu",
    location: "Peru",
    description: "Trek through the Andes to discover the lost city of the Incas and breathtaking mountain views.",
    longDescription:
      "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2940&auto=format&fit=crop",
    color: "from-amber-900/80 to-yellow-600/80",
    rating: 4.9,
    price: "$1,899",
    activities: ["Inca Trail", "Archaeological Tours", "Mountain Hiking", "Cultural Experiences"],
    weather: "Mild, 20°C",
    bestTime: "May to September",
    currency: "Peruvian Sol (S/)",
    language: "Spanish",
  },
  {
    id: 5,
    name: "Iceland",
    location: "Europe",
    description: "Land of fire and ice with dramatic landscapes, waterfalls, and northern lights.",
    longDescription:
      "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland's Viking history.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2942&auto=format&fit=crop",
    color: "from-indigo-900/80 to-purple-600/80",
    rating: 4.8,
    price: "$1,699",
    activities: ["Northern Lights", "Hot Springs", "Glacier Hiking", "Whale Watching"],
    weather: "Cool, 11°C",
    bestTime: "June to August for midnight sun, September to March for Northern Lights",
    currency: "Icelandic Króna (kr)",
    language: "Icelandic",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    location: "New York, USA",
    text: "Our trip to Santorini was absolutely magical! The views were even more breathtaking than in photos, and the sunset cruise was unforgettable. The Wanderlust team took care of every detail.",
    rating: 5,
    destination: "Santorini, Greece",
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    location: "Toronto, Canada",
    text: "Bali exceeded all my expectations. From the spiritual temples to the stunning beaches, every moment was special. The local guides arranged by Wanderlust provided insights I wouldn't have discovered on my own.",
    rating: 5,
    destination: "Bali, Indonesia",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    location: "London, UK",
    text: "Kyoto was like stepping back in time. The traditional tea ceremony and geisha district tour were highlights of our trip. Wanderlust's attention to cultural authenticity made all the difference.",
    rating: 4,
    destination: "Kyoto, Japan",
  },
]

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  )
}

export default function Home() {
  const [currentDestination, setCurrentDestination] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const experiencesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const blogRef = useRef(null)
  const planningRef = useRef(null)
  const offersRef = useRef(null)
  const newsletterRef = useRef(null)
  const [activeSection, setActiveSection] = useState("hero")
  // Add these new state variables after the existing useState declarations
  const [isPaused, setIsPaused] = useState(false)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(0)

  // Track image loading progress
  const incrementImagesLoaded = useCallback(() => {
    setImagesLoaded((prev) => prev + 1)
  }, [])

  // Memoize the nextDestination function to prevent unnecessary re-renders
  const nextDestination = useCallback(() => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length)
  }, [])

  const prevDestination = useCallback(() => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length)
  }, [])

  // Preload hero images with optimized approach
  useEffect(() => {
    const totalImages = destinations.length
    let loadedCount = 0

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            setLoaded(true)
          }
          resolve()
        }
        img.onerror = reject
      })
    }

    // Only preload the first image immediately, then load others in background
    preloadImage(destinations[0].image)
      .then(() => {
        setLoaded(true)
        // Load the rest in the background
        Promise.all(destinations.slice(1).map((destination) => preloadImage(destination.image))).catch((error) => {
          console.error("Failed to load background images", error)
        })
      })
      .catch((error) => {
        console.error("Failed to load initial image", error)
        setLoaded(true) // Continue anyway
      })
  }, [])

  // Optimize autoplay with useCallback and proper cleanup
  useEffect(() => {
    if (!autoplayEnabled || isPaused || !loaded) return

    const interval = setInterval(() => {
      nextDestination()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplayEnabled, isPaused, loaded, nextDestination])

  const scrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY

    // Add logic to update active section based on scroll position
    const sections = [
      { ref: null, id: "hero" }, // Hero section doesn't need a ref
      { ref: experiencesRef, id: "experiences" },
      { ref: testimonialsRef, id: "testimonials" },
      { ref: blogRef, id: "blog" },
      { ref: planningRef, id: "planning" },
      { ref: offersRef, id: "offers" },
      { ref: newsletterRef, id: "newsletter" },
    ]

    // This will be used for the floating nav indicator
    let activeSection = "hero"

    sections.forEach((section) => {
      if (section.ref && section.ref.current) {
        const element = section.ref.current
        const rect = element.getBoundingClientRect()

        // If the section is in view (with some buffer)
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = section.id
        }
      }
    })

    // You can use this activeSection state to highlight the active nav item
    setActiveSection(activeSection)
  }, [experiencesRef, testimonialsRef, blogRef, planningRef, offersRef, newsletterRef])

  // Optimize scroll event listener with passive flag
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Use lazy loading for experiences section
  const experiencesLazyLoad = useLazyLoad("100px")

  if (!loaded) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent mx-auto"></div>
          <p className="text-white text-lg">Loading amazing destinations...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen w-full">
      {/* Hero Section with Background Images */}
      {/* Update the Hero Section by adding onMouseEnter and onMouseLeave handlers */}
      <section
        className="relative h-screen w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentDestination}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${destinations[currentDestination].image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${destinations[currentDestination].color}`} />
          </motion.div>
        </AnimatePresence>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {!showSearch ? (
                <motion.div
                  key="destination-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto max-w-3xl text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-center">
                      <h1 className="mb-2 text-5xl font-bold text-white md:text-7xl">
                        {destinations[currentDestination].name}
                      </h1>
                      <div className="ml-4 flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                          onClick={() => setShowDetails(true)}
                        >
                          <Info className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="mb-6 flex items-center justify-center text-white/90">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>{destinations[currentDestination].location}</span>
                      <div className="mx-3 h-1 w-1 rounded-full bg-white/50"></div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{destinations[currentDestination].rating}</span>
                      </div>
                      <div className="mx-3 h-1 w-1 rounded-full bg-white/50"></div>
                      <span>From {destinations[currentDestination].price}</span>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8 text-xl text-white md:text-2xl"
                  >
                    {destinations[currentDestination].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  >
                    <Button
                      size="lg"
                      className="mr-4 bg-white text-gray-900 hover:bg-white/90 font-semibold shadow-md"
                      onClick={() => setShowSearch(true)}
                    >
                      Plan Your Trip
                    </Button>
                    <Link href="/experiences">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white border-2 text-white hover:bg-white/20 bg-white/10 font-semibold"
                      >
                        Explore Experiences
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="search-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto max-w-2xl rounded-xl bg-white/10 p-8 backdrop-blur-md"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                      Plan Your Trip to {destinations[currentDestination].name}
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white hover:bg-white/20"
                      onClick={() => setShowSearch(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="departure" className="text-white">
                        Departure
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-white" />
                        <Input
                          id="departure"
                          className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/60"
                          placeholder="Select date"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="return" className="text-white">
                        Return
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-white" />
                        <Input
                          id="return"
                          className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/60"
                          placeholder="Select date"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="travelers" className="text-white">
                        Travelers
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-5 w-5 text-white" />
                        <Input
                          id="travelers"
                          className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/60"
                          placeholder="Number of travelers"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <Button className="flex-1 bg-white text-gray-900 hover:bg-white/90">Search Availability</Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/20"
                      onClick={() => setShowSearch(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Destination Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="mx-auto flex max-w-4xl justify-center space-x-2 px-4">
            {destinations.map((destination, index) => (
              <button
                key={destination.id}
                onClick={() => setCurrentDestination(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentDestination === index ? "w-12 bg-white" : "w-2 bg-white/50 hover:bg-white/70",
                )}
                aria-label={`View ${destination.name}`}
              />
            ))}
          </div>
          {/* Add a toggle button for autoplay in the destination navigation section */}
          <div className="mt-4 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAutoplayEnabled(!autoplayEnabled)}
              className="rounded-full bg-white/10 text-white/80 backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              {autoplayEnabled ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  <span className="text-xs">Pause Slideshow</span>
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  <span className="text-xs">Play Slideshow</span>
                </>
              )}
            </Button>
          </div>
          <div className="mt-6 text-center">
            <button
              className="flex items-center justify-center text-white/80 hover:text-white"
              onClick={() => scrollToSection(experiencesRef)}
            >
              <span className="mr-2 text-sm font-medium">Discover experiences</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        ref={(node) => {
          experiencesRef.current = node
          experiencesLazyLoad.ref.current = node
        }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Unforgettable Experiences</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover unique activities and tours handpicked by our travel experts to make your journey truly special.
            </p>
          </div>

          {/* Update the grid layout for experiences to show 3 columns on large screens */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.slice(0, 6).map((experience) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={400}
                      height={300}
                      onLoad={incrementImagesLoaded}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute right-3 top-3 flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
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

          <div className="mt-12 text-center">
            <Link href="/experiences">
              <Button
                size="lg"
                className="group font-semibold px-6 py-6 text-base shadow-md bg-primary text-white hover:bg-primary/90"
              >
                View All Experiences
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy load below-the-fold sections */}
      <div ref={testimonialsRef}>
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsSection testimonials={testimonials} />
        </Suspense>
      </div>

      <div ref={blogRef}>
        <Suspense fallback={<LoadingFallback />}>
          <BlogSection />
        </Suspense>
      </div>

      <div ref={offersRef}>
        <Suspense fallback={<LoadingFallback />}>
          <OffersSection />
        </Suspense>
      </div>

      <div ref={newsletterRef}>
        <Suspense fallback={<LoadingFallback />}>
          <NewsletterSection />
        </Suspense>
      </div>

      {/* Destination Details Drawer - Lazy loaded */}
      {showDetails && (
        <Drawer open={showDetails} onOpenChange={setShowDetails}>
          <DrawerContent className="max-h-[90vh]">
            <div className="mx-auto w-full max-w-4xl">
              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{destinations[currentDestination].name}</h2>
                  <Button variant="ghost" size="icon" onClick={() => setShowDetails(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-6 grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="activities">Activities</TabsTrigger>
                    <TabsTrigger value="practical">Practical Info</TabsTrigger>
                    <TabsTrigger value="weather">Weather</TabsTrigger>
                  </TabsList>
                  <ScrollArea className="h-[60vh]">
                    <TabsContent value="overview" className="px-1">
                      <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={destinations[currentDestination].image || "/placeholder.svg"}
                          alt={destinations[currentDestination].name}
                          className="h-full w-full object-cover"
                          width={800}
                          height={450}
                        />
                      </div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                          <span className="text-lg">{destinations[currentDestination].location}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-medium">{destinations[currentDestination].rating}</span>
                        </div>
                      </div>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        {destinations[currentDestination].longDescription}
                      </p>
                      <div className="rounded-lg bg-gray-100 p-4">
                        <div className="mb-2 text-lg font-medium">Price</div>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold">{destinations[currentDestination].price}</span>
                          <span className="ml-2 text-gray-600">per person</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Includes accommodation, guided tours, and selected meals
                        </p>
                        <Link href="/destinations">
                          <Button className="mt-4 w-full bg-primary text-white hover:bg-primary/90 font-semibold">
                            Book This Destination
                          </Button>
                        </Link>
                      </div>
                    </TabsContent>
                    <TabsContent value="activities" className="px-1">
                      <h3 className="mb-4 text-xl font-medium">Popular Activities</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {destinations[currentDestination].activities.map((activity, index) => (
                          <div key={index} className="rounded-lg border p-4">
                            <div className="font-medium">{activity}</div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="practical" className="px-1">
                      <h3 className="mb-4 text-xl font-medium">Practical Information</h3>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="font-medium">Currency</div>
                          <div className="text-gray-600">{destinations[currentDestination].currency}</div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="font-medium">Language</div>
                          <div className="text-gray-600">{destinations[currentDestination].language}</div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="font-medium">Best Time to Visit</div>
                          <div className="text-gray-600">{destinations[currentDestination].bestTime}</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="weather" className="px-1">
                      <h3 className="mb-4 text-xl font-medium">Weather</h3>
                      <div className="rounded-lg border p-4">
                        <div className="mb-2 text-lg">{destinations[currentDestination].weather}</div>
                        <p className="text-gray-600">
                          The best time to visit is during {destinations[currentDestination].bestTime} when the weather
                          is most pleasant.
                        </p>
                      </div>
                    </TabsContent>
                  </ScrollArea>
                </Tabs>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Floating Navigation - Optimized with throttling */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-black/70 px-6 py-3 backdrop-blur-md"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center space-x-6">
          {[
            { id: "hero", label: "Home", icon: <ChevronUp className="h-4 w-4" /> },
            { id: "experiences", label: "Experiences", icon: <Compass className="h-4 w-4" /> },
            { id: "testimonials", label: "Stories", icon: <MessageSquare className="h-4 w-4" /> },
            { id: "blog", label: "Blog", icon: <BookOpen className="h-4 w-4" /> },
            { id: "planning", label: "Planning", icon: <Calendar className="h-4 w-4" /> },
            { id: "offers", label: "Offers", icon: <Tag className="h-4 w-4" /> },
            { id: "newsletter", label: "Subscribe", icon: <Mail className="h-4 w-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "hero") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } else {
                  const sectionRef = {
                    experiences: experiencesRef,
                    testimonials: testimonialsRef,
                    blog: blogRef,
                    planning: planningRef,
                    offers: offersRef,
                    newsletter: newsletterRef,
                  }[item.id]
                  scrollToSection(sectionRef)
                }
              }}
              className={`group flex flex-col items-center transition-all duration-300 ${
                activeSection === item.id ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.icon}
              <span
                className={`mt-1 text-xs transition-all ${
                  activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div className="mt-1 h-1 w-1 rounded-full bg-primary" layoutId="navIndicator" />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

