"use client"

import React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const childrenArray = React.Children.toArray(children)
  const totalSections = childrenArray.length

  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= totalSections) return
    setCurrentSection(index)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    if (isScrolling) return

    setIsScrolling(true)

    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX

    if (delta > 50 && currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1)
    } else if (delta < -50 && currentSection > 0) {
      scrollToSection(currentSection - 1)
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false)
    }, 1000) // 1 second cooldown
  }

  const handleDragEnd = (_, info) => {
    const dragDistance = info.offset.x
    const threshold = window.innerWidth * 0.2 // 20% of viewport width

    if (dragDistance > threshold && currentSection > 0) {
      scrollToSection(currentSection - 1)
    } else if (dragDistance < -threshold && currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1)
    } else {
      scrollToSection(currentSection) // Snap back to current section
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSection < totalSections - 1) {
        scrollToSection(currentSection + 1)
      } else if (e.key === "ArrowLeft" && currentSection > 0) {
        scrollToSection(currentSection - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection, totalSections])

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex h-full w-full"
        onWheel={handleWheel}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          {childrenArray.map((child, index) => (
            <motion.div
              key={index}
              className="absolute h-full w-full"
              initial={{ opacity: 0, x: index > currentSection ? "100%" : "-100%" }}
              animate={{
                opacity: currentSection === index ? 1 : 0,
                x: currentSection === index ? "0%" : index > currentSection ? "100%" : "-100%",
              }}
              exit={{ opacity: 0, x: index < currentSection ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 transform space-x-2">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              currentSection === index ? "bg-primary w-6" : "bg-muted hover:bg-primary/50",
            )}
            onClick={() => scrollToSection(index)}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-4 top-1/2 z-50 -translate-y-1/2 transform rounded-full bg-background/80 p-3 text-foreground backdrop-blur-sm transition-opacity",
          currentSection === 0 ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100",
        )}
        onClick={() => scrollToSection(currentSection - 1)}
        disabled={currentSection === 0}
        aria-label="Previous section"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-4 top-1/2 z-50 -translate-y-1/2 transform rounded-full bg-background/80 p-3 text-foreground backdrop-blur-sm transition-opacity",
          currentSection === totalSections - 1 ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100",
        )}
        onClick={() => scrollToSection(currentSection + 1)}
        disabled={currentSection === totalSections - 1}
        aria-label="Next section"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

