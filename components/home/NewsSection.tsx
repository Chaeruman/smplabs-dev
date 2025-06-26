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
  }, [])

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

  const news = data?.news && data.news.length > 0 ? data.news : fallbackNews
  console.log("Final news array:", news)

  if (loading && !forceShow) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-blue-200 rounded w-32 animate-pulse"></div>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Berita & Kegiatan Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di SMP Labschool Jakarta
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
              <p className="text-yellow-800 text-sm">Menggunakan data fallback. Error: {error}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`${
                index === 0 ? "card-soft-blue" : index === 1 ? "card-soft-green" : "card-soft-orange"
              } rounded-2xl shadow-lg overflow-hidden hover-glow transition-all duration-500`}
            >
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg?height=200&width=300"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=200&width=300"
                  }}
                />
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

        <div className="text-center mt-12">
          <Link href="/kegiatan" className="btn-primary">
            Lihat Semua Kegiatan
          </Link>
        </div>

        {/* Debug info - remove in production */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p>
            <strong>Debug Info:</strong>
          </p>
          <p>Loading: {loading ? "Yes" : "No"}</p>
          <p>Error: {error || "None"}</p>
          <p>Data exists: {data ? "Yes" : "No"}</p>
          <p>News count: {news.length}</p>
          <p>Force show: {forceShow ? "Yes" : "No"}</p>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
