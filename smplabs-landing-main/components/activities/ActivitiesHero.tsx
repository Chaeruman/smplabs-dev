"use client"

import { useEffect, useState } from "react"
import { Calendar, Users, Award, BookOpen } from "lucide-react"

const ActivitiesHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600">
      <div className="container-custom">
        <div className="text-center text-white">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Calendar className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kegiatan Sekolah</h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Berbagai program dan kegiatan yang dirancang untuk mengembangkan potensi siswa secara holistik
            </p>
          </div>

          {/* Activity Categories */}
          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Akademik</h3>
              <p className="text-white/80 text-sm">Program Pembelajaran</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Ekstrakurikuler</h3>
              <p className="text-white/80 text-sm">Pengembangan Bakat</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Kompetisi</h3>
              <p className="text-white/80 text-sm">Prestasi & Lomba</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Event</h3>
              <p className="text-white/80 text-sm">Acara Khusus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesHero
