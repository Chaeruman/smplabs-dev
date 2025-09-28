import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smplabschooljakarta.sch.id"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ekstrakurikuler`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kegiatan`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Extracurricular activity pages
  const extracurricularActivities = [
    "paskibra",
    "basket",
    "futsal",
    "voli",
    "badminton",
    "gambang-kromong",
    "tari-tradisional",
    "paduan-suara",
    "teater",
    "seni-lukis",
    "english-club",
    "acolab-komik",
    "bahasa-perancis",
    "bahasa-jepang",
    "olimpiade-matematika",
    "robotika",
    "sains-club",
    "jurnalistik",
    "fotografi",
    "broadcasting",
    "desain-grafis",
    "web-development",
    "video-editing",
  ]

  const extracurricularPages = extracurricularActivities.map((activity) => ({
    url: `${baseUrl}/ekstrakurikuler/${activity}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...extracurricularPages]
}
