import type { ExtracurricularCategory } from "@/types/extracurricular"
import sampleData from "@/data/sample-extracurricular.json"

// Fallback data that matches the expected structure
const fallbackData: ExtracurricularCategory[] = sampleData as ExtracurricularCategory[]

// Safe fetch wrapper that handles network errors gracefully
async function safeFetch(url: string, options: RequestInit = {}): Promise<Response> {
  try {
    return await fetch(url, options)
  } catch (error) {
    // Re-throw with more context, but mark it as a network error
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      const networkError = new Error(`Network error: Unable to connect to ${url}. This could be due to CORS, network connectivity, or server issues.`)
      networkError.name = 'NetworkError'
      throw networkError
    }
    throw error
  }
}

export async function fetchExtracurricularData(): Promise<ExtracurricularCategory[]> {
  // Check if we're in a browser environment and if fetch is available
  if (typeof window !== "undefined" && !window.fetch) {
    console.log("Fetch not available, using fallback data")
    return fallbackData
  }

  // Always try to fetch from external API first
  try {
    const apiUrl = 'https://satupemuda.smplabschooljakarta.sch.id/website/ekstrakurikuler'
    
    // Add timeout to prevent hanging requests
    const controller = new AbortController()
    const timeoutId = setTimeout(() => {
      console.log("External API request timed out")
      controller.abort()
    }, 10000) // 10 second timeout
    
    console.log("Attempting to fetch from external API:", apiUrl)
    
    const response = await safeFetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "SMP-Labschool-Website/1.0",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
      signal: controller.signal
    })

    clearTimeout(timeoutId)

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
    
    // Check if it's a network error or CORS issue
    const isNetworkError = (error instanceof TypeError && error.message.includes('Failed to fetch')) ||
                          (error instanceof Error && error.name === 'NetworkError') ||
                          (error instanceof Error && (
                            error.message.includes('Network error') ||
                            error.message.includes('Unable to connect') ||
                            error.message.includes('CORS') ||
                            error.message.includes('fetch')
                          ))
    
    if (isNetworkError) {
      console.log("Network error detected, skipping to fallback data")
      return fallbackData
    }
    
    // Fallback: try internal API route
    try {
      console.log("Trying internal API route as fallback...")
      const baseUrl = typeof window === "undefined" 
        ? (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
        : ''
      
      // Add timeout for internal API as well
      const controller = new AbortController()
      const timeoutId = setTimeout(() => {
        console.log("Internal API request timed out")
        controller.abort()
      }, 8000) // 8 second timeout
      
      const response = await safeFetch(`${baseUrl}/api/extracurricular`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`Internal API error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("Successfully fetched data from internal API:", data.length, "categories")
      return data
    } catch (internalError) {
      console.error("Error fetching from internal API:", internalError)
      
      // Always use fallback data when both APIs fail
      console.log("Using fallback data due to API errors")
      return fallbackData
    }
  }
}
