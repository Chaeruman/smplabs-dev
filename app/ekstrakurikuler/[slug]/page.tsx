import { notFound } from "next/navigation"
import { ArrowLeft, Users, Clock, MapPin, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { ExtracurricularCategory } from "@/types/extracurricular"

// Enable static generation with revalidation
export const revalidate = 3600 // Revalidate every hour

// Function to fetch data from internal API
async function fetchExtracurricularData(): Promise<ExtracurricularCategory[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/extracurricular`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching extracurricular data:', error)
    // Return empty array as fallback
    return []
  }
}

// Utility function to generate consistent slugs
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// Generate static params for all activities
export async function generateStaticParams() {
  try {
    const categories = await fetchExtracurricularData()
    const params: { slug: string }[] = []

    categories.forEach((category) => {
      category.activities.forEach((activity) => {
        const slug = generateSlug(activity.name)
        params.push({ slug })
      })
    })

    console.log("Generated static params:", params)
    return params
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ActivityDetailPage({ params }: PageProps) {
  const { slug } = await params

  try {
    const categories = await fetchExtracurricularData()

    // Find the activity by slug
    let foundActivity = null
    let foundCategory = null

    for (const category of categories) {
      for (const activity of category.activities) {
        const activitySlug = generateSlug(activity.name)

        if (activitySlug === slug) {
          foundActivity = activity
          foundCategory = category
          break
        }
      }
      if (foundActivity) break
    }

    if (!foundActivity || !foundCategory) {
      console.log(`Activity not found for slug: ${slug}`)
      console.log(
        "Available activities:",
        categories.flatMap((cat) => cat.activities.map((act) => ({ name: act.name, slug: generateSlug(act.name) }))),
      )
      notFound()
    }

    // Enhanced parsing function to handle instructor names with academic titles
    const parseDescription = (desc: string) => {
      const lines = desc.split(/\r?\n/).filter((line) => line.trim() !== "")

      // Find all instructor lines
      const instructorLines = lines.filter(
        (line) => line.toLowerCase().includes("pembina") || line.toLowerCase().includes("guru pembina"),
      )

      // Extract instructor names with smart parsing for academic titles
      const instructorNames = new Set<string>()
      instructorLines.forEach((line) => {
        // Remove various prefixes and clean up
        const cleanLine = line
          .replace(/^.*?pembina\s*:?\s*/i, "")
          .replace(/^.*?guru\s+pembina\s*:?\s*/i, "")
          .trim()

        if (cleanLine) {
          // Split by "dan" but be smart about academic titles
          const parts = cleanLine.split(/\s+dan\s+/i)
          parts.forEach((part) => {
            const trimmedPart = part.trim()
            if (trimmedPart && trimmedPart.length > 2) {
              instructorNames.add(trimmedPart)
            }
          })
        }
      })

      // Get other information
      const locationLine = lines.find(
        (line) => line.toLowerCase().includes("tempat") && !line.toLowerCase().includes("pembina"),
      )
      const scheduleLine = lines.find(
        (line) => line.toLowerCase().includes("waktu") && !line.toLowerCase().includes("pembina"),
      )

      // Get main description (first line that's not instructor/location/schedule)
      const mainDesc =
        lines.find(
          (line) =>
            !line.toLowerCase().includes("pembina") &&
            !line.toLowerCase().includes("tempat") &&
            !line.toLowerCase().includes("waktu") &&
            line.trim().length > 10,
        ) ||
        lines[0] ||
        ""

      return {
        main: mainDesc.trim(),
        instructors: Array.from(instructorNames),
        location: locationLine ? locationLine.replace(/^.*?tempat\s*:?\s*/i, "").trim() : "",
        schedule: scheduleLine ? scheduleLine.replace(/^.*?waktu\s*:?\s*/i, "").trim() : "",
      }
    }

    const details = parseDescription(foundActivity.description)

    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            {/* Back Button */}
            <Link
              href="/ekstrakurikuler"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Kembali ke Ekstrakurikuler</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {foundCategory.title}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{foundActivity.name}</h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                  {details.main ||
                    `Bergabunglah dengan kegiatan ${foundActivity.name} dan kembangkan potensi diri Anda`}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">{foundActivity.participants}</span>
                  </div>
                  {details.schedule && (
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-medium">Terjadwal</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={foundActivity.cover || "/placeholder.svg?height=400&width=600"}
                    alt={foundActivity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Tentang Kegiatan</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {foundActivity.about ? (
                      <div className="html-content" dangerouslySetInnerHTML={{ __html: foundActivity.about }} />
                    ) : (
                      <>
                        <p className="text-lg leading-relaxed mb-6">
                          {details.main ||
                            `${foundActivity.name} adalah salah satu kegiatan ekstrakurikuler unggulan di SMP Labschool Jakarta yang dirancang untuk mengembangkan bakat dan minat siswa.`}
                        </p>
                        <p className="leading-relaxed">
                          Kegiatan ini memberikan kesempatan kepada siswa untuk mengeksplorasi kemampuan mereka dalam bidang{" "}
                          {foundCategory.title.toLowerCase()}
                          melalui berbagai aktivitas yang menarik dan edukatif. Dengan bimbingan dari pembina yang
                          berpengalaman, siswa akan mendapatkan pengalaman berharga yang dapat mengembangkan karakter dan
                          soft skills mereka.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Manfaat Bergabung</h3>
                  {foundActivity.benefit ? (
                    <div className="html-content" dangerouslySetInnerHTML={{ __html: foundActivity.benefit }} />
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Mengembangkan bakat dan minat",
                        "Meningkatkan kepercayaan diri",
                        "Membangun kerjasama tim",
                        "Mengasah kreativitas",
                        "Menambah pengalaman organisasi",
                        "Memperluas jaringan pertemanan",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Activity Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Kegiatan</h3>
                  <div className="space-y-4">
                    {details.instructors.length > 0 && (
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Pembina</div>
                          <div className="text-gray-600 text-sm space-y-1">
                            {details.instructors.map((instructor, index) => (
                              <div key={index}>{instructor}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {details.location && (
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Tempat</div>
                          <div className="text-gray-600 text-sm">{details.location}</div>
                        </div>
                      </div>
                    )}

                    {details.schedule && (
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800">Jadwal</div>
                          <div className="text-gray-600 text-sm">{details.schedule}</div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">Peserta</div>
                        <div className="text-gray-600 text-sm">{foundActivity.participants}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className={`bg-gradient-to-r ${foundCategory.color} rounded-2xl p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-3">Tertarik Bergabung?</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Hubungi kami untuk informasi lebih lanjut tentang pendaftaran dan persyaratan.
                  </p>
                  <Link
                    href="/kontak"
                    className="block w-full bg-white text-gray-800 text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Hubungi Kami
                  </Link>
                </div>

                {/* Related Activities */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kegiatan Serupa</h3>
                  <div className="space-y-3">
                    {foundCategory.activities
                      .filter((activity) => activity.name !== foundActivity.name)
                      .slice(0, 3)
                      .map((activity) => {
                        const relatedSlug = generateSlug(activity.name)

                        return (
                          <Link
                            key={activity.name}
                            href={`/ekstrakurikuler/${relatedSlug}`}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                          >
                            <div className="font-medium text-gray-800 text-sm mb-1">{activity.name}</div>
                            <div className="text-gray-500 text-xs">{activity.participants}</div>
                          </Link>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error("Error loading activity detail:", error)
    notFound()
  }
}
