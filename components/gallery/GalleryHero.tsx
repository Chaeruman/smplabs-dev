"use client"

import { useEffect, useState } from "react"
import { Camera, ImageIcon, Users, Calendar } from "lucide-react"

const GalleryHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      <div className="container-custom">
        <div className="text-center text-white">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast drop-shadow-enhanced-lg">Galeri SMP Labschool</h1>
            <p className="text-xl text-high-contrast-sm mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-soft">
              Dokumentasi kegiatan, fasilitas, dan momen berharga dalam perjalanan pendidikan di SMP Labschool Jakarta
            </p>
          </div>

          {/* Quick Stats */}
          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-white/80 text-sm">Foto</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-white/80 text-sm">Kegiatan</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">2024</h3>
              <p className="text-white/80 text-sm">Terbaru</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">8</h3>
              <p className="text-white/80 text-sm">Kategori</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryHero
