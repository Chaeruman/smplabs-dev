"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-700/90"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Hubungi Kami
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Kami siap membantu Anda dengan informasi lengkap tentang SMP Labschool Jakarta
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <a
              href="tel:+622176945460"
              className="group bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-8 w-8 mx-auto mb-2 text-green-300 group-hover:text-green-200 transition-colors" />
              <p className="text-sm font-medium">Telepon</p>
              <p className="text-xs text-blue-100">(021) 7694-5460</p>
            </a>

            <a
              href="mailto:admin@smplabschooljakarta.sch.id"
              className="group bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-8 w-8 mx-auto mb-2 text-blue-300 group-hover:text-blue-200 transition-colors" />
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-blue-100">tusmplabsjkt@labschool.xyz</p>
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-green-300 group-hover:text-green-200 transition-colors" />
              <p className="text-sm font-medium">WhatsApp</p>
              <p className="text-xs text-blue-100">+62 812-3456-7890</p>
            </a>

            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-red-300 group-hover:text-red-200 transition-colors" />
              <p className="text-sm font-medium">Lokasi</p>
              <p className="text-xs text-blue-100">Jakarta Timur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
