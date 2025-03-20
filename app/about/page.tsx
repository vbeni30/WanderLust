"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, Globe, Calendar, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"

export default function AboutPage() {
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

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "With over 20 years in the travel industry, Sarah founded Wanderlust to create authentic travel experiences that transform lives.",
    },
    {
      name: "Michael Chen",
      role: "Head of Destinations",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Michael has visited 78 countries and uses his extensive knowledge to curate our unique destination offerings.",
    },
    {
      name: "Elena Rodriguez",
      role: "Customer Experience Director",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Elena ensures every traveler receives personalized attention and support throughout their journey with us.",
    },
    {
      name: "James Wilson",
      role: "Sustainability Officer",
      image: "https://i.pravatar.cc/300?img=8",
      bio: "James leads our initiatives to minimize environmental impact and maximize positive contributions to local communities.",
    },
  ]

  const timeline = [
    {
      year: "2008",
      title: "Humble Beginnings",
      description:
        "Wanderlust was founded with a mission to create authentic travel experiences that connect travelers with local cultures.",
    },
    {
      year: "2012",
      title: "Expansion Across Continents",
      description:
        "We expanded our offerings to include destinations across Asia, Africa, and South America, focusing on sustainable tourism.",
    },
    {
      year: "2015",
      title: "Award-Winning Service",
      description:
        "Recognized as 'Travel Agency of the Year' for our commitment to exceptional customer service and innovative itineraries.",
    },
    {
      year: "2018",
      title: "Sustainability Commitment",
      description:
        "Launched our comprehensive sustainability program, pledging to offset carbon emissions and support local conservation efforts.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Embraced technology to enhance the travel planning experience while maintaining our personalized service approach.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description:
        "Celebrated serving our 50,000th traveler and expanded to offer experiences in over 100 countries worldwide.",
    },
  ]

  return (
    <main className="min-h-screen">
      <PageHeader
        title="About Wanderlust"
        subtitle="Our story, mission, and the passionate team behind your extraordinary travel experiences"
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2942&auto=format&fit=crop"
        gradientColors="from-slate-900/80 to-slate-700/80"
      />

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Crafting Unforgettable Travel Experiences Since 2008
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Founded by passionate travelers with a vision to transform how people experience the world, Wanderlust
                has grown from a small boutique agency to a leading travel company with a global presence.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Our journey began with a simple belief: travel should be transformative, authentic, and responsible.
                Today, we continue to craft journeys that connect travelers with the heart and soul of each destination.
              </p>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2942&auto=format&fit=crop"
                  alt="Wanderlust team planning travel experiences"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Award Winning</div>
                    <div className="text-lg font-bold">Travel Agency of the Year 2023</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
              Our Values
            </div>
            <h2 className="mb-6 text-4xl font-bold">What Sets Us Apart</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our core values guide everything we do, from how we design our trips to how we interact with our travelers
              and the communities we visit.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
              Our Team
            </div>
            <h2 className="mb-6 text-4xl font-bold">Meet the Experts Behind Your Journeys</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our passionate team of travel enthusiasts brings diverse expertise and firsthand experience to create
              exceptional travel experiences.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <div className="mb-4 text-sm font-medium text-primary">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
              Our Journey
            </div>
            <h2 className="mb-6 text-4xl font-bold">The Wanderlust Story</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From our humble beginnings to becoming a globally recognized travel company, here's how our journey
              unfolded.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gray-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="mb-2 text-xl font-bold text-primary">{item.year}</div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                <div className="absolute left-1/2 top-0 -mt-1 -translate-x-1/2 transform">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-primary text-white">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Journey with Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Let our team of experts help you plan the perfect trip tailored to your preferences and interests.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white border-2 text-white hover:bg-white/20 bg-white/10 font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

