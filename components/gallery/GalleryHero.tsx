"use client"

import { useEffect, useState } from "react"
import { Camera, ImageIcon, Users, Calendar, Sparkles, Zap } from "lucide-react"

const GalleryHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    photos: 0,
    activities: 0,
    year: 2024,
    categories: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Animate numbers
    const animateNumbers = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps
        
        setAnimatedNumbers({
          photos: Math.floor(200 * progress),
          activities: Math.floor(15 * progress),
          year: 2024,
          categories: Math.floor(8 * progress)
        })
        
        if (step >= steps) {
          clearInterval(interval)
          setAnimatedNumbers({
            photos: 200,
            activities: 15,
            year: 2024,
            categories: 8
          })
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateNumbers, 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: ImageIcon,
      value: animatedNumbers.photos,
      suffix: "+",
      label: "Foto",
      color: "from-blue-400 to-cyan-400",
      hoverColor: "from-blue-300 to-cyan-300"
    },
    {
      icon: Users,
      value: animatedNumbers.activities,
      suffix: "+",
      label: "Kegiatan",
      color: "from-green-400 to-emerald-400",
      hoverColor: "from-green-300 to-emerald-300"
    },
    {
      icon: Calendar,
      value: animatedNumbers.year,
      suffix: "",
      label: "Terbaru",
      color: "from-orange-400 to-red-400",
      hoverColor: "from-orange-300 to-red-300"
    },
    {
      icon: Camera,
      value: animatedNumbers.categories,
      suffix: "",
      label: "Kategori",
      color: "from-purple-400 to-pink-400",
      hoverColor: "from-purple-300 to-pink-300"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30 hover:scale-110 hover:bg-white/30 transition-all duration-300 group">
              <Camera className="h-10 w-10 group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="h-4 w-4 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast drop-shadow-enhanced-lg hover:scale-105 transition-transform duration-300">
              Galeri SMP Labschool
            </h1>
            <p className="text-xl text-high-contrast-sm mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-soft">
              Dokumentasi kegiatan, fasilitas, dan momen berharga dalam perjalanan pendidikan di SMP Labschool Jakarta
            </p>
          </div>

          {/* Interactive Quick Stats */}
          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 relative overflow-hidden`}>
                  <stat.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  {hoveredStat === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 animate-pulse"></div>
                  )}
                </div>
                <div className="relative">
                  <h3 className={`text-2xl font-bold transition-all duration-300 group-hover:scale-110 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}{stat.suffix}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                  {hoveredStat === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/60 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Call-to-Action */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">Jelajahi Galeri</span>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryHero
