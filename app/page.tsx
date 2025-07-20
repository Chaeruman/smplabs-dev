import HeroSection from "@/components/home/HeroSection"
import VisionSection from "@/components/home/VisionSection"
import StatsSection from "@/components/home/StatsSection"
import NewsSection from "@/components/home/NewsSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun Terbaik",
  description:
    "SMP Labschool Jakarta adalah SMP Labschool UNJ Rawamangun terbaik di Jakarta. SMP Labsraw (SMP Labs Rawamangun) menyediakan pendidikan berkualitas tinggi dengan fasilitas modern dan prestasi akademik terdepan.",
  keywords: [
    "SMP Labschool Jakarta",
    "SMP Labschool Jakarta Rawamangun",
    "SMP Labschool Rawamangun",
    "SMP Labsraw",
    "SMP Jakarta",
    "SMP Labschool UNJ",
    "SMP Labschool UNJ Rawamangun",
    "SMP Labs UNJ",
    "SMP Labs Rawamangun",
    "sekolah terbaik jakarta",
    "smp negeri jakarta timur",
    "pendidikan berkualitas jakarta",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun Terbaik",
    description:
      "SMP Labschool Jakarta adalah SMP Labschool UNJ Rawamangun terbaik. SMP Labsraw (SMP Labs Rawamangun) dengan pendidikan berkualitas tinggi dan prestasi terdepan di Jakarta.",
    url: "https://smplabschooljakarta.sch.id",
    images: [
      {
        url: "/banner-labschool.jpg",
        width: 1200,
        height: 630,
        alt: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun Terbaik",
      },
    ],
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id",
  },
}

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
