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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const allActivities = [
    {
      id: 1,
      title: "Olimpiade Sains Nasional",
      description:
        "Kompetisi bergengsi tingkat nasional dalam bidang matematika, fisika, dan biologi. Siswa terbaik mewakili sekolah untuk meraih prestasi gemilang.",
      date: "15 Desember 2024",
      time: "08:00 - 16:00",
      location: "Aula Utama & Lab Sains",
      participants: "30 Siswa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Akademik",
      status: "completed",
      featured: true,
      views: 245,
    },
    {
      id: 2,
      title: "Festival Seni & Budaya",
      description:
        "Perayaan keberagaman budaya Indonesia melalui tarian, musik, dan pameran karya seni siswa. Menampilkan kreativitas dan apresiasi budaya.",
      date: "10 Desember 2024",
      time: "14:00 - 18:00",
      location: "Panggung Outdoor",
      participants: "150 Siswa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Seni",
      status: "completed",
      featured: true,
      views: 189,
    },
    {
      id: 3,
      title: "Bakti Sosial Ramadan",
      description:
        "Kegiatan berbagi dengan masyarakat kurang mampu. Siswa belajar nilai-nilai empati dan kepedulian sosial melalui aksi nyata.",
      date: "5 Desember 2024",
      time: "09:00 - 15:00",
      location: "Panti Asuhan & Panti Jompo",
      participants: "80 Siswa",
      image: "/placeholder.svg?height=300&width=400",
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
    // Additional 25 activities (not featured)
    ...Array.from({ length: 25 }, (_, index) => ({
      id: index + 6,
      title: `Kegiatan ${index + 6}`,
      description: "Deskripsi singkat kegiatan sekolah lainnya yang telah dilaksanakan dengan baik.",
      date: `${Math.floor(Math.random() * 30) + 1} November 2024`,
      time: "08:00 - 15:00",
      location: "Sekolah",
      participants: `${Math.floor(Math.random() * 100) + 20} Siswa`,
      image: "/placeholder.svg?height=200&width=300",
      category: ["Akademik", "Seni", "Olahraga", "Sosial", "Sains"][Math.floor(Math.random() * 5)],
      status: "completed",
      featured: false,
      views: Math.floor(Math.random() * 200) + 50,
    })),
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

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Kegiatan Unggulan Sekolah</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 mb-6">
            Menampilkan 5 kegiatan terpilih dari 30+ kegiatan yang telah dilaksanakan dengan antusias tinggi
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">30+</div>
              <div className="text-xs sm:text-sm text-gray-500">Total Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Siswa Terlibat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">15</div>
              <div className="text-xs sm:text-sm text-gray-500">Kategori</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Main Featured Activity */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="card-soft-blue rounded-2xl overflow-hidden shadow-xl hover-glow group">
              <div className="relative">
                <Image
                  src={featuredActivities[0]?.image || "/placeholder.svg"}
                  alt={featuredActivities[0]?.title || ""}
                  width={800}
                  height={400}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`${getCategoryColor(featuredActivities[0]?.category || "")} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {featuredActivities[0]?.category}
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {featuredActivities[0]?.views}
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{featuredActivities[0]?.title}</h3>
                  <p className="text-sm sm:text-base opacity-90 mb-4 line-clamp-2">
                    {featuredActivities[0]?.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredActivities[0]?.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {featuredActivities[0]?.participants}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Featured Activities */}
          {featuredActivities.slice(1).map((activity, index) => (
            <div
              key={activity.id}
              className={`transition-all duration-1000 ${visibleItems.includes(index + 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div
                className={`${getCardColor(index + 1)} rounded-xl overflow-hidden shadow-lg hover-glow group h-full`}
              >
                <div className="relative">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={400}
                    height={250}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${getCategoryColor(activity.category)} text-white px-2 py-1 rounded-full text-xs font-medium`}
                    >
                      {activity.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center text-white/80 text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    {activity.views}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{activity.description}</p>

                  <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-500 flex-shrink-0" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-500 flex-shrink-0" />
                      <span className="truncate">{activity.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-500 flex-shrink-0" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg group">
                    Lihat Detail
                    <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Activities Button */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="card-soft-indigo rounded-2xl p-6 sm:p-8 shadow-lg hover-glow">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Ingin Melihat Semua Kegiatan?</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Jelajahi 30+ kegiatan menarik lainnya yang telah dilaksanakan sepanjang tahun akademik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
                Lihat Semua Kegiatan
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-200 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Download Kalender Kegiatan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesShowcase
