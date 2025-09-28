"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Award, Users, Building, Sparkles, Star } from "lucide-react"

const History = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null)
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
      year: "1968",
      title: "Pendirian Sekolah",
      description: "Bermula dari sekolah Teladan yang didirikan pada tanggal 12 Februari 1968 yang dimaksudkan sebagai sekolah laboratorium IKIP Jakarta. Sekolah ini digunakan untuk praktik mengajar, penelitian pendidikan dan inovasi pendidikan.",
      icon: Building,
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      year: "2014",
      title: "Akreditasi A",
      description: "Meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah.",
      icon: Award,
      color: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
      year: "2016",
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
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Sejarah & Perkembangan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Perjalanan SMP Labschool Jakarta dalam memberikan pendidikan berkualitas
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="block lg:hidden space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                    hoveredItem === index ? 'animate-pulse-glow' : ''
                  }`}>
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === index ? 'scale-110' : ''
                    }`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`${
                      index === 0
                        ? "card-soft-blue"
                        : index === 1
                          ? "card-soft-green"
                          : index === 2
                            ? "card-soft-purple"
                            : "card-soft-orange"
                    } rounded-xl p-4 sm:p-6 shadow-lg hover-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                      hoveredItem === index ? 'shadow-2xl shadow-blue-200/50' : ''
                    }`}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 gradient-text">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                    
                    {/* Decorative elements */}
                    {hoveredItem === index && (
                      <div className="absolute -top-2 -right-2 animate-bounce">
                        {index % 2 === 0 ? (
                          <Sparkles className="h-4 w-4 text-yellow-400" />
                        ) : (
                          <Star className="h-4 w-4 text-yellow-400" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200">
            <div 
              className={`w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-2000 ${
                isVisible ? 'h-full' : 'h-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            ></div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}
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
                      } rounded-2xl p-6 shadow-lg hover-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                        hoveredItem === index ? 'shadow-2xl shadow-blue-200/50' : ''
                      }`}
                    >
                      <div className="text-2xl font-bold text-blue-900 mb-2 gradient-text">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      
                      {/* Decorative elements */}
                      {hoveredItem === index && (
                        <div className="absolute -top-2 -right-2 animate-bounce">
                          {index % 2 === 0 ? (
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                          ) : (
                            <Star className="h-4 w-4 text-yellow-400" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive Icon */}
                  <div 
                    className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center my-4 lg:my-0 relative z-10 transition-all duration-500 hover:scale-110 ${
                      hoveredItem === index ? 'animate-pulse-glow' : ''
                    }`}
                    onClick={() => setActiveTimeline(activeTimeline === index ? null : index)}
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === index ? 'scale-110' : ''
                    }`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Pulse ring animation */}
                    {activeTimeline === index && (
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"></div>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
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
