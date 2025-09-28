import { NextResponse } from "next/server"

const API_BASE_URL = "https://satupemuda.smplabschooljakarta.sch.id"

export async function GET() {
  console.log("=== API Route Called ===")
  console.log("API_BASE_URL:", API_BASE_URL)
  console.log("Full URL:", `${API_BASE_URL}/website/beranda`)

  try {
    console.log("Attempting to fetch from external API...")

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(`${API_BASE_URL}/website/beranda`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "SMP-Labschool-Website/1.0",
      },
      signal: controller.signal,
      cache: "no-store",
    })

    clearTimeout(timeoutId)
    console.log("External API response status:", response.status)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("External API data received:", data)

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    console.error("Error in API route:", error)

    // Return fallback data if external API fails
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

    console.log("Returning fallback data from API route")

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    })
  }
}
