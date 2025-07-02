import { NextResponse } from "next/server"
import type { ExtracurricularCategory } from "@/types/extracurricular"

// Mock data for extracurricular activities
const extracurricularData: ExtracurricularCategory[] = [
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
          "Olahraga futsal untuk melatih kecepatan dan ketangkasan\r\nPembina: Rizki Pratama, S.Pd. dan Kevin Archie Luciano, S.Pd.\r\nTempat: Lapangan Futsal\r\nWaktu: Rabu & Jumat, 15.30 - 17.00 WIB",
        participants: "35 siswa aktif",
      },
      {
        name: "Voli",
        description:
          "Olahraga bola voli untuk melatih koordinasi dan kerjasama tim\r\nPembina: Sari Dewi, S.Pd.\r\nTempat: Lapangan Voli\r\nWaktu: Senin & Rabu, 15.30 - 17.00 WIB",
        participants: "28 siswa aktif",
      },
      {
        name: "Badminton",
        description:
          "Olahraga bulutangkis untuk melatih kelincahan dan refleks\r\nPembina: Budi Santoso, S.Pd.\r\nTempat: Hall Olahraga\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "32 siswa aktif",
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
      {
        name: "Teater",
        description:
          "Seni peran dan drama untuk mengembangkan kepercayaan diri\r\nPembina: Andi Wijaya, S.Sn.\r\nTempat: Aula Utama\r\nWaktu: Rabu & Jumat, 15.30 - 17.00 WIB",
        participants: "22 siswa aktif",
      },
      {
        name: "Seni Lukis",
        description:
          "Kegiatan melukis dan menggambar untuk mengasah kreativitas\r\nPembina: Ratna Sari, S.Sn.\r\nTempat: Studio Seni\r\nWaktu: Senin & Kamis, 15.30 - 17.00 WIB",
        participants: "25 siswa aktif",
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
        name: "Acolab/komik",
        description:
          "Kegiatan komik dan laboratorium kreatif\r\nGuru Pembina: Mifta Putri Apriyani, S.Pd.\r\nPembina: Mifta Putri Apriyani, S.Pd.\r\nTempat: Kelas VII E\r\nWaktu: Kamis, 15.30 - 17.00 WIB",
        participants: "91 siswa",
      },
      {
        name: "Bahasa Perancis",
        description:
          "Pembelajaran bahasa Perancis untuk siswa\r\nGuru Pembina: Purwanti, S.Pd.\r\nTempat: Kelas VII D\r\nWaktu: Senin, 15.30 - 17.00 WIB",
        participants: "5 siswa",
      },
      {
        name: "Bahasa Jepang",
        description:
          "Pembelajaran bahasa Jepang untuk siswa\r\nGuru Pembina: Ropingah, S.Pd.\r\nTempat: Kelas VII A\r\nWaktu: Jumat, 13.00 - 14.30 WIB",
        participants: "121 siswa",
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
      {
        name: "Sains Club",
        description:
          "Klub sains untuk eksperimen dan penelitian ilmiah\r\nPembina: Dr. Sari Indah, M.Si.\r\nTempat: Lab IPA\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "18 siswa aktif",
      },
    ],
  },
  {
    title: "Teknologi & Media",
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
      {
        name: "Desain Grafis",
        description:
          "Belajar desain grafis dan multimedia\r\nPembina: Rudi Hartono, S.Kom.\r\nTempat: Lab Multimedia\r\nWaktu: Selasa & Kamis, 15.30 - 17.00 WIB",
        participants: "24 siswa aktif",
      },
      {
        name: "Web Development",
        description:
          "Pembelajaran pembuatan website dan aplikasi web\r\nPembina: Fajar Nugraha, S.Kom.\r\nTempat: Lab Komputer\r\nWaktu: Senin & Rabu, 15.30 - 17.00 WIB",
        participants: "18 siswa aktif",
      },
      {
        name: "Video Editing",
        description:
          "Belajar editing video dan produksi konten digital\r\nPembina: Maya Sari, S.I.Kom.\r\nTempat: Studio Multimedia\r\nWaktu: Kamis & Jumat, 15.30 - 17.00 WIB",
        participants: "22 siswa aktif",
      },
    ],
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(extracurricularData)
  } catch (error) {
    console.error("Error in extracurricular API:", error)
    return NextResponse.json({ error: "Failed to fetch extracurricular data" }, { status: 500 })
  }
}
