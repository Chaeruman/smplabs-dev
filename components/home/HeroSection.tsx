"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Award, BookOpen } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-labschool.jpg"
          alt="SMP Labschool Jakarta Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di
            <br />
            <span className="text-yellow-300 drop-shadow-lg">SMP Labschool Jakarta</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-50">
            Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap group"
            >
              <span className="mr-2">Pelajari Lebih Lanjut</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-blue-200">Siswa Aktif</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-blue-200">Prestasi</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">25+</h3>
            <p className="text-blue-200">Program</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
