"use client"

import { Clock, MapPin, Users, Calendar } from "lucide-react"

const ExtracurricularSchedule = () => {
  const schedule = [
    {
      day: "Senin",
      color: "from-blue-400 to-blue-500",
      activities: [
        { name: "Paduan Suara", time: "15:30 - 17:00", location: "Aula", instructor: "Bu Sarah" },
        { name: "Basket", time: "15:30 - 17:30", location: "Lapangan", instructor: "Pak Budi" },
      ],
    },
    {
      day: "Selasa",
      color: "from-green-400 to-green-500",
      activities: [
        { name: "English Club", time: "15:30 - 16:30", location: "Lab Bahasa", instructor: "Ms. Anna" },
        { name: "Robotika", time: "15:30 - 17:00", location: "Lab Komputer", instructor: "Pak Dedi" },
      ],
    },
    {
      day: "Rabu",
      color: "from-purple-400 to-purple-500",
      activities: [
        { name: "Fotografi", time: "15:30 - 17:00", location: "Studio", instructor: "Pak Andi" },
        { name: "Badminton", time: "15:30 - 17:30", location: "GOR", instructor: "Bu Lisa" },
      ],
    },
    {
      day: "Kamis",
      color: "from-pink-400 to-pink-500",
      activities: [
        { name: "Drama", time: "15:30 - 17:00", location: "Aula", instructor: "Bu Maya" },
        { name: "Futsal", time: "15:30 - 17:30", location: "Lapangan", instructor: "Pak Rio" },
      ],
    },
    {
      day: "Jumat",
      color: "from-orange-400 to-orange-500",
      activities: [
        { name: "Jurnalistik", time: "15:30 - 16:30", location: "Ruang Media", instructor: "Bu Nina" },
        { name: "Tari", time: "15:30 - 17:00", location: "Studio Tari", instructor: "Bu Sari" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Jadwal Kegiatan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Jadwal lengkap kegiatan ekstrakurikuler setiap hari</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${day.color} rounded-lg p-4 mb-6`}>
                <h3 className="text-xl font-bold text-white text-center">{day.day}</h3>
              </div>

              <div className="space-y-4">
                {day.activities.map((activity, actIndex) => (
                  <div
                    key={actIndex}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-800 mb-2">{activity.name}</h4>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-purple-500" />
                        <span>{activity.instructor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ingin Bergabung?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang dan kembangkan bakat serta minat melalui berbagai kegiatan ekstrakurikuler
              yang menarik
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtracurricularSchedule
