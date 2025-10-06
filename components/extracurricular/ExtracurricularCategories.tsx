"use client"

import { useState, useEffect } from "react"
import { useExtracurricularData } from "@/hooks/useExtracurricularData"
import { Trophy, Music, BookOpen, Camera, Users, Clock, MapPin, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const iconMap = {
  Trophy,
  Music,
  BookOpen,
  Camera,
}

// Utility function to generate consistent slugs
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export default function ExtracurricularCategories() {
  const { data: categories, loading, error } = useExtracurricularData()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loadingTimeout, setLoadingTimeout] = useState(false)

  // Debug logging
  console.log("ExtracurricularCategories - Loading:", loading)
  console.log("ExtracurricularCategories - Error:", error)
  console.log("ExtracurricularCategories - Categories:", categories)
  console.log("ExtracurricularCategories - Categories length:", categories?.length)

  // Add timeout for loading state
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoadingTimeout(true)
      }, 10000) // 10 second timeout

      return () => clearTimeout(timeout)
    } else {
      setLoadingTimeout(false)
    }
  }, [loading])

  if (loading && !loadingTimeout) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Show timeout message if loading takes too long
  if (loading && loadingTimeout) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-orange-600">Memuat data ekstrakurikuler...</p>
            <p className="text-sm text-orange-500 mt-2">Mohon tunggu sebentar atau refresh halaman jika loading terlalu lama.</p>
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
            <p className="text-sm text-red-500 mt-2">Error: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  // Check if categories data is empty
  if (!categories || categories.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-600">Data ekstrakurikuler tidak tersedia saat ini.</p>
          </div>
        </div>
      </section>
    )
  }

  const filteredCategories = selectedCategory ? categories.filter((cat) => cat.title === selectedCategory) : categories

  return (
    <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 drop-shadow-md">
              Kategori Ekstrakurikuler
            </h2>
            <div className="absolute -top-2 -right-2">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 drop-shadow-md" />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-bold">
            Pilih kategori yang sesuai dengan minat dan bakat Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold border-2 ${
                selectedCategory === null
                  ? "bg-blue-800 text-white border-blue-800 shadow-xl"
                  : "bg-white text-gray-900 border-gray-400 hover:bg-blue-100 hover:border-blue-600 hover:shadow-lg"
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold border-2 ${
                  selectedCategory === category.title
                    ? "bg-blue-800 text-white border-blue-800 shadow-xl"
                    : "bg-white text-gray-900 border-gray-400 hover:bg-blue-100 hover:border-blue-600 hover:shadow-lg"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BookOpen

            return (
              <div 
                key={category.title} 
                className="space-y-6 sm:space-y-8"
              >
                {/* Category Header */}
                <div className="text-center">
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4 hover:shadow-xl group shadow-lg border border-white/20`}
                  >
                    <IconComponent className="h-6 w-6 mr-3 drop-shadow-md" />
                    <h3 className="text-xl sm:text-2xl font-black drop-shadow-md">{category.title}</h3>
                  </div>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.activities.map((activity, activityIndex) => {
                    const slug = generateSlug(activity.name)

                    // Enhanced parsing function to handle instructor names with academic titles
                    const parseDescription = (desc: string) => {
                      const lines = desc.split(/\r?\n/).filter((line) => line.trim() !== "")

                      // Find all instructor lines
                      const instructorLines = lines.filter(
                        (line) => line.toLowerCase().includes("pembina") || line.toLowerCase().includes("guru pembina"),
                      )

                      // Extract instructor names with smart parsing for academic titles
                      const instructorNames = new Set<string>()
                      instructorLines.forEach((line) => {
                        // Remove various prefixes and clean up
                        const cleanLine = line
                          .replace(/^.*?pembina\s*:?\s*/i, "")
                          .replace(/^.*?guru\s+pembina\s*:?\s*/i, "")
                          .trim()

                        if (cleanLine) {
                          // Split by "dan" but be smart about academic titles
                          const parts = cleanLine.split(/\s+dan\s+/i)
                          parts.forEach((part) => {
                            const trimmedPart = part.trim()
                            if (trimmedPart && trimmedPart.length > 2) {
                              instructorNames.add(trimmedPart)
                            }
                          })
                        }
                      })

                      // Get other information
                      const locationLine = lines.find(
                        (line) => line.toLowerCase().includes("tempat") && !line.toLowerCase().includes("pembina"),
                      )
                      const scheduleLine = lines.find(
                        (line) => line.toLowerCase().includes("waktu") && !line.toLowerCase().includes("pembina"),
                      )

                      // Get main description (first line that's not instructor/location/schedule)
                      const mainDesc =
                        lines.find(
                          (line) =>
                            !line.toLowerCase().includes("pembina") &&
                            !line.toLowerCase().includes("tempat") &&
                            !line.toLowerCase().includes("waktu") &&
                            line.trim().length > 10,
                        ) ||
                        lines[0] ||
                        ""

                      // Clean up location and schedule text
                      const cleanLocation = locationLine 
                        ? locationLine.replace(/^.*?tempat\s*:?\s*/i, "").trim()
                        : ""
                      
                      const cleanSchedule = scheduleLine 
                        ? scheduleLine.replace(/^.*?waktu\s*:?\s*/i, "").trim()
                        : ""

                      return {
                        main: mainDesc.trim(),
                        instructors: Array.from(instructorNames),
                        location: cleanLocation,
                        schedule: cleanSchedule,
                      }
                    }

                    const details = parseDescription(activity.description)

                    return (
                      <div
                        key={activity.name}
                        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden group border-2 border-gray-200"
                      >
                        {/* Image */}
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src={activity.cover || "/placeholder.svg?height=300&width=400"}
                            alt={activity.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-black text-lg sm:text-xl mb-1 drop-shadow-xl">{activity.name}</h4>
                            <div className="flex items-center text-white text-sm drop-shadow-lg">
                              <Users className="h-4 w-4 mr-1" />
                              <span className="font-bold">{activity.participants}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Benefits Preview */}
                          {activity.benefit && (
                            <div className="mb-4">
                              <div className="text-sm text-gray-800 line-clamp-3 font-bold">
                                <div className="html-content" dangerouslySetInnerHTML={{ 
                                  __html: activity.benefit.replace(/<[^>]*>/g, '').substring(0, 150) + '...' 
                                }} />
                              </div>
                            </div>
                          )}

                          {/* Details */}
                          <div className="space-y-3 mb-6">
                            {details.instructors.length > 0 && (
                              <div className="flex items-start text-sm">
                                <div className="w-2 h-2 bg-blue-700 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                <div className="flex-1">
                                  <span className="font-black text-gray-900">Pembina:</span>
                                  <div className="mt-1 text-gray-800">
                                    {details.instructors.map((instructor, idx) => (
                                      <div key={idx} className="text-sm font-bold">{instructor}</div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                            {details.location && (
                              <div className="flex items-start text-sm">
                                <MapPin className="h-4 w-4 mr-3 text-green-700 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <span className="font-black text-gray-900">Tempat:</span>
                                  <div className="mt-1 text-gray-800 font-bold">{details.location}</div>
                                </div>
                              </div>
                            )}
                            {details.schedule && (
                              <div className="flex items-start text-sm">
                                <Clock className="h-4 w-4 mr-3 text-purple-700 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <span className="font-black text-gray-900">Waktu:</span>
                                  <div className="mt-1 text-gray-800 font-bold">{details.schedule}</div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* CTA Button */}
                          <Link
                            href={`/ekstrakurikuler/${slug}`}
                            className={`block w-full bg-gradient-to-r ${category.color} text-white text-center py-3 px-4 rounded-lg font-black hover:shadow-xl text-sm sm:text-base group/btn border-2 border-white/30 shadow-lg`}
                          >
                            <span className="flex items-center justify-center gap-2 drop-shadow-md">
                              Lihat Selengkapnya
                              <ArrowRight className="h-4 w-4" />
                            </span>
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
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-8 sm:p-12 text-white hover:shadow-2xl group border-2 border-blue-700/30 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 drop-shadow-lg">
              Siap Bergabung?
            </h3>
            <p className="text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto font-bold">
              Daftarkan diri Anda sekarang dan kembangkan potensi melalui kegiatan ekstrakurikuler yang menarik
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-black hover:bg-gray-50 hover:shadow-xl group/cta border-2 border-white/30 shadow-lg"
            >
              <span className="flex items-center gap-2">
                Hubungi Kami
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
