"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  quality?: number
  onLoad?: () => void
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  fill = false,
  quality = 80,
  onLoad,
  ...props
}: ImageWithFallbackProps &
  Omit<
    React.ComponentProps<typeof Image>,
    "src" | "alt" | "width" | "height" | "className" | "priority" | "sizes" | "fill" | "quality" | "onLoad"
  >) {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(!priority)

  const handleError = () => {
    setError(true)
  }

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  // Generate placeholder dimensions for the fallback
  const placeholderWidth = width || 800
  const placeholderHeight = height || 600

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && !priority && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <span className="sr-only">Loading image...</span>
        </div>
      )}

      <Image
        src={error ? `/placeholder.svg?height=${placeholderHeight}&width=${placeholderWidth}` : src}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", isLoading && !priority ? "opacity-0" : "opacity-100")}
        priority={priority}
        sizes={sizes}
        fill={fill}
        quality={quality}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  )
}

