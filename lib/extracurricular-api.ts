import type { ExtracurricularCategory } from "@/types/extracurricular"

// Fallback data that matches the expected structure
const fallbackData: ExtracurricularCategory[] = [
  {
    title: "Olahraga",
    icon: "Trophy",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    activities: [
      {
        name: "Paskibra",
        description:
          "Pasukan Pengibar Bendera\r\nPembina: Humaedi, S.Pd.\r\nTempat: Lapangan Labschool\r\nWaktu: Senin, 15.30 - 17.00 WIB",
        participants: "30 siswa aktif",
      },
      {
        name: "Basket",
        description:
          "Olahraga bola basket untuk mengembangkan keterampilan dan kerjasama tim\r\nPembina: Ahmad Fauzi, S.Pd.\r\nTempat: Lapangan Basket\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "25 siswa aktif",
      },
      {
        name: "Futsal",
        description:
          "Olahraga futsal untuk melatih kecepatan dan ketangkasan\r\nPembina: Rizki Pratama, S.Pd.\r\nTempat: Lapangan Futsal\r\nWaktu: Rabu & Jumat, 15.30 - 17.00 WIB",
        participants: "35 siswa aktif",
      },
    ],
  },
  {
    title: "Seni & Budaya",
    icon: "Music",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    activities: [
      {
        name: "Gambang Kromong",
        description:
          "Seni musik tradisional Betawi dengan alat musik gambang kromong\r\nPembina: Siti Nurhaliza, S.Sn.\r\nTempat: Ruang Seni\r\nWaktu: Senin & Rabu, 15.30 - 17.00 WIB",
        participants: "20 siswa aktif",
      },
      {
        name: "Tari Tradisional",
        description:
          "Seni tari tradisional Indonesia untuk melestarikan budaya\r\nPembina: Dewi Sartika, S.Sn.\r\nTempat: Aula Seni\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "18 siswa aktif",
      },
      {
        name: "Paduan Suara",
        description:
          "Kegiatan bernyanyi bersama untuk mengembangkan bakat vokal\r\nPembina: Maria Magdalena, S.Pd.\r\nTempat: Ruang Musik\r\nWaktu: Jumat, 15.30 - 17.00 WIB",
        participants: "40 siswa aktif",
      },
    ],
  },
  {
    title: "Akademik",
    icon: "BookOpen",
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50",
    activities: [
      {
        name: "English Club",
        description:
          "Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa\r\nPembina: Sarah Johnson, M.A.\r\nTempat: Lab Bahasa\r\nWaktu: Rabu & Jumat, 15.30 - 17.00 WIB",
        participants: "28 siswa aktif",
      },
      {
        name: "Olimpiade Matematika",
        description:
          "Persiapan kompetisi matematika tingkat nasional\r\nPembina: Dr. Budi Santoso, M.Pd.\r\nTempat: Lab Matematika\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "15 siswa aktif",
      },
      {
        name: "Robotika",
        description:
          "Pembelajaran teknologi robotika dan programming\r\nPembina: Ir. Andi Wijaya, M.T.\r\nTempat: Lab Komputer\r\nWaktu: Senin & Rabu, 15.30 - 17.00 WIB",
        participants: "22 siswa aktif",
      },
    ],
  },
  {
    title: "Media & Komunikasi",
    icon: "Camera",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    activities: [
      {
        name: "Jurnalistik",
        description:
          "Kegiatan menulis dan jurnalistik sekolah\r\nPembina: Rina Kusuma, S.Sos.\r\nTempat: Ruang Redaksi\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "16 siswa aktif",
      },
      {
        name: "Fotografi",
        description:
          "Belajar teknik fotografi dan editing foto\r\nPembina: Dimas Prasetyo, S.Sn.\r\nTempat: Studio Foto\r\nWaktu: Rabu & Jumat, 15.30 - 17.00 WIB",
        participants: "20 siswa aktif",
      },
      {
        name: "Broadcasting",
        description:
          "Pelatihan penyiaran radio dan TV sekolah\r\nPembina: Indira Sari, S.I.Kom.\r\nTempat: Studio Broadcasting\r\nWaktu: Senin & Rabu, 15.30 - 17.00 WIB",
        participants: "12 siswa aktif",
      },
    ],
  },
]

export async function fetchExtracurricularData(): Promise<ExtracurricularCategory[]> {
  // For static generation, we'll use fallback data directly
  // In production, you might want to fetch from a CMS or database
  if (typeof window === "undefined") {
    // Server-side: return fallback data for static generation
    return fallbackData
  }

  try {
    // Client-side: try to fetch from API
    const response = await fetch("/api/extracurricular")

    if (!response.ok) {
      console.warn("API request failed, using fallback data")
      return fallbackData
    }

    const data = await response.json()

    // Validate data structure
    if (!Array.isArray(data) || data.length === 0) {
      console.warn("Invalid API response, using fallback data")
      return fallbackData
    }

    return data
  } catch (error) {
    console.error("Error fetching extracurricular data:", error)
    return fallbackData
  }
}
