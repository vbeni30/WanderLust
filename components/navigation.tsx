"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between p-6">
      <Link href="/" className="text-2xl font-bold text-white">
        Wanderlust
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.path ? "text-white font-semibold" : "text-white/80 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="border-white border-2 text-white hover:bg-white/20 bg-white/10">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-20 z-20 bg-black/80 backdrop-blur-md md:hidden"
          >
            <nav className="p-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-white/20 pb-2">
                    <Link
                      href={item.path}
                      className={cn(
                        "block py-2 transition-colors",
                        pathname === item.path ? "text-white font-semibold" : "text-white/80 hover:text-white",
                      )}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

