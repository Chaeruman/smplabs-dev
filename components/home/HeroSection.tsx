"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Users, Award, BookOpen } from "lucide-react"
import TypewriterText from "@/components/ui/TypewriterText"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/IMG_2427.jpg",
      title: "SMP Labschool Jakarta",
      subtitle: "Labsraw - Sekolah Menengah Pertama Terbaik di Jakarta",
      description:
        "Bagian dari Labschool UNJ yang menghasilkan siswa berprestasi dengan fasilitas modern dan kurikulum berkualitas tinggi",
      cta: "Pelajari Lebih Lanjut",
      link: "/tentang",
    },
    {
      image: "/kegiatan-pm.jpg",
      title: "Prestasi Akademik & Non-Akademik",
      subtitle: "SMP Jakarta Terdepan dengan Segudang Prestasi",
      description: "Siswa SMP Labschool Jakarta meraih berbagai juara di tingkat regional, nasional, dan internasional",
      cta: "Lihat Prestasi",
      link: "/kegiatan",
    },
    {
      image: "/fasilitas-kantin.jpg",
      title: "Fasilitas Modern di Labschool",
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
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Auto-slide timer
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(slideTimer)
    }
  }, [slides.length])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} - SMP Labschool Jakarta`}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight text-high-contrast ${
              isLoaded ? 'fade-in' : 'opacity-0'
            }`}>
              <TypewriterText 
                texts={[
                  "SMP Labschool Jakarta",
                  "Potensi Tanpa Batas",
                  "Iklim Belajar Kondusif",
                  "Pendidikan Iman & Takwa"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </h1>
            <h2 className={`text-xl md:text-2xl font-semibold mb-6 text-high-contrast-sm ${
              isLoaded ? 'fade-in-delay-1' : 'opacity-0'
            }`}>
              {slides[currentSlide].subtitle}
            </h2>
            <p className={`text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-soft ${
              isLoaded ? 'fade-in-delay-2' : 'opacity-0'
            }`}>
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
            isLoaded ? 'fade-in-delay-3' : 'opacity-0'
          }`}>
            <Link
              href={slides[currentSlide].link}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center btn-animate hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              {slides[currentSlide].cta}
            </Link>
            <Link
              href="https://satupemuda.smplabschooljakarta.sch.id/"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Satu Pemuda
            </Link>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto ${
            isLoaded ? 'fade-in-delay-3' : 'opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className={`text-center float ${index === 1 ? 'float-delay-1' : index === 2 ? 'float-delay-2' : ''}`}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1 pulse-glow">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 ${
          isLoaded ? 'fade-in' : 'opacity-0'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 ${
          isLoaded ? 'fade-in' : 'opacity-0'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 ${
        isLoaded ? 'fade-in-delay-3' : 'opacity-0'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? "bg-white shadow-lg" 
                : "bg-white/50 hover:bg-white/70"
            }`}
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
