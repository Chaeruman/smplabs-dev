import ExtracurricularHero from "@/components/extracurricular/ExtracurricularHero"
import ExtracurricularCategories from "@/components/extracurricular/ExtracurricularCategories"
import ExtracurricularAchievements from "@/components/extracurricular/ExtracurricularAchievements"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Ekstrakurikuler",
  description:
    "Ekstrakurikuler SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ dengan program terlengkap. SMP Labsraw (SMP Labs Rawamangun) menyediakan kegiatan olahraga, seni, akademik, dan teknologi media.",
  keywords: [
    "ekstrakurikuler SMP Labschool Jakarta",
    "kegiatan SMP Labsraw",
    "olahraga SMP Labschool Rawamangun",
    "seni budaya SMP Labs UNJ",
    "teknologi media SMP Jakarta",
    "prestasi SMP Labschool UNJ Rawamangun",
    "program SMP Labs Rawamangun",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - Ekstrakurikuler",
    description:
      "Ekstrakurikuler terlengkap di SMP Labschool Jakarta Rawamangun. SMP Labsraw (SMP Labs Rawamangun) dengan program olahraga, seni, akademik, dan teknologi.",
    url: "https://smplabschooljakarta.sch.id/ekstrakurikuler",
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id/ekstrakurikuler",
  },
}

export default function ExtracurricularPage() {
  return (
    <main className="min-h-screen">
      <ExtracurricularHero />
      <ExtracurricularCategories />
      <ExtracurricularAchievements />
    </main>
  )
}
