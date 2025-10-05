import type { ExtracurricularCategory } from "@/types/extracurricular"
import sampleData from "@/data/sample-extracurricular.json"

// Fallback data that matches the expected structure
const fallbackData: ExtracurricularCategory[] = sampleData as ExtracurricularCategory[]

export async function fetchExtracurricularData(): Promise<ExtracurricularCategory[]> {
  // Always try to fetch from external API first
  try {
    const apiUrl = 'https://satupemuda.smplabschooljakarta.sch.id/website/ekstrakurikuler'
    
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "SMP-Labschool-Website/1.0",
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Validate data structure
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid API response structure")
    }

    console.log("Successfully fetched data from external API:", data.length, "categories")
    return data
  } catch (error) {
    console.error("Error fetching extracurricular data from external API:", error)
    
    // Fallback: try internal API route
    try {
      console.log("Trying internal API route as fallback...")
      const baseUrl = typeof window === "undefined" 
        ? (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
        : ''
      
      const response = await fetch(`${baseUrl}/api/extracurricular`, {
        cache: 'no-store'
      })

      if (!response.ok) {
        throw new Error(`Internal API error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("Successfully fetched data from internal API:", data.length, "categories")
      return data
    } catch (internalError) {
      console.error("Error fetching from internal API:", internalError)
      
      // Only use fallback data if we're on server-side
      if (typeof window === "undefined") {
        console.log("Server-side: Using fallback data due to API errors")
        return fallbackData
      }
      
      // Client-side: re-throw error to be handled by component
      throw internalError
    }
  }
}
