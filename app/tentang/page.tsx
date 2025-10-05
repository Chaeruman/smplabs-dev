
import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Tentang Kami",
  description:
    "Tentang SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ terbaik di Jakarta. Sejarah, visi, misi SMP Labsraw (SMP Labs Rawamangun) dengan tradisi pendidikan berkualitas tinggi.",
  keywords: [
    "tentang SMP Labschool Jakarta",
    "sejarah SMP Labsraw",
    "visi misi SMP Labschool UNJ",
    "profil SMP Labschool Rawamangun",
    "SMP Labs UNJ",
    "SMP Labs Rawamangun",
    "pendidikan berkualitas rawamangun",
    "SMP Jakarta terbaik",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - Tentang Kami",
    description:
      "Tentang SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ terbaik. Sejarah, visi, misi SMP Labsraw (SMP Labs Rawamangun) dengan tradisi pendidikan berkualitas.",
    url: "https://smplabschooljakarta.sch.id/tentang",
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id/tentang",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
