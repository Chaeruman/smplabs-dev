"use client"

import { useEffect, useState } from "react"
import ActivitiesHero from "@/components/activities/ActivitiesHero"
import ActivitiesTimeline from "@/components/activities/ActivitiesTimeline"
import UpcomingActivities from "@/components/activities/UpcomingActivities"

export default function ActivitiesPageClient() {
  const [isLoading, setIsLoading] = useState(true)
  const [pageVisible, setPageVisible] = useState(false)

  useEffect(() => {
    // Simulate page loading with staggered animations
    const timer = setTimeout(() => {
      setIsLoading(false)
      setPageVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 animate-pulse">Memuat Kegiatan</h2>
          <p className="text-gray-600 animate-fade-in">Menyiapkan pengalaman terbaik untuk Anda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`pt-16 transition-all duration-1000 ${pageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="animate-fade-in">
        <ActivitiesHero />
      </div>
      <div className="animate-fade-in-delay-1">
        <ActivitiesTimeline />
      </div>
      <div className="animate-fade-in-delay-2">
        <UpcomingActivities />
      </div>
    </div>
  )
}
