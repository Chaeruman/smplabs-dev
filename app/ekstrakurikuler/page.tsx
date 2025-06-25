import ExtracurricularHero from "@/components/extracurricular/ExtracurricularHero"
import ExtracurricularCategories from "@/components/extracurricular/ExtracurricularCategories"
import ExtracurricularSchedule from "@/components/extracurricular/ExtracurricularSchedule"
import ExtracurricularAchievements from "@/components/extracurricular/ExtracurricularAchievements"

export const metadata = {
  title: "Ekstrakurikuler - SMP Labschool Jakarta",
  description:
    "Berbagai kegiatan ekstrakurikuler yang tersedia di SMP Labschool Jakarta untuk mengembangkan bakat dan minat siswa.",
}

export default function ExtracurricularPage() {
  return (
    <div className="pt-16">
      <ExtracurricularHero />
      <ExtracurricularCategories />
      <ExtracurricularSchedule />
      <ExtracurricularAchievements />
    </div>
  )
}
