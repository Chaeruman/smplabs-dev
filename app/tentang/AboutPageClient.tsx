"use client"

import { useEffect, useState } from "react"
import AboutHero from "@/components/about/AboutHero"
import VisionMission from "@/components/about/VisionMission"
import History from "@/components/about/History"
import Leadership from "@/components/about/Leadership"

export default function AboutPageClient() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 animate-pulse">Memuat halaman...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 animate-fade-in-up">
      <AboutHero />
      <VisionMission />
      <History />
      <Leadership />
    </div>
  )
}
