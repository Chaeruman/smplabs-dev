"use client"
import { useState } from "react"
import { Music, Trophy, BookOpen, Camera } from "lucide-react"
import { useExtracurricularData } from "@/hooks/useExtracurricularData"
import Link from "next/link"
import Image from "next/image"

const ExtracurricularCategories = () => {
  const { data: categories, loading, error } = useExtracurricularData()
  const [activeCategory, setActiveCategory] = useState(0)

  // Icon mapping
  const iconMap = {
    Music: Music,
    Trophy: Trophy,
    BookOpen: BookOpen,
    Camera: Camera,
  }

  // Generate slug from activity name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
  }

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-48 sm:w-64 mx-auto mb-3 sm:mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-64 sm:w-96 mx-auto animate-pulse"></div>
          </div>

          {/* Mobile Category Tabs Loading */}
          <div className="flex overflow-x-auto gap-2 sm:gap-4 mb-8 sm:mb-12 pb-2 scrollbar-hide sm:justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 h-10 sm:h-12 bg-gray-200 rounded-full w-24 sm:w-32 animate-pulse"
              ></div>
            ))}
          </div>

          {/* Loading Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="h-32 sm:h-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                <div className="h-5 sm:h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!categories || categories.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Kategori Ekstrakurikuler</h2>
            <p className="text-lg sm:text-xl text-gray-600">Data ekstrakurikuler tidak tersedia saat ini.</p>
            {error && (
              <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                <p>Error: {error}</p>
                <p className="text-sm mt-2">Menampilkan data fallback...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Kategori Ekstrakurikuler
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Pilih kategori yang sesuai dengan minat dan bakat Anda
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {error && (
          <div className="mb-6 sm:mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center text-sm sm:text-base">
            <p>Menggunakan data fallback karena: {error}</p>
          </div>
        )}

        {/* Category Tabs - Mobile Optimized */}
        <div className="relative mb-8 sm:mb-12">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-2 scrollbar-hide sm:justify-center">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BookOpen
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                  }`}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Category Content */}
        <div
          className={`bg-gradient-to-br ${categories[activeCategory].bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8`}
        >
          {/* Category Title - Mobile */}
          <div className="text-center mb-6 sm:hidden">
            <h3 className="text-xl font-bold text-gray-800">{categories[activeCategory].title}</h3>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories[activeCategory].activities.map((activity, index) => {
              const IconComponent = iconMap[categories[activeCategory].icon as keyof typeof iconMap] || BookOpen
              const slug = generateSlug(activity.name)
              const defaultImage = "/placeholder.svg?height=200&width=300"

              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={defaultImage || "/placeholder.svg"}
                      alt={activity.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div
                      className={`absolute top-2 sm:top-4 left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${categories[activeCategory].color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-tight">
                      {activity.name}
                    </h3>
                    <div className="text-gray-600 text-sm sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {activity.description.split("\r\n")[0].trim()}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 truncate max-w-[60%]">{activity.participants}</span>
                      <Link
                        href={`/ekstrakurikuler/${slug}`}
                        className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                      >
                        Lihat Selengkapnya →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Hint for Mobile */}
        <div className="text-center mt-6 sm:hidden">
          <p className="text-sm text-gray-500">Geser kategori di atas untuk melihat lebih banyak</p>
        </div>

        {/* Debug Info - Development Only */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm">
            <h4 className="font-bold mb-2">Debug Info:</h4>
            <p>Loading: {loading.toString()}</p>
            <p>Error: {error || "None"}</p>
            <p>Categories Count: {categories?.length || 0}</p>
            <p>Active Category: {activeCategory}</p>
            <div className="mt-2">
              <p className="font-medium">Available slugs:</p>
              {categories.map((category, catIndex) =>
                category.activities.map((activity, actIndex) => (
                  <p key={`${catIndex}-${actIndex}`} className="text-xs">
                    - {generateSlug(activity.name)} ({activity.name})
                  </p>
                )),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ExtracurricularCategories
