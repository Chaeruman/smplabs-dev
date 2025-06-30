"use client"

import { useState, useEffect } from "react"
import { Trophy, Users, Calendar, Star } from "lucide-react"

const ExtracurricularHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300/20 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Ekstrakurikuler
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
            Kembangkan bakat dan minat Anda melalui berbagai kegiatan ekstrakurikuler yang menarik dan bermanfaat
          </p>

          {/* Stats Grid - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">
            {[
              { icon: Trophy, label: "Prestasi", value: "50+" },
              { icon: Users, label: "Siswa Aktif", value: "800+" },
              { icon: Calendar, label: "Kegiatan", value: "25+" },
              { icon: Star, label: "Kategori", value: "8" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 mx-auto mb-2 sm:mb-3 text-yellow-300" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularHero
