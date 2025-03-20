"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    cls: number | null
    fid: number | null
  }>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return

    // Check if the Performance API is available
    if (typeof window === "undefined" || !("performance" in window)) return

    // Show metrics panel with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault()
        setVisible((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // First Contentful Paint
    const observeFCP = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            setMetrics((prev) => ({ ...prev, fcp: entry.startTime }))
          }
        }
      }

      const observer = new PerformanceObserver(entryHandler)
      observer.observe({ type: "paint", buffered: true })
      return observer
    }

    // Largest Contentful Paint
    const observeLCP = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          setMetrics((prev) => ({ ...prev, lcp: entry.startTime }))
        }
      }

      const observer = new PerformanceObserver(entryHandler)
      observer.observe({ type: "largest-contentful-paint", buffered: true })
      return observer
    }

    // Cumulative Layout Shift
    const observeCLS = () => {
      let clsValue = 0
      const clsEntries: PerformanceEntry[] = []

      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          // Only count layout shifts without recent user input
          if (!(entry as any).hadRecentInput) {
            const firstSessionEntry = clsEntries.length === 0
            const entryTime = entry.startTime

            // If the entry occurred less than 1 second after the previous entry and
            // less than 5 seconds after the first entry in the session
            if (firstSessionEntry || entryTime - clsEntries[clsEntries.length - 1].startTime < 1000) {
              clsEntries.push(entry)
              clsValue += (entry as any).value
              setMetrics((prev) => ({ ...prev, cls: clsValue }))
            }
          }
        }
      }

      const observer = new PerformanceObserver(entryHandler)
      observer.observe({ type: "layout-shift", buffered: true })
      return observer
    }

    // First Input Delay
    const observeFID = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          setMetrics((prev) => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        }
      }

      const observer = new PerformanceObserver(entryHandler)
      observer.observe({ type: "first-input", buffered: true })
      return observer
    }

    // Initialize observers
    const observers = [observeFCP(), observeLCP(), observeCLS(), observeFID()]

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  if (!visible || process.env.NODE_ENV !== "development") return null

  const getMetricColor = (metric: string, value: number | null) => {
    if (value === null) return "text-gray-400"

    switch (metric) {
      case "FCP":
        return value < 1800 ? "text-green-500" : value < 3000 ? "text-yellow-500" : "text-red-500"
      case "LCP":
        return value < 2500 ? "text-green-500" : value < 4000 ? "text-yellow-500" : "text-red-500"
      case "CLS":
        return value < 0.1 ? "text-green-500" : value < 0.25 ? "text-yellow-500" : "text-red-500"
      case "FID":
        return value < 100 ? "text-green-500" : value < 300 ? "text-yellow-500" : "text-red-500"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-gray-900/90 p-4 text-white shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Performance Metrics</h3>
        <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>FCP (First Contentful Paint):</span>
          <span className={getMetricColor("FCP", metrics.fcp)}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : "Measuring..."}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP (Largest Contentful Paint):</span>
          <span className={getMetricColor("LCP", metrics.lcp)}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : "Measuring..."}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS (Cumulative Layout Shift):</span>
          <span className={getMetricColor("CLS", metrics.cls)}>
            {metrics.cls !== null ? metrics.cls.toFixed(3) : "Measuring..."}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID (First Input Delay):</span>
          <span className={getMetricColor("FID", metrics.fid)}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : "Measuring..."}
          </span>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400">Press Ctrl+Shift+P to toggle this panel</div>
    </div>
  )
}

