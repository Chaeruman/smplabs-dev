import AboutHero from "@/components/about/AboutHero"
import VisionMission from "@/components/about/VisionMission"
import History from "@/components/about/History"
import Leadership from "@/components/about/Leadership"

export const metadata = {
  title: "Tentang Kami - SMP Labschool Jakarta",
  description: "Pelajari lebih lanjut tentang visi, misi, dan sejarah SMP Labschool Jakarta.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <VisionMission />
      <History />
      <Leadership />
    </div>
  )
}
