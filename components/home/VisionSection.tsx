import type React from "react"
import { ChevronRight } from "react-feather"
import Link from "next/link"

const VisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Visi Kami</h2>
        <p className="text-lg text-gray-600 mb-8">
          Menciptakan lingkungan pendidikan yang positif, bersemangat, serta menginspirasi yang menghargai dan mendorong peserta didik menjadi pembelajar sepanjang hayat.
        </p>
        <Link
          href="/tentang"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Pelajari Lebih Lanjut</span>
          <ChevronRight className="ml-2 h-5 w-5 flex-shrink-0" />
        </Link>
      </div>
    </section>
  )
}

export default VisionSection
