import { NextResponse } from "next/server"
import type { ExtracurricularCategory } from "@/types/extracurricular"
import sampleData from "@/data/sample-extracurricular.json"

const API_BASE_URL = "https://satupemuda.smplabschooljakarta.sch.id"

// Fallback data if external API fails
const fallbackData: ExtracurricularCategory[] = sampleData as ExtracurricularCategory[]

export async function GET() {
  console.log("=== Extracurricular API Route Called ===")
  console.log("API_BASE_URL:", API_BASE_URL)
  console.log("Full URL:", `${API_BASE_URL}/website/ekstrakurikuler`)

  try {
    console.log("Attempting to fetch from external API...")

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(`${API_BASE_URL}/website/ekstrakurikuler`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "SMP-Labschool-Website/1.0",
      },
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    clearTimeout(timeoutId)
    console.log("External API response status:", response.status)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("External API data received:", data)
    console.log("Data structure validation:", {
      isArray: Array.isArray(data),
      length: data?.length,
      firstItem: data?.[0] ? {
        title: data[0].title,
        activitiesCount: data[0].activities?.length,
        hasBenefit: data[0].activities?.[0]?.benefit !== undefined,
        hasCover: data[0].activities?.[0]?.cover !== undefined,
        hasAbout: data[0].activities?.[0]?.about !== undefined
      } : null
    })

    // Validate data structure
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid data structure received from external API")
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    console.error("Error in extracurricular API route:", error)

    // Return fallback data if external API fails
    console.log("Returning fallback data from API route")

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    })
  }
}
