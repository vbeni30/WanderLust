"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactSection() {
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

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 to-emerald-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-emerald-900/90" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
            Get in Touch
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Start Planning Your Dream Journey</h2>
          <p className="mb-8 text-lg text-white/80">
            Whether you have a specific destination in mind or need inspiration, our travel experts are here to craft
            the perfect experience for you.
          </p>

          <div className="mb-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-white/70">Call us</div>
                <div className="text-lg font-medium text-white">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-white/70">Email us</div>
                <div className="text-lg font-medium text-white">info@wanderlusttravel.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-white/70">Visit us</div>
                <div className="text-lg font-medium text-white">123 Travel Lane, New York, NY 10001</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-xl font-semibold text-white">Our Hours</h3>
            <div className="space-y-2 text-white/80">
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md">
            <h3 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Trip Type</Label>
                <RadioGroup
                  value={formState.tripType}
                  onValueChange={handleRadioChange}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="vacation" value="vacation" className="border-white/50 text-primary" />
                    <Label htmlFor="vacation" className="text-white">
                      Vacation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="honeymoon" value="honeymoon" className="border-white/50 text-primary" />
                    <Label htmlFor="honeymoon" className="text-white">
                      Honeymoon
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="adventure" value="adventure" className="border-white/50 text-primary" />
                    <Label htmlFor="adventure" className="text-white">
                      Adventure
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="business" value="business" className="border-white/50 text-primary" />
                    <Label htmlFor="business" className="text-white">
                      Business
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream trip..."
                  rows={4}
                  required
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

