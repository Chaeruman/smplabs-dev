"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, Users, Award, BookOpen, Sparkles, Star } from "lucide-react"

const ActivitiesHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const categories = [
    {
      icon: BookOpen,
      title: "Akademik",
      description: "Program Pembelajaran",
      color: "from-blue-400 to-blue-600",
      delay: 0
    },
    {
      icon: Users,
      title: "Ekstrakurikuler", 
      description: "Pengembangan Bakat",
      color: "from-green-400 to-green-600",
      delay: 100
    },
    {
      icon: Award,
      title: "Kompetisi",
      description: "Prestasi & Lomba", 
      color: "from-yellow-400 to-yellow-600",
      delay: 200
    },
    {
      icon: Calendar,
      title: "Event",
      description: "Acara Khusus",
      color: "from-purple-400 to-purple-600",
      delay: 300
    }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative py-20 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-float-delayed" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/4 left-1/3 animate-pulse">
          <Sparkles className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-1000">
          <Star className="h-4 w-4 text-white/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-pulse delay-2000">
          <Sparkles className="h-5 w-5 text-white/25" />
        </div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30 hover:scale-110 transition-transform duration-300 hover:bg-white/30 group">
              <Calendar className="h-10 w-10 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast drop-shadow-enhanced-lg">
              Kegiatan Sekolah
            </h1>
            <p className="text-xl text-high-contrast-sm mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-soft">
              Berbagai program dan kegiatan yang dirancang untuk mengembangkan potensi siswa secara holistik
            </p>
          </div>

          {/* Activity Categories with enhanced animations */}
          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon
              const isHovered = hoveredCategory === index
              
              return (
                <div
                  key={index}
                  className={`text-center group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isHovered ? 'transform scale-110' : ''
                  }`}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{ transitionDelay: `${category.delay}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-12 ${isHovered ? 'animate-bounce-in' : ''}`}>
                    <IconComponent className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold text-glow-purple group-hover:text-yellow-200 transition-colors duration-300 drop-shadow-soft">
                    {category.title}
                  </h3>
                  <p className="text-glow-blue text-sm group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-soft">
                    {category.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}></div>
                </div>
              )
            })}
          </div>

          {/* Interactive stats */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center group">
              <div className="text-4xl font-bold text-glow-gradient mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-soft-lg">
                30+
              </div>
              <div className="text-glow-blue group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-soft">
                Total Kegiatan
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-glow-gradient mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-soft-lg">
                500+
              </div>
              <div className="text-glow-blue group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-soft">
                Siswa Terlibat
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-glow-gradient mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-soft-lg">
                15
              </div>
              <div className="text-glow-blue group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-soft">
                Kategori
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesHero
