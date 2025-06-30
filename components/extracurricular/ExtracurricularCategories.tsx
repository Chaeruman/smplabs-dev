"use client"

import { useState } from "react"
import { useExtracurricularData } from "@/hooks/useExtracurricularData"
import { Trophy, Music, BookOpen, Camera, Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const iconMap = {
  Trophy,
  Music,
  BookOpen,
  Camera,
}

export default function ExtracurricularCategories() {
  const { data: categories, loading, error } = useExtracurricularData()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600">Gagal memuat data ekstrakurikuler. Silakan coba lagi nanti.</p>
          </div>
        </div>
      </section>
    )
  }

  const filteredCategories = selectedCategory ? categories.filter((cat) => cat.title === selectedCategory) : categories

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Kategori Ekstrakurikuler
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih kategori yang sesuai dengan minat dan bakat Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.title
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BookOpen

            return (
              <div key={category.title} className="space-y-6 sm:space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4`}
                  >
                    <IconComponent className="h-6 w-6 mr-3" />
                    <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.activities.map((activity) => {
                    const slug = activity.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]/g, "")

                    const parseDescription = (desc: string) => {
                      const lines = desc.split("\r\n")
                      return {
                        main: lines[0] || "",
                        instructor:
                          lines
                            .find((line) => line.includes("Pembina"))
                            ?.replace("Pembina:", "")
                            .trim() || "",
                        location:
                          lines
                            .find((line) => line.includes("Tempat"))
                            ?.replace("Tempat:", "")
                            .trim() || "",
                        schedule:
                          lines
                            .find((line) => line.includes("Waktu"))
                            ?.replace("Waktu:", "")
                            .trim() || "",
                      }
                    }

                    const details = parseDescription(activity.description)

                    return (
                      <div
                        key={activity.name}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
                      >
                        {/* Image */}
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt={activity.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{activity.name}</h4>
                            <div className="flex items-center text-white/80 text-sm">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{activity.participants}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{details.main}</p>

                          {/* Details */}
                          <div className="space-y-2 mb-6">
                            {details.instructor && (
                              <div className="flex items-center text-sm text-gray-500">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                <span className="font-medium">Pembina:</span>
                                <span className="ml-1">{details.instructor}</span>
                              </div>
                            )}
                            {details.location && (
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="h-3 w-3 mr-2 text-green-500" />
                                <span>{details.location}</span>
                              </div>
                            )}
                            {details.schedule && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-3 w-3 mr-2 text-purple-500" />
                                <span>{details.schedule}</span>
                              </div>
                            )}
                          </div>

                          {/* CTA Button */}
                          <Link
                            href={`/ekstrakurikuler/${slug}`}
                            className={`block w-full bg-gradient-to-r ${category.color} text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
                          >
                            Lihat Selengkapnya
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Siap Bergabung?</h3>
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang dan kembangkan potensi melalui kegiatan ekstrakurikuler yang menarik
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
