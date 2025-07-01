"use client"

import { useState, useEffect } from "react"
import { fetchExtracurricularData } from "@/lib/extracurricular-api"
import type { ExtracurricularCategory } from "@/types/extracurricular"

export function useExtracurricularData() {
  const [data, setData] = useState<ExtracurricularCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const categories = await fetchExtracurricularData()
        setData(categories)
        setError(null)
      } catch (err) {
        console.error("Error loading extracurricular data:", err)
        setError(err instanceof Error ? err.message : "Failed to load data")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, loading, error }
}
