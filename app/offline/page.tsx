"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <div className="mb-6 rounded-full bg-yellow-100 p-4">
        <WifiOff className="h-12 w-12 text-yellow-600" />
      </div>
      <h1 className="mb-4 text-4xl font-bold">You're Offline</h1>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        It looks like you've lost your internet connection. Some features may be unavailable until you're back online.
      </p>
      <div className="space-y-4">
        <Button onClick={() => window.location.reload()} className="bg-primary text-white hover:bg-primary/90">
          <Wifi className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <div>
          <Link href="/">
            <Button variant="outline">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

