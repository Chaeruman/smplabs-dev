import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="py-16 sm:py-20 text-center">
          {/* Back Button */}
          <Link
            href="/ekstrakurikuler"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Kembali ke Ekstrakurikuler</span>
          </Link>

          {/* 404 Content */}
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl sm:text-9xl font-bold text-gray-200 mb-4">404</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Kegiatan Tidak Ditemukan</h1>
            <p className="text-lg text-gray-600 mb-8">
              Maaf, kegiatan ekstrakurikuler yang Anda cari tidak dapat ditemukan. Mungkin URL salah atau kegiatan
              tersebut sudah tidak tersedia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ekstrakurikuler"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                Lihat Semua Kegiatan
              </Link>
              <Link
                href="/"
                className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>

            {/* Popular Activities */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Kegiatan Populer</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/ekstrakurikuler/gambang-kromong"
                  className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-800">Gambang Kromong</div>
                  <div className="text-sm text-gray-600">Seni & Budaya</div>
                </Link>
                <Link
                  href="/ekstrakurikuler/robotika"
                  className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-800">Robotika</div>
                  <div className="text-sm text-gray-600">Akademik</div>
                </Link>
                <Link
                  href="/ekstrakurikuler/futsal"
                  className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-800">Futsal</div>
                  <div className="text-sm text-gray-600">Olahraga</div>
                </Link>
                <Link
                  href="/ekstrakurikuler/fotografi"
                  className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-800">Fotografi</div>
                  <div className="text-sm text-gray-600">Teknologi & Media</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
