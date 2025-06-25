"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Heart, Star, Trophy } from "lucide-react"

const GalleryStats = () => {
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

  const stats = [
    {
      icon: Camera,
      title: "Dokumentasi Lengkap",
      description: "Setiap momen berharga terekam dengan baik",
      color: "card-soft-blue",
    },
    {
      icon: Heart,
      title: "Kenangan Indah",
      description: "Momen-momen yang akan selalu diingat",
      color: "card-soft-pink",
    },
    {
      icon: Star,
      title: "Kualitas Terbaik",
      description: "Foto berkualitas tinggi untuk dokumentasi",
      color: "card-soft-orange",
    },
    {
      icon: Trophy,
      title: "Prestasi Terdokumentasi",
      description: "Setiap pencapaian diabadikan dengan sempurna",
      color: "card-soft-green",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Mengapa Galeri Kami Istimewa?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap foto memiliki cerita dan makna yang mendalam dalam perjalanan pendidikan siswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-2xl p-6 text-center shadow-lg hover-glow transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/50 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">{stat.title}</h3>
              <p className="text-gray-700 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryStats
