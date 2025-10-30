"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { useHomepageData } from "@/hooks/useHomepageData"

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { data, loading, error } = useHomepageData()

  // Force show for debugging
  const [forceShow, setForceShow] = useState(false)

  useEffect(() => {
    // Force show after 2 seconds for debugging
    const timer = setTimeout(() => {
      setForceShow(true)
    }, 2000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Add visible class to animate-on-scroll elements
          const animatedElements = entry.target.querySelectorAll('.animate-on-scroll')
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible')
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 }, // Reduced threshold
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [data])

  // Debug logs
  console.log("=== NewsSection Debug ===")
  console.log("data:", data)
  console.log("loading:", loading)
  console.log("error:", error)
  console.log("isVisible:", isVisible)
  console.log("forceShow:", forceShow)

  // Always show fallback news if no data
  const fallbackNews = [
    {
      id: 1,
      title: "Prestasi",
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

  const news = data?.news && data.news.length > 0 ? data.news : fallbackNews
  console.log("Final news array:", news)

  if (loading && !forceShow) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <div className="h-6 sm:h-8 bg-gray-200 rounded-lg w-48 sm:w-64 mx-auto mb-3 sm:mb-4 animate-pulse"></div>
            <div className="h-3 sm:h-4 bg-gray-100 rounded w-72 sm:w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-6 sm:gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-40 sm:h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4 sm:p-6">
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-20 sm:w-24 mb-2 sm:mb-3 animate-pulse"></div>
                  <div className="h-5 sm:h-6 bg-gray-200 rounded w-full mb-2 sm:mb-3 animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-gray-100 rounded w-full mb-3 sm:mb-4 animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-blue-200 rounded w-24 sm:w-32 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">Berita & Kegiatan Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di SMP Labschool Jakarta
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
              <p className="text-yellow-800 text-xs sm:text-sm">Menggunakan data fallback. Error: {error}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-rows-auto">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`${
                index === 0 ? "card-soft-blue" : index === 1 ? "card-soft-green" : "card-soft-orange"
              } rounded-2xl shadow-lg overflow-hidden hover-glow transition-all duration-500 card-hover animate-on-scroll`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg?height=200&width=300"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=200&width=300"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span
                    className={`${
                      item.category === "Prestasi"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : item.category === "Program"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-gradient-to-r from-orange-500 to-orange-600"
                    } text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 group">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {item.date}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">{item.excerpt}</p>
                <Link
                  href={`/berita/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-all duration-300 group-hover:scale-105 text-sm sm:text-base"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
          <Link href="/kegiatan" className="btn-primary btn-animate hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Lihat Semua Kegiatan
          </Link>
        </div>

      </div>
    </section>
  )
}

export default NewsSection
