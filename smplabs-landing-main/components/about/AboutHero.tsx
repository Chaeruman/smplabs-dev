"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Users, BookOpen } from "lucide-react"

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                SMP Labschool Jakarta
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Sekolah menengah pertama yang berkomitmen memberikan pendidikan berkualitas tinggi dengan pendekatan
                inovatif dan lingkungan pembelajaran yang mendukung perkembangan optimal setiap siswa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 card-soft-blue rounded-xl hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">A</div>
                <div className="text-xs sm:text-sm text-gray-600">Akreditasi</div>
              </div>
              <div className="text-center p-4 card-soft-green rounded-xl hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Siswa Aktif</div>
              </div>
              <div className="text-center p-4 card-soft-purple rounded-xl hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Program Unggulan</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl hover-glow">
                <Image
                  src="/kegiatan-sekolah.jpg"
                  alt="Kegiatan Sekolah SMP Labschool Jakarta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="text-xs font-semibold text-blue-600">Kegiatan Aktif</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="text-xs font-semibold text-green-600">Pembelajaran Outdoor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
