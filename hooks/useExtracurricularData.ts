"use client"

import { useState, useEffect } from "react"
import type { ExtracurricularCategory } from "@/types/extracurricular"
import { fetchExtracurricularData } from "@/lib/extracurricular-api"

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

        const result = await fetchExtracurricularData()
        setData(result)
        console.log("Successfully loaded extracurricular data:", result.length, "categories")
      } catch (err) {
        console.error("Error fetching extracurricular data:", err)
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
        setError(errorMessage)

        // The fetchExtracurricularData function now always returns fallback data
        // So this catch block should rarely be reached, but we'll keep it as a safety net
        console.log("Using emergency fallback data in hook")
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
                benefit: null,
                cover: null,
                about: null,
              },
              {
                name: "Desain Grafis",
                description: "Belajar desain grafis dan multimedia",
                participants: "24 siswa aktif",
                benefit: null,
                cover: null,
                about: null,
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
