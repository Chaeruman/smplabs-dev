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
      { threshold: 0.1 }, // Reduced threshold for better mobile detection
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
      title: "Asesmen Tengah Semester (ATS)",
      description: "Pelaksanaan ATS SMP Labscool Jakarta",
      category: "akademik",
      image: "https://drive.google.com/uc?export=view&id=1PVSJCBPP4UcgtS17iK3ZDfSqkXX_RMgo",
      date: "26 September 2025",
      location: "Ruang Ujian",
    },
    {
      id: 2,
      title: "Labswicara",
      description: "Presentasi Hasil Penelitian Pada Karya Tulis Ilmiah",
      category: "Akademik",
      image: "https://drive.google.com/uc?export=view&id=1Un_Y7ouxiRQgtHU-GorB3xFOoBV0-Cre",
      date: "22 Agustus 2025",
      location: "Auditorium",
    },
    {
      id: 3,
      title: "Lari Lintas Juang 2025",
      description: "Pelaksanaan Lalinju 2025 untuk memeriahkan peringatan 17 Agustus",
      category: "olahraga",
      image: "https://drive.google.com/uc?export=view&id=1vUqN8-6tXqrMPeTs9JKuocALxzUMdj-4",
      date: "17 Agustus 2025",
      location: "Aula Sekolah",
    },
    {
      id: 4,
      title: "Prestasi Lomba Basket Floravika",
      description: "Peraihan Juara 2 Kategori Basket Floravika",
      category: "olahraga",
      image: "https://drive.google.com/uc?export=view&id=1AI_a4XqMpHG5r3TWzJWFH--s9sHfDoIW",
      date: "5 September 2025",
      location: "olahraga",
    },
    {
      id: 5,
      title: "Adiwiyata",
      description: "Membuat pot bunga berasal dari botol bekas",
      category: "sosial",
      image: "https://drive.google.com/uc?export=view&id=1mVlt0KzxeVotQBk8Ou7qAKieYjsXEtuj",
      date: "28 Agustus 2025",
      location: "SMP LABSCHOOL JAKARTA",
    },
    {
      id: 6,
      title: "Peresmian Meja Piket",
      description: "Fasilitas Meja Piket baru",
      category: "fasilitas",
      image: "https://drive.google.com/uc?export=view&id=1_ZDGQmxXxYIl16ZEO65bJdk3FmFkfMvS",
      date: "28 Agustus 2025",
      location: "Meja Piket",
    },
    {
      id: 7,
      title: "AYIMUN 18 - MALAYSIA 2025",
      description: "Asian Youth International Model United Nations ke - 18",
      category: "akademik",
      image: "https://drive.google.com/uc?export=view&id=1nkVPWoGllYlGjlQ3WQH0Clk1wU_B1wAa",
      date: "31 Agustus 2025",
      location: "Malaysia",
    },
    {
      id: 8,
      title: "Kantin Sehat",
      description: "Kantin Sehat Menyediakan Makanan Bergizi dan Berkualitas Tinggi",
      category: "fasilitas",
      image: "/fasilitas-kantin.jpg",
      date: "28 Februari 2025",
      location: "Kantin",
    },
    {
      id: 9,
      title: "Wisuda",
      description: "Pelepasan Tahun Ajaran 2024/2025 ",
      category: "wisuda",
      image: "/wisuda.jpg",
      date: "18 Juli 2025",
      location: "Balai Sudirman",
    },
  ]

  const filteredItems =
    selectedCategory === "semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (item: any, index: number) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    // Restore body scroll
    document.body.style.overflow = "unset"
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage, currentImageIndex])

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter - Mobile Optimized */}
        <div
          className={`mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Mobile Category Filter - Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-3 gap-2 sm:gap-3 scrollbar-hide sm:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative h-48 sm:h-56 lg:h-64">
                  <Image
                    src={item.image || "https://drive.google.com/uc?export=view&id=1PVSJCBPP4UcgtS17iK3ZDfSqkXX_RMgo"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Overlay - Mobile Optimized */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 line-clamp-2">{item.description}</p>

                  {/* Info - Mobile Stack */}
                  <div className="space-y-1 sm:space-y-0 sm:flex sm:items-center text-xs text-white/80 sm:space-x-4">
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

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada foto untuk kategori ini.</p>
          </div>
        )}

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
            <div className="relative w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:w-auto sm:h-auto p-4 sm:p-0">
              {/* Close Button - Mobile Friendly */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:-top-12 sm:right-0 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 sm:bg-transparent rounded-full p-2 sm:p-0"
              >
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              {/* Navigation Buttons - Mobile Friendly */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
                  >
                    <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
                  >
                    <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                  </button>
                </>
              )}

              {/* Image Container - Mobile Responsive */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={selectedImage.image || "/placeholder.svg?height=600&width=800"}
                    alt={selectedImage.title}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[60vh] sm:max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />

                  {/* Image Info - Mobile Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 rounded-b-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 mb-3 line-clamp-3">{selectedImage.description}</p>

                    {/* Info Grid - Mobile Stack */}
                    <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center text-xs sm:text-sm text-white/80 sm:space-x-6">
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

              {/* Image Counter - Mobile */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 rounded-full px-3 py-1">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
