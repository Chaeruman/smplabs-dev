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

        // Use internal API route to avoid CORS issues
        const response = await fetch('/api/extracurricular', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
        console.log("Successfully loaded extracurricular data:", result.length, "categories")
      } catch (err) {
        console.error("Error fetching extracurricular data:", err)
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
        setError(errorMessage)

        // Fallback data when API fails
        console.log("Using emergency fallback data in hook")
        setData([
          {
            title: "Teknologi & Media",
            icon: "Camera",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50",
            activities: [
              {
                slug: "fotografi",
                name: "Fotografi",
                description: "Belajar teknik fotografi dan editing foto",
                participants: "20 siswa aktif",
                benefit: null,
                cover: null,
                about: null,
              },
              {
                slug: "desain-grafis",
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
