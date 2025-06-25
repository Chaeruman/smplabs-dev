"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const ActivitiesTimeline = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items one by one
          activities.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 300)
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

  const activities = [
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
    },
    {
      id: 6,
      title: "English Speech Contest",
      description:
        "Kompetisi pidato bahasa Inggris untuk meningkatkan kemampuan public speaking dan kepercayaan diri siswa.",
      date: "20 November 2024",
      time: "13:00 - 17:00",
      location: "Auditorium",
      participants: "25 Siswa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Bahasa",
      status: "completed",
    },
  ]

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
    const colors = [
      "card-soft-blue",
      "card-soft-purple",
      "card-soft-green",
      "card-soft-orange",
      "card-soft-pink",
      "card-soft-indigo",
    ]
    return colors[index % colors.length]
  }

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Timeline Kegiatan Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi lengkap berbagai kegiatan yang telah dilaksanakan dengan antusias tinggi
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden lg:block"></div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`relative transition-all duration-1000 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className={`${getCardColor(index)} rounded-2xl p-6 shadow-lg hover-glow`}>
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`${getCategoryColor(activity.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {activity.category}
                        </span>
                        <span className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                          {activity.status === "completed" ? "Selesai" : "Mendatang"}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-blue-900 mb-3">{activity.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{activity.description}</p>

                      {/* Activity Details */}
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                          {activity.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-green-500" />
                          {activity.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                          {activity.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-purple-500" />
                          {activity.participants}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center my-6 lg:my-0 relative z-10 border-4 border-blue-100">
                    <div className={`w-8 h-8 rounded-full ${getCategoryColor(activity.category)}`}></div>
                  </div>

                  {/* Image */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover-glow">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesTimeline
