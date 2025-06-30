"use client"

import { useState, useEffect } from "react"
import { Trophy, Medal, Award, Star, Calendar, MapPin } from "lucide-react"

const ExtracurricularAchievements = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Prestasi & Penghargaan
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Berbagai prestasi membanggakan yang telah diraih siswa-siswi SMP Labschool
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`bg-gradient-to-br ${achievement.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                >
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 bg-white/70 px-2 sm:px-3 py-1 rounded-full">
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
        <div className="text-center mt-12 sm:mt-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Bergabunglah dan Raih Prestasi Bersama Kami!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Jadilah bagian dari komunitas berprestasi dan kembangkan potensi terbaik Anda
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularAchievements
