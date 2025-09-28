"use client"

import { useEffect, useState } from "react"
import { Target, Lightbulb, CheckCircle } from "lucide-react"

const VisionMission = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const missionItems = [
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".mission-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        {/* Vision Section */}
        <div id="visi" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visi Sekolah</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi yang menghargai dan
                  mendorong peserta didik menjadi pembelajar sepanjang hayat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div id="misi" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Misi Sekolah</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`mission-item bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform transition-all duration-700 ${
                    visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
