export async function fetchHomepageData() {
  try {
    // Use internal API route instead of direct external call
    const response = await fetch("/api/homepage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Disable cache for fresh data
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("API Response:", data) // Debug log
    return data
  } catch (error) {
    console.error("Error fetching homepage data:", error)

    // Return fallback data if API fails
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
    console.log("Using fallback data:", fallbackData) // Debug log
    return fallbackData
  }
}
