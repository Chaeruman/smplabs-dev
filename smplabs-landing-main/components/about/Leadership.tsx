"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const leaders = [
    {
      name: "Dr. Yati Suwartini, M.Pd",
      position: "Kepala Sekolah",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Memimpin dengan visi pendidikan yang inovatif dan berpengalaman lebih dari 20 tahun dalam dunia pendidikan.",
      email: "kepala@smplabschool.sch.id",
      phone: "(021) 1234-5678",
    },
    {
      name: "Pandu Novialdi, M.Pd",
      position: "Wakil Kepala Bidang Akademik",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Mengkoordinasikan program akademik dan pengembangan kurikulum untuk mencapai standar pendidikan terbaik.",
      email: "akademik@smplabschool.sch.id",
      phone: "(021) 1234-5679",
    },
    {
      name: "Trezadigjaya, S.Pd., M.Si",
      position: "Wakil Kepala Bidang Kesiswaan",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Membina dan mengembangkan potensi siswa melalui berbagai kegiatan kesiswaan dan pengembangan karakter.",
      email: "kesiswaan@smplabschool.sch.id",
      phone: "(021) 1234-5680",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tim Kepemimpinan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Para pemimpin berpengalaman yang berkomitmen untuk kemajuan pendidikan dan pengembangan siswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "card-soft-blue" : index === 1 ? "card-soft-pink" : "card-soft-green"
              } rounded-2xl shadow-lg overflow-hidden hover-glow transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{leader.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${leader.email}`} className="hover:text-purple-600 transition-colors">
                      {leader.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${leader.phone}`} className="hover:text-blue-600 transition-colors">
                      {leader.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
