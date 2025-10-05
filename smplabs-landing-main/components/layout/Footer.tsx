import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* School Info - Spans 2 columns for symmetry */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4">
                  <Image src="/logo-smp-labschool.png" alt="SMP Labschool Jakarta" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold">SMP Labschool Jakarta</h3>
                  <p className="text-white/80 text-sm">Sekolah Menengah Pertama</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h4 className="font-semibold mb-3 text-lg">Visi Kami</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Menjadi sekolah unggulan yang menghasilkan lulusan berkarakter, berprestasi, dan siap menghadapi
                  tantangan global.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100079933522104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook SMP Labschool Jakarta"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/smplabschooljakarta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram SMP Labschool Jakarta"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/smplabsjkt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 hover:scale-110"
                    aria-label="Twitter/X SMP Labschool Jakarta"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@smplabschooljakarta5779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                    aria-label="YouTube SMP Labschool Jakarta"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Menu Utama</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="text-white/80 hover:text-white transition-colors text-sm">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/kegiatan" className="text-white/80 hover:text-white transition-colors text-sm">
                    Kegiatan
                  </Link>
                </li>
                <li>
                  <Link href="/ekstrakurikuler" className="text-white/80 hover:text-white transition-colors text-sm">
                    Ekstrakurikuler
                  </Link>
                </li>
                <li>
                  <Link href="/galeri" className="text-white/80 hover:text-white transition-colors text-sm">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="text-white/80 hover:text-white transition-colors text-sm">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Kontak Kami</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Jl. Pemuda No. 248, Rawamangun
                      <br />
                      Jakarta Timur 13220
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <p className="text-white/90 text-sm">(021) 4894-4009</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <p className="text-white/90 text-sm">tusmplabsjkt@labschool.xyz</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm">Senin - Jumat: 07:00 - 16:00</p>
                    <p className="text-white/90 text-sm">Sabtu: 07:00 - 12:00</p>
                  </div>
                </div>
              </div>

              {/* School Info */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="space-y-2 text-xs text-white/70">
                  <p>NPSN: 20104766</p>
                  <p>Akreditasi: A</p>
                  <p>ISO 9001:2015 Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative w-8 h-8">
                  <Image src="/logo-smp-labschool.png" alt="SMP Labschool Jakarta" fill className="object-contain" />
                </div>
                <p className="text-white/80 text-sm">© 2025 SMP Labschool Jakarta. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-xs text-white/60">
                <Link href="/privacy" className="hover:text-white/80 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white/80 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
