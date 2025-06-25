"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Target, CheckCircle } from "lucide-react"

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMissions, setVisibleMissions] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const missions = [
    "Menjadi sekolah yang ramah anak, mengembangkan potensi peserta didik secara maksimal.",
    "Menciptakan iklim sekolah yang kondusif melalui komunikasi yang sehat antarwarga sekolah.",
    "Mendorong dan mendukung perkembangan peserta didik menjadi individu yang memiliki rasa ingin tahu, reflektif, dan kritis dalam pemikiran sebagai warga Indonesia dan global.",
    "Menjadikan keimanan dan ketakwaan sebagai pijakan dalam melakukan aktivitas pendidikan.",
    "Mewujudkan sekolah yang mampu melayani kebutuhan sesuai dengan tuntutan perkembangan dunia pendidikan.",
    "Menjadikan sekolah yang siap berkompetisi di tingkat nasional dan internasional.",
    "Mewujudkan sekolah aman dalam segala bentuk program kegiatan intrakulikuler, kokulikuler dan ekstrakulikuler.",
    "Mengedepankan transformasi digital dalam setiap aspek dalam menghadapi perkembangan zaman.",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate missions one by one
          missions.forEach((_, index) => {
            setTimeout(() => {
              setVisibleMissions((prev) => [...prev, index])
            }, index * 300)
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

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Visi & Misi Lengkap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Landasan filosofis yang mengarahkan setiap langkah pendidikan di SMP Labschool Jakarta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="card-soft-green rounded-2xl p-8 shadow-lg hover-glow h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi yang menghargai dan
                mendorong peserta didik menjadi pembelajar sepanjang hayat.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="card-soft-indigo rounded-2xl p-8 shadow-lg hover-glow h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Misi Kami</h3>
              </div>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-500 ${
                      visibleMissions.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
