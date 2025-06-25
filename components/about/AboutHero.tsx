"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang SMP Labschool Jakarta</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sekolah menengah pertama yang berkomitmen menciptakan lingkungan pendidikan yang positif, bersemangat, dan
              menginspirasi untuk membentuk generasi pembelajar sepanjang hayat.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="text-2xl font-bold text-yellow-300">15+</h3>
                <p className="text-blue-100">Tahun Pengalaman</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="text-2xl font-bold text-yellow-300">95%</h3>
                <p className="text-blue-100">Tingkat Kelulusan</p>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SMP Labschool Jakarta Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Akreditasi A</h4>
                <p className="text-gray-600 text-sm">Terakreditasi Unggul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
