"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"

const GalleryGrid = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("semua")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  const categories = [
    { id: "semua", label: "Semua", color: "bg-gradient-to-r from-blue-500 to-purple-500" },
    { id: "akademik", label: "Akademik", color: "bg-gradient-to-r from-blue-400 to-blue-500" },
    { id: "olahraga", label: "Olahraga", color: "bg-gradient-to-r from-green-400 to-green-500" },
    { id: "seni", label: "Seni & Budaya", color: "bg-gradient-to-r from-purple-400 to-pink-500" },
    { id: "sains", label: "Sains", color: "bg-gradient-to-r from-orange-400 to-orange-500" },
    { id: "sosial", label: "Sosial", color: "bg-gradient-to-r from-pink-400 to-rose-500" },
    { id: "fasilitas", label: "Fasilitas", color: "bg-gradient-to-r from-indigo-400 to-indigo-500" },
    { id: "wisuda", label: "Wisuda", color: "bg-gradient-to-r from-yellow-400 to-orange-400" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Pembelajaran Interaktif di Kelas",
      description: "Suasana pembelajaran yang aktif dan menyenangkan dengan teknologi modern",
      category: "akademik",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Desember 2024",
      location: "Ruang Kelas 7A",
    },
    {
      id: 2,
      title: "Turnamen Basket Antar Kelas",
      description: "Kompetisi olahraga yang mempererat persahabatan antar siswa",
      category: "olahraga",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Desember 2024",
      location: "Lapangan Basket",
    },
    {
      id: 3,
      title: "Pentas Seni Budaya Nusantara",
      description: "Pertunjukan tari tradisional dalam acara perayaan budaya",
      category: "seni",
      image: "/placeholder.svg?height=400&width=600",
      date: "8 Desember 2024",
      location: "Aula Sekolah",
    },
    {
      id: 4,
      title: "Eksperimen Kimia di Laboratorium",
      description: "Praktikum sains yang mengembangkan kemampuan analitis siswa",
      category: "sains",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 Desember 2024",
      location: "Lab Kimia",
    },
    {
      id: 5,
      title: "Bakti Sosial di Panti Asuhan",
      description: "Kegiatan berbagi kasih dengan anak-anak panti asuhan",
      category: "sosial",
      image: "/placeholder.svg?height=400&width=600",
      date: "3 Desember 2024",
      location: "Panti Asuhan Kasih",
    },
    {
      id: 6,
      title: "Perpustakaan Digital Modern",
      description: "Fasilitas perpustakaan dengan teknologi digital terdepan",
      category: "fasilitas",
      image: "/placeholder.svg?height=400&width=600",
      date: "1 Desember 2024",
      location: "Perpustakaan",
    },
    {
      id: 7,
      title: "Upacara Wisuda Kelas 9",
      description: "Momen kelulusan yang membanggakan untuk siswa kelas 9",
      category: "wisuda",
      image: "/placeholder.svg?height=400&width=600",
      date: "25 November 2024",
      location: "Aula Utama",
    },
    {
      id: 8,
      title: "Olimpiade Matematika",
      description: "Kompetisi akademik tingkat nasional dengan prestasi gemilang",
      category: "akademik",
      image: "/placeholder.svg?height=400&width=600",
      date: "20 November 2024",
      location: "Ruang Ujian",
    },
    {
      id: 9,
      title: "Festival Musik Sekolah",
      description: "Pertunjukan musik dari berbagai genre oleh siswa berbakat",
      category: "seni",
      image: "/placeholder.svg?height=400&width=600",
      date: "18 November 2024",
      location: "Panggung Outdoor",
    },
  ]

  const filteredItems =
    selectedCategory === "semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (item: any, index: number) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredItems[prevIndex])
  }

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Category Filter */}
        <div
          className={`mb-8 lg:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Mobile Category Filter - Horizontal Scroll */}
          <div className="block sm:hidden">
            <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Category Filter - Wrapped */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 lg:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg hover-glow">
                <div className="relative h-48 sm:h-56 lg:h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-xs text-white/80 space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 mb-3">{selectedImage.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-white/80 space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
