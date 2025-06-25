"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Award, Users, Building } from "lucide-react"

const History = () => {
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

  const timeline = [
    {
      year: "2009",
      title: "Pendirian Sekolah",
      description: "SMP Labschool Jakarta didirikan dengan visi menciptakan pendidikan berkualitas.",
      icon: Building,
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      year: "2012",
      title: "Akreditasi A",
      description: "Meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah.",
      icon: Award,
      color: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
      year: "2015",
      title: "Ekspansi Program",
      description: "Meluncurkan berbagai program unggulan dan ekstrakurikuler.",
      icon: Users,
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
    },
    {
      year: "2020",
      title: "Transformasi Digital",
      description: "Mengimplementasikan sistem pembelajaran digital dan teknologi modern.",
      icon: Calendar,
      color: "bg-gradient-to-br from-orange-400 to-orange-500",
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sejarah & Perkembangan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan SMP Labschool Jakarta dalam memberikan pendidikan berkualitas
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                  >
                    <div
                      className={`${
                        index === 0
                          ? "card-soft-blue"
                          : index === 1
                            ? "card-soft-green"
                            : index === 2
                              ? "card-soft-purple"
                              : "card-soft-orange"
                      } rounded-2xl p-6 shadow-lg hover-glow`}
                    >
                      <div className="text-2xl font-bold text-blue-900 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center my-4 md:my-0 relative z-10">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default History
