"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const NewsSection = () => {
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

  const news = [
    {
      id: 1,
      title: "Prestasi Gemilang di Olimpiade Matematika Nasional",
      excerpt: "Siswa SMP Labschool Jakarta meraih medali emas dalam kompetisi matematika tingkat nasional.",
      date: "15 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Prestasi",
    },
    {
      id: 2,
      title: "Program Literasi Digital untuk Siswa",
      excerpt: "Meluncurkan program baru untuk meningkatkan kemampuan literasi digital siswa.",
      date: "10 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Program",
    },
    {
      id: 3,
      title: "Kegiatan Bakti Sosial di Panti Asuhan",
      excerpt: "Siswa dan guru berpartisipasi dalam kegiatan bakti sosial untuk membantu sesama.",
      date: "5 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kegiatan",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Berita & Kegiatan Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di SMP Labschool Jakarta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`${
                index === 0 ? "card-soft-blue" : index === 1 ? "card-soft-green" : "card-soft-orange"
              } rounded-2xl shadow-lg overflow-hidden hover-glow transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${
                      item.category === "Prestasi"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : item.category === "Program"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-gradient-to-r from-orange-500 to-orange-600"
                    } text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <Link
                  href={`/berita/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link href="/kegiatan" className="btn-primary">
            Lihat Semua Kegiatan
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
