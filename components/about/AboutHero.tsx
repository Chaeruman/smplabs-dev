"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Users, BookOpen, Sparkles, Star } from "lucide-react"

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
                Tentang Kami
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight drop-shadow-soft">
                SMP Labschool Jakarta
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed drop-shadow-soft">
                Sekolah menengah pertama yang berkomitmen memberikan pendidikan berkualitas tinggi dengan pendekatan
                inovatif dan lingkungan pembelajaran yang mendukung perkembangan optimal setiap siswa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div 
                className={`text-center p-4 card-soft-blue rounded-xl hover-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  hoveredStat === 0 ? 'shadow-2xl shadow-blue-200/50' : ''
                }`}
                onMouseEnter={() => setHoveredStat(0)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                  hoveredStat === 0 ? 'animate-pulse scale-110' : ''
                }`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 transition-all duration-300">
                  A
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Akreditasi</div>
                {hoveredStat === 0 && (
                  <div className="absolute -top-2 -right-2 animate-bounce">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </div>
                )}
              </div>
              <div 
                className={`text-center p-4 card-soft-green rounded-xl hover-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  hoveredStat === 1 ? 'shadow-2xl shadow-green-200/50' : ''
                }`}
                onMouseEnter={() => setHoveredStat(1)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                  hoveredStat === 1 ? 'animate-pulse scale-110' : ''
                }`}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 transition-all duration-300">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Siswa Aktif</div>
                {hoveredStat === 1 && (
                  <div className="absolute -top-2 -right-2 animate-bounce">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                )}
              </div>
              <div 
                className={`text-center p-4 card-soft-purple rounded-xl hover-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  hoveredStat === 2 ? 'shadow-2xl shadow-purple-200/50' : ''
                }`}
                onMouseEnter={() => setHoveredStat(2)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                  hoveredStat === 2 ? 'animate-pulse scale-110' : ''
                }`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 transition-all duration-300">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Program Unggulan</div>
                {hoveredStat === 2 && (
                  <div className="absolute -top-2 -right-2 animate-bounce">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl hover-glow transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
                <Image
                  src="/kegiatan-sekolah.jpg"
                  alt="Kegiatan Sekolah SMP Labschool Jakarta"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/20"></div>
                
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badges with enhanced animations */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl animate-float">
                <div className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Kegiatan Aktif
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl animate-float-delayed">
                <div className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Pembelajaran Outdoor
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
