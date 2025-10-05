"use client"

import { useState, useEffect } from "react"
import type { ExtracurricularCategory } from "@/types/extracurricular"

interface UseExtracurricularDataReturn {
  data: ExtracurricularCategory[]
  loading: boolean
  error: string | null
}

export function useExtracurricularData(): UseExtracurricularDataReturn {
  const [data, setData] = useState<ExtracurricularCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch("/api/extracurricular")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (!Array.isArray(result)) {
          throw new Error("Invalid data format received from API")
        }

        setData(result)
      } catch (err) {
        console.error("Error fetching extracurricular data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")

        // Set fallback data on error
        setData([
          {
            title: "Teknologi & Media",
            icon: "Camera",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50",
            activities: [
              {
                name: "Fotografi",
                description: "Belajar teknik fotografi dan editing foto",
                participants: "20 siswa aktif",
              },
              {
                name: "Desain Grafis",
                description: "Belajar desain grafis dan multimedia",
                participants: "24 siswa aktif",
              },
            ],
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
