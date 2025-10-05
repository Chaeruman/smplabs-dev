"use client"

import { useState, useEffect } from "react"
import type { HomepageData } from "@/types/homepage"

export function useHomepageData() {
  const [data, setData] = useState<HomepageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log("Starting to fetch homepage data...")

        const response = await fetch("/api/homepage", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        })

        console.log("Response status:", response.status)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const homepageData = await response.json()
        console.log("Received homepage data:", homepageData)
        setData(homepageData)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to load data"
        setError(errorMessage)
        console.error("Error in useHomepageData:", err)

        // Set fallback data even on error
        const fallbackData = {
          siswa: 444,
          prestasi: 600,
          program: "30",
          guru: 52,
          news: [
            {
              id: 1,
              title: "Prestasi Gemilang di Olimpiade Matematika Nasional",
              excerpt: "Siswa SMP Labschool Jakarta meraih medali emas dalam kompetisi matematika tingkat nasional.",
              date: "15 Desember 2024",
              image: "/placeholder.svg?height=200&width=300",
              category: "Prestasi",
            },
            {
              id: 2,
              title: "Program Literasi Digital untuk Siswa",
              excerpt: "Meluncurkan program baru untuk meningkatkan kemampuan literasi digital siswa.",
              date: "10 Desember 2024",
              image: "/placeholder.svg?height=200&width=300",
              category: "Program",
            },
            {
              id: 3,
              title: "Kegiatan Bakti Sosial di Panti Asuhan",
              excerpt: "Siswa dan guru berpartisipasi dalam kegiatan bakti sosial untuk membantu sesama.",
              date: "5 Desember 2024",
              image: "/placeholder.svg?height=200&width=300",
              category: "Kegiatan",
            },
          ],
        }
        console.log("Setting fallback data:", fallbackData)
        setData(fallbackData)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const refetch = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/homepage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const homepageData = await response.json()
      setData(homepageData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data")
      console.error("Error loading homepage data:", err)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, refetch }
}
