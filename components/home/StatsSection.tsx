"use client"

import { useEffect, useRef, useState } from "react"
import { Users, GraduationCap, Award, BookOpen } from "lucide-react"
import { useHomepageData } from "@/hooks/useHomepageData"

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ students: 0, teachers: 0, achievements: 0, programs: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const { data, loading, error } = useHomepageData()

  // Use API data or fallback values
  const finalCounts = {
    students: data?.siswa || 444,
    teachers: data?.guru || 52,
    achievements: data?.prestasi || 600,
    programs: Number.parseInt(data?.program || "30"),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [loading])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        students: Math.floor(finalCounts.students * progress),
        teachers: Math.floor(finalCounts.teachers * progress),
        achievements: Math.floor(finalCounts.achievements * progress),
        programs: Math.floor(finalCounts.programs * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)
  }

  const stats = [
    {
      icon: Users,
      count: counts.students,
      label: "Siswa Aktif",
      suffix: "+",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      icon: GraduationCap,
      count: counts.teachers,
      label: "Tenaga Pendidik",
      suffix: "+",
      color: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
      icon: Award,
      count: counts.achievements,
      label: "Prestasi",
      suffix: "+",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      icon: BookOpen,
      count: counts.programs,
      label: "Program",
      suffix: "+",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
  ]

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="h-8 bg-white/20 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-8 bg-white/20 rounded w-16 mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-20 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="container-custom text-center">
          <div className="text-white">
            <p className="text-lg mb-4">Gagal memuat data statistik</p>
            <p className="text-blue-200 text-sm">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prestasi & Pencapaian</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Angka-angka yang menunjukkan komitmen kami dalam memberikan pendidikan terbaik
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} rounded-full mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.count}
                {stat.suffix}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
