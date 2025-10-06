"use client"

import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Trophy, Medal, Award, Star, Calendar, MapPin, Sparkles } from "lucide-react"

const ExtracurricularAchievements = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  const achievements = [
    {
      title: "Juara 1 Lomba Robotika Nasional",
      category: "Teknologi",
      year: "2024",
      level: "Nasional",
      location: "Jakarta",
      description: "Tim robotika SMP Labschool berhasil meraih juara pertama dalam kompetisi robotika tingkat nasional",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      title: "Medali Emas Olimpiade Matematika",
      category: "Akademik",
      year: "2024",
      level: "Provinsi",
      location: "DKI Jakarta",
      description: "Siswa berprestasi meraih medali emas dalam Olimpiade Matematika tingkat provinsi",
      icon: Medal,
      color: "from-blue-400 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      title: "Juara 2 Festival Seni Budaya",
      category: "Seni",
      year: "2024",
      level: "Regional",
      location: "Jabodetabek",
      description: "Penampilan tari tradisional meraih juara kedua di festival seni budaya regional",
      icon: Award,
      color: "from-pink-400 to-red-500",
      bgColor: "from-pink-50 to-red-50",
    },
    {
      title: "Penghargaan Sekolah Berprestasi",
      category: "Institusi",
      year: "2024",
      level: "Nasional",
      location: "Indonesia",
      description: "SMP Labschool mendapat pengakuan sebagai sekolah dengan prestasi ekstrakurikuler terbaik",
      icon: Star,
      color: "from-green-400 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Prestasi & Penghargaan
              </h2>
              <div className={`absolute -top-2 -right-2 ${sectionVisible ? 'animate-pulse' : ''} transition-all duration-1000 delay-500`}>
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
              </div>
            </div>
            <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 transform transition-all duration-1000 delay-200 ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Berbagai prestasi membanggakan yang telah diraih siswa-siswi SMP Labschool
            </p>
            <div className={`w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-4 sm:mt-6 rounded-full transform transition-all duration-1000 delay-400 ${
              sectionVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div ref={achievementsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:scale-110 hover:rotate-1 group ${
                  achievementsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div
                  className={`bg-gradient-to-br ${achievement.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full group-hover:shadow-2xl`}
                >
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center group-hover:animate-bounce transition-all duration-300`}
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 bg-white/70 px-2 sm:px-3 py-1 rounded-full group-hover:bg-white/90 transition-all duration-300">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span>
                        {achievement.year} • {achievement.level}
                      </span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{achievement.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-12 sm:mt-16">
          <div
            className={`transform transition-all duration-1000 ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
              Bergabunglah dan Raih Prestasi Bersama Kami!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Jadilah bagian dari komunitas berprestasi dan kembangkan potensi terbaik Anda
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-500 hover:shadow-lg transform hover:scale-110 hover:rotate-1 text-sm sm:text-base group/btn">
              <span className="flex items-center gap-2">
                Daftar Sekarang
                <Sparkles className="h-4 w-4 group-hover/btn:animate-spin" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularAchievements
