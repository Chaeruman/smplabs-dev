import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard } from "lucide-react"  // ✅ import ikon

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Informasi SPP",
  description:
    "Daftar informasi SPP bulanan siswa SMP Labschool Jakarta Rawamangun.",
}

const sppList = [
  { bulan: "Januari 2025", nominal: "Rp 500.000" },
  { bulan: "Februari 2025", nominal: "Rp 500.000" },
  { bulan: "Maret 2025", nominal: "Rp 500.000" },
  { bulan: "April 2025", nominal: "Rp 500.000" },
  { bulan: "Mei 2025", nominal: "Rp 500.000" },
]

export default function SppPage() {
  return (
    <div className="pt-20 pb-16 max-w-3xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 mt-20 text-center">
        Informasi SPP Bulanan
      </h1>
      <h1 className="text-2xl font-bold mb-6 mt-20 text-center">
        Untuk melakukan pembayaran SPP, Silahkan klik tombol di bawah ini
      </h1>

      

      {/* Tombol Bayar */}
      <div className="text-center mt-8">
        <Link
          href="https://si.labschool-unj.sch.id/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition"
        >
          <CreditCard className="w-5 h-5" /> {/* Ikon kartu */}
          Bayar SPP Sekarang
        </Link>
      </div>
    </div>
  )
}
