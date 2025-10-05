import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, Calendar, GraduationCap, ArrowRight, CheckCircle, Receipt } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="pt-20 pb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Informasi SPP Bulanan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistem Pembayaran Pendidikan untuk siswa SMP Labschool Jakarta Rawamangun
          </p>
        </div>
        {/* Payment Instructions */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Cara Pembayaran SPP</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Untuk melakukan pembayaran SPP, silakan klik tombol di bawah ini dan ikuti petunjuk yang tersedia.
            </p>
            
            <Link
              href="https://si.labschool-unj.sch.id/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <CreditCard className="w-6 h-6" />
              Bayar SPP Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Pembayaran Aman</h3>
            <p className="text-gray-600 text-sm">Sistem pembayaran terintegrasi dan aman</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Jadwal Fleksibel</h3>
            <p className="text-gray-600 text-sm">Bayar kapan saja sebelum batas waktu</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparan</h3>
            <p className="text-gray-600 text-sm">Informasi pembayaran yang jelas dan detail</p>
          </div>
        </div>
      </div>
    </div>
  )
}
