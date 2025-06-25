import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SMP Labschool Jakarta</h3>
            <p className="text-blue-100">
              Sekolah menengah pertama yang menciptakan lingkungan pendidikan positif dan menginspirasi.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Menu Utama</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-blue-200 hover:text-white transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-blue-200 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="text-blue-200 hover:text-white transition-colors">
                  Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Program</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Akademik
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Ekstrakurikuler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Olimpiade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Karya Ilmiah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Jl. Pendidikan No. 123
                  <br />
                  Jakarta Selatan, DKI Jakarta
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100 text-sm">(021) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100 text-sm">info@smplabschool.sch.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/30 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} SMP Labschool Jakarta. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
