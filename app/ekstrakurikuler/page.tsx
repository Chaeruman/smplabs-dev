import ExtracurricularHero from "@/components/extracurricular/ExtracurricularHero"
import ExtracurricularCategories from "@/components/extracurricular/ExtracurricularCategories"
import ExtracurricularAchievements from "@/components/extracurricular/ExtracurricularAchievements"

export default function ExtracurricularPage() {
  return (
    <main className="min-h-screen">
      <ExtracurricularHero />
      <ExtracurricularCategories />
      <ExtracurricularAchievements />
    </main>
  )
}
