"use client"

import React from "react"
import { useState } from "react"
import { Music, Trophy, BookOpen, Camera } from "lucide-react"

const ExtracurricularCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      icon: Music,
      title: "Seni & Musik",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      activities: [
        { name: "Paduan Suara", description: "Mengembangkan kemampuan vokal dan harmoni", participants: "45 siswa" },
        {
          name: "Band Sekolah",
          description: "Bermain musik modern dengan berbagai alat musik",
          participants: "20 siswa",
        },
        {
          name: "Tari Tradisional",
          description: "Melestarikan budaya Indonesia melalui tarian",
          participants: "30 siswa",
        },
        {
          name: "Drama & Teater",
          description: "Mengasah kemampuan akting dan public speaking",
          participants: "25 siswa",
        },
      ],
    },
    {
      icon: Trophy,
      title: "Olahraga",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      activities: [
        { name: "Basket", description: "Tim basket sekolah dengan prestasi tingkat kota", participants: "35 siswa" },
        { name: "Futsal", description: "Olahraga tim yang mengasah kerjasama", participants: "40 siswa" },
        { name: "Badminton", description: "Olahraga individual dengan teknik tinggi", participants: "50 siswa" },
        { name: "Voli", description: "Tim voli putri dan putra sekolah", participants: "30 siswa" },
      ],
    },
    {
      icon: BookOpen,
      title: "Akademik",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      activities: [
        {
          name: "Olimpiade Matematika",
          description: "Persiapan kompetisi matematika tingkat nasional",
          participants: "25 siswa",
        },
        { name: "English Club", description: "Meningkatkan kemampuan bahasa Inggris", participants: "60 siswa" },
        { name: "Jurnalistik", description: "Menulis artikel dan mengelola media sekolah", participants: "20 siswa" },
        {
          name: "Debat",
          description: "Mengasah kemampuan berargumentasi dan public speaking",
          participants: "18 siswa",
        },
      ],
    },
    {
      icon: Camera,
      title: "Teknologi & Media",
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      activities: [
        { name: "Fotografi", description: "Belajar teknik fotografi dan editing", participants: "35 siswa" },
        { name: "Videografi", description: "Membuat video dokumenter dan kreatif", participants: "25 siswa" },
        { name: "Robotika", description: "Membangun dan memprogram robot", participants: "30 siswa" },
        { name: "Web Design", description: "Membuat website dan aplikasi sederhana", participants: "20 siswa" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kategori Ekstrakurikuler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih kategori yang sesuai dengan minat dan bakat Anda
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className={`bg-gradient-to-br ${categories[activeCategory].bgColor} rounded-2xl p-8`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories[activeCategory].activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${categories[activeCategory].color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {React.createElement(categories[activeCategory].icon, {
                    className: "h-6 w-6 text-white",
                  })}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.name}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{activity.participants}</span>
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Daftar →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularCategories
