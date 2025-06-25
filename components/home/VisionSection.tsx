"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Target } from "lucide-react"

const VisionSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Visi & Misi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami dalam menciptakan pendidikan berkualitas untuk masa depan yang cerah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="card-soft-blue rounded-2xl p-8 shadow-lg hover-glow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi yang menghargai dan
                mendorong peserta didik menjadi pembelajar sepanjang hayat.
              </p>
            </div>
          </div>

          {/* Mission Preview */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="card-soft-purple rounded-2xl p-8 shadow-lg hover-glow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Misi</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Kami berkomitmen untuk mewujudkan pendidikan berkualitas melalui berbagai program dan kegiatan yang
                mendukung perkembangan siswa.
              </p>
              <a
                href="/tentang"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Lihat Selengkapnya
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
