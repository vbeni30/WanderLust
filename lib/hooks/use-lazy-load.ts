"use client"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "./use-intersection-observer"

export function useLazyLoad(rootMargin = "200px") {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver({ rootMargin })

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isIntersecting, isLoaded])

  return { ref, isLoaded }
}

