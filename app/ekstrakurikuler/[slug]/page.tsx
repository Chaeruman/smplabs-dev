import { notFound } from "next/navigation"
import { fetchExtracurricularData } from "@/lib/extracurricular-api"
import type { ExtracurricularActivity, ExtracurricularCategory } from "@/types/extracurricular"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, User } from "lucide-react"

// Generate static params for all activities
export async function generateStaticParams() {
  try {
    const categories = await fetchExtracurricularData()
    const slugs: { slug: string }[] = []

    categories.forEach((category: ExtracurricularCategory) => {
      category.activities.forEach((activity: ExtracurricularActivity) => {
        const slug = activity.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
        slugs.push({ slug })
      })
    })

    return slugs
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

// Find activity by slug
async function findActivityBySlug(slug: string) {
  try {
    const categories = await fetchExtracurricularData()

    for (const category of categories) {
      for (const activity of category.activities) {
        const activitySlug = activity.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")

        if (activitySlug === slug) {
          return { activity, category }
        }
      }
    }

    return null
  } catch (error) {
    console.error("Error finding activity:", error)
    return null
  }
}

// Parse activity description to extract structured information
function parseActivityDescription(description: string) {
  const lines = description.split("\r\n").filter((line) => line.trim())
  const result = {
    description: lines[0] || "",
    instructor: "",
    location: "",
    schedule: "",
  }

  lines.forEach((line) => {
    if (line.includes("Pembina:")) {
      result.instructor = line.replace("Pembina:", "").trim()
    } else if (line.includes("Tempat:")) {
      result.location = line.replace("Tempat:", "").trim()
    } else if (line.includes("Waktu:")) {
      result.schedule = line.replace("Waktu:", "").trim()
    }
  })

  return result
}

export default async function ActivityDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const result = await findActivityBySlug(params.slug)

  if (!result) {
    notFound()
  }

  const { activity, category } = result
  const parsedInfo = parseActivityDescription(activity.description)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center">
          <div className="text-white">
            {/* Back Button */}
            <Link
              href="/ekstrakurikuler"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-sm sm:text-base">Kembali ke Ekstrakurikuler</span>
            </Link>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">{activity.name}</h1>

            {/* Category Badge */}
            <span className="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              {category.title}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={activity.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Tentang {activity.name}</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{parsedInfo.description}</p>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Informasi Kegiatan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Pembina</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{parsedInfo.instructor || "Akan diumumkan"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Lokasi</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{parsedInfo.location || "Akan diumumkan"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Jadwal</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{parsedInfo.schedule || "Akan diumumkan"}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Peserta</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{activity.participants}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Registration Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Bergabung Sekarang</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Daftarkan diri Anda untuk mengikuti kegiatan {activity.name}
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
                  Daftar Sekarang
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Butuh Informasi Lebih?</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Hubungi kami untuk informasi lebih lanjut tentang kegiatan ini
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">📞</span>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">(021) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs font-bold">📧</span>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">info@smplabschool.sch.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
