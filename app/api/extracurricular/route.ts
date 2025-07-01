import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Fetch from the external API
    const response = await fetch("https://satupemuda.smplabschooljakarta.sch.id/website/ekstrakurikuler", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; School Website Bot)",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Transform the data to match our expected format
    const transformedData = data.map((category: any) => ({
      title: category.title || category.name || "Unknown Category",
      icon: category.icon || "BookOpen",
      color: category.color || "from-blue-500 to-purple-500",
      bgColor: category.bgColor || "from-blue-50 to-purple-50",
      activities: (category.activities || []).map((activity: any) => ({
        name: activity.name || "Unknown Activity",
        description: activity.description || "",
        participants: activity.participants || "0 siswa",
      })),
    }))

    return NextResponse.json(transformedData)
  } catch (error) {
    console.error("Error fetching extracurricular data:", error)

    // Return fallback data
    const fallbackData = [
      {
        title: "Akademik",
        icon: "BookOpen",
        color: "from-green-500 to-teal-500",
        bgColor: "from-green-50 to-teal-50",
        activities: [
          {
            name: "English Club",
            description: "Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa",
            participants: "28 siswa aktif",
          },
        ],
      },
    ]

    return NextResponse.json(fallbackData)
  }
}
