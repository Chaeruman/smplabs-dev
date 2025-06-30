import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kegiatan", href: "/kegiatan" },
    { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100079933522104",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/smplabschooljakarta/",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@smplabschooljakarta5779",
      color: "hover:text-red-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/smplabsjkt",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* School Info - Spans 2 columns on large screens for symmetry */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/logo-smp-labschool.png"
                    alt="SMP Labschool Jakarta"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>

                {/* School Name */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4">SMP Labschool Jakarta</h3>

                {/* Description */}
                <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                  Sekolah Menengah Pertama yang berkomitmen untuk memberikan pendidikan berkualitas tinggi dengan
                  mengembangkan potensi akademik, karakter, dan kreativitas siswa.
                </p>

                {/* Vision Statement */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
                  <h4 className="font-semibold mb-2 text-blue-200">Visi Kami</h4>
                  <p className="text-sm text-blue-100">
                    Menjadi sekolah unggulan yang menghasilkan generasi cerdas, berkarakter, dan berdaya saing global.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-blue-200">Navigasi Cepat</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 text-blue-200">Hubungi Kami</h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div className="text-blue-100 text-sm leading-relaxed">
                    <p>Jl. Pemuda No. 123</p>
                    <p>Jakarta Pusat, DKI Jakarta</p>
                    <p>Indonesia 10110</p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">(021) 7694-5460</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">admin@smplabschooljakarta.sch.id</span>
                </div>

                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div className="text-blue-100 text-sm">
                    <p>Senin - Jumat: 07:00 - 16:00</p>
                    <p>Sabtu: 07:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Left Side - Logo and Copyright */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/logo-smp-labschool.png"
                  alt="SMP Labschool Jakarta"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <div className="text-center sm:text-left">
                  <p className="text-blue-100 text-sm">© {currentYear} SMP Labschool Jakarta. All rights reserved.</p>
                  <p className="text-blue-200 text-xs mt-1">Designed with ❤️ for education excellence</p>
                </div>
              </div>

              {/* Right Side - Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-200 text-sm mr-2">Ikuti Kami:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-200 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                        aria-label={`Kunjungi ${social.name} SMP Labschool Jakarta`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-xs text-blue-200 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <span>NPSN: 20104766</span>
                <span className="hidden sm:inline">•</span>
                <span>Akreditasi: A</span>
                <span className="hidden sm:inline">•</span>
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
