"use client"

import { Trophy, Medal, Award, Star } from "lucide-react"

const ExtracurricularAchievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Juara 1 Olimpiade Matematika",
      level: "Tingkat Provinsi DKI Jakarta",
      year: "2024",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      icon: Medal,
      title: "Juara 2 Lomba Paduan Suara",
      level: "Tingkat Nasional",
      year: "2024",
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-slate-50",
    },
    {
      icon: Award,
      title: "Juara 3 Kompetisi Robotika",
      level: "Tingkat Regional Jabodetabek",
      year: "2023",
      color: "from-amber-600 to-yellow-700",
      bgColor: "from-amber-50 to-yellow-50",
    },
    {
      icon: Star,
      title: "Best Performance Drama",
      level: "Festival Seni Pelajar Jakarta",
      year: "2023",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Trophy,
      title: "Juara 1 Basket Putri",
      level: "Liga Pelajar Jakarta Selatan",
      year: "2024",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Medal,
      title: "Juara 2 Lomba Fotografi",
      level: "Kompetisi Nasional",
      year: "2023",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Prestasi Terbaru</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai prestasi membanggakan yang telah diraih siswa-siswi SMP Labschool Jakarta
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/50`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
              >
                <achievement.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-3">{achievement.level}</p>

              <div className="flex items-center justify-between">
                <span
                  className={`bg-gradient-to-r ${achievement.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {achievement.year}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Prestasi", value: "50+", color: "from-blue-500 to-purple-500" },
            { label: "Juara 1", value: "15", color: "from-yellow-500 to-orange-500" },
            { label: "Tingkat Nasional", value: "8", color: "from-green-500 to-emerald-500" },
            { label: "Siswa Berprestasi", value: "120+", color: "from-pink-500 to-rose-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularAchievements
