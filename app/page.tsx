import HeroSection from "@/components/home/HeroSection"
import VisionSection from "@/components/home/VisionSection"
import StatsSection from "@/components/home/StatsSection"
import NewsSection from "@/components/home/NewsSection"

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <VisionSection />
      <StatsSection />
      <NewsSection />
    </div>
  )
}
