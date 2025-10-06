"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Heart, Star, Trophy, Sparkles, Zap, Award, Users } from "lucide-react"

const GalleryStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    photos: 0,
    memories: 0,
    quality: 0,
    achievements: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
                memories: Math.floor(150 * progress),
                quality: Math.floor(95 * progress),
                achievements: Math.floor(50 * progress)
              })
              
              if (step >= steps) {
                clearInterval(interval)
                setAnimatedNumbers({
                  photos: 200,
                  memories: 150,
                  quality: 95,
                  achievements: 50
                })
              }
            }, stepDuration)
          }

          const timer = setTimeout(animateNumbers, 500)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Camera,
      title: "Dokumentasi Lengkap",
      description: "Setiap momen berharga terekam dengan baik",
      color: "card-soft-blue",
      gradient: "from-blue-400 to-cyan-400",
      number: animatedNumbers.photos,
      suffix: "+",
      unit: "Foto",
      features: ["HD Quality", "Real-time", "Professional"]
    },
    {
      icon: Heart,
      title: "Kenangan Indah",
      description: "Momen-momen yang akan selalu diingat",
      color: "card-soft-pink",
      gradient: "from-pink-400 to-rose-400",
      number: animatedNumbers.memories,
      suffix: "+",
      unit: "Kenangan",
      features: ["Emotional", "Timeless", "Precious"]
    },
    {
      icon: Star,
      title: "Kualitas Terbaik",
      description: "Foto berkualitas tinggi untuk dokumentasi",
      color: "card-soft-orange",
      gradient: "from-orange-400 to-yellow-400",
      number: animatedNumbers.quality,
      suffix: "%",
      unit: "Kualitas",
      features: ["4K Ready", "Color Accurate", "Sharp"]
    },
    {
      icon: Trophy,
      title: "Prestasi Terdokumentasi",
      description: "Setiap pencapaian diabadikan dengan sempurna",
      color: "card-soft-green",
      gradient: "from-green-400 to-emerald-400",
      number: animatedNumbers.achievements,
      suffix: "+",
      unit: "Prestasi",
      features: ["Award Winning", "Recognition", "Success"]
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-semibold text-purple-700">Fitur Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 hover:scale-105 transition-transform duration-300">
            Mengapa Galeri Kami Istimewa?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Setiap foto memiliki cerita dan makna yang mendalam dalam perjalanan pendidikan siswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-2xl p-6 text-center shadow-lg hover-glow transition-all duration-1000 group cursor-pointer relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
              )}
              
              {/* Icon with Animation */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <stat.icon className="h-8 w-8 text-blue-900 group-hover:rotate-12 transition-transform duration-300" />
                  {hoveredCard === index && (
                    <div className="absolute -top-1 -right-1">
                      <Zap className="h-4 w-4 text-yellow-400 animate-bounce" />
                    </div>
                  )}
                </div>
                
                {/* Animated Number */}
                <div className="text-3xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}{stat.suffix}
                  </span>
                </div>
                <div className="text-sm text-blue-700 font-medium">{stat.unit}</div>
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {stat.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1 justify-center">
                {stat.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-white/30 text-xs font-medium text-blue-800 rounded-full group-hover:bg-white/50 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Effect Line */}
              {hoveredCard === index && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Award className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold">Jelajahi Semua Foto</span>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryStats
