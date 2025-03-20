"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    tripType: "vacation",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, tripType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const offices = [
    {
      city: "New York",
      address: "123 Travel Lane, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@wanderlust.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed",
    },
    {
      city: "London",
      address: "45 Explorer Street, London, UK SW1A 1AA",
      phone: "+44 20 1234 5678",
      email: "london@wanderlust.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed",
    },
    {
      city: "Tokyo",
      address: "7-1 Traveler Building, Shibuya, Tokyo 150-0002",
      phone: "+81 3 1234 5678",
      email: "tokyo@wanderlust.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed",
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer:
        "For peak season travel or popular destinations, we recommend booking 6-8 months in advance. For off-season travel, 3-4 months is usually sufficient. Last-minute bookings are sometimes possible but may limit your options and potentially cost more.",
    },
    {
      question: "Do I need travel insurance?",
      answer:
        "While not mandatory, we strongly recommend travel insurance for all trips. It provides protection against unexpected events such as trip cancellations, medical emergencies, lost luggage, and more. We can help you select the right coverage for your specific journey.",
    },
    {
      question: "How do I know if I need a visa for my destination?",
      answer:
        "Visa requirements vary based on your nationality and destination. Our travel experts will provide visa information during the planning process, but we also recommend checking the official embassy website of your destination country for the most up-to-date requirements.",
    },
    {
      question: "Can you accommodate dietary restrictions during my trip?",
      answer:
        "We can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. Please inform us of any dietary restrictions during the booking process so we can make appropriate arrangements.",
    },
    {
      question: "What happens if I need to cancel or change my trip?",
      answer:
        "Our cancellation policy varies depending on the trip and how far in advance you cancel. Generally, cancellations made 60+ days before departure receive a higher refund percentage. We always try to be flexible with changes when possible, though change fees may apply depending on the circumstances.",
    },
  ]

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our travel experts to start planning your dream journey"
        backgroundImage="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2940&auto=format&fit=crop"
        gradientColors="from-teal-900/80 to-emerald-600/80"
      />

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
                Get in Touch
              </div>
              <h2 className="mb-6 text-4xl font-bold">Start Planning Your Dream Journey</h2>
              <p className="mb-8 text-lg text-gray-600">
                Whether you have a specific destination in mind or need inspiration, our travel experts are here to
                craft the perfect experience for you.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="text-lg font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email us</div>
                    <div className="text-lg font-medium">info@wanderlusttravel.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Visit us</div>
                    <div className="text-lg font-medium">123 Travel Lane, New York, NY 10001</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Our Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Trip Type</Label>
                    <RadioGroup
                      value={formState.tripType}
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="vacation" value="vacation" />
                        <Label htmlFor="vacation">Vacation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="honeymoon" value="honeymoon" />
                        <Label htmlFor="honeymoon">Honeymoon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="adventure" value="adventure" />
                        <Label htmlFor="adventure">Adventure</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="business" value="business" />
                        <Label htmlFor="business">Business</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream trip..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
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
              Global Presence
            </div>
            <h2 className="mb-6 text-4xl font-bold">Our Offices Around the World</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Visit us at one of our international offices or contact the team closest to you.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-2xl font-bold">{office.city}</h3>

                <div className="mb-4 space-y-3">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-primary" />
                    <span className="font-medium">Office Hours</span>
                  </div>
                  <div className="mt-2 whitespace-pre-line text-sm text-gray-600">{office.hours}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-xl">
            <div className="aspect-[16/9] w-full bg-gray-200">
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="flex h-full items-center justify-center bg-gray-200 p-4 text-center text-gray-500">
                <div>
                  <Globe className="mx-auto mb-4 h-12 w-12" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p>An interactive map would be displayed here showing our office locations worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              FAQ
            </div>
            <h2 className="mb-6 text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Find answers to common questions about booking, planning, and traveling with us.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Contact us today and let our travel experts help you plan the perfect trip.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Plan My Trip Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

