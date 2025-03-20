"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronDown, MapPin, Calendar, Users, Star, Info, X, Heart, Share2, ArrowRight, MessageSquare, BookOpen, Tag, Mail, Compass, Pause, Play } from "lucide-react";
import { Button, Card, CardContent, Badge, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger, ScrollArea, Avatar, AvatarFallback, AvatarImage, Drawer, DrawerContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { debounce } from "lodash";

// Lazy load heavy components
const TestimonialsSection = dynamic(() => import("@/components/home/testimonials-section"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/home/blog-section"), { ssr: false });
const OffersSection = dynamic(() => import("@/components/home/offers-section"), { ssr: false });
const NewsletterSection = dynamic(() => import("@/components/home/newsletter-section"), { ssr: false });

// Experiences data
const experiences = [
  {
    id: 1,
    title: "Santorini Sunset Cruise",
    location: "Santorini, Greece",
    image: "/images/santorini.jpg", // Local or CDN path
    price: "$89",
    rating: 4.9,
    duration: "3 hours",
  },
  // Add other experiences...
];

// Destinations data
const destinations = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    description: "Experience the breathtaking views of white-washed buildings against the deep blue Aegean Sea.",
    image: "/images/santorini.jpg", // Local or CDN path
    color: "from-blue-900/80 to-blue-600/80",
    rating: 4.9,
    price: "$1,299",
  },
  // Add other destinations...
];

export default function Home() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const experiencesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);
  const planningRef = useRef(null);
  const offersRef = useRef(null);
  const newsletterRef = useRef(null);

  // Preload the first image
  useEffect(() => {
    const img = new Image();
    img.src = destinations[0].image;
    img.onload = () => setLoaded(true);
  }, []);

  // Memoize the nextDestination function
  const nextDestination = useCallback(() => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  }, [destinations.length]);

  // Debounce scroll events
  const handleScroll = useCallback(
    debounce(() => {
      const scrollPosition = window.scrollY;
      // Update active section based on scroll position
      const sections = [
        { ref: experiencesRef, id: "experiences" },
        { ref: testimonialsRef, id: "testimonials" },
        { ref: blogRef, id: "blog" },
        { ref: planningRef, id: "planning" },
        { ref: offersRef, id: "offers" },
        { ref: newsletterRef, id: "newsletter" },
      ];

      let activeSection = "hero";
      sections.forEach((section) => {
        if (section.ref && section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            activeSection = section.id;
          }
        }
      });
      setActiveSection(activeSection);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Autoplay for destination slider
  useEffect(() => {
    if (!autoplayEnabled || isPaused || !loaded) return;

    const interval = setInterval(() => {
      nextDestination();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplayEnabled, isPaused, loaded, nextDestination]);

  if (!loaded) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent mx-auto"></div>
          <p className="text-white text-lg">Loading amazing destinations...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${destinations[currentDestination].image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${destinations[currentDestination].color}`} />

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-2 text-5xl font-bold text-white md:text-7xl">
                {destinations[currentDestination].name}
              </h1>
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
              <p className="mb-8 text-xl text-white md:text-2xl">
                {destinations[currentDestination].description}
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="mr-4 bg-white text-gray-900 hover:bg-white/90 font-semibold shadow-md"
                  onClick={() => setShowSearch(true)}
                >
                  Plan Your Trip
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white border-2 text-white hover:bg-white/20 bg-white/10 font-semibold"
                >
                  Explore Experiences
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="mx-auto flex max-w-4xl justify-center space-x-2 px-4">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDestination(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentDestination === index ? "w-12 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                )}
              />
            ))}
          </div>
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
        </div>
      </section>

      {/* Experiences Section */}
      <section ref={experiencesRef} className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Unforgettable Experiences</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover unique activities and tours handpicked by our travel experts to make your journey truly special.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <Card key={experience.id} className="group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            ))}
          </div>
        </div>
      </section>

      {/* Lazy load below-the-fold sections */}
      <div ref={testimonialsRef}>
        <TestimonialsSection />
      </div>
      <div ref={blogRef}>
        <BlogSection />
      </div>
      <div ref={offersRef}>
        <OffersSection />
      </div>
      <div ref={newsletterRef}>
        <NewsletterSection />
      </div>
    </main>
  );
}
