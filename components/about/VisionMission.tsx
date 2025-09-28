"use client"

import { useEffect, useState } from "react"
import { Target, Lightbulb, CheckCircle, Sparkles, Star } from "lucide-react"

const VisionMission = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isVisionVisible, setIsVisionVisible] = useState(false)
  const [isMissionVisible, setIsMissionVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

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
            
            // Set section visibility
            if (entry.target.classList.contains('vision-section')) {
              setIsVisionVisible(true)
            }
            if (entry.target.classList.contains('mission-section')) {
              setIsMissionVisible(true)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".mission-item, .vision-section, .mission-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        {/* Vision Section */}
        <div id="visi" className="mb-20 scroll-mt-20 vision-section">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-pulse-glow">
              <Target className="h-8 w-8 text-white animate-wiggle" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 gradient-text">
              Visi Sekolah
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-shimmer"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${
              isVisionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Lightbulb className="h-8 w-8 text-yellow-500 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi yang menghargai dan
                  mendorong peserta didik menjadi pembelajar sepanjang hayat.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div id="misi" className="scroll-mt-20 mission-section">
          <div className={`text-center mb-12 transition-all duration-1000 ${isMissionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 animate-pulse-glow">
              <CheckCircle className="h-8 w-8 text-white animate-wiggle" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 gradient-text">
              Misi Sekolah
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full animate-shimmer"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`mission-item bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform transition-all duration-700 hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${
                    visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${
                    hoveredItem === index ? 'shadow-2xl shadow-blue-200/50' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredItem === index ? 'scale-110 animate-pulse' : ''
                      }`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                    {hoveredItem === index && (
                      <div className="absolute -top-2 -right-2 animate-bounce">
                        {index % 2 === 0 ? (
                          <Sparkles className="h-4 w-4 text-yellow-400" />
                        ) : (
                          <Star className="h-4 w-4 text-yellow-400" />
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Progress bar animation */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ${
                        visibleItems.includes(index) ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 500}ms` }}
                    ></div>
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
