"use client"

import { Trophy, Users, Calendar, Award, Sparkles, Star } from "lucide-react"
import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation"

export default function ExtracurricularHero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  // Animated counters
  const achievementCount = useCounterAnimation(100, 2000, statsVisible)
  const studentCount = useCounterAnimation(900, 2500, statsVisible)
  const activityCount = useCounterAnimation(25, 1800, statsVisible)
  const categoryCount = useCounterAnimation(8, 1500, statsVisible)

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-1/4 w-16 h-16 bg-yellow-300 rounded-full blur-2xl animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-300 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping ${heroVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}></div>
        <div className={`absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping ${heroVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}></div>
        <div className={`absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping ${heroVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping ${heroVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1100`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center">
        <div className="w-full py-16 sm:py-20 lg:py-24">
          {/* Main Content with Animation */}
          <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-high-contrast drop-shadow-enhanced-lg">
                Ekstrakurikuler
              </h1>
              <div className={`absolute -top-2 -right-2 ${heroVisible ? 'animate-spin' : ''} transition-all duration-1000 delay-500`}>
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
              </div>
            </div>
            <p className={`text-lg sm:text-xl lg:text-2xl text-high-contrast-sm max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-soft transform transition-all duration-1000 delay-200 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Kembangkan bakat dan minat Anda melalui berbagai kegiatan ekstrakurikuler yang menarik dan bermanfaat
            </p>
          </div>

          {/* Animated Stats Grid */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto transform transition-all duration-1000 ${
              statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-bounce">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                {achievementCount}+
              </div>
              <div className="text-white/80 text-sm sm:text-base">Prestasi</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-rotate-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-pulse">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                {studentCount}+
              </div>
              <div className="text-white/80 text-sm sm:text-base">Siswa Aktif</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-spin">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                {activityCount}+
              </div>
              <div className="text-white/80 text-sm sm:text-base">Kegiatan</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-rotate-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:animate-bounce">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                {categoryCount}
              </div>
              <div className="text-white/80 text-sm sm:text-base">Kategori</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
