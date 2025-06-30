"use client"

import { useState, useEffect } from "react"
import type { ExtracurricularCategory } from "@/types/extracurricular"
import { fetchExtracurricularData } from "@/lib/extracurricular-api"

export function useExtracurricularData() {
  const [data, setData] = useState<ExtracurricularCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const result = await fetchExtracurricularData()
        setData(result)
        setError(null)
      } catch (err) {
        console.error("Error loading extracurricular data:", err)
        setError(err instanceof Error ? err.message : "Failed to load data")
        // Set fallback data even on error
        setData([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading, error }
}
