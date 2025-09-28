"use client"

import { MapPin, Navigation, ExternalLink } from "lucide-react"

const ContactMap = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Lokasi Sekolah</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SMP Labschool Jakarta berlokasi strategis di Jakarta Timur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Peta Lokasi</h3>
                  <p className="text-gray-600 mb-4">SMP Labschool Jakarta</p>
                  <a
                    href="https://maps.google.com/?q=SMP+Labschool+Jakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Alamat Lengkap</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Pemuda Raya No. 1<br />
                    Rawamangun, Jakarta Timur
                    <br />
                    DKI Jakarta 13220
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Navigation className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Akses Transportasi</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• TransJakarta: Halte Rawamangun</li>
                    <li>• KRL: Stasiun Klender</li>
                    <li>• Bus Kota: Rute 64, 65</li>
                    <li>• Akses mudah dari Tol Jagorawi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Kunjungi Sekolah</h3>
              <p className="text-blue-100 mb-4">
                Jadwalkan kunjungan untuk melihat fasilitas dan bertemu dengan tim kami
              </p>
              <a
                href="tel:+622176945460"
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
              >
                Hubungi untuk Jadwal Kunjungan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap
