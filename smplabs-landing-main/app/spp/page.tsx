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
      <h1 className="text-2xl font-bold mb-6 text-center">
        Informasi SPP Bulanan
      </h1>

      {/* Tabel Daftar SPP */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Bulan</th>
              <th className="p-3 border">Nominal</th>
            </tr>
          </thead>
          <tbody>
            {sppList.map((spp, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border">{spp.bulan}</td>
                <td className="p-3 border">{spp.nominal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
