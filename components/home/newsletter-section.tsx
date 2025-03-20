"use client"

import { motion } from "framer-motion"
import { Zap, Tag, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLazyLoad } from "@/lib/hooks/use-lazy-load"

export default function NewsletterSection() {
  const { ref, isLoaded } = useLazyLoad()

  if (!isLoaded) {
    return <div ref={ref} className="min-h-[400px] bg-gray-900" />
  }

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get Travel Inspiration</h2>
              <p className="mb-6 text-white/80">
                Subscribe to our newsletter and receive exclusive offers, travel tips, and destination guides straight
                to your inbox.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Early Access</div>
                    <div className="text-sm text-white/80">Be the first to know about new destinations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Tag className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Exclusive Deals</div>
                    <div className="text-sm text-white/80">Subscriber-only discounts and offers</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Personalized Recommendations</div>
                    <div className="text-sm text-white/80">Travel ideas tailored to your preferences</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <Label htmlFor="email-newsletter" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email-newsletter"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="travel-interests" className="text-white">
                    Travel Interests
                  </Label>
                  <select
                    id="travel-interests"
                    className="mt-1 w-full rounded-md border border-white/20 bg-white/10 p-2 text-white"
                  >
                    <option value="" className="bg-gray-800">
                      Select your interests
                    </option>
                    <option value="adventure" className="bg-gray-800">
                      Adventure & Outdoor
                    </option>
                    <option value="culture" className="bg-gray-800">
                      Culture & Heritage
                    </option>
                    <option value="beach" className="bg-gray-800">
                      Beach & Relaxation
                    </option>
                    <option value="food" className="bg-gray-800">
                      Food & Culinary
                    </option>
                    <option value="luxury" className="bg-gray-800">
                      Luxury Travel
                    </option>
                  </select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="frequency" className="text-white">
                    Email Frequency
                  </Label>
                  <div className="mt-2 flex space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="weekly" name="frequency" className="h-4 w-4" defaultChecked />
                      <label htmlFor="weekly" className="ml-2 text-sm text-white/80">
                        Weekly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="biweekly" name="frequency" className="h-4 w-4" />
                      <label htmlFor="biweekly" className="ml-2 text-sm text-white/80">
                        Bi-weekly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="monthly" name="frequency" className="h-4 w-4" />
                      <label htmlFor="monthly" className="ml-2 text-sm text-white/80">
                        Monthly
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter-consent" className="h-4 w-4" />
                    <Label htmlFor="newsletter-consent" className="text-sm text-white/80">
                      I agree to receive promotional emails and agree to the privacy policy
                    </Label>
                  </div>
                </div>
                <Button className="w-full font-semibold shadow-md bg-primary text-white hover:bg-primary/90">
                  Subscribe Now
                </Button>
                <p className="mt-4 text-center text-xs text-white/60">
                  Join over 50,000 travelers who receive our weekly newsletter
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

