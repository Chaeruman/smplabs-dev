"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock, ArrowRight, Eye, Filter } from "lucide-react"

const ActivitiesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items one by one
          featuredActivities.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 }, // Reduced threshold for better mobile detection
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const allActivities = [
    {
      id: 1,
      title: "SAKSI",
      description:
        "Studi dan Apresiasi Kepemimpinan Siswa Indonesia, sebuah program yang diadakan oleh SMP Labschool Jakarta. Program ini bertujuan untuk membentuk karakter kepemimpinan siswa melalui berbagai kegiatan seperti studi lapangan, pelatihan, dan apresiasi. SAKSI juga menjadi wadah bagi siswa untuk mengembangkan keterampilan, kemandirian, dan kedisiplinan.",
      date: "15 November 2024",
      time: "07:00 - 17:00",
      location: "Dataseman Pemeliharaan Daerah Latihan (Denharrahlat) Kostrad, Sanggabuana, Karawang",
      participants: "200+ Siswa",
      image: "https://storage.googleapis.com/static-assets-mywebsite/website/IMG_2737.JPG",
      category: "Akademik",
      status: "completed",
      featured: true,
      views: 245,
    },
    {
      id: 2,
      title: "Festival Teater Anak",
      description:
        "Perayaan keberagaman budaya Indonesia melalui tarian, musik, dan pameran karya seni siswa. Menampilkan kreativitas dan apresiasi budaya.",
      date: "10 Desember 2024",
      time: "14:00 - 18:00",
      location: "Panggung Outdoor",
      participants: "150 Siswa",
      image: "https://storage.googleapis.com/static-assets-mywebsite/website/IMG_8474.JPG",
      category: "Seni",
      status: "completed",
      featured: true,
      views: 189,
    },
    {
      id: 3,
      title: "Career Day & AMT",
      description:
        "Career Day dan Achievement Motivation Training (AMT) adalah dua kegiatan yang sering diadakan bersamaan untuk memberikan informasi dan motivasi kepada siswa tentang pilihan karir dan pengembangan diri. Career Day berfokus pada pengenalan berbagai bidang pekerjaan dan perusahaan, sementara AMT bertujuan untuk meningkatkan motivasi dan kepercayaan diri siswa dalam mencapai tujuan mereka.",
      date: "5 Desember 2024",
      time: "09:00 - 15:00",
      location: "SMP Labschool Jakarta",
      participants: "80 Siswa",
      image: "https://storage.googleapis.com/static-assets-mywebsite/website/IMG_9795.JPG",
      category: "Sosial",
      status: "completed",
      featured: true,
      views: 167,
    },
    {
      id: 4,
      title: "Turnamen Olahraga Antar Kelas",
      description:
        "Kompetisi olahraga yang mempererat persahabatan antar kelas. Meliputi basket, futsal, voli, dan badminton.",
      date: "1 Desember 2024",
      time: "07:00 - 17:00",
      location: "Lapangan Olahraga",
      participants: "200 Siswa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Olahraga",
      status: "completed",
      featured: true,
      views: 298,
    },
    {
      id: 5,
      title: "Science Fair 2024",
      description:
        "Pameran karya ilmiah siswa dengan berbagai inovasi dan eksperimen menarik. Mengembangkan jiwa peneliti muda.",
      date: "25 November 2024",
      time: "08:00 - 16:00",
      location: "Hall Pameran",
      participants: "100 Siswa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sains",
      status: "completed",
      featured: true,
      views: 156,
    },
  ]

  const featuredActivities = allActivities.filter((activity) => activity.featured)
  const categories = ["Semua", "Akademik", "Seni", "Olahraga", "Sosial", "Sains"]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Akademik: "bg-gradient-to-r from-blue-400 to-blue-500",
      Seni: "bg-gradient-to-r from-purple-400 to-pink-500",
      Sosial: "bg-gradient-to-r from-green-400 to-green-500",
      Olahraga: "bg-gradient-to-r from-orange-400 to-orange-500",
      Sains: "bg-gradient-to-r from-indigo-400 to-indigo-500",
      Bahasa: "bg-gradient-to-r from-rose-400 to-rose-500",
    }
    return colors[category] || "bg-gradient-to-r from-gray-400 to-gray-500"
  }

  const getCardColor = (index: number) => {
    const colors = ["card-soft-blue", "card-soft-purple", "card-soft-green", "card-soft-orange", "card-soft-pink"]
    return colors[index % colors.length]
  }

  const filteredActivities =
    selectedCategory === "Semua"
      ? featuredActivities
      : featuredActivities.filter((activity) => activity.category === selectedCategory)

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 px-2">
            Kegiatan Unggulan Sekolah
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2 mb-4 sm:mb-6">
            Menampilkan 5 kegiatan terpilih dari 30+ kegiatan yang telah dilaksanakan dengan antusias tinggi
          </p>

          {/* Statistics - Mobile Responsive */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">30+</div>
              <div className="text-xs sm:text-sm text-gray-500">Total Kegiatan</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Siswa Terlibat</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">15</div>
              <div className="text-xs sm:text-sm text-gray-500">Kategori</div>
            </div>
          </div>

          {/* Category Filter - Mobile Horizontal Scroll */}
          <div className="mb-6 sm:mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 scrollbar-hide sm:justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200 shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Activities Grid - Mobile First */}
        <div className="space-y-6 sm:space-y-8">
          {/* Main Featured Activity - Mobile Optimized */}
          {filteredActivities.length > 0 && (
            <div
              className={`transition-all duration-1000 ${
                visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="relative h-48 sm:h-64 lg:h-80">
                    <Image
                      src={filteredActivities[0]?.image || "/placeholder.svg?height=400&width=800"}
                      alt={filteredActivities[0]?.title || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Mobile Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                    <span
                      className={`${getCategoryColor(filteredActivities[0]?.category || "")} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {filteredActivities[0]?.category}
                    </span>
                    <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      Featured
                    </span>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center text-white/90 text-xs sm:text-sm bg-black/30 rounded-full px-2 py-1">
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {filteredActivities[0]?.views}
                  </div>

                  {/* Content Overlay - Mobile Optimized */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 line-clamp-2">
                      {filteredActivities[0]?.title}
                    </h3>
                    <p className="text-sm sm:text-base opacity-90 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {filteredActivities[0]?.description}
                    </p>

                    {/* Info Grid - Mobile Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{filteredActivities[0]?.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{filteredActivities[0]?.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Featured Activities - Mobile Grid */}
          {filteredActivities.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              {filteredActivities.slice(1).map((activity, index) => (
                <div
                  key={activity.id}
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index + 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="relative">
                      <div className="relative h-40 sm:h-48">
                        <Image
                          src={activity.image || "/placeholder.svg?height=250&width=400"}
                          alt={activity.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Mobile Badges */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span
                          className={`${getCategoryColor(activity.category)} text-white px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          {activity.category}
                        </span>
                      </div>

                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center text-white/90 text-xs bg-black/30 rounded-full px-2 py-1">
                        <Eye className="h-3 w-3 mr-1" />
                        {activity.views}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-3">{activity.description}</p>

                      {/* Info List - Mobile Optimized */}
                      <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-500 flex-shrink-0" />
                          <span className="truncate">{activity.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="truncate">{activity.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500 flex-shrink-0" />
                          <span className="truncate">{activity.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-500 flex-shrink-0" />
                          <span className="truncate">{activity.participants}</span>
                        </div>
                      </div>

                      {/* Mobile Button */}
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg group">
                        Lihat Detail
                        <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div
          className={`mt-8 sm:mt-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Ingin Melihat Semua Kegiatan?</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Jelajahi 30+ kegiatan menarik lainnya yang telah dilaksanakan sepanjang tahun akademik
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                <Filter className="h-4 w-4 mr-2" />
                Lihat Semua Kegiatan
              </button>
              <button className="flex-1 bg-white text-blue-600 border-2 border-blue-200 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Download Kalender
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesShowcase
