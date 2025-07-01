"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Award, BookOpen } from "lucide-react"
import { useHomepageData } from "@/hooks/useHomepageData"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { data, loading } = useHomepageData()

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
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Selamat Datang di
            <br />
            <span className="text-yellow-300 drop-shadow-lg">SMP Labschool Jakarta</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-50 px-2 sm:px-0">
            Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap group w-full sm:w-auto"
            >
              <span className="mr-2">Pelajari Lebih Lanjut</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
            <Link
              href="https://satupemuda.smplabschooljakarta.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto"
            >
              SATUPEMUDA
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-500 px-2 sm:px-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-white/30">
              <Users className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {loading ? (
                <div className="h-6 bg-white/20 rounded w-12 mx-auto animate-pulse"></div>
              ) : (
                `${data?.siswa || 900}+`
              )}
            </h3>
            <p className="text-sm sm:text-base text-blue-200">Siswa Aktif</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-white/30">
              <Award className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {loading ? (
                <div className="h-6 bg-white/20 rounded w-12 mx-auto animate-pulse"></div>
              ) : (
                `${data?.prestasi || 600}+`
              )}
            </h3>
            <p className="text-sm sm:text-base text-blue-200">Prestasi</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-white/30">
              <BookOpen className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {loading ? (
                <div className="h-6 bg-white/20 rounded w-12 mx-auto animate-pulse"></div>
              ) : (
                `${data?.program || "30"}+`
              )}
            </h3>
            <p className="text-sm sm:text-base text-blue-200">Program</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
