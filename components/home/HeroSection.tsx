"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Users, Award, BookOpen } from "lucide-react"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/banner-labschool.jpg",
      title: "SMP Labschool Jakarta Rawamangun",
      subtitle: "Labsraw - Sekolah Menengah Pertama Terbaik di Jakarta",
      description:
        "Bagian dari Labschool UNJ yang menghasilkan siswa berprestasi dengan fasilitas modern dan kurikulum berkualitas tinggi",
      cta: "Pelajari Lebih Lanjut",
      link: "/tentang",
    },
    {
      image: "/kegiatan-sekolah.jpg",
      title: "Prestasi Akademik & Non-Akademik",
      subtitle: "SMP Jakarta Terdepan dengan Segudang Prestasi",
      description: "Siswa SMP Labschool Jakarta meraih berbagai juara di tingkat regional, nasional, dan internasional",
      cta: "Lihat Prestasi",
      link: "/kegiatan",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Fasilitas Modern di Rawamangun",
      subtitle: "Lingkungan Belajar Terbaik untuk Masa Depan Cerah",
      description: "Fasilitas lengkap dan modern mendukung proses pembelajaran yang efektif dan menyenangkan",
      cta: "Jelajahi Fasilitas",
      link: "/galeri",
    },
  ]

  const stats = [
    { icon: Users, number: "800+", label: "Siswa Aktif", color: "text-blue-600" },
    { icon: Award, number: "50+", label: "Prestasi Tahun Ini", color: "text-green-600" },
    { icon: BookOpen, number: "25+", label: "Ekstrakurikuler", color: "text-purple-600" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} - SMP Labschool Jakarta Rawamangun`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{slides[currentSlide].title}</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">{slides[currentSlide].subtitle}</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={slides[currentSlide].link}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              {slides[currentSlide].cta}
            </Link>
            <Link
              href="https://satupemuda.smplabschooljakarta.sch.id/"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
            >
              Satu Pemuda
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* SEO Keywords Section (Hidden) */}
      <div className="sr-only">
        <h3>SMP Labschool Jakarta Rawamangun - Labsraw</h3>
        <p>SMP terbaik di Jakarta, SMP Labschool UNJ, Labschool Rawamangun, sekolah menengah pertama Jakarta Timur</p>
      </div>
    </section>
  )
}

export default HeroSection
