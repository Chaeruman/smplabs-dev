import { Trophy, Users, Calendar, Award } from "lucide-react"

export default function ExtracurricularHero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center">
        <div className="w-full py-16 sm:py-20 lg:py-24">
          {/* Main Content */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-high-contrast drop-shadow-enhanced-lg">
              Ekstrakurikuler
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-high-contrast-sm max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-soft">
              Kembangkan bakat dan minat Anda melalui berbagai kegiatan ekstrakurikuler yang menarik dan bermanfaat
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">100+</div>
              <div className="text-white/80 text-sm sm:text-base">Prestasi</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">900+</div>
              <div className="text-white/80 text-sm sm:text-base">Siswa Aktif</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">25+</div>
              <div className="text-white/80 text-sm sm:text-base">Kegiatan</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-800" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">8</div>
              <div className="text-white/80 text-sm sm:text-base">Kategori</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
