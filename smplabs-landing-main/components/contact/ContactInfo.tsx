"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from "lucide-react"

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Telepon",
      info: "(021) 7694-5460",
      link: "tel:+622176945460",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Mail,
      title: "Email",
      info: "tusmplabsjkt@labschool.xyz",
      link: "mailto:tusmplabsjkt@labschool.xyz",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Hotline",
      info: "+62 812-3456-7890",
      link: "https://wa.me/6281234567890",
      color: "from-green-400 to-green-500",
      bgColor: "from-green-50 to-green-50",
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Pemuda Raya No. 1, Rawamangun, Jakarta Timur 13220",
      link: "https://maps.google.com/?q=SMP+Labschool+Jakarta",
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin - Jumat: 07:00 - 16:00 WIB",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Globe,
      title: "Website",
      info: "www.smplabschooljakarta.sch.id",
      link: "https://www.smplabschooljakarta.sch.id",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai cara untuk menghubungi SMP Labschool Jakarta
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon
            const content = (
              <div
                key={index} // Added key property here
                className={`group relative bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50 backdrop-blur-sm h-full`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">{item.info}</p>

                {item.link && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>
            )

            return item.link ? (
              <a
                key={index} // Added key property here
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              <div key={index} className="h-full">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
