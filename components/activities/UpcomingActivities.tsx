"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

const UpcomingActivities = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate cards one by one
          upcomingActivities.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const upcomingActivities = [
    {
      id: 1,
      title: "Pekan Literasi Digital",
      description: "Workshop dan seminar tentang literasi digital untuk siswa dan guru",
      date: "2 Januari 2025",
      time: "08:00 - 15:00",
      location: "Lab Komputer & Aula",
      participants: "Seluruh Siswa",
      category: "Teknologi",
      priority: "high",
    },
    {
      id: 2,
      title: "Lomba Karya Tulis Ilmiah",
      description: "Kompetisi penulisan karya ilmiah remaja tingkat sekolah",
      date: "15 Januari 2025",
      time: "09:00 - 16:00",
      location: "Perpustakaan",
      participants: "50 Siswa",
      category: "Akademik",
      priority: "medium",
    },
    {
      id: 3,
      title: "Pentas Musik & Drama",
      description: "Pertunjukan seni musik dan drama oleh siswa ekstrakurikuler",
      date: "25 Januari 2025",
      time: "19:00 - 21:00",
      location: "Auditorium",
      participants: "60 Siswa",
      category: "Seni",
      priority: "high",
    },
    {
      id: 4,
      title: "Kunjungan Industri",
      description: "Kunjungan edukatif ke perusahaan teknologi dan manufaktur",
      date: "5 Februari 2025",
      time: "07:00 - 17:00",
      location: "Jakarta & Sekitarnya",
      participants: "100 Siswa",
      category: "Edukasi",
      priority: "medium",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Teknologi: "bg-gradient-to-r from-blue-400 to-cyan-500",
      Akademik: "bg-gradient-to-r from-green-400 to-emerald-500",
      Seni: "bg-gradient-to-r from-purple-400 to-pink-500",
      Edukasi: "bg-gradient-to-r from-orange-400 to-red-500",
    }
    return colors[category] || "bg-gradient-to-r from-gray-400 to-gray-500"
  }

  const getPriorityColor = (priority: string) => {
    return priority === "high" ? "border-l-4 border-red-400" : "border-l-4 border-yellow-400"
  }

  const getCardColor = (index: number) => {
    const colors = ["card-soft-blue", "card-soft-green", "card-soft-purple", "card-soft-orange"]
    return colors[index % colors.length]
  }

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Kegiatan Mendatang</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai kegiatan menarik yang akan segera dilaksanakan. Jangan sampai terlewat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={`${getCardColor(index)} ${getPriorityColor(activity.priority)} rounded-2xl p-6 shadow-lg hover-glow transition-all duration-1000 group relative overflow-hidden ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(activity.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span
                  className={`${getCategoryColor(activity.category)} text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  {activity.category}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full transition-all duration-300 group-hover:scale-110 ${
                    activity.priority === "high" ? "bg-red-100 text-red-600 group-hover:bg-red-200" : "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200"
                  }`}
                >
                  {activity.priority === "high" ? "Prioritas Tinggi" : "Prioritas Sedang"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 relative z-10">{activity.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 relative z-10">{activity.description}</p>

              {/* Activity Details */}
              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <Calendar className="h-4 w-4 mr-3 text-blue-500 group-hover:animate-pulse" />
                  <span className="font-medium">{activity.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <Clock className="h-4 w-4 mr-3 text-green-500 group-hover:animate-pulse" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <MapPin className="h-4 w-4 mr-3 text-orange-500 group-hover:animate-pulse" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <Users className="h-4 w-4 mr-3 text-purple-500 group-hover:animate-pulse" />
                  <span>{activity.participants}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg group relative overflow-hidden z-10">
                <span className="relative z-10">Daftar Sekarang</span>
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="card-soft-indigo rounded-2xl p-8 shadow-lg hover-glow">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ingin Mengikuti Kegiatan?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Hubungi koordinator kegiatan atau daftar langsung melalui sistem informasi sekolah
            </p>
            <button className="btn-primary">Hubungi Koordinator</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingActivities
